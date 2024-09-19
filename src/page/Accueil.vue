<script lang="ts">
import Table from '../components/Table.vue';
import TwitchEmbed from '../components/TwitchEmbed.vue';
import TwitchInfo from '../components/TwitchInfo.vue';

export default {
	data() {
		return {
			streamers: [
				{ id: 1, rank: 1, name: 'Caliste', twitch: 'caliste_lol', live: true, compte: 'MOMO KOZUKI', elo: 'Challenger', division: '', lp: '1667', win: 6, loose: 0, twitter: 'https://twitter.com/CalisteLoL' },
				{ id: 2, rank: 3, name: 'Alex', twitch: 'caliste_lol', live: false, compte: 'ALEX123', elo: 'Platine', division: 'II', lp: '45', win: 8, loose: 2, twitter: 'https://twitter.com/CalisteLoL' },
				{ id: 3, rank: 2, name: 'Jordan', twitch: 'caliste_lol', live: true, compte: 'JORDAN456', elo: 'Diamant', division: 'I', lp: '90', win: 10, loose: 1, twitter: 'https://twitter.com/CalisteLoL' },
				{ id: 4, rank: 4, name: 'Taylor', twitch: 'caliste_lol', live: false, compte: 'TAYLOR789', elo: 'Or', division: 'III', lp: '30', win: 5, loose: 3, twitter: 'https://twitter.com/CalisteLoL' }
			]
		}
	},
	components: {
		TwitchInfo,
		TwitchEmbed,
		Table
	}
}
</script>

<template>
	<div class="page">
		<div class="twitch">
			<TwitchInfo :streamer="streamers[0]"/>
			<TwitchEmbed class="twitch-embed" channel="france_tv_slash" />
		</div>
		<Table :streamers="streamers" />
	</div>
</template>

<style scoped>
.page{
	display: flex;
	width: 100%;
	flex-direction: column;
}
.twitch{
	display: flex;
	justify-content: flex-end;
	width: 100%;
	margin-bottom: 50px
}
.twitch-embed{
	width: 60%;
	height: 500px;
	margin-right: 50px;
	display: flex;
	align-self: flex-end;
}
</style>