/*
fetch('./airlines.json') // Esta ruta debe ser relativa a la ubicación de controller.js
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        loadTableInfo(data);
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });*/

//import data from './airlines.json' assert { type: 'json' }; 



// Cargar información de las aerolíneas en la tabla
function loadTableInfo(data) {
    const tableBody = document.querySelector('#airlineTable tbody'); 
    let rows = ''; 


    // Cuidades
    Object.keys(data).forEach(cityName => {
        const city = data[cityName];

        // Cada aerolínea
        city.airlines.forEach(airline => {
            const airlineName = airline.name; 

            // Cada vuelo de la aerolínea
            airline.flights.forEach(flight => {
                // Crear una fila de tabla como una cadena HTML
                rows += `
                    <tr>
                        <td>${cityName}</td>
                        <td>${airlineName}</td>
                        <td>${flight.flight_id}</td>
                        <td>${flight.destination}</td>
                        <td>${flight.time}</td>
                        <td>${flight.fares.economy !== undefined ? flight.fares.economy : 'No economy class'}</td>
                        <td>${flight.fares.business !== undefined ? flight.fares.business : 'No business class'}</td>
                    </tr>
                `;
            });
        });
    });

    // Metemos todas las filas en la tabla
    tableBody.innerHTML = rows;
}

// Función para encontrar una aerolínea por nombre
const findAirline = (name) => {
    let airlineFound = null;

    Object.values(data).forEach(city => {
        city.airlines.forEach(airline => {
            if (airline.name === name) {
                airlineFound = airline;
            }
        });
    });

    return airlineFound;
};
