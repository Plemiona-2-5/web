<template>
    <el-row :gutter="24">
            <el-col :span="4">
                <el-image :src="require('@/assets/image/units/pic.png')"
                          :fit="'scale-down'"
                          alt="Wood"
                          class="army-image"
                ></el-image>
                {{infantry.pikes}}
            </el-col>

            <el-col :span="5">
                <el-image :src="require('@/assets/image/units/sword.png')"
                          :fit="'scale-down'"
                          alt="Wood"
                          class="army-image"
                ></el-image>
                {{infantry.swords}}
            </el-col>

            <el-col :span="5">
                <el-image :src="require('@/assets/image/units/axe.png')"
                          :fit="'scale-down'"
                          alt="Wood"
                          class="army-image"
                ></el-image>
                {{infantry.axes}}
            </el-col>

            <el-col :span="5">
                <el-image :src="require('@/assets/image/units/light.png')"
                          :fit="'scale-down'"
                          alt="Wood"
                          class="army-image"
                ></el-image>
                {{cavalry.light}}
            </el-col>

            <el-col :span="5">
                <el-image :src="require('@/assets/image/units/heavy.png')"
                          :fit="'scale-down'"
                          alt="Wood"
                          class="army-image"
                ></el-image>
                {{cavalry.heavy}}
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