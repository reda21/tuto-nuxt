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
                <NxINput name="name" v-model="inputs.name" />
                <NxINput type="email" name="email" v-model="inputs.email" />
                <NxINput type="password" error="mode de passe error" name="password" v-model="inputs.password" />
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

// Error variable
const loginError = ref(<Error | null>null);
const loginSuccess = ref(false);

//data
const inputs = reactive({
    name: "hello reda",
    email: "",
    password: ""
})

// Login function
const loginUser = async () => {
    console.info('submited')
}
</script>