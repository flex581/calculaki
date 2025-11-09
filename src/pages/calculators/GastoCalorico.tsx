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

export default function GastoCalorico() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("masculino");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);
    const i = parseFloat(idade);
    
    if (!isNaN(p) && !isNaN(a) && !isNaN(i)) {
      let tmb = 0;
      if (sexo === "masculino") {
        tmb = 88.36 + (13.4 * p) + (4.8 * a) - (5.7 * i);
      } else {
        tmb = 447.6 + (9.2 * p) + (3.1 * a) - (4.3 * i);
      }
      setResult(tmb);
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
      title="Calculadora de Gasto Calórico"
      description="Calcule sua Taxa Metabólica Basal (TMB)"
      currentPath="/calculadora/gasto-calorico"
      category="health"
      explanation="A Taxa Metabólica Basal (TMB) representa a quantidade de calorias que seu corpo gasta em repouso para manter funções vitais. É calculada pela fórmula de Harris-Benedict, considerando peso, altura, idade e sexo. Este é o valor mínimo de calorias necessárias por dia."
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
            label="Taxa Metabólica Basal (TMB)"
            value={Math.round(result)}
            unit="kcal/dia"
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
