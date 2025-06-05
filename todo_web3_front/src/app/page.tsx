import { StakeCard } from "@/components/comons/stakeCard";
import { StatusCard } from "@/components/comons/statusCard";
import { TaskCard } from "@/components/comons/taskCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogContent} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusIcon, WalletIcon } from "lucide-react";


const tasks = [
    {
        title: "Tarefa 1",
        description: "Descrição da tarefa 1",
        createdAt:"2025-01-01",
        dueDate:"2025-01-07",
        stake:50
    },
        {
        title: "Tarefa 2",
        description: "Descrição da tarefa 2",
        createdAt:"2025-01-01",
        dueDate:"2025-01-07",
        stake:70
    },
        {
        title: "Tarefa 3",
        description: "Descrição da tarefa 3",
        createdAt:"2025-01-01",
        dueDate:"2025-01-07",
        stake:80
    },
        {
        title: "Tarefa 4",
        description: "Descrição da tarefa 4",
        createdAt:"2025-01-01",
        dueDate:"2025-01-07",
        stake:10
    }
]

export default function Home() {
return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto pt-10">
        <div className="flex justify-between items-center p-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl bold">Web3 ToDo List</h1>
                <h2 className="text-sm text-muted-foreground">Gerencie suas tarefas com Web3 (Segurança e confiança)</h2>
            </div>
            <Button><WalletIcon/><span>Conectar Wallet</span></Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            <StatusCard title="Total de Tarefas" value={10} />
            <StatusCard title="Total de Tarefas concluídas" value={20}/>
            <StatusCard title="Total de Tarefas pendentes" value={30}/>
            <StatusCard title="Total de wei em stake" value={40}/>
        </div>
        <div className="flex justify-between items-center mt-10">
            <h1 className="text-2xl bold">Tarefas</h1>
            <Dialog>
                <DialogTrigger>
                    <Button>
                        <PlusIcon/>
                        <span>Nova Tarefa</span>
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Nova Tarefa</DialogTitle>
                    </DialogHeader>
                    <DialogDescription className="flex flex-col gap-4">
                        <Label>Título</Label>
                        <Input type="text" placeholder="Título da Tarefa"/>
                        <Label>Descrição</Label>
                        <Textarea placeholder="Decrição da Tarefa"/>
                        <Label>Data de vencimento</Label>
                        <Input type="datetime-local" placeholder="Data de Vencimento" />
                        <div className="grid frid-cols-1 md:grid-cols-2 gap-4">
                            <StakeCard/>
                            <StakeCard/>
                            <StakeCard/>
                            <StakeCard/>
                        </div>
                        <Button>
                            <PlusIcon/>
                            <span>Criar Tarefa</span>
                        </Button>
                    </DialogDescription>
                </DialogContent>
            </Dialog>
        </div>
        <div className="flex flex-col gap-4 mt-10">
            {
                tasks.length === 0 ? (
                    <div className="flex justify-center items-center h-full">
                        <h1 className="text-2xl font-bold">Nenhuma tarefa encontrada</h1>
                    </div>
                ) : (tasks.map((task) => (
                <TaskCard key={task.title} title={task.title} description={task.description} createdAt={task.createdAt} dueDate={task.dueDate} stake={task.stake}/>
                )))
            }
        </div>
    </div>
);
}
