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

export default function ConversorUnidades() {
  const [valor, setValor] = useState("");
  const [de, setDe] = useState("km");
  const [para, setPara] = useState("m");
  const [result, setResult] = useState<number | null>(null);

  const conversoes: Record<string, Record<string, number>> = {
    km: { km: 1, m: 1000, cm: 100000, mm: 1000000 },
    m: { km: 0.001, m: 1, cm: 100, mm: 1000 },
    cm: { km: 0.00001, m: 0.01, cm: 1, mm: 10 },
    mm: { km: 0.000001, m: 0.001, cm: 0.1, mm: 1 },
    l: { l: 1, ml: 1000 },
    ml: { l: 0.001, ml: 1 },
    kg: { kg: 1, g: 1000, mg: 1000000 },
    g: { kg: 0.001, g: 1, mg: 1000 },
    mg: { kg: 0.000001, g: 0.001, mg: 1 }
  };

  const calculate = () => {
    const v = parseFloat(valor);
    
    if (!isNaN(v) && conversoes[de] && conversoes[de][para]) {
      const resultado = v * conversoes[de][para];
      setResult(resultado);
    }
  };

  const clear = () => {
    setValor("");
    setDe("km");
    setPara("m");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Conversor de Unidades"
      description="Converta entre diferentes unidades de medida"
      currentPath="/calculadora/conversor-unidades"
      category="education"
      explanation="A conversão entre unidades usa fatores de multiplicação específicos. Por exemplo, 1 km = 1000 m, então para converter km em m, multiplica-se por 1000. Para a conversão inversa, divide-se por 1000 (ou multiplica-se por 0,001)."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="valor">Valor</Label>
            <Input
              id="valor"
              type="number"
              placeholder="10"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              data-testid="input-valor"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="de">De</Label>
            <Select value={de} onValueChange={setDe}>
              <SelectTrigger id="de" data-testid="select-de">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="km">Quilômetros (km)</SelectItem>
                <SelectItem value="m">Metros (m)</SelectItem>
                <SelectItem value="cm">Centímetros (cm)</SelectItem>
                <SelectItem value="mm">Milímetros (mm)</SelectItem>
                <SelectItem value="l">Litros (l)</SelectItem>
                <SelectItem value="ml">Mililitros (ml)</SelectItem>
                <SelectItem value="kg">Quilogramas (kg)</SelectItem>
                <SelectItem value="g">Gramas (g)</SelectItem>
                <SelectItem value="mg">Miligramas (mg)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="para">Para</Label>
            <Select value={para} onValueChange={setPara}>
              <SelectTrigger id="para" data-testid="select-para">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="km">Quilômetros (km)</SelectItem>
                <SelectItem value="m">Metros (m)</SelectItem>
                <SelectItem value="cm">Centímetros (cm)</SelectItem>
                <SelectItem value="mm">Milímetros (mm)</SelectItem>
                <SelectItem value="l">Litros (l)</SelectItem>
                <SelectItem value="ml">Mililitros (ml)</SelectItem>
                <SelectItem value="kg">Quilogramas (kg)</SelectItem>
                <SelectItem value="g">Gramas (g)</SelectItem>
                <SelectItem value="mg">Miligramas (mg)</SelectItem>
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
            label="Resultado"
            value={result.toFixed(4)}
            unit={para}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
