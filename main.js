const list = $('.item');

function getCatFacts() {
  for (let i = 0; i <= 4; i++) {
    axios({
        method: 'get',
        url: 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5'
      })
      .then(function (response) {
        console.log(response.data);

        const catFact = $(list[i].children[0]);
        const catFactText = response.data[0].text;

        catFact.text(catFactText);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

function getCatImage() {
  axios({
      method: 'get',
      url: ' https://api.thecatapi.com/v1/images/search'
    })
    .then(function (response) {
      const imageUrl = response.data[0].url;
      document.querySelector('#image').src = imageUrl
    })
    .catch(function (error) {
      console.log(error);
    });
}