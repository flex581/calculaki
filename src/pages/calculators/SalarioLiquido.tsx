import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function SalarioLiquido() {
  const [salarioBruto, setSalarioBruto] = useState("");
  const [result, setResult] = useState<{ liquido: number; inss: number; irrf: number } | null>(null);

  const calculate = () => {
    const bruto = parseFloat(salarioBruto);
    
    if (!isNaN(bruto)) {
      let inss = 0;
      if (bruto <= 1412) {
        inss = bruto * 0.075;
      } else if (bruto <= 2666.68) {
        inss = bruto * 0.09;
      } else if (bruto <= 4000.03) {
        inss = bruto * 0.12;
      } else {
        inss = bruto * 0.14;
      }
      
      const baseIR = bruto - inss;
      let irrf = 0;
      
      if (baseIR > 2259.20 && baseIR <= 2826.65) {
        irrf = baseIR * 0.075 - 169.44;
      } else if (baseIR > 2826.65 && baseIR <= 3751.05) {
        irrf = baseIR * 0.15 - 381.44;
      } else if (baseIR > 3751.05 && baseIR <= 4664.68) {
        irrf = baseIR * 0.225 - 662.77;
      } else if (baseIR > 4664.68) {
        irrf = baseIR * 0.275 - 896.00;
      }
      
      const liquido = bruto - inss - irrf;
      setResult({ liquido, inss, irrf });
    }
  };

  const clear = () => {
    setSalarioBruto("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Salário Líquido"
      description="Descubra quanto você recebe após os descontos"
      currentPath="/calculadora/salario-liquido"
      category="finance"
      explanation="O salário líquido é calculado subtraindo do salário bruto os descontos de INSS e Imposto de Renda Retido na Fonte (IRRF). As alíquotas variam conforme faixas salariais estabelecidas pela legislação vigente."
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="salario">Salário Bruto (R$)</Label>
          <Input
            id="salario"
            type="number"
            placeholder="5000"
            value={salarioBruto}
            onChange={(e) => setSalarioBruto(e.target.value)}
            data-testid="input-salario"
          />
        </div>

        <div className="flex gap-4">
          <Button onClick={calculate} className="flex-1" data-testid="button-calculate">
            Calcular
          </Button>
          <Button onClick={clear} variant="outline" data-testid="button-clear">
            Limpar
          </Button>
        </div>

        {result !== null && (
          <div className="space-y-4">
            <ResultDisplay
              label="Salário Líquido"
              value={result.liquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ResultDisplay
                label="Desconto INSS"
                value={result.inss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                className="bg-destructive/10 border-destructive/20"
              />
              <ResultDisplay
                label="Desconto IRRF"
                value={result.irrf.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                className="bg-destructive/10 border-destructive/20"
              />
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
