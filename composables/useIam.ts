export type {LoginUser, JSONResponse} from "~~/types/auth"

export default function useIam(){
    return {
        login
    }
}

/**
 * @desc Register new user
 * @param user User to log in
 * @returns {Promise<JSONResponse>}
 */
async function login(user: LoginUser): Promise<JSONResponse> {
    const response = await $fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "client-platform": "browser",
      },
      body: user,
    });
  
    return response as JSONResponse;
  }