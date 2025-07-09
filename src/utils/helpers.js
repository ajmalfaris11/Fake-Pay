// handles strings/numbers, fallback to 0 if undefined.
export function amtFormate(amount) {
  return Number(amount || 0).toLocaleString('en-IN');
}
