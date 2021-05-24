<template>
    <el-row justify="center">
        <el-col v-for="i in 10" :key="i">
            <strong>{{tribe.name}}</strong>
            {{tribe.membersCount}} members
            {{tribe.points}} Points
            <el-button type="success">Join</el-button>
            <hr>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "TribeBrowser",
        data() {
            return {
                tribe: {
                    id: 1,
                    name: "TribeName",
                    membersCount: 100,
                    points: 12345
                }
            }
        }
    }
</script>

<style scoped>

</style>