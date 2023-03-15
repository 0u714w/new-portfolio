<template>
  <b-container>
    <b-card variant="dark" class="container shadow-lg rounded mt-5">
      <span class="text-dark font-weight-bold">technologies of use</span> <br />

      <hr />

      <div class="img-content">
        <i
          class="_icons m-2"
          v-for="(svg, index) in items"
          :id="'icon:' + index"
          :key="index"
          v-on:mouseover="colorful('icon:' + index)"
          v-on:mouseleave="colorless('icon:' + index)"
          :class="svg.data"
        ></i>
      </div>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "tecnologiesVue",
  data() {
    return {
      items: [
        { data: "devicon-javascript-plain" },
        { data: "devicon-vuejs-plain" },
        { data: "devicon-nodejs-plain" },
        { data: "devicon-python-plain" },
        { data: "devicon-laravel-plain" },
        { data: "devicon-docker-plain" },
        { data: "devicon-mysql-plain" },
        { data: "devicon-mongodb-plain" },
        { data: "devicon-git-plain" },
        { data: "devicon-bash-plain" },
        { data: "devicon-html5-plain" },
        { data: "devicon-css3-plain" },
        { data: "devicon-sqlite-plain" },
        { data: "devicon-php-plain" },
        { data: "devicon-linux-plain" },
      ],
    };
  },
  methods: {
    colorful(id) {
      document.getElementById(id).classList.add("colored");
    },
    colorless(id) {
      document.getElementById(id).classList.remove("colored");
    },
  },
};
</script>

<style scoped>
._icons {
  font-size: 40px;
  transition: 500ms;
}
._icons:hover {
  transition: 500ms;
}
</style>
