let frnum;
let lanum;
let sennum;

function setup(){

   frnum = select("#fr");
   lanum = select("#la");
   sennum = select("#sen");


}

refresh = ()=>{
  location.reload();
}
const box = document.querySelector('.box')
 DisplaySinglePokemon = () => {



    let imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${Number(sennum.value())}.png`;
    let abilityurl = `https://pokeapi.co/api/v2/berry/${Number(sennum.value())}/`
    let nameurl = `https://pokeapi.co/api/v2/pokemon/${Number(sennum.value())}`
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
    const power = document.createElement('span');
    power.classList.add('call');
    const size = document.createElement('span');
    size.classList.add('call');
    const smoothness = document.createElement('span');
    smoothness.classList.add('call2');
    const dryness = document.createElement('span');
    dryness.classList.add('call2');
    const growth = document.createElement('span');
    growth.classList.add('call2');
    
    


    axios.get(nameurl)
      .then((res) => {


        box.appendChild(cardDiv);

        img.src = imgUrl;
        cardDiv.appendChild(imgBx)
        imgBx.appendChild(img);

        name.innerText = res.data.name;
        cardDiv.appendChild(details);
        details.appendChild(name);


        return axios.get(abilityurl);
      })
      .then((response) => {


        power.innerText = 'Natural Gift Power : ' + response.data.natural_gift_power;
        name.appendChild(power);

        size.innerText = 'Size: ' + response.data.size;
        power.appendChild(size);
        smoothness.innerText = ' -Smoothness: ' + response.data.smoothness;
        size.appendChild(smoothness);
        dryness.innerText = ' -Dryness: ' + response.data.soil_dryness;
        size.appendChild(dryness);
        growth.innerText = ' -Growth Time: ' + response.data.growth_time;
        size.appendChild(growth);
        
        
        
      })

      .catch(err => {
        console.log(err);
      });
  }

DisplayMultiplePokemon = () => {



  for (let i = Number(frnum.value()); i <= Number(lanum.value()) ; i++) {
    let imgUrl = `https://pokeres.bastionbot.org/images/pokemon/${i}.png`;
    let abilityurl = `https://pokeapi.co/api/v2/berry/${i}/`
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
    const power = document.createElement('span');
    power.classList.add('call');
    const size = document.createElement('span');
    size.classList.add('call');
    const smoothness = document.createElement('span');
    smoothness.classList.add('call2');
    const dryness = document.createElement('span');
    dryness.classList.add('call2');
    const growth = document.createElement('span');
    growth.classList.add('call2');
    
    


    axios.get(nameurl)
      .then((res) => {


        box.appendChild(cardDiv);

        img.src = imgUrl;
        cardDiv.appendChild(imgBx)
        imgBx.appendChild(img);

        name.innerText = res.data.name;
        cardDiv.appendChild(details);
        details.appendChild(name);


        return axios.get(abilityurl);
      })
      .then((response) => {


        power.innerText = 'Natural Gift Power : ' + response.data.natural_gift_power;
        name.appendChild(power);

        size.innerText = 'Size: ' + response.data.size;
        power.appendChild(size);
        smoothness.innerText = ' -Smoothness: ' + response.data.smoothness;
        size.appendChild(smoothness);
        dryness.innerText = ' -Dryness: ' + response.data.soil_dryness;
        size.appendChild(dryness);
        growth.innerText = ' -Growth Time: ' + response.data.growth_time;
        size.appendChild(growth);
        
        
        
      })

      .catch(err => {
        console.log(err);
      });
  }
}