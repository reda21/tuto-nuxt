import type { HTMLAttributes } from "vue";
import type { PrimitiveProps } from "radix-vue";
import { type VariantProps } from 'class-variance-authority'

import { buttonVariants } from "./options"

export type ButtonVariants = VariantProps<typeof buttonVariants>
export interface ButtonProps extends PrimitiveProps {
  class?: HTMLAttributes["class"];
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
}
