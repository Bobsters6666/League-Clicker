<template>
  <div class=template>
    <div v-for="(skill, key) in skills" :key="key" class="spells-container">
      <div v-if="skill.unlocked" class="spell ">
        <img :src="getImgUrl(skill.image)" alt="" class="spell-unlocked" @click="handleSkillUse(key)">
      </div>
      <div v-else class="spell">
         <img :src="getImgUrl(this.lock)" alt="" class="src">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyButtons',
  props: {
    msg: String
  },

  data() {
    return {
      lock: 'lock.png'
    }
  },

  methods: {
    getImgUrl(url) {
      return require(`../assets/spells/${url}`);
    },

    handleSkillUse(key) {
      Object.keys(this.skills).forEach((skillKey) => {
        if(key == skillKey) {
          this.enemies.displaying.currentHealth -= this.skills[skillKey].damage
        }
      })
    }
  },

  computed: {
    enemies() {return this.$store.state.enemies},
    skills() {return this.$store.state.skills}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template{
  background-color: rgba(235, 235, 195, 0.13);
  height: 55vh;
  width: 24vw;
}
.spells-container {
  padding: 30px 30px 30px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 30px;
}
.spell-locked {
  padding: 50px 55px;
  background-color: #cccccc;
  border-radius: 50%;
}

.spell img {
  width: 70%;
  border-radius: 50%;
  text-align: center;
}
.spell-unlocked:hover {
  cursor: pointer;
  opacity: 0.95;
}
</style>