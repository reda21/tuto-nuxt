<template>
  <div>
      <label for="email" class="form-label">
          <strong>Email</strong>
      </label>
      <input :type="props.name" class="form-control mb-3" :id="name" v-model="model" />
      <div v-if="shouldDisplayError" class="text-danger">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
const model = defineModel()

interface Props {
  name: string;
  type?: 'text' | 'email' | 'number' | 'password';
  error?: string | string[] | null;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text"
});

const shouldDisplayError = computed(() => Boolean(props.error && (typeof props.error === "string" || (Array.isArray(props.error) && props.error.length > 0))));

const errorMessage = computed(() => props.error?.[0] ?? props.error as string);
</script>

<style scoped>
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

select {
  text-transform: none;
}

input:disabled,
select:disabled {
  background-color: #eee;
}
</style>
