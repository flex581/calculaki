import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function CalculadoraProporcoes() {
  const [original, setOriginal] = useState("");
  const [nova, setNova] = useState("");
  const [ingredientes, setIngredientes] = useState<{ nome: string; quantidade: string }[]>([
    { nome: "", quantidade: "" }
  ]);
  const [result, setResult] = useState<{ nome: string; quantidadeOriginal: number; quantidadeNova: number }[]>([]);

  const adicionarIngrediente = () => {
    setIngredientes([...ingredientes, { nome: "", quantidade: "" }]);
  };

  const atualizarIngrediente = (index: number, campo: 'nome' | 'quantidade', valor: string) => {
    const novosIngredientes = [...ingredientes];
    novosIngredientes[index][campo] = valor;
    setIngredientes(novosIngredientes);
  };

  const calcular = () => {
    const quantOriginal = parseFloat(original);
    const quantNova = parseFloat(nova);

    if (!isNaN(quantOriginal) && !isNaN(quantNova) && quantOriginal > 0) {
      const fator = quantNova / quantOriginal;
      
      const resultados = ingredientes
        .filter(ing => ing.nome && ing.quantidade)
        .map(ing => ({
          nome: ing.nome,
          quantidadeOriginal: parseFloat(ing.quantidade),
          quantidadeNova: parseFloat(ing.quantidade) * fator
        }));
      
      setResult(resultados);
    }
  };

  const limpar = () => {
    setOriginal("");
    setNova("");
    setIngredientes([{ nome: "", quantidade: "" }]);
    setResult([]);
  };

  return (
    <CalculatorLayout
      title="Calculadora de Proporções"
      description="Calcule proporções para receitas e medidas"
      currentPath="/calculadora/calculadora-proporcoes"
      category="general"
      explanation="Esta calculadora ajusta proporcionalmente ingredientes de receitas quando você precisa aumentar ou reduzir as quantidades. Basta informar a quantidade original da receita, a nova quantidade desejada e os ingredientes - o cálculo é feito automaticamente."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="original">Quantidade Original (porções)</Label>
            <Input
              id="original"
              type="number"
              placeholder="4"
              value={original}
              onChange={(e) => setOriginal(e.target.value)}
              data-testid="input-original"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nova">Nova Quantidade (porções)</Label>
            <Input
              id="nova"
              type="number"
              placeholder="8"
              value={nova}
              onChange={(e) => setNova(e.target.value)}
              data-testid="input-nova"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Ingredientes</Label>
          {ingredientes.map((ing, index) => (
            <div key={index} className="grid grid-cols-2 gap-2">
              <Input
                placeholder="Nome do ingrediente"
                value={ing.nome}
                onChange={(e) => atualizarIngrediente(index, 'nome', e.target.value)}
                data-testid={`input-nome-${index}`}
              />
              <Input
                type="number"
                placeholder="Quantidade"
                value={ing.quantidade}
                onChange={(e) => atualizarIngrediente(index, 'quantidade', e.target.value)}
                data-testid={`input-quantidade-${index}`}
              />
            </div>
          ))}
          <Button onClick={adicionarIngrediente} variant="outline" className="w-full" data-testid="button-add">
            Adicionar Ingrediente
          </Button>
        </div>

        <div className="flex gap-4">
          <Button onClick={calcular} className="flex-1" data-testid="button-calculate">
            Calcular
          </Button>
          <Button onClick={limpar} variant="outline" data-testid="button-clear">
            Limpar
          </Button>
        </div>

        {result.length > 0 && (
          <Card className="p-4 space-y-2">
            <h3 className="font-semibold text-foreground mb-2">Novas Quantidades:</h3>
            {result.map((item, index) => (
              <div key={index} className="flex justify-between text-sm" data-testid={`result-${index}`}>
                <span className="text-foreground">{item.nome}</span>
                <span className="text-muted-foreground">
                  {item.quantidadeOriginal} → <strong className="text-primary">{item.quantidadeNova.toFixed(2)}</strong>
                </span>
              </div>
            ))}
          </Card>
        )}
      </div>
    </CalculatorLayout>
  );
}
