export type Product = {
    id: number;
    name: string;
    price: number;
    category: "laptop" | "phone" | "watch";
    description: string;
};

export const products: Product[] = [
    {
        id: 1,
        name: "Dell Inspiron 15",
        price: 55000,
        category: "laptop",
        description: "A reliable laptop for programming, office work, and everyday tasks."
    },
    {
        id: 2,
        name: "HP Pavilion 14",
        price: 62000,
        category: "laptop",
        description: "A lightweight laptop with a powerful processor and sleek design."
    },
    {
        id: 3,
        name: "MacBook Air M4",
        price: 99900,
        category: "laptop",
        description: "A premium laptop with excellent performance and long battery life."
    },
    {
        id: 4,
        name: "Samsung Galaxy S25",
        price: 80999,
        category: "phone",
        description: "A flagship smartphone with a high-quality display and advanced camera."
    },
    {
        id: 5,
        name: "iPhone 17",
        price: 82900,
        category: "phone",
        description: "A premium smartphone offering smooth performance and excellent photography."
    },
    {
        id: 6,
        name: "OnePlus Nord 5",
        price: 31999,
        category: "phone",
        description: "A fast smartphone with a vibrant display and long-lasting battery."
    },
    {
        id: 7,
        name: "Samsung Galaxy Watch 7",
        price: 29999,
        category: "watch",
        description: "A smart watch with fitness tracking, heart rate monitoring, and notifications."
    },
    {
        id: 8,
        name: "Apple Watch Series 11",
        price: 46900,
        category: "watch",
        description: "A smartwatch with health tracking, workout features, and iPhone integration."
    },
    {
        id: 9,
        name: "Noise ColorFit Pro 5",
        price: 3999,
        category: "watch",
        description: "An affordable smartwatch with activity tracking and Bluetooth calling."
    },
    {
        id: 10,
        name: "Lenovo IdeaPad Slim 3",
        price: 44999,
        category: "laptop",
        description: "A budget-friendly laptop suitable for students, browsing, and productivity."
    }
];
export function getProductById(id:number){
    return products.find((p)=>p.id==id)
}