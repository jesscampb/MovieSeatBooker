export interface Movie {
    id: string;
    title: string;
    genre?: string;
    year?: number;
    duration: {
        hours: number;
        minutes: number;
    };
    price: number;
    plot?: string;
    impact?: string;
}