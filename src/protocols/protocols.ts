export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

export type UserSignUp = Omit<User, "id">;