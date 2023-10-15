console.log("hi")

class Department {

    private employeeName: string[] = []

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
}
//// Add new obj
const Accounting = new Department("Accounting", 0)
const Cleaning = new Department("Cleaning",1)

// XXX.popout()

// console.log(XXX)



console.log(Accounting)
console.log(Cleaning)

////use method on class in individual obj
Accounting.addEmployees("max")
Accounting.addEmployees("jab")
Cleaning.addEmployees("mosss")

Cleaning.Printoutemployee()
Accounting.Printoutemployee()

const IT = new ItDepartment(2, ["max"])

IT.addEmployees("mosss")

console.log(IT)


