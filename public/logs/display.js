getData() ;
async function getData() {
    const response = await fetch('/api') ;
    const data = await response.json() ;
    console.log(data) ;

    for(item of data) {
        const root = document.createElement('p') ;
        const username = document.createElement('div') ;
        const lat = document.createElement('div') ;
        const lon = document.createElement('div') ;
        const timestamp = document.createElement('div') ;
        root.append(username, lat, lon, timestamp) ;

        username.textContent = `username : ${item.username}` ;
        lat.textContent = `latitude : ${item.lat} ` ;
        lon.textContent = `longitude : ${item.lon}` ;
        timestamp.textContent = `time : ${item.timestamp}` ;

        document.body.append(root) ;
    }
}