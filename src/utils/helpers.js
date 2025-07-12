// handles strings/numbers, fallback to 0 if undefined.
export function amtFormate(amount) {
  return Number(amount || 0).toLocaleString('en-IN');
}

export default function formatDateTime (dateTimeStr){
        if (!dateTimeStr) return "";
        const date = new Date(dateTimeStr);
        return date.toLocaleString("en-GB", {
            timeZone: "Asia/Kolkata",
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
    };