// VARIABLES

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 5, 14, 11, 30, 0);

// SETUP

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
let weekday = futureDate.getDay();
weekday = weekdays[weekday];

giveaway.textContent = `Give away ends on ${weekday}, ${month}, ${year}, ${hours}:${minutes}AM`;

const futureTime = futureDate.getTime();

// FUNCTION

const remainingTime = () => {
  const today = new Date().getTime();
  const left = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(left / oneDay);
  let hours = Math.floor((left % oneDay) / oneHour);
  let minutes = Math.floor((left % oneHour) / oneMinute);
  let seconds = Math.floor((left % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  const formatValues = (item) => (item < 10 ? `0${item}` : item);
  items.forEach((item, index) => {
    item.innerHTML = formatValues(values[index]);
  });
  if (left < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, GIFT give away has expired.</h4>`;
  }
};

let countdown = setInterval(remainingTime, 1000);

remainingTime();
