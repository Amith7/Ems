// database import
const db = require("./db");

// get data all emp
const allEmployees = () => {
  return db.Employee.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        //details are stored on employees
        employees: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "No Data is Awailable",
      };
    }
  });
};
//Add Employee
const addEmployee = (id, uname, age, deseg,salary) => {
  return db.Employee.findOne({ uname,age,deseg,salary,}).then((result) => {
    if (result) {
      return {
        statusCode: 401,
        message: "Employee Id Already Exits",
      };
    } else {
      const newEmp = new db.Employee({
        id,
        uname,
        age,
        deseg,
        salary,
      });
      newEmp.save();
      return {
        statusCode: 200,
        message: "New Data is added successfully",
      };
    }
  });
};
module.exports = {
  allEmployees,addEmployee
};
