console.log('working!');

const myKey = `2b29b3805d3c4badbdf48a68febe2faf`;
const urlPage = `https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=${myKey}`;

//to head Lines 
axios({
        method: 'get',
        url: urlPage
    })
    .then(function (res) {
        let arrayt = res.data.articles;
        //to loop through the articles 
        for (let i = 0; i < arrayt.length; i++) {
            console.log(arrayt.length);


            //create variables to save the title, image, author, description, URL of the articles 
            let title = res.data.articles[i].title;
            let image = res.data.articles[i].urlToImage;
            let author = res.data.articles[i].author;
            let description = res.data.articles[i].description;
            let urlNew = res.data.articles[i].url;

            //create div elements  
            let div = document.createElement("div");
            let divs = document.createElement("div");
            let divss = document.createElement("div");
            let divsss = document.createElement("div");

            //div styling 
            div.style.display = "flex";
            div.style.flexDirection = "column"
            div.style.color = "black";

            //create h3 for the articles titles 
            let par = document.createElement("h3");
            par.style.display = "block"
            //create img for the articles cover image 
            let img = document.createElement("img");
            //create paragraph for the articles author
            let authorr = document.createElement("p");
            //create paragraph for the articles description 
            let desc = document.createElement("p");
            //create button and anchor tag for the articles url  
            let urlNewsButton = document.createElement("BUTTON");
            let urlnewsLink = document.createElement("a");


            par.innerHTML = title;
            img.classList.add("image");
            img.src = image;
            authorr.innerHTML = author;
            desc.innerHTML = description;
            urlnewsLink.href = urlNew;
            urlnewsLink.innerText = "See The Article"
            urlNewsButton.appendChild(urlnewsLink);
            divs.appendChild(img);
            divss.appendChild(authorr);
            divss.appendChild(desc);
            divs.appendChild(divss);
            divs.classList.add("divs");
            urlNewsButton.classList.add("buttons");
            divsss.appendChild(urlNewsButton);
            divsss.classList.add("divsss");



            div.appendChild(par);
            div.appendChild(divs);
            div.appendChild(divsss);

            document.querySelector(".content").appendChild(div);
        }
    })
    .catch(function (error) {
        console.log(error);
    })

//Technology News
function Tecnews() {
    axios({
            method: 'get',
            url: `https://newsapi.org/v2/everything?q=apple&from=2020-02-12&to=2020-02-12&sortBy=popularity&apiKey=${myKey}`
        })
        .then(function (res) {
            let arrayt = res.data.articles;
            for (let i = 0; i < arrayt.length; i++) {
                console.log(arrayt.length);

                let title = res.data.articles[i].title;
                let image = res.data.articles[i].urlToImage;
                let author = res.data.articles[i].author;
                let description = res.data.articles[i].description;
                let urlNew = res.data.articles[i].url;


                let div = document.createElement("div");
                let divs = document.createElement("div");
                let divss = document.createElement("div");
                let divsss = document.createElement("div");


                div.style.display = "flex";
                div.style.flexDirection = "column"
                div.style.color = "black";
                let par = document.createElement("h3");
                par.style.display = "block"
                let img = document.createElement("img");
                let authorr = document.createElement("p");
                let desc = document.createElement("p");
                let urlNewsButton = document.createElement("BUTTON");
                let urlnewsLink = document.createElement("a");


                par.innerHTML = title;
                img.classList.add("image");
                img.src = image;
                authorr.innerHTML = author;
                desc.innerHTML = description;
                urlnewsLink.href = urlNew;
                urlnewsLink.innerText = "See The Article"
                urlNewsButton.appendChild(urlnewsLink);
                divs.appendChild(img);
                divss.appendChild(authorr);
                divss.appendChild(desc);
                divs.appendChild(divss);
                divs.classList.add("divs");
                urlNewsButton.classList.add("buttons");
                divsss.appendChild(urlNewsButton);
                divsss.classList.add("divsss");



                div.appendChild(par);
                div.appendChild(divs);
                div.appendChild(divsss);

                document.querySelector(".news-content").appendChild(div);
            }
        })
        .catch(function (error) {
            console.log(error);
        })

}
//SEARCH articles
function searchF() {
    let q = document.querySelector('#serc').value;
    axios({
            method: 'get',
            url: `https://newsapi.org/v2/everything?q=${q}&from=2020-02-14&sortBy=popularity&apiKey=${myKey}`
        })
        .then(function (res) {
            let hr = document.createElement("hr")
            document.querySelector('header').appendChild(hr)
            let arrayt = res.data.articles;
            for (let i = 0; i < arrayt.length; i++) {
                console.log(arrayt.length);
                let title = res.data.articles[i].title;
                let image = res.data.articles[i].urlToImage;
                let author = res.data.articles[i].author;
                let description = res.data.articles[i].description;
                let urlNew = res.data.articles[i].url;

                let div = document.createElement("div");
                let divs = document.createElement("div");
                let divss = document.createElement("div");
                let divsss = document.createElement("div");


                div.style.display = "flex";
                div.style.flexDirection = "column"
                div.style.color = "black";
                let par = document.createElement("h3");
                par.style.display = "block"
                let img = document.createElement("img");
                let authorr = document.createElement("p");
                let desc = document.createElement("p");
                let urlNewsButton = document.createElement("BUTTON");
                let urlnewsLink = document.createElement("a");


                par.innerHTML = title;
                img.classList.add("image");
                img.src = image;
                authorr.innerHTML = author;
                desc.innerHTML = description;
                urlnewsLink.href = urlNew;
                urlnewsLink.innerText = "See The Article"
                urlNewsButton.appendChild(urlnewsLink);
                divs.appendChild(img);
                divss.appendChild(authorr);
                divss.appendChild(desc);
                divs.appendChild(divss);
                divs.classList.add("divs");
                urlNewsButton.classList.add("buttons");
                divsss.appendChild(urlNewsButton);
                divsss.classList.add("divsss");



                div.appendChild(par);
                div.appendChild(divs);
                div.appendChild(divsss);

                document.querySelector(".key-content").appendChild(div);
            }
        })
        .catch(function (error) {
            console.log(error);
        })

}