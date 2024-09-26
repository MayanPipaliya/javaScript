class Employee {
    constructor(name, salary, resignationReason, workingdays) {
        this.name = name;
        this.salary = salary;
        this.resignationReason = resignationReason;
        this.workingdays = workingdays;
    }

    getDetails() {
        return `Name: ${this.name}, Salary: ${this.salary}, Resignation Reason: ${this.resignationReason}, Working Days: ${this.workingdays}`;
    }

    resign(reason) {
        this.resignationReason = reason;
        console.log(`${this.name} has resigned. Reason: ${this.resignationReason}`);
    }
}

class Manager extends Employee {
    constructor(name, salary, resignationReason, department, workingdays) {
        super(name, salary, resignationReason, workingdays);
        this.department = department;
    }

    getDetails() {
        return `${super.getDetails()}, Department: ${this.department}`;
    }

    approveLeave(employee) {
        if (employee.workingdays > 26) {
            console.log(`${this.name} has approved Resignation for ${employee.name}`);
        }else{
            console.log(`${this.name} has not be Approved Resignation Because Working Days is under 26 days `);
        }
    }
}

let emp1 = new Employee("John Doe", 50000, "Personal Reasons", 28);
console.log(emp1.getDetails());

let mgr1 = new Manager("Mgr Jane Smith", 80000, "Personal Reasons for john's and I Approve Resignation", "Sales", 30);
console.log(mgr1.getDetails());

emp1.resign("Personal reasons");
mgr1.approveLeave(emp1);
