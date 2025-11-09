import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CurrencyRatesResponse {
  rates: {
    BRL: number;
    USD: number;
  };
  lastUpdated: string;
  fallback?: boolean;
}

export default function ConversorMoedas() {
  const [valor, setValor] = useState("");
  const [cotacao, setCotacao] = useState("5.00");
  const [direcao, setDirecao] = useState("usd-to-brl");
  const [result, setResult] = useState<number | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();

  const { data: ratesData, isLoading } = useQuery<CurrencyRatesResponse>({
    queryKey: ["/api/currency-rates"],
    retry: 1,
    staleTime: 0,
    gcTime: 0,
  });

  useEffect(() => {
    if (ratesData?.rates?.BRL) {
      setCotacao(ratesData.rates.BRL.toFixed(2));
      
      if (ratesData.fallback) {
        toast({
          title: "Taxa de fallback",
          description: "Não foi possível obter cotação atualizada. Usando valor aproximado.",
          variant: "default"
        });
      }
    }
  }, [ratesData]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    const previousRate = cotacao;
    
    try {
      await queryClient.invalidateQueries({ queryKey: ["/api/currency-rates"] });
      const result = await queryClient.fetchQuery<CurrencyRatesResponse>({
        queryKey: ["/api/currency-rates"],
        staleTime: 0,
      });
      
      if (result?.rates?.BRL) {
        const newRate = result.rates.BRL.toFixed(2);
        setCotacao(newRate);
        
        if (newRate !== previousRate) {
          toast({
            title: "Cotação atualizada",
            description: `Nova cotação: R$ ${newRate}${result.fallback ? ' (fallback)' : ''}`,
          });
        } else {
          toast({
            title: "Cotação mantida",
            description: `Taxa permanece: R$ ${newRate}`,
          });
        }
      } else {
        throw new Error("No rate data");
      }
    } catch (error) {
      setCotacao(previousRate);
      toast({
        title: "Erro ao atualizar",
        description: "Mantendo cotação anterior.",
        variant: "destructive"
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  const calculate = () => {
    const v = parseFloat(valor);
    const c = parseFloat(cotacao);
    
    if (!isNaN(v) && !isNaN(c) && c > 0) {
      if (direcao === "usd-to-brl") {
        setResult(v * c);
      } else {
        setResult(v / c);
      }
    }
  };

  const clear = () => {
    setValor("");
    setResult(null);
  };

  return (
    <CalculatorLayout
      title="Conversor de Dólar para Real"
      description="Converta valores entre dólar e real"
      currentPath="/calculadora/conversor-moedas"
      category="finance"
      explanation="A conversão entre moedas é feita multiplicando ou dividindo o valor pela cotação atual. Para converter de dólar para real, multiplica-se o valor em dólares pela cotação. Para converter de real para dólar, divide-se o valor em reais pela cotação."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="valor">Valor</Label>
            <Input
              id="valor"
              type="number"
              placeholder="100"
              step="0.01"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              data-testid="input-valor"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="direcao">Conversão</Label>
            <Select value={direcao} onValueChange={setDirecao}>
              <SelectTrigger id="direcao" data-testid="select-direcao">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd-to-brl">USD → BRL</SelectItem>
                <SelectItem value="brl-to-usd">BRL → USD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="cotacao">Cotação do Dólar (R$)</Label>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleRefresh}
                disabled={isLoading || isRefreshing}
                data-testid="button-refresh-rate"
              >
                <RefreshCw className={`h-4 w-4 ${(isLoading || isRefreshing) ? 'animate-spin' : ''}`} />
              </Button>
            </div>
            <Input
              id="cotacao"
              type="number"
              placeholder="5.00"
              step="0.01"
              value={cotacao}
              onChange={(e) => setCotacao(e.target.value)}
              data-testid="input-cotacao"
            />
            <div className="flex items-center gap-2">
              {(isLoading || isRefreshing) && (
                <p className="text-xs text-muted-foreground">
                  Atualizando...
                </p>
              )}
              {ratesData?.fallback && !isLoading && !isRefreshing && (
                <Badge variant="secondary" className="text-xs">
                  Fallback
                </Badge>
              )}
              {ratesData?.lastUpdated && !isLoading && !isRefreshing && (
                <p className="text-xs text-muted-foreground">
                  {new Date(ratesData.lastUpdated).toLocaleTimeString('pt-BR')}
                </p>
              )}
            </div>
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
            label={direcao === "usd-to-brl" ? "Valor em Reais" : "Valor em Dólares"}
            value={result.toLocaleString('pt-BR', { 
              style: 'currency', 
              currency: direcao === "usd-to-brl" ? 'BRL' : 'USD' 
            })}
          />
        )}
      </div>
    </CalculatorLayout>
  );
}
