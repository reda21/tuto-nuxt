import argon2 from "argon2";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { H3Error } from "h3";
import crypto from "crypto";
import passwordGenerator from "generate-password";

const prisma = new PrismaClient();

/**
 * @desc Returns a random string of 32 characters in hexadecimal
 * @info Can be used to create a secret
 */
export function makeRandomString32(): string {
    return crypto.randomBytes(32).toString("hex");
  }

/**
 * @desc Hashes a password or any string using Argon 2
 * @param password Unhashed password
 */
export async function hashPassword(
    password: string
  ): Promise<string | H3Error> {
    try {
      return await argon2.hash(password);
    } catch (err) {
      return createError({ statusCode: 500, statusMessage: "Password error" });
    }
  }

  /**
 * @desc Makes a uuid
 */
export function makeUuid(): string {
    return uuidv4();
  }
