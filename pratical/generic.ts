interface Persol {
    name:string;
    age:number;

    greeding(talk:string):void;
}

let user1: Persol;

user1 = {
    name: "Jiramet",
    age: 30,
    greeding(talk:string)  {
        console.log(talk + " My name is " + this.name + " I'm "+ this.age + " year old")
    }

}

user1.greeding("Yo")


interface Greetyo {
    fname: string;

    greet(word:string):void;
}

class Hi implements Greetyo {
    fname : string

    constructor(n:string) {
        this.fname = n
    }

    greet(word: string): void {
        console.log(this.fname+word)
    }
}

let user2 = new Hi("AA")

user2.fname = "BB"

console.log(user2.greet("AA"))


//////////////////// ทบทวน type

type Add = (
    n1: number,
    n2: number

) => number

let add: Add

add = (n1:number, n2:number) => {
    return n1+n2
}

console.log(add(1,2))



const Aname :Array<string> = []

// const promise: Promise<string> = new Promise((resolve,reject)=>{
//     setInterval(()=>{
//         resolve("Hi there")
//     }, 2000)
// })


function genericeMerge<T, U>(objA: T, objB: U) {
    return Object.assign({},objA,objB);
}

const test1 = genericeMerge({name:"maxi", job:["farter"]},{age:20})

console.log(test1.age)

////////
interface CourseBuild{
    title: string,
    desc: string,
    date: Date
}

function MakeCourse (
    title: string,
    desc: string,
    date: Date,
): CourseBuild {
    let CourseOne: Partial<CourseBuild> = {}
    CourseOne.title = title
    CourseOne.desc = desc
    CourseOne.date = date
    return CourseOne as CourseBuild
}

const Godname : Readonly<String[]> = ["tok", "pla"]

////// ทำไม่ได้เพราะใส่่ Readonly+<generic>
// Godname.push