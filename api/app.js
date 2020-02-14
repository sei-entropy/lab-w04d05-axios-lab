


const box = document.querySelector('.box')

function showCharacters() {
    for (let i = 1; i <= 5; i++) {
        let imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${i}.png`;
        let abilityurl= `https://pokeapi.co/api/v2/berry/${i}/`
        let nameurl = `https://pokeapi.co/api/v2/pokemon/${i}`
      const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
      const img = document.createElement('img');
        img.classList.add('img');
      const imgBx = document.createElement('div');
        imgBx.classList.add('imgBx');
      const details = document.createElement('div');
        details.classList.add('details');
      const name = document.createElement('h2');
        name.classList = 'name5';
      const ability = document.createElement('span');
        ability.classList.add('call');

  
        axios.get(nameurl)
  .then((res) => {


    box.appendChild(cardDiv);

    img.src= imgUrl;     
    cardDiv.appendChild(imgBx)
    imgBx.appendChild(img);

    name.innerText = res.data.name;
    cardDiv.appendChild(details);
    details.appendChild(name);


    return axios.get(abilityurl); 
  })
  .then((response) => {


    ability.innerText = 'natural_gift_power : ' + response.data.smoothness;
    name.appendChild(ability);
    
  })

      // axios({
      //   method: 'get',
      //   url: {abilityurl: `https://pokeapi.co/api/v2/berry/${i}/`,nameurl:`https://pokeapi.co/api/v2/pokemon/${i}`}
      // })
      //   .then(res => {

      //     const cardDiv = document.createElement('div');
      //     cardDiv.classList.add('card');
      //   const img = document.createElement('img');
      //     img.classList.add('img');
      //   const imgBx = document.createElement('div');
      //     imgBx.classList.add('imgBx');
      //   const details = document.createElement('div');
      //     details.classList.add('details');
      //   const name = document.createElement('h2');
      //     name.classList = 'name5';
      //     // const br = document.createElement('br');
      //     // br.classList.add('br');
      //     const ability = document.createElement('span');
      //           ability.classList.add('call');

      //     box.appendChild(cardDiv);

      //     img.src= imgUrl;     
      //     cardDiv.appendChild(imgBx)
      //     imgBx.appendChild(img);

      //     name.innerText = res.data.name;
      //     cardDiv.appendChild(details);
      //     details.appendChild(name);

      //     ability.innerText = 'natural_gift_power : ' + nameurl.res.data.smoothness;
      //     // name.appendChild(br);
      //     name.appendChild(ability);

      //   })

        .catch(err => {
          console.log(err);
        });
    }
  }
  // let i = 1;
  // let imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${i}.png`;
  // const showCharacters = () => {
  //   axios({
  //       url: `https://pokeapi.co/api/v2/pokemon/${i}`,
  //       method: 'get' 
  //   })

  //       .then(result => {
  //           result.data.forEach( item => {
  //             const cardDiv = document.createElement('div');
  //               cardDiv.classList.add('card');
  //             const img = document.createElement('img');
  //               img.classList.add('img');
  //             const imgBx = document.createElement('div');
  //               imgBx.classList.add('imgBx');
  //             const details = document.createElement('div');
  //               details.classList.add('details');
  //             const name = document.createElement('h2');
  //               name.classList = 'card';


  //               box.appendChild(cardDiv);

  //               img.src= imgUrl;     
  //               cardDiv.appendChild(imgBx)
  //               imgBx.appendChild(img);

  //               name.innerText = item.name;
  //               cardDiv.appendChild(details);
  //               details.appendChild(name);



  //           })
  //       })
  //       .catch(err => {
  //           console.log(err)
  //       })
  //   }