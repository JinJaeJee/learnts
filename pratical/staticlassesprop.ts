class Department {
    static yearbuild = 2020
    constructor(protected name:string,protected id:number){

    }

    static yearprint(name:string){
        return console.log(name,this.yearbuild)
    }
}


const jj = new Department("jj", 0)


//////static props
console.log(Department.yearprint("x"))


//////abtract class คือ สามารถสร้างmethodใส่เข้าไปในนั้นได้โดยที่มันจะบังคับให้ ญาติ ที่ extent ไปต้องมีเรียก methodนี้ไปใช้ตลอด