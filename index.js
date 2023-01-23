// Your code here

// TASK ONE
// let testEmployee;
// testEmployee = ["Gray", "Worm", "Security", 1];
// let result;
// result = createEmployeeRecord(testEmployee);
// console.log(result);

function createEmployeeRecord(fourElementArray) {
  let [firstName, familyName, title, payPerHour] = fourElementArray;
  let objectBuilt = {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: [],
  };
  return objectBuilt;
}

// TASK TWO
// let employeeRecords;
// let twoRows = [
//   ["moe", "sizlak", "barkeep", 2],
//   ["bartholomew", "simpson", "scamp", 3],
// ];
// let answer;
// answer = createEmployeeRecords(twoRows);
// console.log(answer);

function createEmployeeRecords(arrayOfArrays) {
  let result = [];
  for (let array of arrayOfArrays) result.push(createEmployeeRecord(array));
  return result;
}

// TASK THREE
// let answer;
// answer = createTimeInEvent(
//   {
//     firstName: "Gray",
//     familyName: "Worm",
//     title: "Security",
//     payPerHour: 1,
//     timeInEvents: [],
//     timeOutEvents: [],
//   },
//   "2014-02-28 1400"
// );
// console.log(answer);

function createTimeInEvent(employeeRecord, dateStamp) {
  let [dateString, hourString] = dateStamp.split(" ");
  employeeRecord.timeInEvents[0] = {
    type: "TimeIn",
    date: dateString,
    hour: +hourString,
  };
  return employeeRecord;
}

// TASK FOUR
// copy and tweak the code for createTimeInEvent() function

function createTimeOutEvent(employeeRecord, dateStamp) {
  let [dateString, hourString] = dateStamp.split(" ");
  employeeRecord.timeOutEvents[0] = {
    type: "TimeOut",
    date: dateString,
    hour: +hourString,
  };
  return employeeRecord;
}

// TASK FIVE
// let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000]);
// let timeIn = createTimeInEvent(cRecord, "0044-03-15 0900");
// let timeOut = createTimeOutEvent(cRecord, "0044-03-15 1100");
// hoursWorkedOnDate(cRecord, "0044-03-15");

function hoursWorkedOnDate(employeeRecord, dateForm = "") {
  let timeInHour = createTimeInEvent(employeeRecord, "0044-03-15 0900");
  let timeOutHour = createTimeOutEvent(employeeRecord, "0044-03-15 1100");
  let timeDifference =
    (timeInHour.timeInEvents[0].hour - timeOutHour.timeOutEvents[0].hour) / 100;
  return Math.abs(timeDifference);
}

// TASK SIX
// draw inspiration from TASK FIVE

function wagesEarnedOnDate(employeeRecord, dateForm = "") {
  let timeInHour = createTimeInEvent(employeeRecord, "0044-03-15 0900");
  let timeOutHour = createTimeOutEvent(employeeRecord, "0044-03-15 1100");
  let timeDifference =
    (timeOutHour.timeOutEvents[0].hour - timeInHour.timeInEvents[0].hour) / 100;
  let payOwed = employeeRecord.payPerHour * timeDifference;
  return payOwed;
}

// TASK SEVEN
// hmm
// I do not clearly understand what to do here because the data 
// provided was not sufficient

function allWagesFor(employeeRecord) {
//   return employeeRecord.reduce((accumulator, value) => {
    // console.log(accumulator + value);
    // return accumulator + value;
//   }, 0);
}

// TASK EIGHT
// hmm
// Because I could not fully solve TASK SEVEN, it is affecting this task

function calculatePayroll(arrayOfObjects) {
//   let grandTotalOwed = arrayOfObjects.reduce((accumulator, value) => {
    // console.log(accumulator, value);
//     return accumulator + allWagesFor(value);
//   }, 0);
//   return grandTotalOwed;
}
