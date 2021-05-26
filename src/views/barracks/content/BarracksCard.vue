<template>
	<el-conteiner>
		<div class="centre">
			<el-header>
				<materials-card> </materials-card>
			</el-header>
		</div>
		<div class="body">
			<el-main>
				<div class="unit">
					<h3>Archer</h3>
					<el-image :src="archer_img"> </el-image>
					<el-input-number v-model="archer" size="small" min="0"> </el-input-number>
				</div>
				<div class="unit">
					<h3>Axeman</h3>
					<el-image :src="axeman_image"> </el-image>
					<el-input-number v-model="axeman" size="small" min="0"> </el-input-number>
				</div>
				<div class="unit">
					<h3>Swordsman</h3>
					<el-image :src="swordsman_image"> </el-image>
					<el-input-number v-model="swordsman" size="small" min="0"> </el-input-number>
				</div>
				<div class="unit">
					<h3>Horseman</h3>
					<el-image :src="horseman_image"> </el-image>
					<el-input-number v-model="horseman" size="small" min="0"> </el-input-number>
				</div>
				<div class="unit">
					<h3>Heavy horseman</h3>
					<el-image :src="h_horseman_image"> </el-image>
					<el-input-number v-model="h_horseman" size="small" min="0"> </el-input-number>
				</div>
				<div class="confirm">
					<el-button type="primary">Add to recruitment queue</el-button>
				</div>
			</el-main>
		</div>
	</el-conteiner>
</template>

<script>
import MaterialsCard from '../../village/content/MaterialsCard.vue';

const archer_img = require('@/assets/image/units/pic.png');
const axeman_image = require('@/assets/image/units/axe.png');
const swordsman_image = require('@/assets/image/units/sword.png');
const horseman_image = require('@/assets/image/units/light.png');
const h_horseman_image = require('@/assets/image/units/heavy.png');

export default {
	name: 'BarracksCard',
	components: { MaterialsCard },
	data() {
		return {
			archer_img,
			axeman_image,
			swordsman_image,
			horseman_image,
			h_horseman_image,
			archer: 0,
			axeman: 0,
			swordsman: 0,
			horseman: 0,
			h_horseman: 0
		};
	},
	methods: {}
};
</script>
