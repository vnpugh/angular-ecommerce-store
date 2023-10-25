import { Description } from "./description";
import { Size } from "./size";

export interface Product {
    id: number;
    name: string;
    imageUrls: string[];
    price: number;
    descriptions: Description[];
    sizes: Size[];
}