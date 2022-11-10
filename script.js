async function fetchData(){
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ea8fcc0be5msh014de60d714562cp198165jsn0e43a32ae48c',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };

   const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/venue?name=Hollywood%20bowl&page=1', options)
   const record = await res.json()

   document.getElementById("concert").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
}
fetchData();