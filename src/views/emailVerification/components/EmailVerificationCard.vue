<template>
    <el-form
            class="EmailVerificationForm"
            :model="model"
            :rules="rules"
    >
        <el-form-item label="Your registration was successfully completed!">
        </el-form-item>
        <el-form-item label="Now you can play the game!"></el-form-item>
        <el-button @click="$router.push('login')">Login</el-button>
    </el-form>
</template>

<script>
    import {code} from "./rules.js";
    import axios from "axios";

    export default {
        name: "EmailVerification",
        async created() {
            let form = {
                email: this.$route.params.email,
                emailConfirmationToken: this.$route.params.code
            }
            await axios.post("api/auth/confirm-email", form).then((r)=>console.log("gut", r)).catch((e)=>console.log(e))
        },
        data() {
            return {
                model: {
                    code: "",
                },
                rules: {
                    code,
                },
            };
        },
    };
</script>

<style scoped></style>
