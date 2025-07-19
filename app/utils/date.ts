const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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

const shortenedMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function GetDay() {
  const now = new Date();
  return days[now.getDay()];
}

export function GetFullDate() {
  const now = new Date();
  const day = now.getDay();
  const month = now.getMonth();
  const year = now.getFullYear();
  return `${day} ${shortenedMonths[month]} ${year}`;
}
