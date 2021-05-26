<template>
    <div>
        <el-container class="main">
            <el-header>
                <div class="header">
                    <div>
                        <h1>Tribal Wars</h1>
                    </div>
                </div>
            </el-header>
            <el-main>
                <div class="logo" @click="loginUser">
                    <el-image id="logo" :src="image"></el-image>
                </div>
                <div class="content">
                    <div class="left-content">
                        <h3>About Tribal Wars</h3>
                        <p>
                            Tribal Wars is a browser-based online game in which player manages his village and competes
                            against other villages
                        </p>
                        <el-button class="register" @click="$router.push('register')">
                            Register now
                        </el-button>
                    </div>
                    <div class="right-content">
                        <h3>Already have an account?</h3>
                        <el-button class="login" @click="$router.push('login')" type="primary">
                            Click here to login
                        </el-button>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";

    const image = require("@/assets/image/home/logo.png");
    export default {
        data() {
            return {
                image
            }
        },
        created() {
            this.logoutUser()
        },
        methods: {
            ...mapMutations(["loginUser", "logoutUser"]),
        },
    };
</script>

<style scoped></style>
