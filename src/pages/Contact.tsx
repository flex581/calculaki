import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contato - Calculaki";
  }, []);

  return (
    <div className="container py-12 max-w-2xl">
      <h1 className="text-4xl font-bold text-foreground mb-8" data-testid="text-page-title">
        Contato
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>Entre em Contato</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Tem alguma dúvida, sugestão ou feedback? Adoraríamos ouvir você!
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                <a 
                  href="mailto:contato@calculaki.com" 
                  className="text-primary hover:underline"
                  data-testid="link-email"
                >
                  contato@calculaki.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageSquare className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Sugestões</h3>
                <p className="text-muted-foreground text-sm">
                  Quer ver uma nova calculadora no site? Envie sua sugestão para nosso e-mail!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
