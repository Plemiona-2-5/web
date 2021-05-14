<template>
    <el-row :gutter="24">
        <el-col :span="infantryTypes[index].span" v-for="(amount, unitName, index) in infantry" :key="unitName">
            <el-image :src="infantryTypes[index].imageSrc"
                      :fit="'scale-down'"
                      :alt="unitName"
                      class="army-image"
            ></el-image>
            {{amount}}
        </el-col>

        <el-col :span="cavalryTypes[index].span" v-for="(amount, unitName, index) in cavalry" :key="unitName">
            <el-image :src="cavalryTypes[index].imageSrc"
                      :fit="'scale-down'"
                      :alt="unitName"
                      class="army-image"
            ></el-image>
            {{amount}}
        </el-col>
    </el-row>
</template>

<script>
    import {mapGetters} from 'vuex';
    import unitTypes from "./units";

    export default {
        name: "ArmyCard",
        data: function () {
            return {
                infantryTypes: unitTypes.infantry,
                cavalryTypes: unitTypes.cavalry
            }
        },
        computed: {
            ...mapGetters([
                "infantry",
                "cavalry"
            ])
        }
    }
</script>