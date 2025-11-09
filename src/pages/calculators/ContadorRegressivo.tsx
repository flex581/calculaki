import { useState, useEffect, useRef } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Play, Pause, RotateCcw } from "lucide-react";

export default function ContadorRegressivo() {
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
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
  }, [isRunning, timeLeft]);

  const start = () => {
    const m = parseInt(minutes) || 0;
    const s = parseInt(seconds) || 0;
    const total = m * 60 + s;
    
    if (total > 0) {
      setTimeLeft(total);
      setIsRunning(true);
    }
  };

  const toggle = () => setIsRunning(!isRunning);
  const reset = () => {
    setIsRunning(false);
    setTimeLeft(0);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <CalculatorLayout
      title="Contador Regressivo"
      description="Crie um timer de contagem regressiva"
      currentPath="/calculadora/contador-regressivo"
      category="time"
      explanation="O contador regressivo permite definir um tempo específico e conta para trás até zero. É útil para controlar tempo de tarefas, exercícios, pausas ou qualquer atividade com tempo limitado."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="minutes">Minutos</Label>
            <Input
              id="minutes"
              type="number"
              placeholder="5"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              disabled={isRunning}
              data-testid="input-minutes"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="seconds">Segundos</Label>
            <Input
              id="seconds"
              type="number"
              placeholder="30"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              disabled={isRunning}
              data-testid="input-seconds"
            />
          </div>
        </div>

        <Card className="p-8 bg-primary/5 border-primary/20">
          <div className="text-center">
            <p className="text-6xl md:text-7xl font-bold font-mono text-primary" data-testid="text-time">
              {formatTime(timeLeft)}
            </p>
          </div>
        </Card>

        <div className="flex gap-4 justify-center">
          {timeLeft === 0 ? (
            <Button size="lg" onClick={start} className="w-32" data-testid="button-start">
              <Play className="mr-2 h-5 w-5" />
              Iniciar
            </Button>
          ) : (
            <Button size="lg" onClick={toggle} className="w-32" data-testid={isRunning ? "button-pause" : "button-resume"}>
              {isRunning ? (
                <>
                  <Pause className="mr-2 h-5 w-5" />
                  Pausar
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  Retomar
                </>
              )}
            </Button>
          )}
          <Button size="lg" variant="outline" onClick={reset} className="w-32" data-testid="button-reset">
            <RotateCcw className="mr-2 h-5 w-5" />
            Resetar
          </Button>
        </div>
      </div>
    </CalculatorLayout>
  );
}
