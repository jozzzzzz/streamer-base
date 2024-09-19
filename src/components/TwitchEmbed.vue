<template>
  <div>
    <div :id="twitchEmbedId"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'TwitchEmbed',
  props: {
    channel: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const twitchEmbedId = ref('twitch-embed')

    onMounted(() => {
      const script = document.createElement('script')
      script.src = 'https://embed.twitch.tv/embed/v1.js'
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        new (window as any).Twitch.Embed(twitchEmbedId.value, {
          width: '100%',
          height: '100%',
          channel: props.channel,
          layout: 'video',
          theme: 'dark'
        })
      }
    })

    return {
      twitchEmbedId
    }
  }
})
</script>

<style scoped>
#twitch-embed {
  width: 100%;
  min-height: 400px;
  max-height: 500px;
}
</style>
