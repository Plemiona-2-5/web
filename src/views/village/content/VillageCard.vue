<template>
    <div id="village-background">
        <el-row v-for="(row, rowName) in buildingsRows" :key="rowName">
            <el-col v-for="building in row" :key="building.name" :span="building.span" :offset="building.offset">
                <el-row>
                    <el-col>
                        <span id="building-label">{{building.name}}</span>
                    </el-col>
                    <el-col>
                        <el-image :src="building.imageSrc" :alt="building.name"></el-image>
                    </el-col>
                </el-row>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    import buildingsRows from "./buildings";

    export default {
        name: "VillageCard",
        data() {
            return {
                buildingsRows: buildingsRows
            }
        }
    }
</script>