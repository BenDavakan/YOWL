<template>
	<div id="link">
		<div>
			<router-link to="/register"
				><button type="button" class="btn btn-success" id="cta">
					Join the community
				</button></router-link
			>
		</div>

		<div id="li">
			<input
				type="email"
				class="form-control w-10"
				placeholder="link..."
				v-model="link"
			/>
			<button type="button" class="btn btn-primary" @click="sendLink">
				comment
			</button>
		</div>
		<teleport to="#end" v-if="modalOpen">
			<Comment
				:modalOpen="modalOpen"
				:linkInfo="linkInfo"
				@close="modalOpen = false"
			/>
		</teleport>
	</div>
</template>

<script>
	import Comment from "../components/Comment.vue";
	export default {
		name: "Home",
		components: {
			Comment,
		},
		data() {
			return {
				link: "",
				modalOpen: false,
				linkInfo: {},
			};
		},

		methods: {
			async sendLink() {
				const linkinfo = {
					link: this.link,
				};
				const url = "https://apiyowl.herokuapp.com/api/links";
				let requestOptions = {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Bearer " + this.$store.state.token,
					},
					body: JSON.stringify(linkinfo),
				};
				await fetch(url, requestOptions)
					.then((response) => {
						return response.json();
					})
					.then((response) => {
						console.log(response);
						this.linkInfo = response.link_info[0];
					})
					.catch((err) => {
						console.log(err);
					});
				this.modalOpen = true;
			},
		},
	};
</script>
<style>
	#cta {
		padding-left: 2em;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		padding-right: 2em;
		font-size: 4em;
		width: auto;
		margin-top: 2em;
	}
	#link {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2em;
	}
	#li {
		width: 40%;
		display: flex;
		justify-content: center;
	}
</style>
