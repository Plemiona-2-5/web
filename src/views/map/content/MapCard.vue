<template>
    <div>
        <el-row>
            <div id="map"></div>
        </el-row>

        <el-row :gutter="12" justify="end">

            <el-col :span="4">
                <el-input type="number" v-model="xMapViewCord" :placeholder="xMapViewCord"></el-input>
            </el-col>

            <el-col :span="4">
                <el-input type="number" v-model="yMapViewCord" :placeholder="yMapViewCord"></el-input>
            </el-col>

            <el-col :span="4">
                <el-button @click="center">Go to</el-button>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    import L from 'leaflet';
    import {mapGetters} from 'vuex';

    export default {
        name: "MapCard",
        data: function () {
            return {
                map: null,
                village: L.icon({
                    iconUrl: require('@/assets/image/map/village.png'),
                    iconSize: [40, 40]
                }),
                xMapViewCord: null,
                yMapViewCord: null
            }
        },
        mounted() {
            this.mapInit()
            this.drawVillages()
        },
        methods: {
            mapInit: function () {
                this.map = L.map('map', {
                    crs: L.CRS.Simple,
                    minZoom: -3
                });
                var bounds = [[0, 0], [1000, 1000]];
                var ScaleOps = {
                    maxWidth: 200,
                    metric: false,
                    imperial: false
                }
                L.control.scale(ScaleOps).addTo(this.map);
                L.imageOverlay(require('@/assets/image/map/map.png'), bounds).addTo(this.map);
                this.map.fitBounds(bounds);
                this.map.setView(L.latLng(this.coords.x + 100, this.coords.y + 100))
            },
            drawVillages: function () {
                L.marker([this.coords.x + 100, this.coords.y + 100], {icon: this.village}).addTo(this.map);
            },
            center: function () {
                this.map.setView(L.latLng(this.xMapViewCord, this.yMapViewCord))
            }
        },
        computed: {
            ...mapGetters([
                "coords"
            ])
        }
    }
</script>

<style scoped>
    #map {
        height: 600px;
    }
</style>