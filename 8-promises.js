const doWorkPromise = new Promise((resolve, reject) => {
     setTimeout(() => {
        //resolve([1,4,7])
        reject('error');
     }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success', result);
}).catch((error) =>{
    console.log('error', error);
})