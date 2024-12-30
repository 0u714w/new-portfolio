<template>
  <b-container>
    <b-card variant="dark" class="shadow-lg rounded mt-5">
      <span class="text-dark font-weight-bold">programming</span>
      <br />
      <hr />
      <br />
      <div v-for="bar in bars" :key="bar.value" class="row mb-2">
        <div class="col-12">
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
                {title: "php", value: 50, variant: "primary"},
                {title: "typescript", value: 39, variant: "warning"},
                {title: "python", value: 66, variant: "primary"},
                {title: "javascript", value: 70, variant: "warning"},
                {title: "html", value: 80, variant: "primary"},
                {title: "css", value: 80, variant: "warning"},
                {title: "sql", value: 60, variant: "primary"},
                {title: "bash", value: 40, variant: "warning"},
            ]
        }
    }
}
</script>
