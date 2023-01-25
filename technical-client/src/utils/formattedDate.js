export default function formattedDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let dateNow = "";

  if (day < 10) {
    dateNow += "0" + day;
  } else {
    dateNow += day;
  }

  if (month < 10) {
    dateNow += "0" + month;
  } else {
    dateNow += month;
  }

  dateNow += year;

  return dateNow;
}
