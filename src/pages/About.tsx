import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Zap, Shield, Heart } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "Sobre o Calculaki - Calculadoras Online";
  }, []);

  return (
    <div className="container py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-foreground mb-8" data-testid="text-page-title">
        Sobre o Calculaki
      </h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Nossa Missão</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              O Calculaki foi criado com o objetivo de fornecer ferramentas de cálculo online gratuitas, 
              rápidas e fáceis de usar para todos. Acreditamos que todos devem ter acesso a ferramentas 
              úteis que facilitem o dia a dia, seja para calcular juros, converter unidades ou planejar 
              a rotina.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle>Rápido e Eficiente</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Todas as calculadoras funcionam diretamente no seu navegador, 
                sem necessidade de downloads ou cadastros.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>Privacidade Garantida</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Seus dados são processados localmente. Não armazenamos nenhuma 
                informação pessoal ou resultados de cálculos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                <CardTitle>Mais de 40 Ferramentas</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Calculadoras para finanças, saúde, estudos, produtividade e 
                muito mais, todas em um só lugar.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <CardTitle>100% Gratuito</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Todas as nossas ferramentas são gratuitas e sempre serão. 
                Sem taxas ocultas ou limitações.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
