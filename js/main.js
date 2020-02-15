const printHolidays = (holidays) => {
    const row = document.querySelector('.row');
    row.innerHTML = '';
    holidays.forEach(value => {
        const newHolidayBox = document.createElement('div');
        newHolidayBox.classList.add('col-4');
        const newHolidayTitle = document.createElement('h2');
        newHolidayTitle.innerText = value.name;
        newHolidayBox.appendChild(newHolidayTitle);
        const newHolidayDesc = document.createElement('p');
        newHolidayDesc.innerText = value.description;
        newHolidayBox.appendChild(newHolidayDesc);
        const newHolidayDate = document.createElement('small');
        newHolidayDate.innerText = `${value.date.datetime.year}/${value.date.datetime.month}/${value.date.datetime.day}`;
        newHolidayBox.appendChild(newHolidayDate);
        row.appendChild(newHolidayBox);
    })
};

document.querySelector('#userYearButton').addEventListener('click', function() {
    const year = document.querySelector('#yearInput').value;
    const requestObject = {
      method: 'get',
      url: `https://calendarific.com/api/v2/holidays?api_key=1d72dde247729e6fb0d4a0221298a540e8ecdea8&year=${year}&country=SA`,
    };
    axios(requestObject)
        .then((response) => {
            printHolidays(response.data.response.holidays);
        })
        .catch((response) => {
            console.log('Error');
        })
});

document.querySelector('#currentYearButton').addEventListener('click', function() {
    const date = new Date();
    const year = date.getFullYear();
    const requestObject = {
        method: 'get',
        url: `https://calendarific.com/api/v2/holidays?api_key=1d72dde247729e6fb0d4a0221298a540e8ecdea8&year=${year}&country=SA`,
    };
    axios(requestObject)
        .then((response) => {
            printHolidays(response.data.response.holidays);
        })
        .catch((response) => {
            console.log('Error');
        })
});