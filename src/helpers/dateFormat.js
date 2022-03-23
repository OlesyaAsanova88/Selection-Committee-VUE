/*var moment = require('moment');
moment().format();*/

const dates =
   ['2022-06-20T00-00-00',
      '2022-08-03-00-00-00',
      '2022-08-04-00-00-00',
      '2022-08-08-00-00-00',
      '2022-08-09-00-00-00',
      '2022-08-10-00-00-00',
      '2022-08-12-00-00-00',
      '2022-08-13-00-00-00',
      '2022-08-14-00-00-00',
      '2022-08-15-00-00-00',
      '2022-08-16-00-00-00',
      '2022-08-17-00-00-00',
      '2022-08-19-00-00-00',
      '2022-08-24-00-00-00']

const dateFormat = (date) => {

   return new Intl.DateTimeFormat("ru", {
      weekday: "long",
      month: "long",
      day: "numeric"
   }).format(new Date(date));

}

const d = dates.map((date) => dateFormat(date));

export default dateFormat();