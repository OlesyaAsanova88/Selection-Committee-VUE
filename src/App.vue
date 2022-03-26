<template>
  <DataMount :dates="dates" />
</template>


<script>
import DateMount from "./components/DateMoun.vue";
import dateFormat from "@/helpers/dateFormat";
import formateredDate from "@/helpers/dateFormat";

export default {
  name: "App",
  components: {
    DateMount,
  },
  data: () => ({
    dates: null,
  }),

  mounted() {
    this.dates = dateFormat();
    formateredDate;
  },
};
</script>


<style>
</style>
