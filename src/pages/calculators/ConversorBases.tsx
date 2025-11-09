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

export default function ConversorBases() {
  const [valor, setValor] = useState("");
  const [deBase, setDeBase] = useState("10");
  const [result, setResult] = useState<{ binario: string; decimal: string; hexadecimal: string } | null>(null);

  const calculate = () => {
    try {
      const decimal = parseInt(valor, parseInt(deBase));
      
      if (!isNaN(decimal)) {
        setResult({
          binario: decimal.toString(2),
          decimal: decimal.toString(10),
          hexadecimal: decimal.toString(16).toUpperCase()
        });
      }
    } catch (e) {
      // Invalid input
    }
  };

  const clear = () => {
    setValor("");
    setDeBase("10");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Conversor de Bases Numéricas"
      description="Converta entre binário, decimal e hexadecimal"
      currentPath="/calculadora/conversor-bases"
      category="education"
      explanation="O conversor de bases permite transformar números entre diferentes sistemas numéricos. O binário (base 2) usa apenas 0 e 1, o decimal (base 10) é o sistema que usamos no dia a dia, e o hexadecimal (base 16) usa dígitos de 0-9 e letras A-F."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="valor">Número</Label>
            <Input
              id="valor"
              placeholder="255"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              data-testid="input-valor"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="base">Base de Entrada</Label>
            <Select value={deBase} onValueChange={setDeBase}>
              <SelectTrigger id="base" data-testid="select-base">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">Binário</SelectItem>
                <SelectItem value="10">Decimal</SelectItem>
                <SelectItem value="16">Hexadecimal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-4">
          <Button onClick={calculate} className="flex-1" data-testid="button-calculate">
            Converter
          </Button>
          <Button onClick={clear} variant="outline" data-testid="button-clear">
            Limpar
          </Button>
        </div>

        {result !== null && (
          <div className="space-y-4">
            <ResultDisplay
              label="Binário"
              value={result.binario}
            />
            <ResultDisplay
              label="Decimal"
              value={result.decimal}
            />
            <ResultDisplay
              label="Hexadecimal"
              value={result.hexadecimal}
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
