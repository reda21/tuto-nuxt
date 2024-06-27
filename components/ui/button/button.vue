<script setup lang="ts">
import { Primitive } from "radix-vue";
import { cn } from "~/lib/utils";
import  {type ButtonProps } from "./type";
import { buttonVariants } from "./options";

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
