<template>
    <el-row :gutter="24" justify="center">
        <tribe-viewer></tribe-viewer>
    </el-row>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    import axios from "axios";
    import TribeViewer from "./TribeViewer";

    export default {
        name: "TribeCard",
        components: {TribeViewer},
        async created() {
            this.setInfo()
            this.redirectIfTribeless()
        },
        methods: {
            async redirectIfTribeless() {
                if (!this.tribe.id) {
                    await this.$router.push("/tribe-browser")
                }
            },
            async setInfo() {
                await axios.get("tribe-details").then(
                    (response) => this.setTribeInfo(response.data.content)
                )
            },
            ...mapActions(["setTribeInfo"])
        },
        computed: {
            ...mapGetters([
                "tribe",
            ])
        }
    }
</script>