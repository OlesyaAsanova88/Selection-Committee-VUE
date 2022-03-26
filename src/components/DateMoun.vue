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

      <tr class="number">
        <td v-for="(date, i) in dates" :key="`i-${date}`" id="start-date">
          {{ i }}
        </td>
      </tr>

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
  props: {
    dates: [String],
  },
  mounted() {
    const data = this.dates;

    return Object.keys(data)
      .map((date) => {
        return {
          date: date,
          data: data[dates],
        };
      })
      .sort(function (a, b) {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

        return dateA - dateB;
      })
      .reverse();
  },
};
</script>



