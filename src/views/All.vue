<template>
	<div id="cont">
		<div id="container">
			<div v-for="a in this.$store.state.All" :key="a.id">
				<div id="link">
					<div id="linkinfo">
						<div style="font-size: 30px; color: rgb(175, 48, 48)">Subject</div>
						<h2>{{ a.title }}</h2>
						<span>
							<p v-if="a.content">{{ a.content }}</p>
							<p v-else>No description for this content</p>
							<p style="color: blue">{{ a.link }}</p>
						</span>
						<teleport to="#linkinfo" v-if="modalOpen1"> </teleport>
					</div>
					<div role="button" @click="modalOpen = !modalOpen">
						{{ a.comments.length }} &nbsp;
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-chat-right-text-fill"
							viewBox="0 0 16 16"
						>
							<path
								d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"
							/>
						</svg>
					</div>
					<hr />

					<div v-if="a.comments.length == 0">No comments yet</div>
					<CurrentCom :linkinfo="a" />
					<div v-for="comment in a.comments" :key="comment.id" id="c">
						<div id="aa">
							<ComLink
								:comment="comment"
								:modalOpen="modalOpen"
								@close="modalOpen = false"
							/>
						</div>
					</div>
				</div>
			</div>
			<div>
				<ul class="pagination">
					<div v-for="i in page_id" :key="i">
						<div role="button" @click="getLinks(i)">
							<li class="page-item">
								<a class="page-link" href="#" id="aa">{{ i }} </a>
							</li>
						</div>
					</div>
				</ul>
			</div>
		</div>
		<div id="sid">
			<div>
				<div style="margin-bottom: 2em; font-size: 2em; color: white">
					Last comments subjets
				</div>

				<div v-for="i in All" :key="i.id" id="news">
					<div id="new">
						<div>
							<h2>{{ i.title.substring(0, 20) }}...</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import ComLink from "../components/ComLink.vue";
	import CurrentCom from "../components/CurrentCom.vue";

	export default {
		name: "All",
		components: {
			ComLink,
			CurrentCom,
		},
		data() {
			return {
				All: {},
				modalOpen1: false,
				modalOpen: false,
				page_id: [],
				page: null,
			};
		},
		beforeMount() {
			this.getLinks();
		},

		methods: {
			mod() {
				this.modalOpen1 = true;
			},
			async getLinks(page) {
				const url = "https://apiyowl.herokuapp.com/api/links?page=" + page;
				let requestOptions = {
					method: "GET",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
				};
				await fetch(url, requestOptions)
					.then((response) => {
						return response.json();
					})
					.then((response) => {
						this.All = response.data;
						this.page = response.last_page;
						this.$store.commit("setAll", this.All);
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
	#news {
		padding: 10px;
		display: flex;
		flex-direction: column;
		box-shadow: 0.5px 0.5px 1px 0.5px rgb(255, 255, 255);
	}
	#linkinfo {
		margin-bottom: 2rem;
	}
	#container {
		margin: 30px;
	}
	#link {
		border: none;
		display: flex;
		flex-direction: column;
		box-shadow: 1px 1px 2px 1px rgb(175, 161, 161);
		margin-bottom: 15px;
		padding: 15px;
		border-radius: 1px;
	}

	#cont {
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
	#sid {
		margin: 30px;
		border: none;
		display: flex;
		flex-direction: column;
		box-shadow: 1px 1px 2px 1px rgb(175, 161, 161);
		margin-bottom: 15px;
		background-color: rgb(145, 191, 229);
		padding: 15px;
		border-radius: 1 px;
		display: flex;
		flex-direction: column;
		gap: 2em;
		height: min-content;
	}
	#co {
		border: none;
		outline: none;
		border-radius: 3px;
		background-color: rgb(19, 211, 218);
		height: 3em;
		width: auto;
	}
	#like {
		border: none;
		outline: none;
		border-radius: 3px;
		background-color: fuchsia;
	}
</style>	