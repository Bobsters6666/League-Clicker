<template>
  <div class=container>
    <div class=nav-icons>
      <div class="player-tab tab" @click="handleTabChange('player')">
        Player
      </div>
      <div class="heroes-tab tab" @click="handleTabChange('heroes')">
        Heroes
      </div>
      <div class="mythics-tab tab" @click="handleTabChange('mythics')">
        Mythics
      </div>
      <div class="shop-tab tab" @click="handleTabChange('shop')">
        Shop
      </div>
    </div>

    <div class="display">
      <div class="player-section section" :class="{show: currentTab == 'player'}">
        <PlayerSection msg="hi"/>
      </div>
      <div class="heroes-section section" :class="{show: currentTab == 'heroes'}">
        <HeroesSection msg="hi"/>
      </div>
      <div class="mythics-section section" :class="{show: currentTab == 'mythics'}">
        <MythicsSection msg="hi"/>
      </div>
      <div class="shop-section section" :class="{show: currentTab == 'shop'}">
        <ShopSection msg="hi"/>
      </div>
    </div>
  </div>
</template>

<script>
import HeroesSection from './sections/HeroesSection.vue';
import PlayerSection from './sections/PlayerSection.vue';
import MythicsSection from './sections/MythicsSection.vue';
import ShopSection from './sections/ShopSection.vue'


export default {
  name: 'MyButtons',

  data() {
    return {
      currentTab: 'player',
    };
  },

  components: {
    PlayerSection,
    HeroesSection,
    MythicsSection,
    ShopSection
  },

  methods: {
    handleTabChange(tab) {
      this.currentTab = tab
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 38vw;
  height: 80vh;
  display: block;
}

.nav-icons {
  display: flex;
  padding: 0 0 0 10px;
  font-size: 25px;
  font-weight: 700;
  gap: 10px;
}

.tab {
  text-align: center;
  border: 3px solid white;
  width: 130px;
  padding: 7px 0;
  border-radius: 5px;
  transition: ease-in-out 0.3s;
}

.tab:hover {
  opacity: 0.8;
  cursor: pointer;
}

.player-tab {
  background-color: rgb(235, 235, 135)
}

.heroes-tab {
  background-color: rgb(135, 135, 235)
}

.mythics-tab {
  background-color: rgb(135, 235, 135)
}

.shop-tab {
  background-color: rgb(235, 135, 135)
}

.display  {
  min-height: 80vh;
  padding: 5px 10px;
  margin-top: 5px;
  border-top: 5px gray solid;
  border-right: 5px gray solid;
  font-size: 20px;
  background-color: #4c4c4c;
  color: white;
}

.section {
  display: none;
}

.section.show {
  display: block;
}
</style>