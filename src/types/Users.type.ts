export interface User {
    id: number;
    full_name: string;
    username: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword?: string;
}
export type FormStateType = Omit<User, 'id'>;
export const initForm: FormStateType = {
    full_name: '',
    email: '',
    phone: '',
    username: '',
    password: ''
};

export const checkErrorType = {
    full_name: false,
    email: false,
    phone: false,
    username: false,
    password: false,
    confirmPassword: false
};
