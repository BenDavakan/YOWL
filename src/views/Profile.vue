<template>
	<div id="container">
		<div id="info">
			<h1>ACCOUT INFORMATION</h1>
			<div id="ph">
				<img src="../assets/profil.png" alt="" style="width: 25%" />
			</div>
			<div>
				<span id="s1">Name:</span>
				<span id="s2"> {{ this.$store.state.user.name }}</span>
			</div>
			<div>
				<span id="s1"> Email :</span>
				<span id="s2"> {{ this.$store.state.user.email }}</span>
			</div>
			<div>
				<span id="s1"> Age: </span>
				<span id="s2"> {{ this.$store.state.user.age }}</span>
			</div>
			<div v-if="this.$store.state.authenticated == true">
				<span id="s1">Status:</span>
				<span id="s22">Connected</span>
			</div>
			<button class="btn btn-primary" id="">Update your information</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Profile",
	};
</script>

<style scoped>
	#ph {
		display: flex;
		justify-content: center;
		margin-bottom: 3em;
	}
	#container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 50%;
		box-shadow: 1px 1px 3px 1px rgb(145, 191, 229);
		padding: 5em;
		gap: 1em;
	}
	#s1 {
		font-size: 20px;
		font-weight: bold;
	}
	#s2 {
		font-size: 18px;
		margin-left: 1em;
	}

	#s22 {
		font-size: 18px;
		color: green;
		margin-left: 1em;
	}
</style>