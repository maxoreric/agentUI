import { MetricCard } from "../../components/domain/MetricCard";

export const componentMap: Record<string, React.FC<any>> = {
    MetricCard: MetricCard,
    // Future components will be registered here
    ProjectHeader: ({ title }: any) => <h1 className="text-3xl font-bold">{title}</h1>,
    KanbanBoard: () => <div className="p-4 border-2 border-dashed border-default-300 rounded-lg">Kanban Board Placeholder</div>,
    TeamList: () => <div className="p-4 border-2 border-dashed border-default-300 rounded-lg">Team List Placeholder</div>,
    AlertBanner: ({ message }: any) => <div className="p-4 bg-warning-100 text-warning-800 rounded-lg">{message}</div>,
    ProgressTracker: () => <div className="p-4 border-2 border-dashed border-default-300 rounded-lg">Progress Tracker Placeholder</div>,
};
