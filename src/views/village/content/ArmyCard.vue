<template>
    <el-row :gutter="24">
        <el-col :span="24">
            Unit: {{infantry.pikes}}
            Unit: {{infantry.swords}}
            Unit: {{infantry.axes}}

            Unit: {{cavalry.light}}
            Unit: {{cavalry.heavy}}
        </el-col>
    </el-row>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "ArmyCard",
        computed: {
            ...mapGetters([
                "infantry",
                "cavalry"
            ])
        }
    }
</script>