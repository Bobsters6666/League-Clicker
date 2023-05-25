<template>
  <div class="template">
    <h1 class="placeholder">Clear stage 30 to <br /> unlock Shop </h1>
  </div>
</template>

<script>
export default {
  name: 'MythicsSection',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.placeholder {
  display: inline-block;
  width: 50%; /* Set a fixed width or adjust it according to your layout */
  padding: 10px;
  text-align: center;
  border: 3px solid white;
  margin: 30px 0 0 100px;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5)
}

</style>