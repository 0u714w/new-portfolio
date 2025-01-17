<template>
  <b-navbar toggleable="lg" class="navbar-horizontal shadow-lg">
    <b-navbar-brand>
      <b-icon icon="person-badge-fill" variant="dark"></b-icon>
      <span title="name" class="font-weight-bold mt-auto ml-3"> Doug Enas</span>
    </b-navbar-brand>

    <b-navbar-nav>
      <b-nav-item href="#" class="mt-auto ml-auto">
        <b-badge variant="white">
          <span title="ocupation" class="text-secondary">Software Composer </span>
          <b-icon variant="secondary" icon="code-slash"></b-icon></b-badge
      ></b-nav-item>
      <b-nav-item
        href="https://www.google.com/maps/place/Indianapolis,+IN/@39.7799637,-86.2731791,11z/data=!3m1!4b1!4m6!3m5!1s0x886b50ffa7796a03:0xd68e9df640b9ea7c!8m2!3d39.768403!4d-86.158068!16zL20vMGZ0eHc"
        class="mt-auto ml-auto"
      >
        <b-badge variant="white">
          <span title="location" class="text-secondary">Indianapolis, Indiana </span>
          <b-icon
            variant="secondary"
            scale="0.9"
            icon="geo-alt-fill"
          ></b-icon></b-badge
      ></b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto display-inline">
      <b-nav-item title="github" :href="github"
        ><b-icon icon="github" variant="dark"></b-icon
      ></b-nav-item>
      <b-nav-item :href="mail"
        ><b-icon icon="envelope-fill" variant="dark"></b-icon
      ></b-nav-item>
      <b-nav-item :href="linkedin"
        ><b-icon icon="linkedin" variant="dark"></b-icon
      ></b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "barraVue",
   data() {
          return {
                 github: 'https://github.com/0u714w',
                 mail: 'mailto:douglassenas@gmail.com',
                 linkedin: 'https://www.linkedin.com/in/doug-enas-a863b8191/',
          }
      }
};
</script>
