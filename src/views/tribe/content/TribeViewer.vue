<template>
    <div>
        <el-col :span="18" :offset="3">
            <el-row :gutter="24">
                <el-col :span="14">
                    <h1>{{tribe.name}}</h1>
                    <h4 v-for="member in members" :key="member.nickname">
                        {{member.nickname}} {{member.tribeRole}}
                        <el-button type="danger">Kick</el-button>
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
            if(this.tribe.id) {
                await axios.get("tribe-members", {
                    headers: {
                        tribeId: this.tribe.id
                    }
                }).then(
                    (response) => this.members = response.data.content
                )
            } else {console.log("dis shouldnt be logged")}
        },
        computed: {
            ...mapGetters(["tribe", "username"])
        }
    }
</script>

<style scoped>

</style>