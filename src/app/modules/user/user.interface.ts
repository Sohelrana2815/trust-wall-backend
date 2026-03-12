export interface IUser {
  id: string;
  name: string;
  email: string;
  image?: string;
  password?: string;
  role: "ADMIN" | "CREATOR" | "REVIEWER";
}
