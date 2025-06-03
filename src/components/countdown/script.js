const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const weekdays = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

/// Have the current date

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2024, 4, 1, 11, 30, 0)
// console.log(futureDate)
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `Le concours se termine le ${weekday} ${date} ${month} ${year} à ${hours}h${minutes}`;

//: Future time in ms ://

const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t)
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60min
  // 1d = 24h

  /// values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  /// calculate all values
  let days = Math.floor(t / oneDay);
  // days = Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //: set values array
  const values = [days, hours, minutes, seconds];

  // format -> add the 0 before values

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  /// Display the calculate value
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  /// Fix after the deadline pass
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Désolé, ce concours est expiré.</h4>`;
  }
}

//: Coutndown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
