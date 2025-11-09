import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ResultDisplay } from "@/components/ResultDisplay";

export default function ContadorPalavras() {
  const [texto, setTexto] = useState("");

  const contarPalavras = () => {
    if (!texto.trim()) return 0;
    return texto.trim().split(/\s+/).length;
  };

  const contarCaracteres = () => texto.length;
  const contarCaracteresSemEspacos = () => texto.replace(/\s/g, '').length;

  return (
    <CalculatorLayout
      title="Contador de Palavras"
      description="Conte palavras e caracteres em um texto"
      currentPath="/calculadora/contador-palavras"
      category="general"
      explanation="Esta ferramenta conta instantaneamente o número de palavras, caracteres totais e caracteres sem espaços em qualquer texto. Útil para redações, artigos, posts em redes sociais e documentos com limite de caracteres."
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="texto">Digite ou cole seu texto</Label>
          <Textarea
            id="texto"
            placeholder="Digite seu texto aqui..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            className="min-h-[200px]"
            data-testid="textarea-texto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ResultDisplay
            label="Palavras"
            value={contarPalavras()}
          />
          <ResultDisplay
            label="Caracteres"
            value={contarCaracteres()}
          />
          <ResultDisplay
            label="Sem Espaços"
            value={contarCaracteresSemEspacos()}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}
