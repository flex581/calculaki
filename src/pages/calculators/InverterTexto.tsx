import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function InverterTexto() {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState("");

  const inverter = () => {
    const invertido = texto.split('').reverse().join('');
    setResultado(invertido);
  };

  const limpar = () => {
    setTexto("");
    setResultado("");
  };

  return (
    <CalculatorLayout
      title="Inverter Texto"
      description="Inverta a ordem dos caracteres do texto"
      currentPath="/calculadora/inverter-texto"
      category="general"
      explanation="Esta ferramenta inverte a ordem de todos os caracteres do texto, criando um efeito espelho. O último caractere torna-se o primeiro, e assim por diante. Pode ser usado para diversão, códigos simples ou verificar palíndromos."
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="texto">Texto Original</Label>
          <Textarea
            id="texto"
            placeholder="Digite seu texto aqui..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            className="min-h-[120px]"
            data-testid="textarea-texto"
          />
        </div>

        <div className="flex gap-4">
          <Button onClick={inverter} className="flex-1" data-testid="button-invert">
            Inverter Texto
          </Button>
          <Button onClick={limpar} variant="outline" data-testid="button-clear">
            Limpar
          </Button>
        </div>

        {resultado && (
          <div className="space-y-2">
            <Label htmlFor="resultado">Texto Invertido</Label>
            <Textarea
              id="resultado"
              value={resultado}
              readOnly
              className="min-h-[120px]"
              data-testid="textarea-resultado"
            />
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
