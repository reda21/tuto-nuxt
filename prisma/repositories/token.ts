import { PrismaClient } from "@prisma/client";

import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import { H3Event, H3Error } from "h3";

import { getClientPlatform } from "~~/middleware/getClientPlatform";
import type { User, TokensSession, Session } from "~~/types/auth";
import { makeUuid } from "./passwords";
import { getUserByEmail } from "./users";

const config = useRuntimeConfig();
const prisma = new PrismaClient();

/**
 * @desc Deactivates a user's refresh tokens in database
 * @param userId User's id
 */
export async function deactivateRefreshTokens(
  userId: number
): Promise<H3Error | void> {
  let error = null;
  await prisma.refresh_tokens
    .updateMany({
      where: {
        user_id: userId,
      },
      data: {
        is_active: false,
      },
    })
    .then(async () => {})
    .catch(async (e) => {
      console.error(e);
      error = e;
    });

  if (error)
    return createError({ statusCode: 500, statusMessage: "Server error" });
}

/**
 * @desc Stores refresh token in database
 * @param tokenId Token's id
 * @param userId User's id
 */
export async function storeRefreshToken(
    tokenId: string,
    userId: number
  ): Promise<H3Error | void> {
    let error = null;
    await prisma.refresh_tokens
      .create({
        data: {
          token_id: tokenId,
          user_id: userId,
          is_active: true,
        },
      })
      .then(async () => {})
      .catch(async (e) => {
        console.error(e);
        error = e;
      });
  
    if (error)
      return createError({ statusCode: 500, statusMessage: "Server error" });
  }