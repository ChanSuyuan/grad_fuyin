export const numberTrans = (a) => {
  if (a) {
    let tmp = parseFloat(a);
    if (tmp >= 1e12 || tmp <= -1e12) {
      return `${(parseFloat(a) / 1e12).toFixed(2)} 万亿`;
    }
    if (tmp >= 1e8 || tmp <= -1e8) {
      return `${(parseFloat(a) / 1e8).toFixed(2)} 亿`;
    }
    if (tmp >= 1e4 || tmp <= -1e4) {
      return `${(parseFloat(a) / 1e4).toFixed(2)} 万`;
    }
    return parseFloat(a).toFixed(3);
  } else {
    return "-"
  }
}