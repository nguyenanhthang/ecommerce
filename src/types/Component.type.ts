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
    error?: boolean;
    control?: any;
    name: string;
    onChange?: (e: any) => void;
}
export interface ButtonIf {
    icon?: JSX.Element | JSX.Element[];
    text?: string;
    color?: string;
    width?: number;
    height?: number;
    border?: string;
    type?: any;
    onClick?: () => void;
}
export interface IconIf {
    LinkIcons: string;
    width?: number;
    height?: number;
}
export interface SearchIf {
    onClick?: () => void;
}
