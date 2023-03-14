<template>
  <b-container>
    <b-card variant="dark" class="shadow-lg rounded mt-5">
      <span class="text-dark font-weight-bold">Languages </span>
      <br />
      <span class="text-secondary"> (always looking to learn more) </span>
      <hr />
      <br />
      <div v-for="bar in bars" :key="bar.value" class="row mb-2">
        <div class="col-md-7">
          <b-badge class="text-white col-ms-1" variant="dark">{{
            bar.title
          }}</b-badge>
          <b-progress
            :value="bar.value"
            variant="secondary"
            striped
            animated="animated"
          ></b-progress>
        </div>
      </div>
      <br />
    </b-card>
  </b-container>
</template>
<script>
export default {
    name: 'lenguagesVue',
    data() {
        return {
            bars: [
                {title: "PHP", value: 85, variant: "primary"},
                {title: "Vue", value: 75, variant: "success"},
                {title: "JavaScript", value:60, variant: "warning"},
                {title: "Python", value: 70, variant: "primary"},
                {title: "Django", value: 55, variant: "danger"},
                {title: "React", value: 56, variant: "primary"},
            ]
        }
    }
}
</script>
