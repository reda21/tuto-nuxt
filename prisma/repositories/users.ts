import jwt from "jsonwebtoken";

import { Prisma, PrismaClient } from "@prisma/client";
import type {User, ProviderUser} from "~~/types/auth"
import { hashPassword, makeUuid } from "~~/prisma/repositories/passwords";


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
export async function createUser(user: Partial<User>): Promise<User> {
  const password = await hashPassword(user.password || "") as string;

  const newUser = await prisma.users.create({
    data: {
      email: user.email || "",
      first_name: 'jhon',
      last_name: 'doe',
      uuid: makeUuid(),
      password ,
      role : "GENERAL",
      email_verified: true,
      is_active: true // In a real application, ensure the password is hashed before saving
      // Add other fields here if needed
    },
  });
  return newUser;
}

/**
 * @desc Updates user's last login value
 * @param email User's email
 */
export async function updateLastLogin(email: string): Promise<null | User> {
  let result = null;
  await prisma.users
    .update({
      where: {
        email: email,
      },
      data: {
        last_login: new Date(),
      },
    })
    .then(async (response) => {
      result = response;
    })
    .catch(async (e) => {
      console.error(e);
    });

  return result;
}
