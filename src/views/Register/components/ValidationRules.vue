<template>
    <el-card>
        <h2>Register</h2>
        <el-form
                class="register-form"
                :model="model"
                :rules="rules"
                ref="form"
                @submit.native.prevent="register"
        >
            <el-form-item prop="nickname">
                <el-input v-model="model.nickname" placeholder="Username"></el-input>
            </el-form-item>

            <el-form-item prop="email">
                <el-input v-model="model.email" placeholder="Email" type="email">
                </el-input>
            </el-form-item>

            <el-form-item prop="password">
                <el-input
                        v-model="model.password"
                        placeholder="Password"
                        type="password"
                ></el-input>
            </el-form-item>

            <el-form-item prop="confirmPassword">
                <el-input
                        v-model="model.confirmedPassword"
                        placeholder="Confirm Password"
                        type="password"
                ></el-input>
            </el-form-item>

            <el-alert type="error" v-model="errors" v-for="errorType in errors" :key="errorType[0]">
                <li v-for="error in errorType" :key="error">{{error}}</li>
            </el-alert>

            <el-form-item>
                <el-button
                        class="register-button"
                        type="primary"
                        native-type="submit"
                        block
                >Register now
                </el-button
                >
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    import {email, nickname, password, confirmPassword} from './Rules.js';
    import axios from "axios";

    export default {
        name: "Register",
        data() {
            return {
                model: {
                    nickname: "",
                    email: "",
                    password: "",
                    confirmedPassword: "",
                },
                rules: {
                    nickname,
                    email,
                    password,
                    confirmPassword
                },
                errors: []
            }
        },
        methods: {
            async register() {
                try {
                    const response = await axios.post("api/auth/register", {...this.model})
                    await this.$router.push({
                        name: "EmailVerificationPage",
                        params: {
                            code: response.data.emailConfirmationToken,
                            email: this.model.email
                        }
                    })
                } catch (error) {
                    this.errors = error.response.data.errors
                }
            },
        }
    };
</script>
