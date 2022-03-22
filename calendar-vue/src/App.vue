<template>
  <div class="table-responsive-xxl">
    <table class="table table-sm">
      <tr>
        <td>Целевое</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="text">
          Согласие<br />
          на зачисление<br />
          на целевое<br />
          для очки
        </td>
        <td class="strong">
          ПРИКАЗ<br />
          О ЗАЧИСЛЕНИИ<br />
          на целевое<br />
          для очки
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="text">
          Согласие<br />на зачисление <br />на целевое<br />
          для заочки
        </td>
        <td class="strong">
          ПРИКАЗ<br />
          О ЗАЧИСЛЕНИИ<br />
          на целевое<br />
          для заочки
        </td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td>Бюджет</td>
        <td class="text">
          Начинается<br />
          прием<br />
          документов <br />для очки и заочки
        </td>
        <td class="text">
          Заканчиваеется<br />
          прием <br />документов<br />
          для очки
        </td>
        <td class="text">
          Завершаются<br />
          вступительные <br />испытания<br />
          для очки
        </td>
        <td class="rating">
          РЕЙТИНГОВЫЕ<br />
          СПИСКИ <br />ПОСТУПАЮЩИХ<br />
          для очки
        </td>
        <td></td>
        <td class="text">
          Завершается<br />
          прием <br />документов<br />
          для заочки
        </td>
        <td class="strong">
          ПРИКАЗ<br />
          О ЗАЧИСЛЕНИИ<br />для очки
        </td>
        <td></td>
        <td class="rating">
          РЕЙТИНГОВЫЕ<br />
          СПИСКИ <br />ПОСТУПАЮЩИХ<br />
          для заочки
        </td>
        <td></td>
        <td></td>
        <td class="text">Согласие<br />на зачисление <br />для заочки</td>
        <td class="strong">
          ПРИКАЗ<br />
          О ЗАЧИСЛЕНИИ<br />
          для заочки
        </td>
        <td></td>
      </tr>
      <!--
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
-->
      <DataMount />
      <tr>
        <td>Контракт</td>
        <td class="text">
          Начинается<br />
          прием<br />
          документов<br />
          для очки и заочки
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="text">
          Завершается<br />
          прием<br />
          документов <br />для очки и заочки
        </td>
        <td></td>
        <td class="text">
          Завершаются<br />
          вступительные <br />испытания<br />
          для очки и заочки
        </td>
        <td></td>
        <td></td>
        <td class="rating">
          РЕЙТИНГОВЫЕ<br />
          СПИСКИ <br />ПОСТУПАЮЩИХ<br />
          для очки и заочки
        </td>
        <td class="text">
          Согласие<br />на зачисление <br />для заочки и заочки
        </td>
        <td class="strong">
          ПРИКАЗ<br />
          О ЗАЧИСЛЕНИИ<br />
          для очки и заочки
        </td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>


<script>
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
.table {
  padding: 10px;
}

td {
  padding: 30px;
}
.text:hover {
  color: #005aaa;
}
.strong {
  font-weight: bold;
}
.strong:hover {
  color: #eb1546;
}
.rating:hover {
  color: #a32b9b;
}
.number {
  color: #fff;
  background-image: linear-gradient(
    90deg,
    #2056ae 0%,
    #2056ae 20%,
    #4e47a7 40%,
    #9a2e9c 60%,
    #c62072 80%
  );
}

.number td:hover {
  transform: translate(5px, -5px);
  transition: 0.2s linear;
}

#start-date {
  border: 3px solid #fff;
  box-shadow: 1px 1px 15px rgb(21, 146, 48);
}
</style>
