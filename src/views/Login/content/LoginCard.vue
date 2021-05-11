<template>
	<div class="login">
		<h3>Login</h3>
		<el-form ref="login-form" :model="loginForm" :rules="rules" @submit.native.prevent>
			<el-form-item prop="email" label="Email">
				<el-input v-model="form.email" type="email"> </el-input>
			</el-form-item>
			<el-form-item prop="password" label="Password">
				<el-input v-model="form.password" type="password"> </el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="LogIn" native-type="submit">Login</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loginForm: {
				email: '',
				password: ''
			},

			rules: {
				email: [
					{
						required: true,
						message: 'Insert email address',
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						message: 'Insert password',
						trigger: 'blur'
					}
				]
			}
		};
	},

	methods: {
		async LogIn() {
			console.log('login');
		}
	}
};
</script>

<style src="./LoginCard.css"></style>
