const dates =
   ['2022-06-20',
      '2022-08-03',
      '2022-08-04',
      '2022-08-08',
      '2022-08-09',
      '2022-08-10',
      '2022-08-12',
      '2022-08-13',
      '2022-08-14',
      '2022-08-15',
      '2022-08-16',
      '2022-08-17',
      '2022-08-19',
      '2022-08-24']

const dateFormat = (date) => {

   return new Intl.DateTimeFormat("ru", {
      weekday: "long",
      month: "long",
      day: "numeric"
   }).format(new Date(date));

}

export default dates.map((date) => dateFormat(date));