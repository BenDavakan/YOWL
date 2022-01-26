<template>
	<div id="container">
		<h3>{{ linkInfo.title }}</h3>
		<h2>{{ linkInfo.content }}</h2>
		<textarea
			id="con"
			cols="30"
			rows="5"
			placeholder="Comment..."
			v-model="content"
		></textarea>
		<div id="check">
			<div>
				<input
					id="rating"
					v-model="rating"
					placeholder="Rate between 1 and 10"
				/>
			</div>
			<div id="cat">
				<select name="" id="cats" v-model="category_id">
					<option value="1">Uncategorize</option>
				</select>
			</div>
		</div>
		<div id="but">
			<button @click="addComment" id="add">add</button>
			<button @click="$emit('close')" id="clo">close</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Comment",
		emits: ["close"],
		props: ["linkInfo"],
		data() {
			return {
				content: "",
				category_id: null,
				rating: null,
			};
		},
		methods: {
			async addComment() {
				let comment = {
					content: this.content,
					rating: this.rating,
					category_id: this.category_id,
					id: this.linkInfo.id,
				};
				console.log(comment);
				const url = "https://apiyowl.herokuapp.com/api/comments";
				let requestOptions = {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Bearer " + this.$store.state.token,
					},
					body: JSON.stringify(comment),
				};
				await fetch(url, requestOptions)
					.then((response) => {
						return response.json();
					})
					.then((response) => {
						console.log(response);
					})
					.catch((err) => {
						console.log(err);
					});
				this.$router.push("/all");
			},
		},
	};
</script>

<style scoped>
	#rating {
		width: 11em;
		border: none;
		outline: none;
		height: 2em;
	}
	#cat {
		width: auto;
	}
	#cats {
		width: 10em;
		height: 2em;
		border: none;
		outline: none;
	}
	#container {
		margin-top: 2em;
		margin-bottom: 2em;
		background-color: rgb(163, 160, 158);
		width: 50%;
		display: flex;
		flex-direction: column;
		padding: 0.5em;
		gap: 0.5em;
		box-shadow: 1px 1px 3px 1px black;
		width: max-content;
	}
	#check {
		display: flex;
		gap: 1em;
	}
	#but {
		display: flex;
		width: auto;
		flex-flow: row-reverse;
		gap: 0.5em;
	}
	#con {
		border: none;
		outline: none;
		font-size: 2em;
		overflow: hidden;
	}
	#con::placeholder {
		font-size: 1em;
	}
	#clo {
		border: none;
		outline: none;
		width: 5em;
		background-color: red;
	}
	#add {
		border: none;
		outline: none;
		width: 5em;
		height: 2em;
	}
</style>