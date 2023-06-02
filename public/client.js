let lat, lon, username ;
let data ;
let available = false ;

if("geolocation" in navigator){
    available = true ;
}

if(available){
    console.log("geolocation is available") ;
    navigator.geolocation.getCurrentPosition(async (position) => {
        lat = position.coords.latitude ;
        lon = position.coords.longitude ;
        document.getElementById("longitude").textContent = lon ;
        document.getElementById("latitude").textContent = lat ;
    }) ;

    document.getElementById('submit').addEventListener('click', async ()=>{
        username = document.getElementById('username').value ;
        data = {username, lat, lon} ;

        const options = {
            headers : { 'Content-Type' : 'application/json' },
            method : 'POST', 
            body : JSON.stringify(data)   
        } ;

        const response = await fetch('/api', options) ;
        const status = await response.json() ;
        console.log(status) ;
    }) ;
}
else{
    console.log("geolocation NOT available") ;
    response.end() ;
}