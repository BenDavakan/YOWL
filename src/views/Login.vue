<template>
	<div id="container">
		<div id="register">
			<h1 style="color: rgb(3, 19, 65)">Sign in</h1>
			<input
				type="email"
				id="register-ip2"
				placeholder="Email"
				v-model="email"
			/>
			<input
				type="password"
				id="register-ip4"
				placeholder="Password"
				v-model="password"
			/>
			<router-link to="/"
				><button id="register-button" @click="login">
					Sign in
				</button></router-link
			>
			<span style="color: rgb(0, 0, 0)"
				>Fogot password|
				<router-link to="/register">Sign Up </router-link></span
			>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				email: "",
				password: "",
			};
		},
		mounted() {
			const lodiv = document.querySelector("#signout");
			const su = document.querySelector("#sign");
			const si = document.querySelector("#signin");
		},
		methods: {
			login() {
				const lodiv = document.querySelector("#signout");
				const su = document.querySelector("#sign");
				const si = document.querySelector("#signin");
				let loginUser = {
					email: this.email,
					password: this.password,
				};
				const url = "https://apiyowl.herokuapp.com/api/login";
				let requestOptions = {
					method: "post",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(loginUser),
				};
				fetch(url, requestOptions)
					.then((response) => {
						return response.json();
					})
					.then((result) => {
						let atoken = result.token;
						console.log(atoken);
						this.$store.commit("setAuth", result.user);
						this.$store.commit("setToken", result.token);
					});
			},
		},
	};
</script>

<style scoped>
	#container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	#register {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2em;
		padding: 15px;

		background: url(../assets/b.jpg);

		box-shadow: 1px 2px 2px 2px rgb(61, 61, 61);
	}

	#register-ip2 {
		height: 3em;
		width: 30em;
		outline: none;
		border-top: none;
		border-left: none;
		border-right: none;
		border-bottom: none;
		font-size: 1em;
	}

	#register-ip4 {
		height: 3em;
		width: 30em;
		outline: none;
		border-top: none;
		border-left: none;
		border-right: none;
		border-right: none;
		border-bottom: none;
		font-size: 1em;
	}

	#register-button {
		width: 10em;
		height: 3em;
		font-size: 1em;
		color: whitesmoke;
		background-color: rgb(3, 19, 65);
		border: none;
	}

	#register-button:hover {
		color: rgb(9, 41, 139);
		background-color: rgb(204, 186, 186);
	}
</style>