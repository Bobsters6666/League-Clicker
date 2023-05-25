<template>
  <div class="template">
    <div v-for="(hero, key) in heroes" :key="key" class="heroes grid">
      <div class="left-section">
        <img :src="getImgUrl(hero.imageLocation)" draggable="false">
      </div>
      <div class="mid-section">
        <h2>{{ hero.name }}</h2>
        <h5>Level: {{ hero.level }}</h5>
        <p>DPS: {{ hero.damage }}</p>
      </div>
      <div class="right-section" :class="{canBuy: coins >= hero.levelUpCost}"
        @click="handleHeroLevelUp(key)">
        <div class="top">
          <img src="../../assets/misc/coin.png" alt="" class="src">
          <p>{{ Math.floor(hero.levelUpCost) }}</p>
        </div>
        <div class="bottom" :class="{canBuy: coins >= hero.levelUpCost}">
          <h3>Level up <br /> + {{ hero.damageIncreaseOnLevelUp }} DPC</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroesSection',
  props: {
    msg: String
  },

  methods: {
    getImgUrl(url) {
      return require(`../../assets/heroes/${url}`);
    },

    handleHeroLevelUp(h) {
      const heroes = this.heroes;
      let coins = this.coins;

      Object.keys(heroes).forEach((heroKey) => {
        const hero = this.heroes[heroKey]
        if (h == heroKey && coins > hero.levelUpCost) {
          hero.level ++
          coins -= hero.levelUpCost
          hero.levelUpCost = Math.ceil(hero.levelUpCost**1.015);
          hero.damage += hero.damageIncreaseOnLevelUp
          hero.damageIncreaseOnLevelUp = Math.floor(hero.damageIncreaseOnLevelUp**1.027)
        }

        this.$store.state.coins = coins;
      });
    }
  },

  computed: {
    heroes() {return this.$store.state.heroes},
    coins() {return this.$store.state.coins}
  }
}
</script>

<style scoped>
.heroes {
  padding: 7px 0 0 7px;
  border: 6px solid grey;
  border-image: linear-gradient(to right, #999999, #dddddd, #999999);
  border-image-slice: 1;
  border-radius: 10px;
  margin-bottom: 10px;
}

.grid h2 {
  font-size: 22px;
}

</style>