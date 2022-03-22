const dateFormat = (Date) => {

   let date = new Date(0, 06, 20);

   new Date = dateArray.map
   ['20 июня понедельник',
   '3 августа среда',
   '4 августа четверг',
   '8 августапонедельник',
   '9 августа вторник',
   '10 августа среда',
   '12 августа пятница',
   '13 августа суббота',
   '14 августа воскресенье',
   '15 августа понедельник',
   '16 августа вторник',
   '17 августа среда',
   '19 августа пятница',
      '24 августа среда']



   let formatter = new Intl.DateTimeFormat("ru", {
      weekday: "long",
      month: "long",
      day: "numeric"
   });

   return new Intl.DateTimeFormat(formatter.format(date));

}

export default dateFormat;