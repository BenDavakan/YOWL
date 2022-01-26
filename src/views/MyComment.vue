<template>
	<div id="container">
		<div id="cont1">{{ this.$store.state.user.name }}</div>
		<div>
			<div v-for="userco in usercom" :key="userco.id">
				<div id="cont2">
					<h1>{{ userco.link.title }}</h1>
					<ComLink :comment="userco" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ComLink from "../components/ComLink.vue";
	export default {
		name: "MyComment",
		components: { ComLink },
		data() {
			return {
				usercom: [],
				page: null,
				page_id: [],
			};
		},
		beforeMount() {
			this.getLink();
		},
		methods: {
			async getLink(pag) {
				const url = "https://apiyowl.herokuapp.com/api/comments/user?page=" + pag;

				let requestOptions = {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Bearer " + this.$store.state.token,
					},
				};
				await fetch(url, requestOptions)
					.then((response) => {
						return response.json();
					})
					.then((response) => {
						this.usercom = response.data;
						this.page = response.last_page;
					})
					.catch((err) => {
						console.log(err);
					});
				for (let i = 0; i < this.page; i++) {
					this.page_id[i] = i + 1;
				}
			},
		},
	};
</script>

<style scoped>
	#aa:active {
		background-color: black;
	}
	a:hover {
		background: black;
	}
	#container {
		display: inline-flex;
		gap: 5em;
	}
	#cont1 {
		background-color: rgb(145, 191, 229);
	}
	#cont2 {
		display: flex;
		flex-direction: column;
	}
</style>