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
		<el-col :span="3">
			<el-row v-for="(amount, unitName, index) in infantry" :key="unitName">
				<el-image class="armyImage" :src="infantryImages[index].imageSrc"> </el-image>
			</el-row>
			<el-row v-for="(amount, unitName, index) in cavalry" :key="unitName">
				<el-image class="armyImage" :src="cavalryImages[index].imageSrc"> </el-image>
			</el-row>
		</el-col>
		<el-col :span="6">
			<el-row>
				<div class="unit">
					<el-input-number v-model="pikeman" size="small" :min="0"> </el-input-number>
				</div>
				<div class="unit">
					<el-input-number v-model="swordsman" size="small" :min="0"> </el-input-number>
				</div>
				<div class="unit">
					<el-input-number v-model="axeman" size="small" :min="0"> </el-input-number>
				</div>
				<div class="unit">
					<el-input-number v-model="horseman" size="small" :min="0"> </el-input-number>
				</div>
				<div class="unit">
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
import unitImages from '../../village/content/units';

export default {
	name: 'BarracksCard',
	components: { MaterialsCard },
	data() {
		return {
			units,
			infantryImages: unitImages.infantry,
			cavalryImages: unitImages.cavalry,
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
