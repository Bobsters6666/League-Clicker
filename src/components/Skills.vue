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
    background-color: rgba(235, 235, 195, 0.6);
    height: 55vh;
    width: 24vw;
  }
</style>