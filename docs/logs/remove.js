document.getElementById('submit').addEventListener('click', async () => {
    const username = await document.getElementById('username').value ;
    const api_url = `remove/${username}` ;
    const response = await fetch(api_url) ;
}) ;