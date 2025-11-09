import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ConversorTexto() {
  const [texto, setTexto] = useState("");
  const [resultado, setResultado] = useState("");

  const converterMaiusculas = () => setResultado(texto.toUpperCase());
  const converterMinusculas = () => setResultado(texto.toLowerCase());
  const converterCapitalizar = () => {
    const palavras = texto.toLowerCase().split(' ');
    const capitalizadas = palavras.map(palavra => 
      palavra.charAt(0).toUpperCase() + palavra.slice(1)
    );
    setResultado(capitalizadas.join(' '));
  };
  const inverterCaso = () => {
    const invertido = texto.split('').map(char => 
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
    setResultado(invertido);
  };

  return (
    <CalculatorLayout
      title="Conversor de Texto"
      description="Converta texto entre maiúsculas e minúsculas"
      currentPath="/calculadora/conversor-texto"
      category="general"
      explanation="Esta ferramenta transforma texto entre diferentes formatos de capitalização: tudo em maiúsculas, tudo em minúsculas, capitalizar primeira letra de cada palavra, ou inverter maiúsculas e minúsculas. Útil para padronizar textos e formatação."
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <Button onClick={converterMaiusculas} variant="outline" data-testid="button-uppercase">
            MAIÚSCULAS
          </Button>
          <Button onClick={converterMinusculas} variant="outline" data-testid="button-lowercase">
            minúsculas
          </Button>
          <Button onClick={converterCapitalizar} variant="outline" data-testid="button-capitalize">
            Capitalizar
          </Button>
          <Button onClick={inverterCaso} variant="outline" data-testid="button-invert">
            iNVERTER
          </Button>
        </div>

        {resultado && (
          <div className="space-y-2">
            <Label htmlFor="resultado">Resultado</Label>
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
