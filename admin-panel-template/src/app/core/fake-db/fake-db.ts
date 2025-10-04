import { UserCredentials } from "../../features/auth/models/user-credentials.model";
import { Customer } from "../../features/dashboard/models/customer.model";
import { TeamMember } from "../../features/dashboard/models/team-meber.model";
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

/**
 * Array of customers for demo purposes.
 */
export const CUSTOMERS: Customer[] = [
  { id: 1, name: 'John Smith',   email: 'john.smith@example.com',   phone: '+1-555-1010', company: 'Acme Corp' },
  { id: 2, name: 'Jane Doe',     email: 'jane.doe@example.com',     phone: '+1-555-2020', company: 'Globex Inc.' },
  { id: 3, name: 'Michael Brown',email: 'michael.brown@example.com',phone: '+1-555-3030', company: 'Initech' },
  { id: 4, name: 'Emily Johnson',email: 'emily.johnson@example.com',phone: '+1-555-4040', company: 'Umbrella Corp' },
  { id: 5, name: 'Robert Wilson',email: 'robert.wilson@example.com',phone: '+1-555-5050', company: 'Wayne Enterprises' },
  { id: 6, name: 'Olivia Davis',email: 'olivia.davis@example.com', phone: '+1-555-6060', company: 'Stark Industries' },
  { id: 7, name: 'David Martinez',email: 'david.martinez@example.com', phone: '+1-555-7070', company: 'Cyberdyne Systems' },
  { id: 8, name: 'Sophia Garcia', email: 'sophia.garcia@example.com',  phone: '+1-555-8080', company: 'Wonka Industries' },
  { id: 9, name: 'James Anderson',email: 'james.anderson@example.com', phone: '+1-555-9090', company: 'Oscorp' },
  { id: 10, name: 'Isabella Martinez',email: 'isabella.martinez@example.com', phone: '+1-555-1111', company: 'Tyrell Corporation' }
];

/**
 * Array of team members for demo purposes.
 */

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: 'Alice Johnson', profession: 'Frontend Developer', hoursWorked: 120 },
  { id: 2, name: 'Bob Smith', profession: 'Backend Developer', hoursWorked: 135 },
  { id: 3, name: 'Charlie Brown', profession: 'UI/UX Designer', hoursWorked: 98 },
  { id: 4, name: 'Diana Prince', profession: 'Project Manager', hoursWorked: 145 },
  { id: 5, name: 'Ethan Clark', profession: 'QA Engineer', hoursWorked: 110 },
  { id: 6, name: 'Fiona Davis', profession: 'DevOps Engineer', hoursWorked: 125 }
];