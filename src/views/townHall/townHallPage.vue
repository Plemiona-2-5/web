<template>
  <div class="TownHallPage">
    <town-hall-card></town-hall-card>
  </div>
</template>

<script>
import TownHallCard from './components/TownHallCard.vue'

export default {
    components:{TownHallCard}
}
</script>



<style>
@import '../../components/styles/TownHallStyles.scss';
</style>