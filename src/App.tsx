import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";

import JurosCompostos from "@/pages/calculators/JurosCompostos";
import Financiamento from "@/pages/calculators/Financiamento";
import SalarioLiquido from "@/pages/calculators/SalarioLiquido";
import Desconto from "@/pages/calculators/Desconto";
import HorasExtras from "@/pages/calculators/HorasExtras";
import Investimentos from "@/pages/calculators/Investimentos";
import MetaFinanceira from "@/pages/calculators/MetaFinanceira";
import RentabilidadeReal from "@/pages/calculators/RentabilidadeReal";
import ConversorMoedas from "@/pages/calculators/ConversorMoedas";
import Inflacao from "@/pages/calculators/Inflacao";

import RegraDeTres from "@/pages/calculators/RegraDeTres";
import Porcentagem from "@/pages/calculators/Porcentagem";
import FracaoDecimal from "@/pages/calculators/FracaoDecimal";
import Media from "@/pages/calculators/Media";
import ConversorUnidades from "@/pages/calculators/ConversorUnidades";
import NumeroAleatorio from "@/pages/calculators/NumeroAleatorio";
import CalculadoraTempo from "@/pages/calculators/CalculadoraTempo";
import ConversorBases from "@/pages/calculators/ConversorBases";

import IMC from "@/pages/calculators/IMC";
import GastoCalorico from "@/pages/calculators/GastoCalorico";
import FrequenciaCardiaca from "@/pages/calculators/FrequenciaCardiaca";
import GorduraCorporal from "@/pages/calculators/GorduraCorporal";
import CronometroTreino from "@/pages/calculators/CronometroTreino";
import AguaDiaria from "@/pages/calculators/AguaDiaria";

import ContadorRegressivo from "@/pages/calculators/ContadorRegressivo";
import Cronometro from "@/pages/calculators/Cronometro";
import DiferencaDatas from "@/pages/calculators/DiferencaDatas";
import PlanejadorRotina from "@/pages/calculators/PlanejadorRotina";
import CalculadoraIdade from "@/pages/calculators/CalculadoraIdade";

import ContadorPalavras from "@/pages/calculators/ContadorPalavras";
import GeradorSenhas from "@/pages/calculators/GeradorSenhas";
import ConversorTexto from "@/pages/calculators/ConversorTexto";
import CalculadoraProporcoes from "@/pages/calculators/CalculadoraProporcoes";
import InverterTexto from "@/pages/calculators/InverterTexto";
import DividirConta from "@/pages/calculators/DividirConta";
import ConversorTemperatura from "@/pages/calculators/ConversorTemperatura";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/contato" component={Contact} />
      <Route path="/privacidade" component={Privacy} />
      
      <Route path="/calculadora/juros-compostos" component={JurosCompostos} />
      <Route path="/calculadora/financiamento" component={Financiamento} />
      <Route path="/calculadora/salario-liquido" component={SalarioLiquido} />
      <Route path="/calculadora/desconto" component={Desconto} />
      <Route path="/calculadora/horas-extras" component={HorasExtras} />
      <Route path="/calculadora/investimentos" component={Investimentos} />
      <Route path="/calculadora/meta-financeira" component={MetaFinanceira} />
      <Route path="/calculadora/rentabilidade-real" component={RentabilidadeReal} />
      <Route path="/calculadora/conversor-moedas" component={ConversorMoedas} />
      <Route path="/calculadora/inflacao" component={Inflacao} />
      
      <Route path="/calculadora/regra-de-tres" component={RegraDeTres} />
      <Route path="/calculadora/porcentagem" component={Porcentagem} />
      <Route path="/calculadora/fracao-decimal" component={FracaoDecimal} />
      <Route path="/calculadora/media" component={Media} />
      <Route path="/calculadora/conversor-unidades" component={ConversorUnidades} />
      <Route path="/calculadora/numero-aleatorio" component={NumeroAleatorio} />
      <Route path="/calculadora/calculadora-tempo" component={CalculadoraTempo} />
      <Route path="/calculadora/conversor-bases" component={ConversorBases} />
      
      <Route path="/calculadora/imc" component={IMC} />
      <Route path="/calculadora/gasto-calorico" component={GastoCalorico} />
      <Route path="/calculadora/frequencia-cardiaca" component={FrequenciaCardiaca} />
      <Route path="/calculadora/gordura-corporal" component={GorduraCorporal} />
      <Route path="/calculadora/cronometro-treino" component={CronometroTreino} />
      <Route path="/calculadora/agua-diaria" component={AguaDiaria} />
      
      <Route path="/calculadora/contador-regressivo" component={ContadorRegressivo} />
      <Route path="/calculadora/cronometro" component={Cronometro} />
      <Route path="/calculadora/diferenca-datas" component={DiferencaDatas} />
      <Route path="/calculadora/planejador-rotina" component={PlanejadorRotina} />
      <Route path="/calculadora/calculadora-idade" component={CalculadoraIdade} />
      
      <Route path="/calculadora/contador-palavras" component={ContadorPalavras} />
      <Route path="/calculadora/gerador-senhas" component={GeradorSenhas} />
      <Route path="/calculadora/conversor-texto" component={ConversorTexto} />
      <Route path="/calculadora/calculadora-proporcoes" component={CalculadoraProporcoes} />
      <Route path="/calculadora/inverter-texto" component={InverterTexto} />
      <Route path="/calculadora/dividir-conta" component={DividirConta} />
      <Route path="/calculadora/conversor-temperatura" component={ConversorTemperatura} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
