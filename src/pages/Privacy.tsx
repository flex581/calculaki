import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  useEffect(() => {
    document.title = "Política de Privacidade - Calculaki";
  }, []);

  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-foreground mb-8" data-testid="text-page-title">
        Política de Privacidade
      </h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Coleta de Dados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              O Calculaki não coleta, armazena ou processa dados pessoais dos usuários. 
              Todos os cálculos são realizados localmente no seu navegador.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Cookies e Armazenamento Local</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Utilizamos apenas armazenamento local do navegador para salvar preferências 
              de tema (modo claro/escuro). Nenhuma informação é enviada para servidores externos.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Segurança</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Como não coletamos dados, não há risco de vazamento de informações pessoais. 
              Todos os cálculos são privados e não são compartilhados.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Alterações nesta Política</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Podemos atualizar esta política de privacidade periodicamente. 
              Recomendamos revisar esta página ocasionalmente para estar ciente de quaisquer mudanças.
            </p>
          </CardContent>
        </Card>

        <p className="text-sm text-muted-foreground">
          Última atualização: Janeiro de 2025
        </p>
      </div>
    </div>
  );
}
