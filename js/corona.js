const fetchChapter= ()=>{

    fetch('https://data.covid19india.org/data.json')
    .then(response => response.json())
    .then((data)=>{
            const coronaList=document.querySelector('.card-body')
        data.statewise.forEach(state => {
           coronaList.innerHTML+=`<h2>State: ${state.state}</h2>`;
           coronaList.innerHTML+=`<h6>Active Case: ${state.active}</h6>`;
           coronaList.innerHTML+=`<h6>Last Updated Date: ${state.lastupdatedtime}</h6>`;
           coronaList.innerHTML+=`<h6>Confirmed: ${state.confirmed}</h6>`;
           coronaList.innerHTML+=`<h6>Deaths: ${state.deaths}</h6>`;
            console.log(state);

        });
    })
    .catch(error => {
        console.error('Error fetching Bhagavad Gita data:', error);
    });
    }
    fetchChapter();