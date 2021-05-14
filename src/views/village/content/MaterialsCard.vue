<template>
    <el-container>
        <el-row>

            <el-col :span="6" v-for="(amount, material, index) in materials" :key="material">
                <el-image :src="materialTypes[index].imageSrc"
                          :fit="'scale-down'"
                          :alt="material"
                          class="material-image"
                ></el-image>
                {{amount}}
            </el-col>

        </el-row>
    </el-container>
</template>

<script>
    import {mapGetters} from 'vuex';
    import materialTypes from "./materials";

    export default {
        name: "MaterialsCard",
        data: function () {
            return {
                materialTypes: materialTypes
            }
        },
        computed: {
            ...mapGetters([
                "materials"
            ])
        }
    }
</script>