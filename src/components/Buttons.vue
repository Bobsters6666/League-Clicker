<template>
  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  <div class=container>
    <div class=icons-container>
      <span class="material-icons" @click="handleMenuIconClicked">settings</span>
      <span class="material-icons up" @click="handleAudioIconClicked"
      :class="{hide: !isAudio}">volume_up</span>
      <span class="material-icons down" @click="handleAudioIconClicked"
      :class="{show: !isAudio}">volume_down</span>
    </div>

    <div class="menu" :class="{show: isMenu}" >
      <span class="material-icons" @click="handleMenuIconClicked">close</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyButtons',
  props: {
    msg: String
  },

  methods: {
    handleAudioIconClicked() {
      this.$store.commit('updateAudioStatus', !this.isAudio)
    },

    handleMenuIconClicked() {
      this.$store.commit('updateMenuStatus', !this.isMenu)
      console.log(1)
    }
  },
  
  computed: {
    isAudio() {return this.$store.state.isAudio},
    isMenu() {return this.$store.state.isMenu}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  height: 20vh;
  width: 38vw;
}
.icons-container {
  padding: 20px 30px;
  display: flex;
  gap: 10px;
}
.material-icons {
  font-size: 75px;
}
.material-icons:hover {
  cursor: pointer;
  opacity: 0.95;
}
.up.hide{
  display: none;
}
.down {
  display: none;
}
.down.show {
  display: block;
}
.menu {
  display: none;
  height: 500px;
  width: 500px;
  margin: 0px 0 0 100px;
  background-color: darkgray;
}
.menu.show {
  display: flex;
  z-index: 100;
}
</style>
