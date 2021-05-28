<template>
    <el-form :model="tribe"
             :rules="rules"
             ref="tribeForm">
        <el-form-item label="name" prop="name">
            <el-input v-model="tribe.name"></el-input>
        </el-form-item>
        <el-form-item label="description" prop="description">
            <el-input v-model="tribe.description"></el-input>
        </el-form-item>
        <el-button @click="createTribe" type="danger">Create</el-button>
    </el-form>
</template>

<script>
    import axios from "axios";
    import {nickname} from '../../Register/components/Rules.js';

    export default {
        name: "TribeCreate",
        data() {
            return {
                tribe: {
                    name: "",
                    description: ""
                },
                rules: {
                    name: nickname,
                    description: nickname
                }
            }
        },
        methods: {
            async createTribe() {
                await axios.post("create-tribe", {...this.tribe}).then(
                    () => this.$router.push("tribe")
                )
            }
        }
    }
</script>

<style scoped>

</style>