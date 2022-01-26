<template>
	<div id="container">
		<div id="register">
			<h1 style="color: rgb(3, 19, 65)">Registration</h1>
			<span id="name_err"></span>

			<input type="text" id="register-ip1" placeholder="Name" v-model="name" />
			<span id="email_err"></span>

			<input
				type="email"
				id="register-ip2"
				placeholder="Email"
				v-model="email"
				required
			/>
			<span id="age_err"></span>

			<input type="number" id="register-ip3" placeholder="Age" v-model="age" />
			<span id="pass_err"></span>
			<input
				type="password"
				id="register-ip4"
				placeholder="Password"
				v-model="password"
			/>

			<span id="cpass_err"></span>
			<input
				type="password"
				id="register-ip5"
				placeholder="Password Confirmation"
				v-model="password_confirmation"
			/>

			<button id="register-button" @click="register">Create</button>

			<span style="color: rgb(0, 0, 0)">
				<a>Fogot password</a> |<router-link to="/login"> Sign In </router-link>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Register",
		data() {
			return {
				name: "",
				email: "",
				age: "",
				password: "",
				password_confirmation: "",
				error_age: "",
			};
		},

		methods: {
			register() {
				const ag = document.querySelector("#age_err");
				const na = document.querySelector("#name_err");
				const em = document.querySelector("#email_err");
				const pa = document.querySelector("#pass_err");
				const cpa = document.querySelector("#cpass_err");
				if (this.name == "") {
					na.style.color = "red";
					na.innerHTML = "name is required";
				} else if (this.email == "") {
					em.style.color = "red";
					em.innerHTML = "email is required";
				} else if (this.age < 13 || this.age > 35) {
					ag.style.color = "red";
					ag.innerHTML = "your age must be between 13 and 35";
				} else if ((this.password = "" || this.password < 5)) {
					pa.style.color = "red";
					pa.innerHTML = "please enter your password or enter more than 4";
				} else if (this.password !== this.password_confirmation) {
					cpa.style.color = "red";
					cpa.innerHTML = "enter valid confirmation password";
				} else {
					let newUser = {
						name: this.name,
						email: this.email,
						age: this.age,
						password: this.password,
						password_confirmation: this.password_confirmation,
					};
					const url = "https://apiyowl.herokuapp.com/api/register";
					let requestOptions = {
						method: "post",
						headers: {
							Accept: "application/json",
							"Content-Type": "application/json",
						},
						body: JSON.stringify(newUser),
					};

					fetch(url, requestOptions)
						.then((response) => {
							return response.json();
						})
						.then((result) => {
							localStorage.setItem("RTOKEN", result.token);
						})
						.catch((err) => {
							console.log("hello");
						});
				}
			},
		},
	};
</script>

<style scoped>
	#container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
		align-items: center;
	}
	#register {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		gap: 2em;
		padding: 15px;
		width: 35%;
		background: url(../assets/b.jpg);

		box-shadow: 1px 2px 2px 2px rgb(61, 61, 61);
	}
	#register-ip1 {
		height: 3em;
		width: 100%;
		outline: none;
		border-top: none;
		border-left: none;
		border-right: none;
		border-right: none;
		border-bottom: none;
		font-size: 1em;
	}
	#register-ip2 {
		height: 3em;
		width: 100%;
		outline: none;
		border-top: none;
		border-left: none;
		border-right: none;
		border-bottom: none;
		font-size: 1em;
	}
	#register-ip3 {
		height: 3em;
		width: 100%;
		outline: none;
		border-top: none;
		border-left: none;
		border-right: none;
		border-right: none;
		border-bottom: none;
		font-size: 1em;
	}
	#register-ip4 {
		height: 3em;
		width: 100%;
		outline: none;
		border-top: none;
		border-left: none;
		border-right: none;
		border-right: none;
		border-bottom: none;
		font-size: 1em;
	}
	#register-ip5 {
		height: 3em;
		width: 100%;
		outline: none;
		border-top: none;
		border-left: none;
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