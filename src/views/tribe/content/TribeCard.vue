<template>
    <el-row :gutter="24" justify="center">
        <tribe-viewer></tribe-viewer>
    </el-row>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    import TribeViewer from "./TribeViewer";
    import axios from "axios";

    export default {
        name: "TribeCard",
        components: {TribeViewer},
        async created() {
            this.setTribeInfo()
            this.redirectIfTribeless()

        },
        methods: {
            async redirectIfTribeless() {
                if (this.playerTribe.name === "") {
                    await this.$router.push("/tribe-browser")
                }
            },
            async setTribeInfo() {
                await axios.get("tribe-details").then(
                    (response) => this.setTribeInfo(response.data.content)
                )
            },
            ...mapActions(["setTribeInfo"])
        },
        computed: {
            ...mapGetters([
                "playerTribe",
            ])
        }
    }
</script>