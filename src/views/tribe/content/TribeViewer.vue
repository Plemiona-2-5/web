<template>
    <div>
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
        <el-col>
            <el-button type="danger">Leave Tribe</el-button>
        </el-col>
    </div>
</template>

<script>
    export default {
        name: "TribeViewer"
    }
</script>

<style scoped>

</style>