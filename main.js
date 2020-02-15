console.log("The Empire Strikes Back");

function Movieinformation() {
  
axios({
    method: 'GET',
    url: 'https://swapi.co/api/films/2/?format=json'
  })
    .then(function(response) {
      // handle success
  
      document.querySelector('#titleMovie').innerText=response.data.title;
      console.log(titleMovie);
     
      document.querySelector('#openingcrawl').innerText=response.data.opening_crawl;
      console.log(openingcrawl);
    
      document.querySelector('#Director').innerText=response.data.director;
      console.log(Director);

      document.querySelector('#Producer').innerText=response.data.producer;
      console.log(Producer);

      document.querySelector('#releaseDate').innerText=response.data.release_date;
      console.log(releaseDate );

      console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}

