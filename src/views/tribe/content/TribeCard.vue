<template>
    <el-row :gutter="24" justify="center">
        <el-col :span="18" :offset="3">
            <el-row :gutter="24">
                <el-col :span="14">
                    <h1>{{playerTribe.name}}</h1>
                    <h4>{{playerTribe.points}} points</h4>
                </el-col>
                <el-col :span="10" id="desc">
                    <h3>{{playerTribe.description}}</h3>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    import {mapGetters} from "vuex"

    export default {
        name: "TribeCard",
        computed: {
            ...mapGetters([
                "playerTribe"
            ])
        }
    }
</script>