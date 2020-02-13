/// 


console.log('It work!');


        const container = document.querySelector('#container');
        const inputTitle = document.querySelector('#title');


        const header = document.querySelector('#header');
        const headerImg = document.querySelector('#header>img');




function gameOfThrones() {

    removeChilds(container)
      
axios({ 
    method: 'get', 
    url:'http://api.giphy.com/v1/gifs/search?q=Game-of-Thrones&api_key=dc6zaTOxFJmzC'
 })

  .then(res => {
    // WHEN SUCCESS

    let arry = res.data.data;
    console.log(arry);
    console.log(container);
    
    header.style.display = 'block';
    headerImg.src = 'imgs/Game-Of-Thrones.jpg';

    if ( inputTitle.value !== '' ) {
        gitTitle( arry, inputTitle.value ) 
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

  })
  .catch(err => {
    // WHEN FAILED
    console.log(err);
  });


}

function funnyCat() {
    removeChilds(container)
    axios({ 
        method: 'get', 
        url:`http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC`
     })
    
      .then(res => {
        // WHEN SUCCESS
    
        let arry = res.data.data;
        console.log(arry);
    
        

        header.style.display = 'block';
        headerImg.src = 'imgs/cats.jpg';

        if ( inputTitle.value !== '' ) {
            gitTitle( arry, inputTitle.value ) 
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



      })
      .catch(err => {
        // WHEN FAILED
        console.log(err);
      });
    
    
    }




    /// if 
    function gitTitle(arry,title) {

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