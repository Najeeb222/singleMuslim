import { Account, Client, Databases } from "appwrite";
export const client = new Client()
client.setProject(import.meta.env.VITE_PROJECT_ID).setEndpoint(import.meta.env.VITE_END_POINT_ID)
export const account = new Account(client)
export const database = new Databases(client)