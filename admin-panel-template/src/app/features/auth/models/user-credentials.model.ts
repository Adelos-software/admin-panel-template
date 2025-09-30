export interface UserCredentials {
  username: string;
  password: string;
  userId?: number; // Temporary userId field for linking credentials to users
}