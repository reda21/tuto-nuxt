import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

import type {User, ProviderUser} from "~~/types/auth"

const prisma = new PrismaClient();

/**
 * @desc Returns user by email
 * @param email User's email
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  let user = null;
  await prisma.users
    .findFirst({
      where: {
        email: email,
      },
    })
    .then(async (response) => {
      user = response;
    })
    .catch(async (e) => {
      console.error(e);
    });

  return user;
}


export async function getUserslist(): Promise<User[]> {
  const users = await prisma.users.findMany();
  return users;
}
