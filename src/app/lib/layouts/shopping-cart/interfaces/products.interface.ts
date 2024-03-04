export interface ProductsI {
    id:             number;
    name:           string;
    description:    string;
    price:          number;
    quantity:       number;
}


export interface ShoppCartI {
    id:             number;
    name:           string;
    unitPrice:      number;
    quantity:       number;
    total:          number;
}