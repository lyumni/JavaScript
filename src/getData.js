export const getData = () => {

    fetch('/api/issues')

        .then(response => response.json())

        .then(data => {

            console.log(data);

            // Update page with data

        })

        .catch(error => console.error('Error fetching data:', error));

};

