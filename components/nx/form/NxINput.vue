<template>
  <div class="mb-3">
    <label :for="name" class="form-label">
      <strong>{{ name }}</strong>
    </label>
    <input  :type="name" @focus="handleFocus"  class="form-control" :id="name" v-model="model" />
    <div v-if="shouldDisplayError" class="text-danger">{{ errorMessage }}</div>
    
  </div>
</template>

<script setup lang="ts">
import type { InputType } from "../../../types/formTypes"

//@focus="() => emit('change', name)"

//get model
const model = defineModel()

//props
interface Props {
  name: string;
  type?: InputType;
  error?: string | string[] | null;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text"
});

//emit
const emit = defineEmits<{
  (e: 'change', name: string): void;
  (e: 'focus'): void;
}>();


//methods
// Handle focus event
const handleFocus = () => {
  emit('change', props.name);
};

const shouldDisplayError = computed(() => {
  console.info("shouldDisplayError", props.error, typeof props.error)
  return Boolean(props.error && (typeof props.error === "string" || (Array.isArray(props.error) && props.error.length > 0)))
});

const errorMessage = computed(() => (props && props.error) ? (Array.isArray(props.error) ? props.error[0] : props.error) : null);
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

.text-danger {
  color: #dc3545;
}
</style>
