<template>
  <div class="stats-container">
    <div class="stat">
      <p>Attack Damage<span>{{ Math.floor(player.damage) }}</span></p>
    </div>
    <div class="stat">
      <p>Heroes DPS<span> {{ Math.floor(damagePerSecond) }} </span></p>
      </div>
    <div class="stat">
      <p>Total DPS<span> {{ Math.floor(damagePerSecond + player.damage) }} </span></p> 
    </div>
    <div class="stat">
      <p>Mythics Damage <span> 0 </span> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyButtons',
  props: {
    msg: String
  },

  computed: {
    player() {return this.$store.state.player},
    damagePerSecond() {return this.$store.state.damagePerSecond}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stats-container{
  font-family: 'Monda', sans-serif;
  background-color: rgba(255, 255, 0, 0.3);
  height: 45vh;
  width: 24vw;
  display: grid;
  place-items: center;
  grid-template-rows: repeat(4, 20%);
  padding: 50px 0 0 0;
  border-top: 5px gray solid;
  border-left: 5px gray solid;
  background-color: #383838;
}
.stat {
  background-color: rgba(133, 133, 133, 0.9);
  width: 70%;
  height: 40px;
  position: relative;
  padding: 0 0 5px 5px;
}
.stat p {
  color: orange;
  font-size: 22px;
  position: absolute;
  margin: 0;
}
.stat span {
  font-size: 30px;
  color: white;
  margin-left: 15px;
}
</style>