// Your code here
function createEmployeeRecord(listObj){
    const obj = {}
    obj["firstName"] = listObj[0]
    obj["familyName"] = listObj[1]
    obj["title"] = listObj[2]
    obj["payPerHour"] = listObj[3]
    obj["timeInEvents"] = []
    obj["timeOutEvents"] = []
    return obj
}
function createEmployeeRecords(listArr) {
    return listArr.map(createEmployeeRecord);    
}
function createTimeInEvent(recordObj, date) {
    let newObj ={}
    newObj["type"] = "TimeIn";
    newObj["hour"] = parseInt(date.slice(date.length -4));
    newObj["date"] = date.slice(0,date.length -5);
    recordObj.timeInEvents.push(newObj);
    return recordObj    
}
function createTimeOutEvent(recordObj, date) {
    let newObj ={}
    newObj["type"] = "TimeOut";
    newObj["hour"] = parseInt(date.slice(date.length -4));
    newObj["date"] = date.slice(0,date.length -5);
    recordObj.timeOutEvents.push(newObj);
    return recordObj  
    
}
function hoursWorkedOnDate(recordObj, date) {
    /*for(let i = 0; i< recordObj.timeInEvents.length; i++){
        if(recordObj.timeInEvents[i].date === date){
            return Math.abs(recordObj.timeInEvents[i].hour - recordObj.timeOutEvents[i].hour) / 100
        }
    }*/
    let resIn = recordObj.timeInEvents.filter(x=> date === x.date)
    let resOut = recordObj.timeOutEvents.filter(x=> date === x.date)
        return Math.abs(resIn[0].hour - resOut[0].hour) / 100
    
}
function wagesEarnedOnDate(recordObj, date) {
        return recordObj.payPerHour * hoursWorkedOnDate(recordObj, date)
    
}
function allWagesFor(recordObj) {
    /*let total = 0;
    for(let i= 0; i< recordObj.timeInEvents.length; i++){
    total += wagesEarnedOnDate(recordObj, recordObj.timeInEvents[i].date)
    }
    return total*/
    return recordObj.timeInEvents.reduce((total, cur) => total + wagesEarnedOnDate(recordObj, cur.date),0)
}
function findEmployeeByFirstName(srcArr, firstName) {
    const res = srcArr.filter(x => x.firstName === firstName)
    return res[0]
    
}
function calculatePayroll(records) {
    return records.reduce((total,cur)=> total + allWagesFor(cur),0)
    
}
/*let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
let updatedBpRecord = createTimeInEvent(bpRecord, "2014-02-28 1400")
console.log(updatedBpRecord)

cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
console.log(hoursWorkedOnDate(cRecord, "0044-03-15"))

cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
console.log(wagesEarnedOnDate(cRecord, "0044-03-15"))

cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
        // Earns 324
        updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
        updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
        // Earns 54
        updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
        updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
        // 324 + 54
        console.log(updatedBpRecord)
        console.log(allWagesFor(cRecord))
        console.log(wagesEarnedOnDate(cRecord, "0044-03-15"))

        let src = [
            ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
            ["Natalia", "Romanov", "CEO", 150]
          ]
          let emps = createEmployeeRecords(src)
          let loki = findEmployeeByFirstName(emps, "Loki")
          //console.log(loki.familyName) 

        let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10])
        let sRecord = createEmployeeRecord(["Simba", "", "King", 100])

        let sTimeData = [
          ["2019-01-01 0900", "2019-01-01 1300"], // 4 * 100 = 400
          ["2019-01-02 1000", "2019-01-02 1300"]  // 3 * 100 = 300 ===> 700 total
        ]

        let rTimeData = [
          ["2019-01-11 0900", "2019-01-11 1300"], // 4 * 10 = 40
          ["2019-01-12 1000", "2019-01-12 1300"]  // 3 * 10 = 40 ===> 70 total ||=> 770
        ]

        sTimeData.forEach(function (d) {
          let [dIn, dOut] = d
          sRecord = createTimeInEvent(sRecord, dIn)
          sRecord = createTimeOutEvent(sRecord, dOut)
        })

        rTimeData.forEach(function (d, i) {
          let [dIn, dOut] = d
          rRecord = createTimeInEvent(rRecord, dIn)
          rRecord = createTimeOutEvent(rRecord, dOut)
        })

        let employees = [sRecord, rRecord]
        let grandTotalOwed = employees.reduce((m, e) => m + allWagesFor(e), 0) */

        const csvDataEmployees = [
            ["Thor", "Odinsson", "Electrical Engineer", 45],
            ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
            ["Natalia", "Romanov", "CEO", 150],
            ["Darcey", "Lewis", "Intern", 15],
            ["Jarvis", "Stark", "CIO", 125],
            ["Anthony", "Stark", "Angel Investor", 300]
          ]
    
          const csvTimesIn = [
            ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
            ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
            ["Natalia", ["2018-01-03 1700", "2018-01-05 1800", "2018-01-03 1300"]],
            ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
            ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
            ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
          ]
    
          const csvTimesOut = [
            ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
            ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
            ["Natalia", ["2018-01-03 2300", "2018-01-05 2300", "2018-01-03 2300"]],
            ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
            ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
            ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
          ]
          let employeeRecords = createEmployeeRecords(csvDataEmployees)
          employeeRecords.forEach(function (rec) {
            let timesInRecordRow = csvTimesIn.find(function (row) {
              return rec.firstName === row[0]
            })

            let timesOutRecordRow = csvTimesOut.find(function (row) {
              return rec.firstName === row[0]
            })

            timesInRecordRow[1].forEach(function(timeInStamp){
              createTimeInEvent(rec, timeInStamp)
            })

            timesOutRecordRow[1].forEach(function(timeOutStamp){
              createTimeOutEvent(rec, timeOutStamp)
            })
            
          })
          
          console.log(calculatePayroll(employeeRecords))
