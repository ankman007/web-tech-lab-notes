// fetch 

// function used for making HTTP requests to fetch resources
// (JSON style data, images, files)
// simplifies asynchronous data fetching in JS and used for interacting with APIs to retrive and send data asynchronous over the web
// fetch(url, {options})

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response =>{
        if (!response.ok)
            throw new Error("Could not fetch resource.")
        else 
            return response.json();
    })
    .then(data =>{
        console.log(data.name);
    })
    .catch(error =>{
        console.log(error);
    })