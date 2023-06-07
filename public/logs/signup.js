document.getElementById("submit").addEventListener("click", async () => {
    const username = document.getElementById("username").value ;
    const password = document.getElementById("password").value ;
    const data = {username, password} ;
    const options = {
        headers : { 'Content-Type' : 'application/json' },
        method : 'POST', 
        body : JSON.stringify(data)
    } ;
    const response = await fetch('../usradd', options) ;
    const status = await response.json() ;
    console.log(status) ;
}) ;