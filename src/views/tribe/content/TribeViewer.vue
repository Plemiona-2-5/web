<template>
    <div>
        <el-col :span="18" :offset="3">
            <el-row :gutter="24">
                <el-col :span="14">
                    <h1>{{tribe.name}}</h1>
                    <h4 v-for="member in members" :key="member.nickname">
                        {{member.nickname}} {{member.tribeRole}}
                        <el-button type="danger" v-if="member.tribeRole !== 'Owner'">X</el-button>
                    </h4>
                </el-col>
                <el-col :span="10" id="desc">
                    <h3>{{tribe.description}}</h3>
                </el-col>
            </el-row>
        </el-col>
        <el-col>
            <el-button type="danger">Leave Tribe</el-button>
        </el-col>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import axios from "axios";

    export default {
        name: "TribeViewer",
        data() {
            return {
                members: null
            }
        },
        async created() {
            await axios.get("tribe-members", {
                headers: {
                    tribeId: 1
                }
            }).then(
                (response) => this.members = response.data.content
            )
        },
        computed: {
            ...mapGetters(["tribe"])
        }
    }
</script>

<style scoped>

</style>