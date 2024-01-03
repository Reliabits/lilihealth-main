/* eslint-disable prettier/prettier */
export interface ICategory {
    cat_ID: number;
    cat_name: string;
}

export interface ITag {
    term_id: number;
    name: string;
}

export interface ILearn {
    id: number;
    title: string;
    content: string;
    image: string,
    categories: ICategory[];
    tags: ITag[];
    custom_field: string[];
    favorite: boolean;
    video_iframe: string;
}