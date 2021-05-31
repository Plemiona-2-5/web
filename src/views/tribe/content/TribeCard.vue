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
        data() {
            return {
                responseData: null,
                responseStatus: null
            }
        },
        async created() {
            if (await this.isInTribe()) {
                await this.setTribeInfo(this.responseData)
            } else {
                await this.$router.push("/tribe-browser")
            }
        },
        methods: {
            async isInTribe() {
                await this.getTribeInfo()
                return this.responseStatus === 200
            },
            async getTribeInfo() {
                await axios.get("tribe-details")
                    .then((response) => {
                        this.responseData = response.data.content
                        this.responseStatus = response.status
                    })
                    .catch((error) => this.responseStatus = error.response.status)
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