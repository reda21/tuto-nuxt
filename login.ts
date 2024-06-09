// api/auth/login.js
import { H3Event, H3Error } from "h3";
import jwt from "jsonwebtoken";
import validateMethod from "~/middleware/validate-method";
import { getUserByEmail, updateLastLogin } from "~~/prisma/repositories/users";
import {
  hashPassword,
  makeUuid,
  verifyPassword,
} from "~~/prisma/repositories/passwords";
import {
  deactivateRefreshTokens,
  storeRefreshToken,
} from "~/prisma/repositories/token";
import { createUserSession, deactivateUserSessions, getUserSession, endUserSession } from "~/prisma/repositories/sessions";

import type { TokensSession, Session } from "~~/types/auth";

const config = useRuntimeConfig();

export default defineEventHandler(async (event: H3Event) => {
  const tokens = {} as TokensSession;
  const body = await readBody(event);

  if (!body)
    return createError({
      statusCode: 401,
      statusMessage: "No email or password provided",
    });

  const user = await getUserByEmail(body.email);

  if (user === null) {
    return createError({ statusCode: 401, statusMessage: "Invalid login" });
  }

  let result = false;

  if (await verifyPassword(user.password, body.password)) {
    // Update last login time
    await updateLastLogin(user.email);

    const publicUser = {
      uuid: user.uuid,
      email: user.email,
    };

    // Create access token
    const accessToken = jwt.sign(publicUser, config.iamAccessTokenSecret, {
      expiresIn: "15m",
      issuer: "NuxtIam",
      jwtid: makeUuid(),
    });

    // Create refresh token
    const tokenId = makeUuid();
    const refreshToken = jwt.sign(publicUser, config.iamRefreshTokenSecret, {
      expiresIn: "14d",
      issuer: "NuxtIam",
      jwtid: tokenId,
    });

    // Deactivate any other tokens
    const deactivateTokenError = await deactivateRefreshTokens(user.id);
    if (deactivateTokenError) return deactivateTokenError;

    // Store tokens
    const storeTokenError = await storeRefreshToken(tokenId, user.id);
    if (storeTokenError) return storeTokenError;

    // Assign tokens
    tokens.accessToken = accessToken;
    tokens.refreshToken = refreshToken;

    // Create user session, if error, return error
    const sessionOrTokenError = await createUserSession(
      user.id,
      accessToken,
      event
    );

     // If session error, return error
     if (sessionOrTokenError instanceof H3Error) {
      console.log("Trouble creating session");
      return createError({ statusCode: 500, statusMessage: "Server error" });
    }

    // Get session and session id
    const session = sessionOrTokenError as Session;
    tokens.sid = session.sid;

    return tokens;
  }

  return createError({ statusCode: 401, statusMessage: "Invalid login" });
});

/*

      

    

    

    
   

    // Assign tokens
    tokens.accessToken = accessToken;
    tokens.refreshToken = refreshToken;

    // Create user session, if error, return error
    const sessionOrTokenError = await createUserSession(
      user.id,
      accessToken,
      event
    );

    // If session error, return error
    if (sessionOrTokenError instanceof H3Error) {
      console.log("Trouble creating session");
      return createError({ statusCode: 500, statusMessage: "Server error" });
    }

    // Get session and session id
    const session = sessionOrTokenError as Session;
    tokens.sid = session.sid;

    return tokens;
  }

  return createError({ statusCode: 401, statusMessage: "Invalid login" });
*/
