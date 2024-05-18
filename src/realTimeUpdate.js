export const realTimeUpdate = () => {

    const eventSource = new EventSource('/api/issues/updates');

    

    eventSource.onmessage = (event) => {

        const data = JSON.parse(event.data);

        console.log('Real-time update:', data);

        // Logic to handle real-time updates, e.g., updating the page

    };


    eventSource.onerror = (error) => {

        console.error('Error with real-time updates:', error);

    };

};

