export interface ProductsI {
    code:           string
    name:           string;
    description:    string;
    price:          number;
    stock:          number;
    quantity:       number;
}


export interface ShoppCartI {
    code:           string
    name:           string;
    unitPrice:      number;
    quantity:       number;
    total:          number;
}