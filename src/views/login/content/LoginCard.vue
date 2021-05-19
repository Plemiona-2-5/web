<template>
  <el-form
    :model="loginForm"
    :rules="rules"
    ref="LoginCard"
    label-width="120px"
  >
    <el-form-item label="Email" prop="email">
      <el-input v-model="loginForm.email"> </el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="loginForm.password"> </el-input>
    </el-form-item>
    <el-form-item>
      <el-button id="loginButton" type="primary" @click="Login">
        Login
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { email } from "./validationRules.js";
import { password } from "./validationRules.js";

export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      rules: {
        email,
        password,
      },
    };
  },
  methods: {
    Login() {
      console.log("login");
    },
  },
};
</script>

<style scoped></style>
