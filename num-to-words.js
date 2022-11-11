const th = [
  "",
  "ming",
  "million",
  "milliard",
  "trillion",
  "kvadrillion",
  "kvintilion",
  "sekstilion",
  "septillion ",
  "oktilion",
];
const dg = [
  "nol",
  "bir",
  "ikki",
  "uch",
  "to'rt",
  "besh",
  "olti",
  "yetti",
  "sakkiz",
  "to'qqiz",
];
const tn = [
  "o'n",
  "o'n bir",
  "o'n ikki",
  "o'n uch",
  "o'n to'rt",
  "o'n besh",
  "o'n olti",
  "o'n yetti",
  "o'n sakkiz",
  "o'n to'qqiz",
];
const tw = [
  "yigirma",
  "o'ttiz",
  "qirq",
  "ellik",
  "oltmish",
  "yetmish",
  "sakson",
  "to'qson",
];

export default function toWords(s) {
  s = s.toString();
  s = s.replace(/[\, ]/g, "");
  if (s != parseFloat(s)) return "Raqam emas!";
  let x = s.indexOf(".");
  if (x == -1) x = s.length;
  if (x > 30) return "Juda katta son!";
  let n = s.split("");
  let str = "";
  let sk = 0;
  for (let i = 0; i < x; i++) {
    if ((x - i) % 3 == 2) {
      if (n[i] == "1") {
        str += tn[Number(n[i + 1])] + " ";
        i++;
        sk = 1;
      } else if (n[i] != 0) {
        str += tw[n[i] - 2] + " ";
        sk = 1;
      }
    } else if (n[i] != 0) {
      str += dg[n[i]] + " ";
      if ((x - i) % 3 == 0) str += "yuz ";
      sk = 1;
    }
    if ((x - i) % 3 == 1) {
      if (sk) str += th[(x - i - 1) / 3] + " ";
      sk = 0;
    }
  }

  if (x != s.length) {
    let y = s.length;
    if (y > 31 + x) return "Juda katta son!";
    str += "butun ";
    for (let i = x + 1; i < y; i++) {
      if ((y - i) % 3 == 2) {
        if (n[i] == "1") {
          str += tn[Number(n[i + 1])] + " ";
          i++;
          sk = 1;
        } else if (n[i] != 0) {
          str += tw[n[i] - 2] + " ";
          sk = 1;
        }
      } else if (n[i] != 0) {
        str += dg[n[i]] + " ";
        if ((y - i) % 3 == 0) str += "yuz ";
        sk = 1;
      }
      if ((y - i) % 3 == 1) {
        if (sk) str += th[(y - i - 1) / 3] + " ";
        sk = 0;
      }
    }
  }
  return str.replace(/\s+/g, " ");
}
