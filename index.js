//async
console.log('Before');
displayCommits();
console.log('After');

async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos= await getRepositories(user.githubUserName);
        const commits= await getCommits(repos[0]);
        console.log(commits);
    }catch(err){
        console.log('Error ',err.message);
    }
    
}
function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Reading user from database..');
            resolve({id:id, githubUserName:'christianRibig5'});
        },2000);
    });
}
function getRepositories(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Calling github API...')
            resolve(['repo1','repo2','repo3']);
            //reject(new Error('Could not get repos'));
        },2000);
    });
    
}
function getCommits(repo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Calling github API...');
            resolve(['commits']);
        },2000)
    });
    
}
