
let username ;
let data ;

document.getElementById('submit').addEventListener('click', async ()=>{
    username = document.getElementById('username').value ;
    tweet = document.getElementById('tweet').value ;
    data = {username, tweet} ;

    const options = {
        headers : { 'Content-Type' : 'application/json' },
        method : 'POST', 
        body : JSON.stringify(data)   
    } ;

    const response = await fetch('../api', options) ;
    const status = await response.json() ;
    console.log(status) ;
    if(status == 'success') alert("posted") ;
}) ;
