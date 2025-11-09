import { useState, useEffect, useRef } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, RotateCcw } from "lucide-react";

export default function CronometroTreino() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  const toggle = () => setIsRunning(!isRunning);
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <CalculatorLayout
      title="Cronômetro de Treino"
      description="Cronometre seus exercícios e treinos"
      currentPath="/calculadora/cronometro-treino"
      category="health"
      explanation="Este cronômetro digital preciso é ideal para medir o tempo de exercícios, séries de treino ou qualquer atividade física. Possui precisão de centésimos de segundo e controles simples de iniciar, pausar e resetar."
    >
      <div className="space-y-6">
        <Card className="p-8 bg-primary/5 border-primary/20">
          <div className="text-center">
            <p className="text-6xl md:text-7xl font-bold font-mono text-primary" data-testid="text-time">
              {formatTime(time)}
            </p>
          </div>
        </Card>

        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            onClick={toggle}
            className="w-32"
            data-testid={isRunning ? "button-pause" : "button-start"}
          >
            {isRunning ? (
              <>
                <Pause className="mr-2 h-5 w-5" />
                Pausar
              </>
            ) : (
              <>
                <Play className="mr-2 h-5 w-5" />
                Iniciar
              </>
            )}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={reset}
            className="w-32"
            data-testid="button-reset"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Resetar
          </Button>
        </div>
      </div>
    </CalculatorLayout>
  );
}
