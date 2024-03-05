export interface ProductsI {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    rating:      Rating;
}

export interface Rating {
    rate:  number;
    count: number;
}

export interface ShoppCartI {
    code:           string
    name:           string;
    unitPrice:      number;
    quantity:       number;
    total:          number;
}