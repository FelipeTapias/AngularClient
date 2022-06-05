export interface User extends UserDate {
    name: String;
    lastName: String;
    userName: String;
    idDocument: number;
    email: String;
    password: String;
    URLImage: String
    quote: String;
}

interface UserDate {
}
