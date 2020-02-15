console.log("TEST");


// let plc = 'saudi';
//get country by name
function getcountry() {
    const plac = document.querySelector('#place').value;
    axios.get(`https://restcountries.eu/rest/v2/name/${plac}`)
        .then(res => {
            for(let i =0 ; i <= res.data.length - 1 ;i ++){
          // save data from API
        const countryName = $("<th> </th>").text('Name : '+res.data[i].name);
        const cap = $("<td> </td>").text('Capital City : '+res.data[i].capital);
        const tim = $("<td> </td>").text('Time : '+res.data[i].timezones);
        const region = $("<td> </td>").text('Region : '+res.data[i].region);
        const Lang = $("<td> </td>").text('Language : ' +res.data[i].languages[0].name);
        const cur = $("<td> </td>").text('currency : ' +res.data[i].currencies[0].code);
        const img = $("<img/>").attr('src', res.data[i].flag);
         // create a row in table 
         let  div = $('<tr/>');
         let div2 = $('<tr/>');
         let div3 = $('<tr/>');
         let div4 = $('<tr/>');
         let div5 = $('<tr/>');
         let div6 = $('<tr/>');
         let div7 = $('<tr/>');
        
div.append(countryName);
div2.append(img);
div3.append( cap);
div4.append(tim);
div5.append( region);
div6.append(Lang);
div7.append(cur);
div.appendTo($('#tab'));
div2.appendTo($('#tab'));
div3.appendTo($('#tab'));
div4.appendTo($('#tab'));
div5.appendTo($('#tab'));
div6.appendTo($('#tab'));
div7.appendTo($('#tab'));
            }
        }).catch(err => console.log(err));
         $('#country').hide();
         $('#place').hide();
                $('.titl').hide();
                $('#region').hide();
                $('#reg').hide();
}
// check the countries in regions
function getRegion() {
    const reg = document.querySelector('#reg').value;
    axios.get(`https://restcountries.eu/rest/v2/region/${reg}`)
        .then(res => {
            for (let i = 0; i <= res.data.length - 1; i++) {
                const countryName = $("<th> </th>").text(res.data[i].name);
                let div = $('<tr/>');

                div.append(countryName);

                div.appendTo($('#tab'));
            }
        }).catch(err => console.log(err));
 $('#country').hide();
 $('#place').hide();
       $('.titl').hide();
    $('#region').hide();
    $('#reg').hide();
}