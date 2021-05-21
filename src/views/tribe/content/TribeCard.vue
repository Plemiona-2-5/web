<template>
    <el-row :gutter="18" justify="center">
        <el-col :span="18" :offset="3">
            <h1>{{tribeName}}</h1>
            <h3>{{tribeDesc}}</h3>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "TribeCard",
        data() {
            return {
                tribeName: "TribeNamePlaceholder",
                tribeDesc: "TribeDescriptionPlaceholder"
            }
        }
    }
</script>

<style scoped>

</style>