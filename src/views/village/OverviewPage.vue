<template>
    <el-container direction="vertical">
        <el-row :gutter="24">
            <el-col class="infoCard" :span="6">
                <materials-card></materials-card>
            </el-col>
            <el-col class="infoCard" :span="18">
                <army-card></army-card>
            </el-col>
        </el-row>

        <el-row :gutter="24">
            <el-col class="infoCard" :span="24">
                <village-card></village-card>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
    import MaterialsCard from "./content/MaterialsCard";
    import ArmyCard from "./content/ArmyCard";
    import VillageCard from "./content/VillageCard";

    export default {
        name: "OverviewPage",
        components: {MaterialsCard, ArmyCard, VillageCard}
    }
</script>

<style scoped>

</style>