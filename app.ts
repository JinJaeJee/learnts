


function addHandle(n1: number, n2: number, cb:(num:number) => void){
    const result = n1+n2
    cb(n1)
}


addHandle(10,20, (re)=> {
    console.log(re)
})


function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });