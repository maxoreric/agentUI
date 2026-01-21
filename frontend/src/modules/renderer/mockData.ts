export const mockData = {
    sprintStats: {
        daysRemaining: 4,
        velocity: 42,
        bugsCount: 3,
        completedPoints: 120,
        totalPoints: 200,
    },
    activeTasks: {
        columns: [
            { id: "todo", title: "To Do" },
            { id: "in-progress", title: "In Progress" },
            { id: "done", title: "Done" },
        ],
        items: [
            { id: "1", columnId: "todo", title: "Fix login bug", assignee: { name: "Alice" } },
            { id: "2", columnId: "in-progress", title: "Write API docs", assignee: { name: "Bob" } },
        ],
    },
    teamStatus: {
        members: [
            { id: "u1", name: "Alice", role: "Frontend", status: "online" },
            { id: "u2", name: "Bob", role: "Backend", status: "offline" },
        ],
    },
};
