<template>
	<div class="table">
		<div class="table-title">
			<div>Rank</div>
			<div>Streamer</div>
			<div>Twitch</div>
			<div>Compte</div>
			<div>Elo</div>
			<div>Matchs</div>
			<div>Win</div>
			<div>Loose</div>
			<div>Winrate</div>
		</div>
		<div v-for="streamer in streamers">
			<div class="table-row">
				<div>#{{ streamer.rank }}</div>
				<div>{{ streamer.name }}</div>
				<TwitchButton :twitch="streamer.twitch" :online="true"/>
				<div>{{ streamer.compte }}</div>
				<div>{{ streamer.elo }} {{ streamer.division }} {{ streamer.lp }}LP</div>
				<div>{{ streamer.win + streamer.loose }}</div>
				<div>{{ streamer.win }}</div>
				<div>{{ streamer.loose }}</div>
				<div>{{ Math.round(streamer.win / (streamer.win + streamer.loose) * 100) }}%</div>
			</div>
		</div>
		<button @click="streamers.sort((a, b) => a.rank - b.rank)">Click me</button>
	</div>

</template>

<script lang="ts">
import TwitchButton from './TwitchButton.vue';

export default{
	components: {
		TwitchButton
	},
	data() {
		return {
			streamers: [
				{ id: 1, rank: 1, name: 'Caliste', twitch: 'caliste_lol', live: true, compte: 'MOMO KOZUKI', elo: 'Challenger', division: '', lp: '1667', win: 6, loose: 0 },
				{ id: 2, rank: 3, name: 'Alex', twitch: 'caliste_lol', live: false, compte: 'ALEX123', elo: 'Platine', division: 'II', lp: '45', win: 8, loose: 2 },
				{ id: 3, rank: 2, name: 'Jordan', twitch: 'caliste_lol', live: true, compte: 'JORDAN456', elo: 'Diamant', division: 'I', lp: '90', win: 10, loose: 1 },
				{ id: 4, rank: 4, name: 'Taylor', twitch: 'caliste_lol', live: false, compte: 'TAYLOR789', elo: 'Or', division: 'III', lp: '30', win: 5, loose: 3 }
			]
		}
	},
	methods: {
	}
}
</script>

<style scoped>
	.table {
		border: solid 2px #000;
		box-shadow: 2px 2px 2px darkgrey;
		border-radius: 5px;
		background-color: #F8B5FF;
		width: 100%;
		padding: 10px;
	}
	.table-title {
		display: grid;
		width: 100%;
		grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr 1fr 1fr 1fr;
		font-weight: bold;
		text-align: left;
	}
	.table-row {
		display: grid;
		width: 100%;
		grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr 1fr 1fr 1fr;
		text-align: left;
	}
	.table-row div{
		margin-top: 20px;
	}
</style>