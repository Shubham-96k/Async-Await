
const cl = console.log;



// what is Promise?
//Promise is a js object which gives some value in future.

//uses of promise

//promise are used to handle asynchronous opertion in js
//promise gives data(success) or error.

//states of promise

//pending >> waiting for result.
//fulfill/resolve >> data fetched successfully
//reject >> failed to get data or may be for other reasons (error)
//settled >> promise is either resolve or reject always get response

//Benefit of using promise 

//it improves readability of code
//better handling async behaviour
//better error handling 
//better flow of control

//how to create promise?


//callback function >> A function is passed in another function as an argument.
//a function is called in another function is called call back function.
//function that has to be executed after the execution of another function 


// let promo = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let err = Math.random() >= .3 ? false : true;
//         if(!err){
//             resolve(`data stored or fetched successfully`)
//         }else{
//             reject(`something went wrong!!!`)
//         }
//     },2000)
// })


// promo
// .then((res)=>{
//     cl(res);
// })
// .catch((err)=>{
//     cl(err);
// })


const formControl = document.getElementById("loginform");
const emailControl = document.getElementById("email");
const passwordControl = document.getElementById("password");

//jhon@gmail.com and zaqZAQ!



const loginApi = eve => {
    let promise = new Promise((resolve,reject) => {
        setTimeout(()=> {
            if("jhon@gmail.com" === eve.email && "zaqZAQ!" === eve.password){
                resolve(`Login Successfull`)
            }else{
                reject(`Incorrect email or password`)
            }
        },1000)
    })

    return promise;
}

// loginApi()


const onSubmit = eve => {
    eve.preventDefault();
    let obj = {
        email : emailControl.value,
        password: passwordControl.value
    };
    loginApi(obj)
        .then((result)=>{
            Swal.fire({
                icon: 'success',
                title: result,
                timer: 2000
              })
        })
        .catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: error,
                timer: 2000
              })
        })
    
        .finally(()=>{
            formControl.reset()
        })
    
}




formControl.addEventListener('submit', onSubmit);