try {
    class Http{
    //Get
        async get(url){
           const response =  await fetch(url)
           .then(data => data.json())
           return response
        }
    }

    const btn = document.querySelector('button')
    btn.addEventListener('click' , ()=>{
        const firstName = document.querySelector('.firstName').value
        const lastName = document.querySelector('.lastName').value
        new Http()
            .get(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
            .then(result => document.querySelector('.output').textContent = result.value.joke)
    })
} catch (error) {
    
}