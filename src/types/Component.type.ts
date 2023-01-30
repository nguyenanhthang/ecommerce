export interface InputIf {
    id?: string;
    label?: string;
    type?: string;
    width?: number;
    height?: number;
    helperText?: string;
    icon?: string;
    value?: string;
    placeholder?: string;
}
export interface ButtonIf {
    icon?: JSX.Element | JSX.Element[];
    text?: string;
    color?: string;
    width?: number;
    height?: number;
}
export interface IconIf {
    LinkIcons: string;
    width?: number;
    height?: number;
}
