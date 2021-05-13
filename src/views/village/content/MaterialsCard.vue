<template>
    <el-container>
        <el-row>

            <el-col :span="6">
                <el-image :src="require('@/assets/image/materials/wood.png')"
                          :fit="'scale-down'"
                          alt="Wood"
                          class="material"
                ></el-image>
                {{materials.wood}}
            </el-col>

            <el-col :span="6">
                <el-image :src="require('@/assets/image/materials/clay.png')"
                          :fit="'scale-down'"
                          alt="Clay"
                          class="material"
                ></el-image>
                {{materials.clay}}
            </el-col>

            <el-col :span="6">
                <el-image :src="require('@/assets/image/materials/iron.png')"
                          :fit="'scale-down'"
                          alt="Iron"
                          class="material"
                ></el-image>
                {{materials.iron}}
            </el-col>

            <el-col :span="6">
                <el-image :src="require('@/assets/image/materials/villagers.jpg')"
                          :fit="'scale-down'"
                          alt="Iron"
                          class="material"
                ></el-image>
                {{materials.villagers}}
            </el-col>

        </el-row>
    </el-container>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "MaterialsCard",
        computed: {
            ...mapGetters([
                "materials"
            ])
        }
    }
</script>