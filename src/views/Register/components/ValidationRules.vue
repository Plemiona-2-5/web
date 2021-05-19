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
      <el-form-item prop="username">
        <el-input v-model="model.username" placeholder="Username"></el-input>
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

      <el-form-item prop="confirm_password">
        <el-input
          v-model="model.confirm_password"
          placeholder="Confirm Password"
          type="password"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          class="register-button"
          type="primary"
          native-type="submit"
          block
          >Register now</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { email} from './Rules.js'
import {username} from './Rules.js'
import {password} from './Rules.js'
import {confirm_password} from './Rules.js'
export default {
  name: "register",
  data() {
    return {
      model: {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      },
      rules: {
        username,
        email,
        password,
        confirm_password
      },
    };
  },
};
</script>