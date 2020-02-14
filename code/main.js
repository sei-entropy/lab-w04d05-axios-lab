// Token used for requesting from the API
const authToken = "87a3ab6646394f2caf8c6908583ac6fd";
// Main table used to display any results
const resultsTable = document.querySelector("#results-table");

// Function used to disaply a leagues teams and their points
// in the results table
const displayTable = function(row) {
    // create required table row with data (team name, points) from API
    const tableRow = document.createElement("tr");
    const teamData = document.createElement("td");
    teamData.innerText = row.team.name;
    const pointsData = document.createElement("td");
    pointsData.innerText = row.points;

    // append the data to the row and then the results table
    tableRow.append(teamData, pointsData);
    resultsTable.appendChild(tableRow);
};

// Fuction to call the API and get standing data for the user specified league.
const getStanding = function() {
    // get the league selection from user input
    const selectedLeague = document.querySelector("#leagues").value;
    // ensure that the results table is clear
    resultsTable.innerHTML = "";

    // make the get reguest to the API endpoint
    axios
        .get(
            `http://api.football-data.org/v2/competitions/${selectedLeague}/standings`,
            { headers: { "X-Auth-Token": authToken } }
        )
        .then(res => {
            // pass each record retrived to the display function
            res.data.standings[0].table.forEach(row => displayTable(row));
        })
        .catch(err => console.log(err));

    // create header row and append it to the results table
    const HeaderRow = document.createElement("tr");
    const teamHeader = document.createElement("th");
    teamHeader.innerText = "Team";
    const pointsHeader = document.createElement("th");
    pointsHeader.innerText = "Points";

    HeaderRow.append(teamHeader, pointsHeader);
    resultsTable.appendChild(HeaderRow);
};

// Function that displays a scorer data (name, golas) from the API
// and append it to a new row in the results table
const displayScorer = function(scorer) {
    const tableRow = document.createElement("tr");

    const tableData1 = document.createElement("td");
    tableData1.innerText = scorer.player.name;
    const tableData2 = document.createElement("td");
    tableData2.innerText = scorer.numberOfGoals;

    tableRow.append(tableData1, tableData2);
    resultsTable.appendChild(tableRow);
};

// Function to make a get request to the API to get scorer Data
const getTopScorers = function() {
    resultsTable.innerHTML = "";
    const selectedLeague = document.querySelector("#leagues").value;
    axios
        .get(
            `https://api.football-data.org/v2/competitions/${selectedLeague}/scorers`,
            { headers: { "X-Auth-Token": authToken } }
        )
        .then(res => {
            res.data.scorers.forEach(scorer => displayScorer(scorer));
        })
        .catch(err => console.log(err));

    const tableRow = document.createElement("tr");
    const nameHead = document.createElement("th");
    nameHead.innerText = "Player";
    const scoreHead = document.createElement("th");
    scoreHead.innerText = "Goals";
    tableRow.append(nameHead, scoreHead);
    resultsTable.appendChild(tableRow);
};
