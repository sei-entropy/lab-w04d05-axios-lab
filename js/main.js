let createli = $("#body");
let input = document.querySelector("#search");
function searchcr() {
    //let name = document.querySelector("#name").value;
    // let endPoint = $("#search").val();
    let baseUrl = "https://api.coindesk.com/v1/bpi/currentprice/";
    let midPoint = input.value.toUpperCase();
    let END_POINT = '.json';
    const url1 = baseUrl + midPoint +END_POINT;
    //createli.prepend(`<tr><td>${name}</td></tr>`);
    axios({
        method: 'get',
        url: url1
    })

        .then(res => {
            //console.log(res.data);
            createli.text("");
            let rate = res.data.bpi[midPoint].rate;
             let counrty = res.data.bpi[midPoint].description;
             let date = res.data.time.updated;
            // console.log(`${res.data}.${END_POINT}`);
            createli.prepend(`<tr class="table-primary"><td>${counrty}</td><td>${rate} ${counrty}</td><</td><td>${date}</td>/tr>`);

        })
        .catch(err => {
            console.log(err);
        });

}


//createli.prepend(`<tr><td>${name}</td></tr>`);
function Showall()
{


axios({
    method: 'get',
    url: 'https://api.coindesk.com/v1/bpi/supported-currencies.json'
})

    .then(res => {
        for(let i =0;i<=100;i++)
        {
            console.log(res.data);
            let counrty=  res.data[i].country;
            let currency=  res.data[i].currency;
            //let date = res.data.time.updated;
        // let rate = res.data.bpi[midPoint].rate;currency country
        //  let counrty = res.data.bpi[midPoint].description;
        //  let date = res.data.time.updated;
        // console.log(`${res.data}.${END_POINT}`);
        createli.prepend(`<tr><td >${counrty}</td><td>${currency}</td><td></td></tr>`);
    }
    })
    .catch(err => {
        console.log(err);
    });
}