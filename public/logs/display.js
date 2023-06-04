getData() ;

async function getData() {
    const response = await fetch('/api') ;
    const data = await response.json() ;
    console.log(data) ;
    
    for(item of data) {
        const root = document.createElement('p') ;
        const tweet = document.createElement('div') ;
        const timestamp = document.createElement('div') ;
        root.append(tweet, timestamp) ;

        tweet.textContent = `${item.username} : ${item.tweet}` ;
        timestamp.textContent = `time : ${item.timestamp}` ;

        document.body.append(root) ;
    }
    
   
}