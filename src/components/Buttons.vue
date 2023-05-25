<template>
  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  <div class=container>
    <div class=icons-container>
      <span class="material-icons ">settings</span>
      <span class="material-icons ">volume_up</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyButtons',
  props: {
    msg: String
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
</style>
