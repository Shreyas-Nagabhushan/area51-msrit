
// const intervalId = setInterval(getData, 16) ;
let prev_data ;
let data ;
getData() ;

async function getData() 
{
    const response = await fetch('../api') ;
    data = await response.json() ;
    if(!prev_data ||  Object.keys(data).length != Object.keys(prev_data).length)
    {
        console.log('not equal') ;
        document.getElementById('tweets').innerHTML = '' ;
        console.log(Object.keys(data).length) ;
        for(item of data) {
            const root = document.createElement('p') ;
            const tweet = document.createElement('div') ;
            root.append(tweet) ;
    
            tweet.textContent = `${item.username} : ${item.tweet}` ;
    
            document.getElementById('tweets').append(root) ;
        }
    }
    prev_data = data ;
    await getData() ;
}
