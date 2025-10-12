import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);

export const tanggalTanpaJam = dayjs().tz("Asia/Jakarta").startOf("day").toDate(); // jam 00:00 WIB


export function toGmt7(utcDatetime, tz = "Asia/Jakarta") {
  return dayjs.utc(utcDatetime).tz(tz).format("YYYY-MM-DD"); // Format standar aman untuk DB
}

// "25 Oktober 2024 16:45:30"
export const getWIBLocale = () => {
  return new Date().toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

// export const getWIBLocale = new Date().toLocaleString("id-ID", {
//     timeZone: "Asia/Jakarta",
//     year: "numeric",
//     month: "long",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   });
  