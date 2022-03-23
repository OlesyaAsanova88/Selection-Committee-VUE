<template>
  <DataMount />
</template>


<script>
import DateMount from "@/helpers/dateFormat";
/*import moment from "moment";*/
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
    /*moment().format();*/
  },
};
</script>


<style>
</style>
