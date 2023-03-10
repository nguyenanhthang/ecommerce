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
    loading?: any;
    icon?: JSX.Element | JSX.Element[];
    text?: string;
    color?: string;
    width?: number;
    height?: number;
    border?: string;
    type?: any;
    colorButton?: string;
    onClick?: () => void;
}
export interface IconIf {
    LinkIcons?: string;
    width?: number;
    height?: number;
}
export interface SearchIf {
    onClick?: () => void;
}
export interface UntreeIf {
    icon: JSX.Element | JSX.Element[];
    title: string;
    detail: string;
}

export interface ImgIf {
    textImg: string;
    img: string;
    onclick: () => void;
}

export interface CardProductIFf {
    productImg: string;
    productName: string;
    productCost: number;
    productRating?: any;
    id?: number;
}

export interface BannerIF {
    nameBanner: string;
    nameButton?: string;
    onClick?: () => void;
    imageBanner: string;
    height: number;
    width: number;
    paramBanner?: string;
}
