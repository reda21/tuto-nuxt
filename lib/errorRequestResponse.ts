import { z } from "zod";

export const errorRequestResponse = (error: z.ZodError) => {
    return {
      errors: error.errors.reduce((acc: Record<string, string[]>, e) => {
        const key = e.path[0] as string;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(e.message);
        return acc;
      }, {}),
    };
  };