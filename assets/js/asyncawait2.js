const cl = console.log;

function hrcall(){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            let err = Math.random() >= .3 ? false : true;
            if(!err){
                resolve(`candidate is shortlisted for first tech round`);
            }else{
                reject('looking for another candidate');
            }
        },1000)
    })
}

function firsttechround(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let err = Math.random() >= .3 ? false : true;
            if(!err){
                resolve(`candidate is shortlisted for second tech round`);
            }else{
                reject('candidate not even good in basics');
            }
        },1000)
    })
}

function secondtechround(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            let err = Math.random() >= .3 ? false : true;
            if(!err){
                resolve(`candidate is shortlisted for ML round`);
            }else{
                reject('candidate is struggling while writing code');
            }
        },1000)
    })
}

function MLround(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            let err = Math.random() >= .3 ? false : true;
            if(!err){
                resolve(`candidate is shortlisted for salarynegotiation`);
            }else{
                reject('candidate unable to explain previous project');
            }
        },1000)
    })
}

function salarynegotiation(){
    cl(`Congratulation Selected for this Profile`)
}

async function init(){
    try{
        let data = await hrcall();
        cl(data);
        let data2 = await firsttechround();
        cl(data2)
        let data3 = await secondtechround();
        cl(data3);
        let data4 = await MLround();
        cl(data4);
        salarynegotiation();
    }catch(err){
        cl(err);
    }
}

init();