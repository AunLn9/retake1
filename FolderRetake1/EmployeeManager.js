class EmployeeManager {
    constructor() {
        this.employees = [];
    }
//add new id
    generateUniqueId() {
        let newId;
        const existingIds = this.employees.map(emp => emp.id);
        do {
            newId = Math.floor(Math.random() * 9000) + 1000; 
        } while (existingIds.includes(newId)); 
        return newId;
    }
//
    addEmployee(name, position) {
        const employeeExists = this.employees.some(
            emp => emp.name.toLowerCase() === name.toLowerCase() && emp.position.toLowerCase() === position.toLowerCase()
        );

        if (employeeExists) {
            return null;
        }

        const newEmployee = {
            id: this.generateUniqueId(),
            name: name,
            position: position
        };

        this.employees.push(newEmployee);
        return newEmployee;
    }
    removeEmployee(id) {
        const index = this.employees.findIndex(emp => emp.id === id);
        if (index !== -1) {
            this.employees.splice(index, 1);
            return true; 
        }
        return false; 
    }
    findEmployeeByName(name) {
        return this.employees.filter(emp => emp.name.toLowerCase() === name.toLowerCase());
    }
    sortEmployeeByName() {
        this.employees.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    }

    updateEmployee(employee) {
        const index = this.employees.findIndex(emp => emp.id === employee.id);
        if (index !== -1) {
            this.employees[index] = employee;
            return true;
        }
        return false;
    }
//1.1
    promoteEmployee(id, newPosition) {
        const employee = this.employees.find(emp => emp.id === id);
        if (employee) {
            employee.position = newPosition;
            console.info(`Employee ${employee.name} (ID: ${employee.id}) was promoted to ${newPosition}.`);
            return true; 
        }
        return false; 
    }
}
const manager = new EmployeeManager();
console.log(manager.addEmployee("John Doe", "Developer")); 
console.log(manager.addEmployee("John Doe", "Designer")); 
console.log(manager.findEmployeeByName("John Doe")); 
manager.sortEmployeeByName();
console.log(manager.employees); 
manager.promoteEmployee(1, "Senior Developer"); 
console.log(manager.employees);