// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Collect employee dataw

const collectEmployees = function() {
  
  // built the array for employees.
  
  const employees = []

  // set addemployee condition to true while collect employees function is ran
  let addemployee = true;
  while (addemployee) {

    // collected user input for firstName lastName and salary

    let firstName = prompt('enter first name');

    let lastName = prompt('enter last name');

    let getsalary = prompt('enter salary');
   
    // made sure salary was turned from a string to an integer
    let salary = parseFloat(getsalary);
    // set function to run in case salary entry is not a number
    while (isNaN(getsalary)) {

      //prompted user to enter valid number.
     getsalary = prompt('enter valid salary');
      salary = getsalary;
    }

    
 // added definition of employee to include traits and then linked them back to entries from user
    const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: `$${salary}`,
    }
    
    //confirmed if i wanted to add employee. if yes it will re run the function with addemployee being true. if cancel it will be false moving to next step.

    addemployee = confirm('add another employee?');
  
// pushes employee arrays into employees array

    employees.push(employee);

// sorts the employee array by last name  

    employees.sort () ;

  }
return employees;
// returns back the value for employees.

}
  // TODO: Get user input to create and return an array of employee objects

// Display the average salary
const displayAverageSalary = function(employeesArray) {
let totalsalary = 0
for (const employee of employeesArray) {
  //make sure total salary konws that employees salary is also an integer
totalsalary = totalsalary + Number(employee.salary);
//leverage total salary to find employees average salary
averagesalary = totalsalary / employeesArray.length;
}
console.log(`average salary: $${averagesalary}`)
return averagesalary; 

}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length)
  const randomemployee = employeesArray[randomIndex];
  console.log(`random employee: ${randomemployee.firstName} ${randomemployee.lastName}`);
};



  // TODO: Select and display a random employee

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
