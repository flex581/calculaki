import { useState } from "react";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2 } from "lucide-react";

interface Task {
  id: string;
  text: string;
  time: string;
  completed: boolean;
}

export default function PlanejadorRotina() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [newTime, setNewTime] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now().toString(),
        text: newTask,
        time: newTime,
        completed: false
      }]);
      setNewTask("");
      setNewTime("");
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <CalculatorLayout
      title="Planejador de Rotina"
      description="Organize sua rotina com checklist e horários"
      currentPath="/calculadora/planejador-rotina"
      category="time"
      explanation="O planejador de rotina ajuda a organizar tarefas diárias com horários específicos. Crie uma lista de atividades, defina horários e marque como concluído ao realizar. Ideal para manter produtividade e organizar o dia."
    >
      <div className="space-y-6">
        <div className="flex gap-2">
          <Input
            placeholder="Nova tarefa..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            data-testid="input-task"
          />
          <Input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            className="w-32"
            data-testid="input-time"
          />
          <Button onClick={addTask} data-testid="button-add">
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-2">
          {tasks.length === 0 ? (
            <Card className="p-6 text-center text-muted-foreground">
              Nenhuma tarefa adicionada. Comece criando sua primeira tarefa!
            </Card>
          ) : (
            tasks.map((task) => (
              <Card key={task.id} className="p-4" data-testid={`task-${task.id}`}>
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id)}
                    data-testid={`checkbox-${task.id}`}
                  />
                  <div className="flex-1">
                    <p className={`${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                      {task.text}
                    </p>
                    {task.time && (
                      <p className="text-sm text-muted-foreground">{task.time}</p>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteTask(task.id)}
                    data-testid={`button-delete-${task.id}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </CalculatorLayout>
  );
}
