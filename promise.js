const p = new Promise((resolve, reject)=>{
        //some asynchronous work
        setTimeout(()=>{
            //resolve(1);
            reject(new Error('failed transaction'));
        },2000);
       
});
p
    .then(result=>console.log(`Result: ${result}`))
    .catch(err=>console.log('Error:', err.message));