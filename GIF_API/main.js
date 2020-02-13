///

console.log('It work!');


window.addEventListener('load',function(){
   const loader = document.querySelector('.loader');
//   when window loading will hid this div
   loader.className+= " hidden";
})



        const container = document.querySelector('#container');
        const inputTitle = document.querySelector('#title').value;


        const header = document.querySelector('#header');
        const headerImg = document.querySelector('#header>img');



// get data about Game Of Thrones
function gameOfThrones() {

    removeChilds(container)
      
axios({ 
    method: 'get', 
    url:'http://api.giphy.com/v1/gifs/search?q=Game-of-Thrones&api_key=dc6zaTOxFJmzC'
 })

  .then(res => {
    // WHEN SUCCESS
    let arry = res.data.data;
    
    header.style.display = 'block';
    headerImg.src = 'imgs/Game-Of-Thrones.jpg';

    displayData(inputTitle,arry);


  })
  .catch(err => {
    // WHEN FAILED
    console.log(err);
  });


}



// get data about funny Cat
function funnyCat() {
    removeChilds(container)
    axios({ 
        method: 'get', 
        url:`http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC`
     })
    
      .then(res => {
        // WHEN SUCCESS
    
        let arry = res.data.data;

        header.style.display = 'block';
        headerImg.src = 'imgs/cats.jpg';

        displayData(inputTitle,arry);
        


      })
      .catch(err => {
        // WHEN FAILED
        console.log(err);
      });
    
    
    }




    /// if user search about title
    const gitTitle = function (arry,title){

        for (let i = 0; i < arry.length; i++) {
                
            let element = arry[i];

            if ( element.title === title ) {

                let div = document.createElement('div');
                div.setAttribute('class','boxs') ; 
                
                let p = document.createElement('p');
                p.setAttribute('class','title') ; 
                p.innerText= title;
                div.appendChild(p);
    
            
               let img_div = document.createElement('div');
               img_div.setAttribute('class','imgDiv') ; 
               img_div.style.backgroundImage= `url(${element.images.downsized_large.url})`;
               div.appendChild(img_div);
    
    
              container.appendChild(div);
            }
            
        }

    }


    /// remove all element in #container div
    const removeChilds = function (node) {
        let last;
        while (last = node.lastChild) node.removeChild(last);
    };




    // This function to display data in 
    const displayData = function (inputTitle,arry) {
        
    if ( inputTitle !== '' ) {
        gitTitle( arry, inputTitle ) 
    } else {

    for (let i = 0; i < arry.length; i++) {

        let element = arry[i]; 

        let div = document.createElement('div');
        div.setAttribute('class','boxs') ; 

        let p = document.createElement('p');
        p.setAttribute('class','title') ; 
        if (element.title === "") {
            p.innerText='Do not have title !'
        } else {
            p.innerText=element.title;
        }
        

        div.appendChild(p);

        
        let img_div = document.createElement('div');
        img_div.setAttribute('class','imgDiv') ; 
        img_div.style.backgroundImage= `url(${element.images.downsized_large.url})`;

    
        div.appendChild(img_div);


        container.appendChild(div);

    }  
    }

    }
