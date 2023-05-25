<template>
  <div class=template>
    <div class="stages">
      <p class="previous-stage">{{ stage - 1 }}</p>
      <p class="current-stage">{{ stage }}</p>
      <p class="next-stage"> {{ stage + 1 }}</p>
    </div>

    <div class="minion-counter">
      <img src="../assets/misc/stage_demon.png" alt="" class="src">
      {{ enemies.minion.current }} / {{ enemies.minion.total }}
    </div>

    <div class="hp-bar">
      <div class="hp-remaining">
      </div>
      <p> {{ enemies.displaying.name }} </p>
      <p class="current-health"> <span> HP </span> {{ Math.ceil(enemies.displaying.currentHealth) }}</p>
    </div>
    <div class="coins">
      <img src="../assets/misc/coin.png" alt="" class="src">
      <p> {{ Math.floor(coins) }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageInfo',
  props: {
    msg: String
  },
  computed: {
    coins() {return this.$store.state.coins},
    stage() {return this.$store.state.stage;},
    enemies() {return this.$store.state.enemies}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .template{
    height: 40vh;
    width: 38vw;
    font-family: 'Monda', sans-serif;
    position: relative;
  }

  .template p {
    margin: 0;
  }
  .stages {
    padding: 25px 0 80px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  .current-stage {
  display: grid;
  place-items: center;
  width: 80px;
  height: 80px;
  background-color: #ccc;
  border-radius: 50%;
  font-size: 28px;
}

.previous-stage, .next-stage{
  font-size: 21px;
  background-color: #bbb;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
}
.minion-counter{
  position: absolute;
  top: 20px;
  right: 30px;
  text-align: center;
  font-size: 22px;
  color: white;
}
.minion-counter img {
  width: 100px;
  display: flex;
  flex-direction: row;
}
.hp-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 40px;
  margin: 0 auto;
  background-color: grey;
  padding: 0 20px;
  border-radius: 10px;
  border-width: 7px;
  border-style: solid;
  border-image: linear-gradient(to right, black, (40, 40, 40)) 1;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.4);
  position: relative;
}
.hp-remaining {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to right, rgba(240, 26, 10, 0.936) 83%, #df941c 92%);
  border-radius: 5px;
}

.current-health {
  font-size: 40px;
  position: absolute;
  top: -40px;
  right: -50px;
  color: rgb(255, 255, 255);
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}

.current-health span {
  font-weight: bold;
  color: rgb(242, 42, 20);
}
.coins {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 40px;
  margin-top: 25px;
  color: rgb(214, 239, 21);
  text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.5);
}
.coins img {
  width: 80px;
}
</style>