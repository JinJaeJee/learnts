console.log("im running yo")


const Name = 11
let sum;


function add(num1:number, num2:number){
    let sum = num1+num2
    return sum
}

add(10,1)

console.log(sum)

// Code goes here!

const add1 = (a:number,b:number) => a+b

console.log(add(1,2))

function sum1 (a:number,b:number){
    return a+b
}

console.log(sum1(3,2))


const tryout : (whatever: number | string) => void = try2 => console.log(try2)

tryout("jiramet")

const button = document.querySelector("button")

if (button) {
    button.addEventListener('click', event => console.log(event))
}

const summmer = (a:number, b:number, c:number =1 ) => a+b+c

console.log(summmer(5,5))



const BBB = ["chicken", "seal", "lion"]
const RRR = ["rabbit", "cat", "dog", ...BBB]

const [x1, x2, ...remaining] = RRR


console.log(remaining)

const AAA = {
    name: "jiramet",
    age: 30 
}

const XXX ={...AAA}
// RRR.push(...BBB)
console.log(RRR)

console.log(XXX)


const Add = (...numbers:number[]) => {
    return numbers.reduce((sumRes,lastValue) => {
        return sumRes+lastValue
    })

}

console.log(Add(10,11,50,55.05,12.5,101,6.1))

const Personal = {
    Fname: "parichat",
    age: 29,
    address: "Phatum",
    Pet: {
        dogName: "Shubu",
        catName: "Ladnar"
    }
    
}


const {Fname:firstName , Pet:herPet} = Personal

const {dogName} = herPet

console.log(dogName)