<template >
	<div id="nav">
		<router-link to="/"
			><img src="./assets/l1.jpg" alt="" style="width: 100px"
		/></router-link>

		<router-link to="/register"
			><button id="sign" v-if="!this.$store.state.user">Sign Up</button>
		</router-link>
		<router-link to="/login" v-if="!this.$store.state.user"
			><button id="signin">Sign In</button>
		</router-link>
		<router-link to="/"
			><button id="signout" @click="logout" v-if="this.$store.state.user">
				Log Out
			</button>
		</router-link>
		<div id="profile" class="dropdown" v-if="this.$store.state.user">
			<ul class="navbar-nav">
				<li class="dropdown">
					<a
						class="dropdown-toggle text-dark"
						style="font-size: 2em"
						href="#"
						id=""
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{{ this.$store.state.user.name }}
					</a>
					<ul
						class="dropdown-menu"
						aria-labelledby="navbarDarkDropdownMenuLink"
					>
						<li>
							<router-link to="/profile">
								<a class="dropdown-item" href="">Profile</a>
							</router-link>
							<router-link to="mycomment" id="mc">
								<a class="dropdown-item" href="">My comments</a>
							</router-link>
							<router-link to="/" id="mc">
								<a class="dropdown-item" href="">comment a new content</a>
							</router-link>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<router-view />
</template>
<script>
	export default {
		components: {},

		beforeCreate() {
			this.$store.commit("initialize");
		},

		methods: {
			logout() {
				const url = "https://apiyowl.herokuapp.com/api/logout";
				let requestOptions = {
					method: "post",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Bearer " + this.$store.state.token,
					},
				};
				fetch(url, requestOptions)
					.then((response) => {
						return response.json();
					})
					.then((result) => {
						this.$store.commit("setAuth", null, null);
						this.$store.commit("setAuth", null, null);
						localStorage.removeItem("AUTH");
						localStorage.removeItem("TOKEN");
					});
			},
		},
	};
</script>


<style>
	#profile {
		float: right;
		margin-left: 2em;
		font-weight: bold;
		text-decoration: none;
	}
	#sign {
		border: none;
		background-color: rgb(3, 19, 65);
		color: white;
		border-radius: 4px;
		font-size: 15px;
		width: 7em;
		height: 2em;
		font-weight: bold;
		float: right;
		margin-left: 5px;
	}

	#signin {
		border: none;
		background-color: rgb(3, 19, 65);
		color: white;
		border-radius: 4px;
		font-size: 15px;
		width: 7em;
		height: 2em;
		font-weight: bold;
		float: right;
		margin-left: 5px;
	}
	#signout {
		border: none;
		background-color: rgb(3, 19, 65);
		color: white;
		border-radius: 4px;
		font-size: 10px;
		width: auto;
		height: 3em;
		font-weight: bold;
		float: right;
		margin-left: 3em;
		padding-bottom: 0.5em;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	#nav {
		padding: 15px;
		background-color: rgb(145, 191, 229);
		margin-bottom: 2em;
		box-shadow: 1px 1px 3px 1px rgb(177, 174, 174);
	}

	#nav a {
		font-weight: bold;
		color: #000000;
		font-size: 1em;
		text-decoration: none;
	}

	#nav a.router-link-exact-active {
		color: #0a58e7;
	}
</style>
