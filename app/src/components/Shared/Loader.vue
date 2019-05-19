<template>
  <div class="loader-container">
    <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .loader-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
</style>
