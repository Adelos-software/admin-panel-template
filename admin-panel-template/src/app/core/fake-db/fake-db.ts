import { UserCredentials } from "../../features/auth/models/user-credentials.model";
import { User } from "../../shared/models/user.model";

/**
 * Array of user credentials for authentication.
 * Each object contains a username, password, and userId for linking to a user profile.
 */
export const USER_CREDENTIALS: UserCredentials[] = [
  { username: 'admin', password: 'admin123', userId: 1 },
  { username: 'johndoe', password: 'password1', userId: 2 },
  { username: 'janedoe', password: 'password2', userId: 3 },
  { username: 'alice', password: 'alicepass', userId: 4 },
  { username: 'bob', password: 'bobpass', userId: 5 }
];

/**
 * Array of user profiles.
 * Each object represents a user with id, name, email, and role.
 */
export const USERS: User[] = [
  {
    id: 1,
    name: 'System Administrator',
    email: 'admin@example.com',
    role: 'admin'
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'user'
  },
  {
    id: 3,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'user'
  },
  {
    id: 4,
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    role: 'manager'
  },
  {
    id: 5,
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'user'
  }
];