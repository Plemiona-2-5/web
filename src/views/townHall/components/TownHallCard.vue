<template>
<h1> Town Hall (level 1)
<el-row :gutter="1">
  <el-col :span="6"><div class="grid-content bg-orange"> buildings </div></el-col>
  <el-col :span="6"><div class="grid-content bg-orange"> requirements </div></el-col>
  <el-col :span="6"><div class="grid-content bg-orange"> building time </div></el-col>
  <el-col :span="6"><div class="grid-content bg-orange"> build/upgrade </div></el-col>
  <tr></tr>
  <el-row :gutter="1" >
  <el-col :span="6"><div class="grid-content bg-yellow"> Town Hall </div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">requirement</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">0:10:10</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">Upgrade (lv2)</div></el-col>
<tr></tr>
  <el-row :gutter="1" >
  <el-col :span="6"><div class="grid-content bg-yellow"> Mine </div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">requirement</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">0:10:10</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">Upgrade (lv2)</div></el-col>
<tr></tr>
  <el-row :gutter="1" >
  <el-col :span="6"><div class="grid-content bg-yellow"> Farm </div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">requirement</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">0:10:10</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">Upgrade (lv2)</div></el-col>
<tr></tr>
  <el-row :gutter="1" >
  <el-col :span="6"><div class="grid-content bg-yellow"> Barracks </div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">requirement</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">0:10:10</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">Upgrade (lv2)</div></el-col>
<tr></tr>
  <el-row :gutter="1" >
  <el-col :span="6"><div class="grid-content bg-yellow"> Granary </div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">requirement</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">0:10:10</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">Upgrade (lv2)</div></el-col>
  <tr></tr>
  <el-row :gutter="1" >
  <el-col :span="6"><div class="grid-content bg-yellow"> Brick yard </div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">requirement</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">0:10:10</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">Upgrade (lv2)</div></el-col>
  <tr></tr>
  <el-row :gutter="1" >
  <el-col :span="6"><div class="grid-content bg-yellow"> Lumber mill </div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">requirement</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">0:10:10</div></el-col>
  <el-col :span="6"><div class="grid-content bg-yellow">Upgrade (lv2)</div></el-col>
  <tr></tr>
</el-row>
</el-row>
</el-row>
</el-row>
</el-row>
<h5> In the town hall, you can build or upgrade your buildings</h5>
</el-row>
</el-row>

</el-row>
</h1>
</template>

<script>
    export default {
        name: "TownHallCard"
    }
</script>