<template>
  <div class="register">
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
          <el-input v-model="model.username" 
          placeholder="Username"></el-input>
        </el-form-item>

        <el-form-item prop="email">
          <el-input v-model="model.email" 
          placeholder="Email"
          type="email">
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
  </div>
</template>

<script>
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
        username: [
          {
            required: true,
            message: "Username is required",
            trigger: "blur",
          },
          {
            min: 4,
            message: "Username length should be at least 5 characters",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Email is required",
            trigger: "blur",
          },
          {
            min: 2,
            message: "Email length should be at least 3 characters",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" },
          {
            min: 5,
            message: "Password length should be at least 5 characters",
            trigger: "blur",
          },
        ],
        confirm_password: [
          { required: true, message: "Password is required", trigger: "blur" },
          {
            min: 5,
            message: "Password length should be at least 5 characters",
            trigger: "blur",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.register {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-button {
  width: 100%;
  margin-top: 40px;
}
.register-form {
  width: 290px;
}
</style>

<style lang="scss">
$darkorange: rgb(197, 105, 0);

.el-button--primary {
  background: $darkorange;
  border-color: $darkorange;

  &:hover,
  &.active,
  &:focus {
    background: lighten($darkorange, 7);
    border-color: lighten($darkorange, 7);
  }
}
.register .el-input__inner:hover {
  border-color: $darkorange;
}

.register .el-card {
  padding-top: 0;
  padding-bottom: 20px;
}

a {
  color: $darkorange;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    color: lighten($darkorange, 7);
  }
}
.register .el-card {
  background-color: wheat;
  width: 340px;
  display: flex;
  justify-content: center;
}
</style>