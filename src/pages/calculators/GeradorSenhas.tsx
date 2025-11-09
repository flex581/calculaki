import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Copy, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function GeradorSenhas() {
  const [length, setLength] = useState("16");
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const generate = () => {
    let chars = "";
    if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (chars === "") {
      toast({
        title: "Erro",
        description: "Selecione pelo menos um tipo de caractere",
        variant: "destructive"
      });
      return;
    }

    const len = parseInt(length) || 16;
    let result = "";
    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast({
      title: "Copiado!",
      description: "Senha copiada para a área de transferência"
    });
  };

  return (
    <CalculatorLayout
      title="Gerador de Senhas"
      description="Gere senhas seguras e aleatórias"
      currentPath="/calculadora/gerador-senhas"
      category="general"
      explanation="O gerador cria senhas aleatórias e seguras combinando letras maiúsculas, minúsculas, números e símbolos. Senhas mais longas e com maior variedade de caracteres são mais seguras. Recomenda-se pelo menos 12 caracteres."
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="length">Comprimento da Senha</Label>
          <Input
            id="length"
            type="number"
            min="4"
            max="64"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            data-testid="input-length"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="uppercase"
              checked={includeUppercase}
              onCheckedChange={(checked) => setIncludeUppercase(checked as boolean)}
              data-testid="checkbox-uppercase"
            />
            <label htmlFor="uppercase" className="text-sm">Letras Maiúsculas (A-Z)</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="lowercase"
              checked={includeLowercase}
              onCheckedChange={(checked) => setIncludeLowercase(checked as boolean)}
              data-testid="checkbox-lowercase"
            />
            <label htmlFor="lowercase" className="text-sm">Letras Minúsculas (a-z)</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="numbers"
              checked={includeNumbers}
              onCheckedChange={(checked) => setIncludeNumbers(checked as boolean)}
              data-testid="checkbox-numbers"
            />
            <label htmlFor="numbers" className="text-sm">Números (0-9)</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="symbols"
              checked={includeSymbols}
              onCheckedChange={(checked) => setIncludeSymbols(checked as boolean)}
              data-testid="checkbox-symbols"
            />
            <label htmlFor="symbols" className="text-sm">Símbolos (!@#$%...)</label>
          </div>
        </div>

        <Button onClick={generate} className="w-full" data-testid="button-generate">
          <RefreshCw className="mr-2 h-5 w-5" />
          Gerar Senha
        </Button>

        {password && (
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                value={password}
                readOnly
                className="font-mono"
                data-testid="input-password"
              />
              <Button onClick={copyToClipboard} variant="outline" data-testid="button-copy">
                <Copy className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </CalculatorLayout>
  );
}
