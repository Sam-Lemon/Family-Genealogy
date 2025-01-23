import React, { useEffect, useState } from 'react';

function ApiTest () {
    const [data, setData] = useState([null]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://679197a4af8442fd737a5bee.mockapi.io/individual')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
        }, []);

        if (loading){
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <div>
                <h1>API Data</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        );
    }

    export default ApiTest;