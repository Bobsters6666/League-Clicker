<template>

  <!-- Player -->
  
  <div class="player grid">
    
    <div class="left-section">
      <img src="../../assets/misc/swordmaster.png" alt="" class="image" draggable="false">
    </div>
    <div class="mid-section">
      <h2>Sword Master</h2>
      <h5>Level: {{ player.level }}</h5>
      <p>Click Damage: {{ player.damage }}</p>
    </div>
    <div class="right-section" :class="{canBuy: coins >= player.levelUpCost}"
      @click="handlePlayerLevelUp">
      <div class="top">
        <img src="../../assets/misc/coin.png" alt="" class="src">
        <p>{{ Math.floor(player.levelUpCost) }}</p>
      </div>
      <div class="bottom" :class="{canBuy: coins >= player.levelUpCost}">
        <h3>Level up <br /> + {{ player.damageIncreaseOnLevelUp }} DPC</h3>
      </div>
    </div>
  </div>

  <!-- Skill one - Judgement -->
  <div class="judgement grid">
    <div class="left-section">
      <img src="../../assets/spells/judgement.png" alt="" class="image" draggable="false">
    </div>
    <div class="mid-section">
      <h2>Judgement</h2>
      <h5>Level: {{ skills.judgement.level }}</h5>
      <p>DPS: {{ skills.judgement.damage }}</p>
    </div>
    <div class="right-section" :class="{canBuy: coins >= skills.judgement.levelUpCost}"
      @click="handlePlayerLevelUp">
      <div class="top">
        <img src="../../assets/misc/coin.png" alt="" class="src">
        <p>{{ Math.floor(skills.judgement.levelUpCost) }}</p>
      </div>
      <div class="bottom" :class="{canBuy: coins >= skills.judgement.levelUpCost}">
        <h3>Level up <br /> + {{ skills.judgement.damageIncreaseOnLevelUp }} DPS</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerSection',
  props: {
    msg: String
  },

  methods: {
    handlePlayerLevelUp() {
      const player = this.player;
      let coins = this.coins;

      if (coins >= player.levelUpCost) {
        player.level++;
        player.damage += player.damageIncreaseOnLevelUp;
        coins -= player.levelUpCost;
        player.levelUpCost = Math.ceil(10 + 1.20 ** player.level);
        player.damageIncreaseOnLevelUp = Math.floor(1.12 ** player.level);
        
        this.$store.state.coins = coins;
      }
    }
  },

  computed: {
    player() {return this.$store.state.player},
    skills() {return this.$store.state.skills},
    coins() {return this.$store.state.coins}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.grid {
  display: grid;
  grid-template-columns: 20% 48% 29%;
  gap: 10px;
  font-size: 18px;
}
.grid h2, .grid h3, .grid h5, .grid p{
  margin: 0;
}

.player, .judgement{
  padding: 7px 0 0 7px;
  border: 6px solid grey;
  border-image: linear-gradient(to right, #999999, #dddddd, #999999);
  border-image-slice: 1;
  border-radius: 10px;
  margin-bottom: 10px;
}
.container img {
  width: 90%;
}
.mid-section p {
  margin: 40px 0 0 0;
}
.right-section {
  margin: 0 10px 5px 0;
  transition: ease-in-out 0.3s;
  border: 3px solid white;
  border-radius: 5px;
  background-color: gray;
}
.right-section:hover{
  opacity: 0.88;
  cursor: pointer;
}
.right-section .top {
  display: flex;
  gap: 8px;
  padding: 7px 0 7px 10px;
  font-size: 22px;
}
.right-section .bottom {
  margin-bottom: 5px;
  background-color: darkgray;
  padding: 10px 10px;
}
.right-section img {
  width: 30px;
  height: 30px;
}
.right-section.canBuy {
  background-color: rgb(255, 145, 0);
}
.right-section .bottom.canBuy{
  background-color: rgb(255, 94, 0);
}

</style>