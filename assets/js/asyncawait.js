const cl = console.log;


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

const onSubmit = eve => {
        eve.preventDefault();
        let obj = {
            email : emailControl.value,
            password: passwordControl.value
        };
            // .then((result)=>{
            //     Swal.fire({
            //         icon: 'success',
            //         title: result,
            //         timer: 2000
            //       })
            // })
            // .catch((error)=>{
            //     Swal.fire({
            //         icon: 'error',
            //         title: error,
            //         timer: 2000
            //       })
            // })
        
            // .finally(()=>{
            //     formControl.reset()
            // })


     async function init(){
                try{
                   let data = await loginApi(obj)
                   cl(data)
                   Swal.fire({
                           icon: 'success',
                           title: data,
                           timer: 2000
                         })
                         formControl.reset()
               }catch(err){
                         cl(err)
                        Swal.fire({
                           icon: 'error',
                           title: err,
                           timer: 2000
                         })
                         formControl.reset()
            }
        }       
            
        init()

    
    

}

formControl.addEventListener('submit', onSubmit);