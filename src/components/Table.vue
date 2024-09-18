<script lang="ts">
export default{
		name: 'Table',
		data() {
			return {
				streamers: [
					{ id: 1, name: 'xQc', twitch: 'xQcOW' },
					{ id: 2, name: 'Shroud', twitch: 'Shroud' },
					{ id: 3, name: 'Ninja', twitch: 'Ninja' },
					{ id: 4, name: 'Pokimane', twitch: 'Pokimane' },
					{ id: 5, name: 'Myth', twitch: 'Myth' },
				]
			}
		}
}
</script>

<template>
	<div class="table">
		<div class="table-title">
			<h1>Streamers</h1>
			<h2>Twitch</h2>
		</div>
		<ol>
			<li v-for="streamer in streamers ">
				<ul class="table-row">
					<li>{{ streamer.name }}</li>
					<li>{{ streamer.twitch }}</li>
				</ul>
			</li>
		</ol>
	</div>

</template>

<style scoped>
	table {
		border: solid 2px #000;
		box-shadow: 2px 2px 2px darkgrey;
		border-radius: 5px;
		background-color: #E3A018;
	}
	th, td {
		padding: 8px;
	}
	td {
		border-block-start: solid 1px #000;
	}
</style>