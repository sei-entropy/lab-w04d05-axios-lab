let url1 = 'https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=JAPA6ks1pZrvUfvD7KTx6kJlRuzuMHHZ'

const container = document.querySelectorAll(".container")


let arr = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];



axios({
        method: 'get',
        url: url1
    })

    .then(res => {



        for (let i = 0; i < 10; i++) {

            let hr = document.createElement("hr")


            let h2 = document.createElement("h2");
            h2.innerText = res.data.results[i].byline;
            document.querySelector('.container').appendChild(h2);
            arr[i].push(h2);



            let p2 = document.createElement("p");
            p2.innerText = res.data.results[i].book_title;
            document.querySelector('.container').appendChild(p2);
            arr[i].push(p2);


            let p3 = document.createElement("p");
            p3.innerText = res.data.results[i].book_author;
            document.querySelector('.container').appendChild(p3);
            arr[i].push(p3);



            let p4 = document.createElement("p");
            p4.innerText = res.data.results[i].summary;
            document.querySelector('.container').appendChild(p4);
            arr[i].push(p4);

            document.querySelector('.container').appendChild(hr);

        }

    })

    .catch(err => {

        console.log(err);
    })


function userInput() {
    let userInput = document.getElementById('byline').value;
    // console.log(userInput);

    for (let i = 0; i < 10; i++) {
        // console.log(userInput);
        if (userInput == arr[i][0].innerText) {
            console.log(userInput);
            for (let x = 0; x < 4; x++) {
                // console.log(x);
                console.log(arr[i][x]);
            }
        }
    }

}