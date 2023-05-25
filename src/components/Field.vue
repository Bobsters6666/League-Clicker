<template>
  <div class="template">
    <div class="enemy-box">
      <img :src="getImgUrl(enemies.displaying.enemy)" draggable="false"
      @click="handleClick">
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
export default {
  name: 'MyButtons',
  props: {
    msg: String
  },

  methods: {
    handleClick() {
      const enemy = this.enemies
      enemy.displaying.currentHealth -= this.player.damage
    },

    onEnemyDeath() {
      const minion = this.enemies.minion
      const displaying = this.enemies.displaying

      if (minion.current >= minion.total) {
        this.showBoss()
      } else {
        if (displaying.currentHealth <= 0) {
          minion.currentTypeIndex = Math.floor(Math.random() * minion.types.length)
          displaying.enemy = minion.types[minion.currentTypeIndex]
          displaying.currentHealth = displaying.totalHealth
          const newCoins = 4 + this.stage ** 2.3
          this.$store.commit('updateCoins', this.coins + newCoins);
          localStorage.setItem('coins', this.coins.toString());


          if (!this.isTrainingGround) {
            minion.current++;
          }
        }
      }
    },

    onBossDeath() {
      const minion = this.enemies.minion
      const displaying = this.enemies.displaying
      if (displaying.currentHealth <= 0) {
        this.$store.commit('updateStage')
        const newCoins = 30 + this.stage ** 4.7
        this.$store.commit('updateCoins', this.coins + newCoins)
   
        minion.current = 1
        this.showMinion()
        this.enemies.boss.currentTime = this.enemies.boss.totalTime
        this.$store.commit('updateBossStatus', false);
      }
    },

    showMinion () {
      this.$store.commit('updateBossStatus', false);
      const displaying = this.enemies.displaying
      const minion = this.enemies.minion

      displaying.enemy = minion.types[0]
      displaying.name = minion.name
      displaying.currentHealth = Math.floor(minion.currentHealth * 2.1 ** this.stage)
      displaying.totalHealth = displaying.currentHealth
    },


    showBoss() {
      this.$store.commit('updateBossStatus', true);
      const displaying = this.enemies.displaying
      const boss = this.enemies.boss

      displaying.enemy = boss.types[0]
      displaying.name = boss.name
      displaying.currentHealth = Math.ceil(boss.currentHealth * 2.2**this.stage)
      displaying.totalHealth = Math.ceil(boss.currentHealth * 2.2**this.stage)
    },

    getImgUrl(url) {
      return require(`../assets/enemies/${url}`);
    },
  },

  watch: {
    'enemies.displaying.currentHealth'(newValue) {
      gsap.to('.hp-remaining', {
        width: `${Math.ceil((newValue / this.enemies.displaying.totalHealth) * 100)}%`,
        duration: 0.3,
        ease: 'ease.inOut',
      });

      if (!this.isBoss) {
        this.onEnemyDeath();
      } else {
        this.onBossDeath();
      }
    },


    'enemy.boss.currentTime'(newValue) {
      gsap.to(".boss-timer", {
        width: `${(newValue / this.enemies.boss.totalTime) * 100}% `,
        duration: 0.1,
        ease: "ease.inOut"
      })
    },


    'isBoss'() {
      if (this.isBoss) {
        // Clear the previous interval
        clearInterval(this.bossInterval);
       
        // Create a new interval for the boss countdown
        this.bossInterval = setInterval(() => {
          if (this.enemies.boss.currentTime <= 0) {
            this.handleTrainingGround();
          } else {
            this.enemies.boss.currentTime -= 0.1;
          }
        }, 100);
      } else {
        // Clear the interval when isBoss becomes false
        clearInterval(this.bossInterval);
      }
    },
  },

  computed: {
    player() {return this.$store.state.player},
    enemies() {return this.$store.state.enemies},
    coins() {return this.$store.state.coins},
    stage() {return this.$store.state.stage},
    isTrainingGround() {return this.$store.state.isTrainingGround},
    isBoss() {return this.$store.state.isBoss}
  }
}
</script>

<style scoped>
.template {
  height: 60vh;
  width: 38vw;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.enemy-box img {
  filter: drop-shadow(10px 25px 10px rgba(3, 5, 53, 0.7));
  width: 430px;
  transition: ease-in-out 0.3s
}
.enemy-box:hover {
  opacity: 0.98;
  cursor: pointer;
}
.enemy-box:active {
  transform: scale(1.01) translateY(-5px);
}

</style>