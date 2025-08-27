import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(timezone);

export const tanggalTanpaJam = dayjs().tz("Asia/Jakarta").startOf("day").toDate(); // jam 00:00 WIB


export function toGmt7(utcDatetime, tz = "Asia/Jakarta") {
  return dayjs.utc(utcDatetime).tz(tz).format("YYYY-MM-DD"); // Format standar aman untuk DB
}
