//url for the loading https://mir-s3-cdn-cf.behance.net/project_modules/disp/9df4a732138533.567091182d1e6.gif

//select the html tag
const filmsName = $('.element').children('h4');
const filmsid = $('.element').children('.all');
const filmsDes = $('.element').children('.des');

function getfilms() {

    for (let i = 0; i < 7; i++) {
        axios({
                method: 'get',
                url: 'https://swapi.co/api/films/'
            })
            .then(res => {

                // to get the data from the api
                let name = res.data.results[i].title;
                let numberOfFilm = res.data.results[i].episode_id;
                let des = res.data.results[i].opening_crawl;

                // select all the element 
                const curentName = $(filmsName[i]);
                const curentid = $(filmsid[i]);
                const curentDes = $(filmsDes[i]);

                //to  send the element  api as text in html
                curentName.text(name);
                curentid.text(numberOfFilm);
                curentDes.text(des);

                // to check the conosle 
                console.log(name);
                console.log(numberOfFilm);
            })
            .catch(err => {
                console.log(err);
            })
    }

}