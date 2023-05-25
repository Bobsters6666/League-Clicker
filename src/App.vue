<template>
  <div class="div">
    <div>
      <Buttons msg="Welcome to Your Vue.js App"/>
      <Dashboard msg="hi"/>
    </div>
    <div>
      <StageInfo msg="hello"/>
      <Field msg="hey"/>
    </div>
    <div>
      <Skills msg="hi" />
      <PlayerStats msg="hey" />
    </div>
  </div>
  
  
</template>

<script>
import Buttons from './components/Buttons.vue'
import Dashboard from './components/Dashboard.vue'
import Field from './components/Field.vue'
import StageInfo from './components/StageInfo.vue'
import Skills from './components/Skills.vue'
import PlayerStats from './components/PlayerStats.vue'

export default {
  name: 'App',
  components: {
    Buttons,
    Dashboard,
    Field,
    StageInfo,
    Skills,
    PlayerStats,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Monda:wght@400;700&display=swap');
#app{
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  background: url("/src/assets/background/sky.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.div {
  display: flex;
}

</style>
