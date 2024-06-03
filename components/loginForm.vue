<template>
    <div>
        <!--if successful -->
        <NxAlert v-if="loginSuccess" theme="success" :show-close="false">
            <strong>Login successful</strong>
        </NxAlert>
        <!-- end if successful-->

        <!-- Error message -->
        <NxAlert v-if="loginError" theme="danger" @click="loginError = null">
            <strong>{{ loginError.message }}</strong>
        </NxAlert>
        <!-- end if message-->
        <NxCard :maxWidth="50" header="Login" text="Login using Google or your email address and password"
            class="login-card">
            <NxForm @submit="loginUser">
                <NxINput @change="clearError" label="Email" type="email" :error="errors.get('email')" name="email"
                    v-model="inputs.email" />
                <NxINput @change="clearError" label="mot de passe" type="password" :error="errors.get('password')"
                    name="password" v-model="inputs.password" />
                <NxButton theme="success">Login</NxButton>
                <p>{{ inputs }}</p>
            </NxForm>
        </NxCard>
    </div>
</template>

<script setup lang="ts">
import NxAlert from './nx/NxAlert.vue';
import NxCard from "./nx/NxCard.vue"
import NxForm from './nx/form/NxForm.vue';
import NxINput from "./nx/form/NxINput.vue"
import NxButton from './nx/NxButton.vue';

import { customError } from "../libs/customError"
import { errorRequestResponse } from "../libs/errorRequestResponse"
import { LoginSchema } from "../schema/login"

//composables
const { login } = useIam();

// Error variable
const loginError = ref(<Error | null>null);
const loginSuccess = ref(false);

const errors = new customError();

//data
const inputs = reactive({
    email: "reg6K@example.com",
    password: "password"
})

// Login function
const loginUser = async () => {
    errors.clearAll();

    loginSuccess.value = false
    console.info('submited');
    const validation = LoginSchema.safeParse(inputs);

    if (!validation.success) {
        errors.setAll(errorRequestResponse(validation.error).errors);
    } else {
        loginSuccess.value = true
        const response = await login(inputs);
        console.info("response", response);
    }
}

const clearError = (name: string) => {
    errors.clear(name)
}
</script>