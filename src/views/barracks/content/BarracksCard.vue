<template>
	<div>
		<div class="centre">
			<el-header>
				<materials-card> </materials-card>
			</el-header>
		</div>
		<el-col :span="3">
			<el-row v-for="(state, name) in infantry" :key="name">
				<h3>{{ name }}</h3>
			</el-row>
			<el-row v-for="(state, name) in cavalry" :key="name">
				<h3>{{ name }}</h3>
			</el-row>
		</el-col>
		<el-col :span="6">
			<el-row>
				<div class="unit">
					<el-image :src="pikeman_img"> </el-image>
					<el-input-number v-model="pikeman" size="small" :min="0"> </el-input-number>
				</div>
				<div class="unit">
					<el-image :src="swordsman_image"> </el-image>
					<el-input-number v-model="swordsman" size="small" :min="0"> </el-input-number>
				</div>
				<div class="unit">
					<el-image :src="axeman_image"> </el-image>
					<el-input-number v-model="axeman" size="small" :min="0"> </el-input-number>
				</div>
				<div class="unit">
					<el-image :src="horseman_image"> </el-image>
					<el-input-number v-model="horseman" size="small" :min="0"> </el-input-number>
				</div>
				<div class="unit">
					<el-image :src="h_horseman_image"> </el-image>
					<el-input-number v-model="h_horseman" size="small" :min="0"> </el-input-number>
				</div>
			</el-row>
		</el-col>
		<el-col>
			<el-row>
				<div class="confirm">
					<el-button type="primary" @click="Recruit()">Add to recruitment queue</el-button>
				</div>
			</el-row>
		</el-col>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { units } from '@/store/unitsModule';
import MaterialsCard from '../../village/content/MaterialsCard.vue';

const pikeman_img = require('@/assets/image/units/pic.png');
const axeman_image = require('@/assets/image/units/axe.png');
const swordsman_image = require('@/assets/image/units/sword.png');
const horseman_image = require('@/assets/image/units/light.png');
const h_horseman_image = require('@/assets/image/units/heavy.png');

export default {
	name: 'BarracksCard',
	components: { MaterialsCard },
	data() {
		return {
			units,
			pikeman_img,
			axeman_image,
			swordsman_image,
			horseman_image,
			h_horseman_image,
			pikeman: 0,
			axeman: 0,
			swordsman: 0,
			horseman: 0,
			h_horseman: 0
		};
	},
	computed: {
		...mapGetters(['infantry', 'cavalry'])
	},
	methods: {
		Recruit() {
			console.log('call recruitment');
		}
	}
};
</script>
