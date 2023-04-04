

export type Blog ={
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    content:string;
    description: string;
    limit:number;
    offset:number
}

export type Eyecatch ={
    url: string;
    height: number;
    width: number;
}

export type Category ={
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    name: string;
}

