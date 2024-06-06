// no 1
// const width = 5;
// const length = 3;
// const area = length * width;

// console.log("Area : " + area);

// no 2
// const width = 5;
// const length = 3;
// const perimeter = 2 * (length + width);

// console.log("Perimater : " + perimeter);

// no 3
// const radius = 14;
// const diameter = 2 * radius;
// const circumference = 2 * 3.14;
// const area = 3.14 * radius * radius;

// console.log(
//   `Diameter : ${diameter}, Circumference : ${circumference}, Area: ${area}`
// );

// no 4
// const a = 80;
// const b = 65;
// const c = 180 - (a + b);

// console.log(`sudut c : ${c}`);

// no 5
const date1 = new Date("2023-11-01");
const date2 = new Date("2023-11-12");
const bedaTanggal = Math.abs(date1 - date2);
const bedaHari = Math.round(bedaTanggal / (1000 * 3600 * 24));

console.log(`perbedaan hari tanggal 1 & tanggal 2 = ${bedaHari}`);

// no 6
const hari = 400;
const tahun = Math.floor(hari / 365);
const bulan = Math.floor((hari % 365) / 30);
const tanggal = Math.floor((hari % 365) % 30);

console.log(`Tahun : ${tahun}, bulan : ${bulan}, hari : ${tanggal}`);
