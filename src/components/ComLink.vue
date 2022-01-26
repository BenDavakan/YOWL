<template>
	<div id="com">
		<h2 style="font-weight: bold">{{ comment.user.name }}</h2>
		<h4>{{ comment.content }}</h4>
		<div style="display: flex; gap: 5em">
			<p style="color: rgb(255, 0, 0)">
				{{ comment.rating }} &nbsp;<img
					src="../assets/Star.png"
					style="width: 20px; padding-bottom: 7px"
				/>
			</p>
			<div style="color: blue">
				<span id="ll">{{ comment.likes.length }}</span>
				&nbsp;
				<img
					style="width: 20px; padding-bottom: 7px"
					src="https://img.icons8.com/external-sbts2018-blue-sbts2018/58/000000/external-like-social-media-basic-1-sbts2018-blue-sbts2018.png"
				/>
			</div>
			<p role="button" style="color: blue" @click="like(comment.id)">I likes</p>
			<p>{{ ago }}</p>
		</div>
	</div>
</template>

<script>
	import moment from "moment";
	export default {
		name: "ComLink",
		props: ["comment"],
		data() {
			return {};
		},

		computed: {
			ago() {
				return moment(this.comment.created_at).fromNow();
			},
		},
		methods: {
			async like(id) {
				const url = "https://apiyowl.herokuapp.com/api/likes";
				let like = {
					comment_id: id,
				};
				const ll = document.querySelector("#ll");
				let requestOptions = {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Bearer " + this.$store.state.token,
					},
					body: JSON.stringify(like),
				};
				await fetch(url, requestOptions)
					.then((response) => {
						return response.json();
					})
					.then((response) => {
						this.comment.likes = response.likes;
						ll.innerHTML = this.comment.likes.length;
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
	};
</script>

<style>
	#com {
		border: none;
		display: flex;
		flex-direction: column;
		box-shadow: 1px 1px 2px 1px rgb(216, 211, 211);
		margin-bottom: 15px;
		padding: 15px;
		border-radius: 5px;
		background: rgb(207, 207, 207);
		widows: auto;
	}
</style>