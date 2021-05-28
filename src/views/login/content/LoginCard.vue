<template>
    <el-form
            :model="loginForm"
            :rules="rules"
            ref="LoginForm"
            label-width="120px"
    >
        <el-form-item label="Email" prop="email">
            <el-input v-model="loginForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
            <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-alert type="error" v-model="errors" v-for="errorType in errors" :key="errorType">
                <li v-for="error in errorType" :key="error">{{error}}</li>
            </el-alert>
            <el-button id="loginButton" type="primary" @click="login()">
                Login
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import {email, password} from "./validationRules.js";
    import axios from "axios";
    import {mapActions} from "vuex"

    export default {
        data() {
            return {
                loginForm: {
                    email: "abc@example.com",
                    password: "Passw0rd!",
                },
                rules: {
                    email,
                    password,
                },
                errors: []
            };
        },
        methods: {
            login() {
                this.$refs.LoginForm.validate((valid) => {
                    if (valid) {
                        axios.post("api/auth/login", {...this.loginForm}).then(
                            (response) => {
                                console.log(response.data)
                                this.setUserInfo(response.data)
                                this.setIsUserPlaying(true)
                                this.$router.push('overview')
                            },
                            (error) => this.errors = error.response.data.errors
                        )
                    }
                });
            },
            ...mapActions(["setUserInfo", "setIsUserPlaying"])
        },
    };
</script>

<style scoped></style>
