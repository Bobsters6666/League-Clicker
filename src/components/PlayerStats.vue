<template>
  <div class=test>
    hello
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
  .test{
    background-color: yellow;
    height: 45vh;
    width: 24vw;
  }
</style>