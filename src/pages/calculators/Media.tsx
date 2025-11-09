import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Media() {
  const [valoresSimples, setValoresSimples] = useState("");
  const [valoresPonderados, setValoresPonderados] = useState("");
  const [pesos, setPesos] = useState("");
  const [resultSimples, setResultSimples] = useState<number | null>(null);
  const [resultPonderada, setResultPonderada] = useState<number | null>(null);

  const calculateSimples = () => {
    const valores = valoresSimples.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
    
    if (valores.length > 0) {
      const soma = valores.reduce((acc, val) => acc + val, 0);
      const media = soma / valores.length;
      setResultSimples(media);
    }
  };

  const calculatePonderada = () => {
    const valores = valoresPonderados.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
    const pesosArray = pesos.split(',').map(p => parseFloat(p.trim())).filter(p => !isNaN(p));
    
    if (valores.length > 0 && pesosArray.length === valores.length) {
      const somaP = valores.reduce((acc, val, i) => acc + (val * pesosArray[i]), 0);
      const somaPesos = pesosArray.reduce((acc, p) => acc + p, 0);
      const media = somaP / somaPesos;
      setResultPonderada(media);
    }
  };

  const clearSimples = () => {
    setValoresSimples("");
    setResultSimples(null);
  };

  const clearPonderada = () => {
    setValoresPonderados("");
    setPesos("");
    setResultPonderada(null);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Média"
      description="Calcule média simples e ponderada"
      currentPath="/calculadora/media"
      category="education"
      explanation="A média simples é a soma de todos os valores dividida pela quantidade de valores. A média ponderada considera o peso de cada valor: soma-se o produto de cada valor pelo seu peso e divide-se pela soma dos pesos. É usada quando alguns valores têm maior importância que outros."
    >
      <Tabs defaultValue="simples" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="simples">Média Simples</TabsTrigger>
          <TabsTrigger value="ponderada">Média Ponderada</TabsTrigger>
        </TabsList>
        
        <TabsContent value="simples" className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="valores-simples">Valores (separados por vírgula)</Label>
            <Input
              id="valores-simples"
              placeholder="7, 8, 9, 10"
              value={valoresSimples}
              onChange={(e) => setValoresSimples(e.target.value)}
              data-testid="input-valores-simples"
            />
          </div>

          <div className="flex gap-4">
            <Button onClick={calculateSimples} className="flex-1" data-testid="button-calculate-simples">
              Calcular
            </Button>
            <Button onClick={clearSimples} variant="outline" data-testid="button-clear-simples">
              Limpar
            </Button>
          </div>

          {resultSimples !== null && (
            <ResultDisplay
              label="Média Simples"
              value={resultSimples.toFixed(2)}
            />
          )}
        </TabsContent>

        <TabsContent value="ponderada" className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="valores-ponderados">Valores (separados por vírgula)</Label>
              <Input
                id="valores-ponderados"
                placeholder="7, 8, 9"
                value={valoresPonderados}
                onChange={(e) => setValoresPonderados(e.target.value)}
                data-testid="input-valores-ponderados"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pesos">Pesos (separados por vírgula)</Label>
              <Input
                id="pesos"
                placeholder="2, 3, 5"
                value={pesos}
                onChange={(e) => setPesos(e.target.value)}
                data-testid="input-pesos"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={calculatePonderada} className="flex-1" data-testid="button-calculate-ponderada">
              Calcular
            </Button>
            <Button onClick={clearPonderada} variant="outline" data-testid="button-clear-ponderada">
              Limpar
            </Button>
          </div>

          {resultPonderada !== null && (
            <ResultDisplay
              label="Média Ponderada"
              value={resultPonderada.toFixed(2)}
            />
          )}
        </TabsContent>
      </Tabs>
    </CalculatorLayout>
  );
}
