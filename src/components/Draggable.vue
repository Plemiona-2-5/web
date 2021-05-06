<template>
    <div id="body" ref="body">
        <div @mousedown="dragMouseDown">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Draggable",
        props: {
            label: String,
        },
        data: function () {
            return {
                positions: {
                    clientX: undefined,
                    clientY: undefined,
                    movementX: 0,
                    movementY: 0
                },
            }
        },
        methods: {
            dragMouseDown: function (event) {
                event.preventDefault()
                this.positions.clientX = event.clientX
                this.positions.clientY = event.clientY
                document.onmousemove = this.elementDrag
                document.onmouseup = this.closeDragElement
            },
            elementDrag: function (event) {
                event.preventDefault()
                this.positions.movementX = this.positions.clientX - event.clientX
                this.positions.movementY = this.positions.clientY - event.clientY
                this.positions.clientX = event.clientX
                this.positions.clientY = event.clientY
                this.$refs.body.style.top = Math.abs(this.$refs.body.offsetTop - this.positions.movementY) + 'px'
                this.$refs.body.style.left = Math.abs(this.$refs.body.offsetLeft - this.positions.movementX) + 'px'
            },
            closeDragElement() {
                document.onmouseup = null
                document.onmousemove = null
            },
        }
    }
</script>

<style scoped>
    #body {
        position: absolute;
        width: auto;
        height: auto;
        z-index: -1;
        padding-bottom: 20px;
        cursor: move;
    }
</style>