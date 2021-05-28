<template>
	<div>
		<h1>Your army</h1>
		<army-card> </army-card>
		<el-row>
			<el-col class="names" :span="3">
				<el-row v-for="(state, name) in infantry" :key="name">
					<h3>{{ name }}</h3>
				</el-row>
				<el-row v-for="(state, name) in cavalry" :key="name">
					<h3>{{ name }}</h3>
				</el-row>
			</el-col>
			<el-col class="images" :span="2">
				<el-row class="imageRow" v-for="(amount, unitName, index) in infantry" :key="unitName">
					<el-image class="armyImage" :src="infantryImages[index].imageSrc"> </el-image>
				</el-row>
				<el-row class="imageRow" v-for="(amount, unitName, index) in cavalry" :key="unitName">
					<el-image class="armyImage" :src="cavalryImages[index].imageSrc"> </el-image>
				</el-row>
			</el-col>
			<el-col class="counters" :span="6">
				<el-row>
					<div class="unit">
						<el-input-number v-model="pikeman" size="small" :min="0" :max="infantry.pikes">
						</el-input-number>
					</div>
					<div class="unit">
						<el-input-number v-model="swordsman" size="small" :min="0" :max="infantry.swords">
						</el-input-number>
					</div>
					<div class="unit">
						<el-input-number v-model="axeman" size="small" :min="0" :max="infantry.axes"> </el-input-number>
					</div>
					<div class="unit">
						<el-input-number v-model="horseman" size="small" :min="0" :max="cavalry.light">
						</el-input-number>
					</div>
					<div class="unit">
						<el-input-number v-model="h_horseman" size="small" :min="0" :max="cavalry.heavy">
						</el-input-number>
					</div>
				</el-row>
			</el-col>
			<el-col class="coordinates" :span="13">
				<el-row class="village">
					<h3>X Y</h3>
					<el-input-number v-model="village_X" size="small"> </el-input-number>
					<el-input-number v-model="village_Y" size="small"> </el-input-number>
				</el-row>
				<el-row>
					<el-button @click="$router.push('map')">Choose village</el-button>
				</el-row>
			</el-col>
		</el-row>
		<el-row>
			<el-button type="primary" @click="Attack()">Confirm attack</el-button>
		</el-row>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import { units } from '@/store/unitsModule';
import ArmyCard from '../../village/content/ArmyCard.vue';
import unitImages from '../../village/content/units';

export default {
	components: { ArmyCard },
	name: 'AttackCard',
	data() {
		return {
			units,
			infantryImages: unitImages.infantry,
			cavalryImages: unitImages.cavalry,
			pikeman: 0,
			swordsman: 0,
			axeman: 0,
			horseman: 0,
			h_horseman: 0,
			village_X: 0,
			village_Y: 0
		};
	},
	computed: {
		...mapGetters(['infantry', 'cavalry'])
	},
	methods: {
		Attack() {
			console.log('call attack');
		}
	}
};
</script>
