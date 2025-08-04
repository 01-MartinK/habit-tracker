const dayNames = [
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
  return dayNames[now.getDay()];
}

export function GetMonth(): number {
  return new Date().getMonth();
}

export function GetYear(): number {
  return new Date().getFullYear();
}

export function GetFullDate() {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  return `${day} ${shortenedMonths[month]} ${year}`;
}

export function getDaysInMonth(month: number, year: number): Date[] {
  const date = new Date(year, month, 1);
  let days: Date[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  console.log(days[0].getDay());

  return days;
}