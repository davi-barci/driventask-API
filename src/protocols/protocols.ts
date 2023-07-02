export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

export type UserSignUp = Omit<User, "id">;

export type Task = {
    title: string;
    description: string;
    category: string;
    dueDate?: Date;
    done?: boolean;
    userId: number;
};