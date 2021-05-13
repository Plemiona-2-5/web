<template>
    <el-row>
        <el-col>
            <materials-card></materials-card>
        </el-col>
    </el-row>
</template>

<script>
    import MaterialsCard from "./content/MaterialsCard";
    export default {
        name: "OverviewPage",
        components: {MaterialsCard}
    }
</script>

<style scoped>

</style>