
<template>
  <tr class="number">
    <td></td>
    <td id="start-date">20 июня<br />понедельник</td>
    <td>3 августа<br />среда</td>
    <td>4 августа<br />четверг</td>
    <td>8 августа<br />понедельник</td>
    <td>9 августа<br />вторник</td>
    <td>10 августа<br />среда</td>
    <td>12 августа<br />пятница</td>
    <td>13 августа<br />суббота</td>
    <td>14 августа<br />воскресенье</td>
    <td>15 августа<br />понедельник</td>
    <td>16 августа<br />вторник</td>
    <td>17 августа<br />среда</td>
    <td>19 августа<br />пятница</td>
    <td id="end-date">24 августа<br />среда</td>
  </tr>
</template>



<script>
export default {
  sortData: function () {
    const dateArray = [];
    const keys = Object.keys(this.item);
    const values = Object.values(this.item);
    for (let i = 0; i < keys.length; i += 1) {
      if (values[i]) {
        array.push(new Date(values[i].created).toLocaleString());
        Object.assign((this.dates = dateArray.map((date) => dateFormat(date))));
      }
    }
    return dateArray;
  },
};
</script>

