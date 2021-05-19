<template>
    <div>
        <el-row>
            <div id="map"></div>
        </el-row>
        <el-row :gutter="12" justify="end">
            <el-col :span="4">
                <el-input type="number" v-model="xMapViewCoord" :placeholder="xMapViewCoord"></el-input>
            </el-col>
            <el-col :span="4">
                <el-input type="number" v-model="yMapViewCoord" :placeholder="yMapViewCoord"></el-input>
            </el-col>
            <el-col :span="4">
                <el-button @click="center">Go to</el-button>
            </el-col>
            <el-col :span="4">
                <el-button @click="centerOnPlayer">Center on me</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import L from 'leaflet';
    import {mapGetters} from 'vuex';

    export default {
        name: "MapCard",
        data() {
            return {
                map: null,
                bounds: [[0, 0], [1000, 1000]],
                village: L.icon({
                    iconUrl: require('@/assets/image/map/village.png'),
                    iconSize: [40, 40]
                }),
                xMapViewCoord: null,
                yMapViewCoord: null
            }
        },
        mounted() {
            this.mapInit()
            this.drawVillages()
        },
        methods: {
            mapInit() {
                this.map = L.map('map', {
                    crs: L.CRS.Simple,
                    minZoom: -2,
                    maxZoom: 4,
                    contextmenu: true,
                    contextmenuWidth: 140
                });
                L.imageOverlay(require('@/assets/image/map/map.png'), this.bounds).addTo(this.map);
                this.map.fitBounds(this.bounds);
                this.map.setView(L.latLng(this.coords.x, this.coords.y))
            },
            drawVillages() {
                L.marker([this.coords.x, this.coords.y], {
                    icon: this.village,
                }).addTo(this.map);
            },
            center() {
                this.map.setView(L.latLng(this.xMapViewCoord, this.yMapViewCoord))
            },
            centerOnPlayer() {
                this.map.setView(L.latLng(this.coords.x, this.coords.y))
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