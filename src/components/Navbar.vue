<template>
    <div id="navbar" v-if="isPlaying">
        <el-button type="danger" class="button">
            <router-link to="/overview">Overview</router-link>
        </el-button>

        <el-button type="danger" class="button">
            <router-link to="/map">Map</router-link>
        </el-button>

        {{points}} Points

        <el-button type="danger" class="button">
            <router-link to="/#">Reports</router-link>
        </el-button>

        <el-button type="danger" class="button">
            <router-link to="/tribe">Tribe</router-link>
        </el-button>

        <el-button type="danger" class="button" id="align-right">
            <router-link to="/">Logout</router-link>
        </el-button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: "Navbar",
    computed: {
        ...mapGetters(["points", "isPlaying"])
    }
}
</script>