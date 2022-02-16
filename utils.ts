// export const truncateString = (string: string = "", maxLength: number = 250) =>
//   string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

export const truncateString = (text: string, maxLength: number) => {
  let textArray = text.replace(/<[^>]*>?/gm, "").split(" ");
  if (text.length <= maxLength) return text;
  return textArray.slice(0, maxLength).join(" ") + "...";
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const today = new Date();
var strArray: string[] = [
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
export const getDuration = (date: string) => {
  const newDate = new Date(date);
  const month = newDate.getMonth();
  let millis = Math.floor(today.getTime() - newDate.getTime());
  let minutes = Math.floor(millis / 60000);
  let hours = Math.floor(minutes / 60);
  if (minutes < 60) return `${minutes}m`;
  if (hours < 24) return `${hours}h`;
  if (hours > 24 && today.getFullYear() === newDate.getFullYear()) {
    return `${strArray[month]} ${newDate.getDate()}`;
  }
  if (today.getFullYear() > newDate.getFullYear())
    return `${strArray[month]} ${newDate.getDate()}, ${newDate.getFullYear()}`;
};

export const getDateDetails = (date: string) => {
  const newDate: Date = new Date(date);
  let hour: number = newDate.getHours();
  let minute: number | string = newDate.getMinutes();
  let ampm: string = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  minute = minute < 10 ? "0" + minute : minute;
  const strTime = hour + ":" + minute + " " + ampm;
  const fullDate = `${
    strArray[newDate.getMonth()]
  } ${newDate.getDate()}, ${newDate.getFullYear()}`;
  return `${strTime} . ${fullDate}`;
};
