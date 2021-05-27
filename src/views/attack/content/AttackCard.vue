<template>
	<div>
		<h1>Your army</h1>
		<army-card> </army-card>
		<div>
			<el-row>
				<el-col> </el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import units from '@/store/unitsModule';
import ArmyCard from '../../village/content/ArmyCard.vue';

export default {
	components: { ArmyCard },
	name: 'AttackCard',
	data() {
		return {
			units
		};
	},
	computed: {
		...mapGetters(['infantry', 'cavalry'])
	}
};
</script>
