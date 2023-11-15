import { Category } from "./category.model";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    // moreDetails: string;
    image: string;
    category: Category;
    isNewRelease: boolean;
    isPreOrder: boolean;
    releaseDate: string;
}
