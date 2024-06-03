// api/auth/login.js
import { H3Event, H3Error } from "h3";

import validateMethod from "~/middleware/validate-method";
import { getUserByEmail, getUserslist } from "~~/prisma/repositories/users";
import { hashPassword, makeUuid } from "~~/prisma/repositories/passwords";

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event);

  if (!body)
    return createError({
      statusCode: 401,
      statusMessage: "No email or password provided",
    });

  const user = await getUserslist();
  //const user = await getUserByEmail(body.email);
  const password = await hashPassword(body.password);

  console.info("login", event.method, body);
  return {
    request: body,
    user,
    // uuid: makeUuid(),
    password,
  };
});
