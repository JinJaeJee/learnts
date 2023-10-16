// console.log("hi")

class Department {

    protected employeeName: string[] = []

    constructor (public readonly dname:string,private id:number) {
    }
    popout (this: Department) {
        console.log("Show Department" + this.dname + "ID"+ this.id)

    }

    addEmployees(Ename:string){
        this.employeeName.push(Ename)
    }
    Printoutemployee(){
        console.log(this.employeeName)
        console.log(this.employeeName.length)
    }

}


class ItDepartment extends Department {
    admins: string[]

    constructor (id: number, admins: string[]){
        super("IT", id)
        this.admins = admins
    }
    addEmployees1(Ename:string){
        this.employeeName.push(Ename)
    }

}

class SecurityDepartment extends Department {
    private Lastreport: string

    get MostrecentReport() {
        return this.Lastreport
    }

    set MostrecentReport(value: string){
        this.addReport(value)
    }

    constructor (id: number, private reports:string[]){
        super("Security", id)
        this.Lastreport = reports[0]
    }
    addEmployees(Ename:string){
        this.employeeName.push(Ename)
    }
    printReport(){
        console.log(this.reports)
        console.log(this.Lastreport)
    }

    addReport(report:string){
        this.reports.push(report)
    }

}
//// Add new obj
const Accounting = new Department("Accounting", 0)
const Cleaning = new Department("Cleaning",1)

// XXX.popout()

// console.log(XXX)



// console.log(Accounting)
// console.log(Cleaning)

// ////use method on class in individual obj
// Accounting.addEmployees("max")
// Accounting.addEmployees("jab")
// Cleaning.addEmployees("mosss")

// Cleaning.Printoutemployee()
// Accounting.Printoutemployee()

// const IT = new ItDepartment(2, ["max"])

// IT.addEmployees("mosss")

// IT.addEmployees("mosss")
// console.log(IT)

const Security = new SecurityDepartment(4, ["Ok"])

Security.MostrecentReport = "Hi"
Security.MostrecentReport = "GOOD"

console.log(Security.MostrecentReport)
console.log(Security.printReport())