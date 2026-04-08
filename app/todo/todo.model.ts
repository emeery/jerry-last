export interface Todo {
    id: string;
    name: string;
    date?: Date;
    state?: 'completed' | 'cancelled' | null;
}