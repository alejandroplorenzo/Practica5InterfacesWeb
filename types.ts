export type Post = {
    _id: string;
    title: string;
    content: string;
    author: string;
    cover: string;
    likes: number;
    comments: Array<Comment>
    createdAt: string;
    updatedAt: string;
}

export type Comment = {
    _id: string;
    author: string;
    content: string;
    createdAt: string;
}

export type APIResponse = {
    success: boolean;
    data: Data;  
}

export type Data = {
    posts: Array<Post>;
    total: number;
    page: number;
    totalPages: number;
}