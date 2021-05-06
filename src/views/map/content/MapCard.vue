<template>
    <div>
        <world-map></world-map>
        <mini-map></mini-map>
    </div>
</template>

<script>
    import WorldMap from "./WorldMap";
    import MiniMap from "./MiniMap";

    export default {
        name: "MapCard",
        components: {MiniMap, WorldMap}
    }
</script>

<style scoped>

</style>