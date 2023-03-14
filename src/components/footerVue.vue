<template>
  <b-card class="w-100 footer-vw" type="dark">
    <hr class="bg-dark" />
    <ul class="float-left mt-3 footer-list">
      <li><b-icon icon="code"></b-icon> Douglass Enas</li>
      <br />
      <li><b-icon icon="github"></b-icon> 0u714w</li>
    </ul>

    <hr class="bg-dark" />
  </b-card>
</template>

<script>

export default {
  name: "footerVue",
};
</script>

<style scoped>
.footer-vw {
  background: rgb(27, 27, 27);
}
.footer-list {
  list-style: none;
  color: white;
}
.text {
  font-family: "Courier New", Courier, monospace;
}
</style>