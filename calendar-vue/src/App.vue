<template>
  <DataMount />
</template>


<script>
import DateMount from "@/helpers/dateFormat";

export default {
  name: "App",
  components: {
    DateMount,
  },
  data: () => ({
    dates: null,
  }),

  mounted() {
    this.dates = dateArray.map((date) => dateFormat(date));
  },
};
</script>


<style>
</style>
