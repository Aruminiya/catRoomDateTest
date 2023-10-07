function calendarSystem(event) {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    locale: "zh-tw",
    navLinks: true,
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,listWeek",
    },
    locale: "zh-tw",

    events: event,
  });
  calendar.render();
}

axios
  .get("http://localhost:3000/orders")
  .then((res) => {
    // console.log(res.data);
    let dateData = res.data;
    let work = [];
    dateData.forEach((element) => {
      // console.log(element);
      work.push({
        title: element.room,
        start: element.date.checkIn,
        end: element.date.checkOut,
      });
    });
    console.log(work);

    calendarSystem(work);
  })
  .catch((err) => {
    console.log(err);
  });
