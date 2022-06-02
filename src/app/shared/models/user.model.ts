export interface User extends UserDate {
    name: String;
    userName: String;
    idDocument: number;
    email: String;
    password: String;
    URLImage: String
    quote: String;
}

interface UserDate {
    birthDayDate: Date;
    dateCreate: Date;
}