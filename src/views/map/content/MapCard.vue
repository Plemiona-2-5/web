<template>
    <div>
        <world-map></world-map>
        <draggable>
            <mini-map></mini-map>
        </draggable>
    </div>
</template>

<script>
    import WorldMap from "./WorldMap";
    import MiniMap from "./MiniMap";
    import Draggable from "../../../components/Draggable";

    export default {
        name: "MapCard",
        components: {Draggable, MiniMap, WorldMap}
    }
</script>

<style scoped>

</style>