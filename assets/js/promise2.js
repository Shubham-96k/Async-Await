const cl = console.log;

function hrcall(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let err = false;
            if(!err){
                resolve(`candidate is shortlisted for first round`);
            }else{
                reject(`Looking for another candidate`)
            }
        },1000)
    })
}

function firsttechround(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let err = false;
            if(!err){
                resolve(`candidate is shortlisted for second round`);
            }else{
                reject(`candidate is struggling in explanation of code`)
            }
        })
    })
}

function secondtechround(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let err = false;
            if(!err){
                resolve(`candidate is shortlisted for MLround`);
            }else{
                reject(`candidate is not good in basics`);
            }
        })
    })
}

function mLround(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            let err = false;
            if(!err){
                resolve(`candidate cleared mLround and shortlisted for salrynegotiation`)
            }else{
                reject(`candidate is struggling to writing the code`);
            }
        })
    })
}

function salrynegotiation(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            let err = false;
            if(!err){
                resolve(`Selected for this profile`);
            }else{
                reject(`candidate is not satisfied with the package its beyond budget`)
            }
        })
    })
}


hrcall()
    .then(result => {
        cl(result);
        return firsttechround()
    })
    .then(result => {
        cl(result);
        return secondtechround()
    })
    .then(result => {
        cl(result);
        return mLround()
    })
    .then(result => {
        cl(result);
       return salrynegotiation();    
    })
    .then(result =>{
        cl(result)
    })
    .catch(err => {
        cl(err)
    })