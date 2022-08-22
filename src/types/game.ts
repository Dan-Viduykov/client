export interface IComment {
    _id: string;
    username: string;
    text: string;
}

export interface IGame {
    _id: string;
    name: string;
    studio: string;
    publisher: string;
    price: number;
    date: string;
    genre: string;
    tags: string[];
    description: string;
    rating: number;
    picture: string;
    video: string;
    comments: IComment[];
}
