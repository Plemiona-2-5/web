<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <el-row :gutter="24" justify="center" align="top">
            <el-col :offset="5" :span="14" id="view">
                <router-view/>
            </el-col>
        </el-row>
    </div>
</template>

<style>
#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
