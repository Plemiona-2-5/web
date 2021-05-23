<template>
  <el-form
    class="EmailVerificationForm"
    :model="model"
    :rules="rules"
    ref="form"
    @submit.native.prevent="EmailVerificationForm"
  >
    <el-form-item label="Please enter the verification code sent to your email" prop="code">
      <el-input v-model="model.code" placeholder="Verification Code"> </el-input>
    </el-form-item>

    <el-form-item>
      <el-button class="verifyButton" 
      type="primary" 
      native-type="submit"
      block
      >Verify</el-button>

      <el-button class="verifyButton" 
      type="primary" 
      native-type="submit"
      block
      >Send verification code again</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { code } from "./rules.js";

export default {
    name:"EmailVerificationForm",
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
