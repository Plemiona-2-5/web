<template>
    <div>
        <navbar></navbar>
        <el-row :gutter="24" justify="center" align="top">
            <el-col :offset="5" :span="14" id="view">
                <router-view/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import Navbar from "./components/Navbar";

    export default {
        components: {Navbar},
    }
</script>