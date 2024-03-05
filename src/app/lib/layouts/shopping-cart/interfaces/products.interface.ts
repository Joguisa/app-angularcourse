export interface ProductsI {
    id:             number
    title:          string;
    price:          string;
    category:       number;
    description:    number;
    image:          number;
}


export interface ShoppCartI {
    code:           string
    name:           string;
    unitPrice:      number;
    quantity:       number;
    total:          number;
}