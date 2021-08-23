var employees = [];


function Employee(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
}

var liam = new Employee("Liam Firestarter", "THE Boss", 880000, "full-time")
var kevin = new Employee("Kevin Pietersen", "Batsman", 30000, "full-time")
var lewis = new Employee("Lewis Hamilton", "Track Master", 1000000, "part-time")



Employee.prototype.printEmployeeForm = function () {
    console.log(this.name, this.jobTitle, this.salary, this.status)
}




liam.printEmployeeForm();
kevin.printEmployeeForm();
lewis.printEmployeeForm();

lewis.status = "contract";



console.log(employees)
