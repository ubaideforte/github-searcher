let a = {};
let b = 1;

function timeConvert(num) {
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);

  if (rhours >= 0 && rhours < 10) {
    rhours = "0" + rhours;
  }
  if (rminutes >= 0 && rminutes < 10) {
    rminutes = "0" + rminutes;
  }
  return rhours + ":" + rminutes;
}

for (let i = 0; i < 1440; i = i + 15) {
  a = { ...a, [b]: timeConvert(i) };
  b++;
}

console.log("Value of a", a);

// let time = 1395;

// const hour = (time / 60).toFixed(3).split(".");
// console.log("Hour", hour);
// const minute = Math.floor(hour[1] / 60);

// let newTime = hour[0] + ":" + minute;

// console.log(newTime);

// let startTime = 0;
// let endTime = 1440;

// let findTime = 300;
// if (findTime < startTime) {
//   console.log("ERROR : input can not be less than 0");
// } else if (findTime > endTime) {
//   console.log("ERROR : input can not be less than 1440");
// } else {
//   function timeConvert(num) {
//     let hours = num / 60;
//     let rhours = Math.floor(hours);
//     let minutes = (hours - rhours) * 60;
//     let rminutes = Math.round(minutes);

//     if (rhours >= 0 && rhours < 10) {
//       rhours = "0" + rhours;
//     }
//     if (rminutes >= 0 && rminutes < 10) {
//       rminutes = "0" + rminutes;
//     }
//     return num + " minutes = " + rhours + ":" + rminutes;
//   }

//   // console.log(timeConvert(findTime));
// }
