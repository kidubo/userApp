// const doWorkCallback =(callback)=>{
//     setTimeout(() => {
//         //callback('This is my error', undefined)
//         callback(undefined, [1, 2, 5, 7, 8])
//     }, 2000);
// }

// doWorkCallback((error, result)=>{
//     if(error){
//         return console.log(error)
//     }
//     console.log(result)
// })

// ABOVE EXAMPLE IS HOW CALLBACK FUNCTION ARE WORKING


const doWorkPromises = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve([12,68,28,40,4])
        reject('Things went wrong')

    }, 2000);
})

doWorkPromises.then((result) => {
    console.log('success :', result)  
}).catch((error) =>{
    console.log('Error!! :', error)
})
