export const uploadFile = (file) => {

    const formData = new FormData();

    formData.append('file', file);


    fetch('/api/files/upload', {

        method: 'POST',

        body: formData

    })

    .then(response => response.json())

    .then(data => {

        console.log('File uploaded:', data);

    })

    .catch(error => console.error('Error uploading file:', error));

};

