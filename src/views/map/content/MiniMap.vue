<template>
    <div id="grass" ref="grass">

    </div>
</template>

<script>
export default {
    name: "MiniMap",
    data: function () {
        return {
            villageSize: 8,
            worldSize: {
                x: 100,
                y: 100
            },
        }
    },
    mounted() {
        this.drawVillages()
    },
    methods: {
        drawVillages: function () {

        },
    }
}
</script>

<style scoped>
#grass {
    width: 800px;
    height: 800px;
    background-color: #67C23A;
}
</style>