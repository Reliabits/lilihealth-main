/* eslint-disable prettier/prettier */
export interface IFood {
    id: number;
    name: string;
    selected: boolean;
    quantity: number;
}
export interface IFoodSubCategory {
    id: number;
    name: string;
    selected: boolean;
    foods: IFood[];
}
export interface IFoodCategory {
    id: number;
    name: string;
    selected?: boolean;
    notes?:string;
    subCategories: IFoodSubCategory[];
}
export default interface IFoodMenu {
    id: number;
    title: string;
    menuImage: string;
    categories?: IFoodCategory[];
}
