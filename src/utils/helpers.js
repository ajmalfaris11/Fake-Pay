// handles strings/numbers, fallback to 0 if undefined.
export function amtFormate(amount) {
  return Number(amount || 0).toLocaleString('en-IN');
}

export function formatDateTime (dateTimeStr){
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

export function generateAcNo () {
    let number = "";
    for (let i = 0; i < 4; i++) {
      number += Math.floor(Math.random() * 10);
    }
    return number;
  };