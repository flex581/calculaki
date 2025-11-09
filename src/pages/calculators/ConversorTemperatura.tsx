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

export default function ConversorTemperatura() {
  const [valor, setValor] = useState("");
  const [de, setDe] = useState("celsius");
  const [para, setPara] = useState("fahrenheit");
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    const v = parseFloat(valor);
    
    if (!isNaN(v)) {
      let resultado = v;
      
      if (de === "celsius") {
        if (para === "fahrenheit") resultado = (v * 9/5) + 32;
        else if (para === "kelvin") resultado = v + 273.15;
      } else if (de === "fahrenheit") {
        if (para === "celsius") resultado = (v - 32) * 5/9;
        else if (para === "kelvin") resultado = (v - 32) * 5/9 + 273.15;
      } else if (de === "kelvin") {
        if (para === "celsius") resultado = v - 273.15;
        else if (para === "fahrenheit") resultado = (v - 273.15) * 9/5 + 32;
      }
      
      setResult(resultado);
    }
  };

  const clear = () => {
    setValor("");
    setDe("celsius");
    setPara("fahrenheit");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Conversor de Temperatura"
      description="Converta entre Celsius, Fahrenheit e Kelvin"
      currentPath="/calculadora/conversor-temperatura"
      category="general"
      explanation="Este conversor transforma temperaturas entre as três escalas principais: Celsius (°C), Fahrenheit (°F) e Kelvin (K). Celsius é o padrão no Brasil, Fahrenheit é usado nos EUA, e Kelvin é a escala absoluta usada em ciência."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="valor">Temperatura</Label>
            <Input
              id="valor"
              type="number"
              placeholder="25"
              step="0.1"
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
                <SelectItem value="celsius">Celsius (°C)</SelectItem>
                <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                <SelectItem value="kelvin">Kelvin (K)</SelectItem>
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
                <SelectItem value="celsius">Celsius (°C)</SelectItem>
                <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                <SelectItem value="kelvin">Kelvin (K)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-4">
          <Button onClick={convert} className="flex-1" data-testid="button-convert">
            Converter
          </Button>
          <Button onClick={clear} variant="outline" data-testid="button-clear">
            Limpar
          </Button>
        </div>

        {result !== null && (
          <ResultDisplay
            label={`Temperatura em ${para === 'celsius' ? 'Celsius (°C)' : para === 'fahrenheit' ? 'Fahrenheit (°F)' : 'Kelvin (K)'}`}
            value={result.toFixed(2)}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
