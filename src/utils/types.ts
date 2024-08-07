export type Id = number;

export type Category = {
    id: Id;
    name: string;
    description: string;
    color: string;
    icon: string;
}

export type DbCard = {
    id: Id;
    question: string;
    categoryId: number;
    // lastAsked: number;
    // askedCount: number;
}

export type Card = {
    id: Id;
    category: string;
    icon: string;
    question: string;
    color: string;
}