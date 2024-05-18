export const sendData = (issue) => {

    fetch('/api/issues', {

        method: 'POST',

        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify(issue)

    })

    .then(response => response.json())

    .then(data => {

        console.log('Issue created:', data);

    })

    .catch(error => console.error('Error creating issue:', error));

};

