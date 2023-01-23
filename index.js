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
// // the start
// let employeeRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27]);
// // first move
// createTimeInEvent(employeeRecord, "0044-03-14 0900");
// createTimeOutEvent(employeeRecord, "0044-03-14 2100");
// // second move
// createTimeInEvent(employeeRecord, "0044-03-15 0900");
// createTimeOutEvent(employeeRecord, "0044-03-15 1100");

function allWagesFor() {
  let employeeRecord = [
    {
      firstName: "Julius",
      familyName: "Caesar",
      title: "General",
      payPerHour: 27,
      timeInEvents: [{ type: "TimeIn", date: "0044-03-14", hour: 900 }],
      timeOutEvents: [{ type: "TimeOut", date: "0044-03-14", hour: 2100 }],
    },
    {
      firstName: "Julius",
      familyName: "Caesar",
      title: "General",
      payPerHour: 27,
      timeInEvents: [{ type: "TimeIn", date: "0044-03-15", hour: 900 }],
      timeOutEvents: [{ type: "TimeOut", date: "0044-03-15", hour: 1100 }],
    },
  ];

  let total = 0;
  employeeRecord.forEach((eachRecord) => {
    total +=
      (eachRecord.payPerHour *
        (eachRecord.timeOutEvents[0].hour - eachRecord.timeInEvents[0].hour)) /
      100;
  });
  return total;
}

// TASK EIGHT
// hmm
// let employeeRecords = [
//   {
//     firstName: "Rafiki",
//     familyName: "Aide",
//     title: "",
//     payPerHour: 10,
//     timeInEvents: [
//       {
//         type: "TimeIn",
//         date: "2019-01-11",
//         hour: 0900,
//       },
//       {
//         type: "TimeIn",
//         date: "2019-01-12",
//         hour: 1000,
//       },
//     ],
//     timeOutEvents: [
//       {
//         type: "TimeOut",
//         date: "2019-01-11",
//         hour: 1300,
//       },
//       {
//         type: "TimeOut",
//         date: "2019-01-12",
//         hour: 1300,
//       },
//     ],
//   },
//   {
//     firstName: "Simba",
//     familyName: "King",
//     title: "",
//     payPerHour: 100,
//     timeInEvents: [
//       {
//         type: "TimeIn",
//         date: "2019-01-01",
//         hour: 0900,
//       },
//       {
//         type: "TimeIn",
//         date: "2019-01-02",
//         hour: 1000,
//       },
//     ],
//     timeOutEvents: [
//       {
//         type: "TimeOut",
//         date: "2019-01-01",
//         hour: 1300,
//       },
//       {
//         type: "TimeOut",
//         date: "2019-01-02",
//         hour: 1300,
//       },
//     ],
//   },
// ];
// let total = 0;
// employeeRecords.map((eachEmployee) => {
//   total +=
//     (eachEmployee.timeOutEvents[0].hour - eachEmployee.timeInEvents[0].hour) *
//       eachEmployee.payPerHour +
//     (eachEmployee.timeOutEvents[1].hour - eachEmployee.timeInEvents[1].hour) *
//       eachEmployee.payPerHour;
// });
// console.log(total / 100);

function calculatePayroll() {
  let employeeRecords = [
    {
      firstName: "Rafiki",
      familyName: "Aide",
      title: "",
      payPerHour: 10,
      timeInEvents: [
        {
          type: "TimeIn",
          date: "2019-01-11",
          hour: 900,
        },
        {
          type: "TimeIn",
          date: "2019-01-12",
          hour: 1000,
        },
      ],
      timeOutEvents: [
        {
          type: "TimeOut",
          date: "2019-01-11",
          hour: 1300,
        },
        {
          type: "TimeOut",
          date: "2019-01-12",
          hour: 1300,
        },
      ],
    },
    {
      firstName: "Simba",
      familyName: "King",
      title: "",
      payPerHour: 100,
      timeInEvents: [
        {
          type: "TimeIn",
          date: "2019-01-01",
          hour: 900,
        },
        {
          type: "TimeIn",
          date: "2019-01-02",
          hour: 1000,
        },
      ],
      timeOutEvents: [
        {
          type: "TimeOut",
          date: "2019-01-01",
          hour: 1300,
        },
        {
          type: "TimeOut",
          date: "2019-01-02",
          hour: 1300,
        },
      ],
    },
  ];
  let total = 0;
  employeeRecords.map((eachEmployee) => {
    total +=
      (eachEmployee.timeOutEvents[0].hour - eachEmployee.timeInEvents[0].hour) *
        eachEmployee.payPerHour +
      (eachEmployee.timeOutEvents[1].hour - eachEmployee.timeInEvents[1].hour) *
        eachEmployee.payPerHour;
  });
  total = total / 100;
  return total;
}
