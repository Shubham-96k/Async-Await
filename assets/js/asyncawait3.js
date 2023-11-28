const cl =  console.log;

const blogform = document.getElementById('blogform');
const blogtitleControl = document.getElementById('blogtitle');
const blogpostControl = document.getElementById('blogpost');
const blogcontainer = document.getElementById('blogcontainer');

//this is our dumy database
let blogsArr=[];

const createBlogobj = eve => {
    eve.preventDefault();
    let newobj = {
        blogtitle : blogtitleControl.value,
        blogpost : blogpostControl.value.trim()
    }
    blogsArr.push(newobj)
    // blogobjAPI(newobj)
    //     .then((result)=>{
    //         // cl(result);
    //         blogsArr.push(result);
    //         return readblogApi(result)
    //     })
    //     .then(()=>{
    //         // cl(result, 'fetched data successfully....')
    //         Swal.fire({
    //             position: 'top-end',
    //             icon: 'success',
    //             title: 'Blog Post Added',
    //             showConfirmButton: false,
    //             timer: 1000
    //           })
    //         blogtemplating(blogsArr);
    //     })
    //     .catch((error)=>{
    //         cl(error)
    //         Swal.fire({
    //             icon: 'error',
    //             title: error,
    //             timer: 1000
    //           })
    //     })

    //     .finally(()=>{
    //         eve.target.reset();
    //     })

    async function init(){
        try{
            let data = await blogobjAPI(newobj);
            cl(data)
            let data2 = await readblogApi(data);
            cl(data2)
            
            blogtemplating(blogsArr);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Blog Post Added',
                showConfirmButton: false,
                timer: 1000
            })

        }catch(err){
            cl(err)
            Swal.fire({
                icon: 'error',
                title: err,
                timer: 1000
              })
        }
        eve.target.reset()
    }
    init()
}

const blogobjAPI = eve => {
    let promise = new Promise((resolve,reject)=> {
        setTimeout(()=> {
            // let err = Math.random() >= .3 ? false : true;
            let err = false;
            if(!err){
                resolve(eve);
            }else{
                reject('something went wrong!!!')
            }
        },2000)
    })

    return promise
}


const readblogApi = (eve) => {
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // let err = Math.random() >= .3 ? false : true;
            let err = false;
            if(!err){
                resolve(eve);
            }else{
                reject('unable to fetch data!!!');
            }
        })
    })
    return promise;
}

const blogtemplating = eve => {
    let result = '';
    eve.forEach(ele => {
        result += `
        <div class="col-md-4">
            <div class="card">
                <div class="card-header bg-dark text-white">
                    <h1>${ele.blogtitle}</h1>
                </div>
                <div class="card-body">
                    <p>${ele.blogpost}</p>
                </div>
                <div class="card-footer text-right bg-dark">
                    <button class="btn btn-primary">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
        
        `
    })
    blogcontainer.innerHTML = result;
}
// blogtemplating(blogsArr);










blogform.addEventListener('submit', createBlogobj)
