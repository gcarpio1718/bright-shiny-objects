// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(firstName, lastName){
    let fullName = {
        firstName: firstName,
        lastName: lastName
    }
    return fullName;
}
 
function setAge(firstName1, lastName1, age){
     let personAge = {
         firstName1: firstName1,
         lastName1: lastName1,
         age: age,
         }

     return personAge; 
 }

function incrementAge(firstName2, lastName2, incAge){
    let newAge = {
        firstName2: firstName2,
        lastName2: lastName2,
        incAge: incAge 
    }

    return newAge;
}

function fixCar (make, model, year, needsMaintenance){
    let repair = {
        make: make,
        model: model,
        year: year,
        needsMaintenance: needsMaintenance
    }

    return repair;

    
}







// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
