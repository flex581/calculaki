import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function GorduraCorporal() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("masculino");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;
    const i = parseFloat(idade);
    
    if (!isNaN(p) && !isNaN(a) && !isNaN(i) && a > 0) {
      const imc = p / (a * a);
      let bf = 0;
      
      if (sexo === "masculino") {
        bf = 1.20 * imc + 0.23 * i - 16.2;
      } else {
        bf = 1.20 * imc + 0.23 * i - 5.4;
      }
      
      setResult(Math.max(0, bf));
    }
  };

  const clear = () => {
    setPeso("");
    setAltura("");
    setIdade("");
    setSexo("masculino");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Gordura Corporal"
      description="Estime seu percentual de gordura corporal"
      currentPath="/calculadora/gordura-corporal"
      category="health"
      explanation="O percentual de gordura corporal é estimado usando o IMC, idade e sexo. Esta é uma estimativa simplificada - métodos mais precisos incluem bioimpedância e adipômetros. Valores saudáveis variam entre 10-20% para homens e 20-30% para mulheres."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="peso">Peso (kg)</Label>
            <Input
              id="peso"
              type="number"
              placeholder="70"
              step="0.1"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              data-testid="input-peso"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="altura">Altura (cm)</Label>
            <Input
              id="altura"
              type="number"
              placeholder="170"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              data-testid="input-altura"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="idade">Idade (anos)</Label>
            <Input
              id="idade"
              type="number"
              placeholder="30"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              data-testid="input-idade"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sexo">Sexo</Label>
            <Select value={sexo} onValueChange={setSexo}>
              <SelectTrigger id="sexo" data-testid="select-sexo">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="masculino">Masculino</SelectItem>
                <SelectItem value="feminino">Feminino</SelectItem>
              </SelectContent>
            </Select>
          </div>
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
          <ResultDisplay
            label="Percentual de Gordura Corporal"
            value={result.toFixed(1)}
            unit="%"
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
