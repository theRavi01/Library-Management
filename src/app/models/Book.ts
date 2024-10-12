export interface Book {
    id?: number;
    bookName: string;
    authorName: string;
    serialNo?: string; // Optional because it will be generated by the backend
    available: boolean;
    category: string;
  }