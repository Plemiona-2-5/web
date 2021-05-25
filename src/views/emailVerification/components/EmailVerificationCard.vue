<template>
  <el-form
    class="EmailVerificationForm"
    :model="model"
    :rules="rules"
  >
    <el-form-item label="Your registration was successfully completed!">
    </el-form-item>
    <el-form-item label="Now you can play the game!" ></el-form-item>
  </el-form>
</template>

<script>
import { code } from "./rules.js";

export default {
    name:"EmailVerification",
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
