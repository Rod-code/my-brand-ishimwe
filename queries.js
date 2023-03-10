const queriesTable = document.querySelector('tbody');
// const articles = document.querySelector("#t-body");

const fetchQueries = async() => {
    try {
        const response = await fetch(
            'https://dizzy-ruby-gilet.cyclic.app/api/v1/queries', {
                method: 'GET',
            },
        );
        const queries = response.json();
        return queries;
    } catch (error) {
        console.log('Error fetching blogs: ', error.message);
    }
};

fetchQueries()
    .then((res) => {
        console.log(res);
        res.data.forEach((element, index) => {
            queriesTable.insertAdjacentHTML(
                'afterbegin',
                `
        <tr>    
        <td>${index+1}</td> 
        <td>${element.fullname}</td>
        <td>${element.email}</td>
        <td>${element.content} </td>
        
        </tr>
      `,
            );
        });
    })