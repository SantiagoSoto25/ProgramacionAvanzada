const apiKey = 'D0697F21-A987-45AA-8652-7B45D1B2B0B9'; 
const apiUrl = 'https://rest.coinapi.io/v1/exchanges';
async function fetchExchanges() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'X-CoinAPI-Key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();

        const exchangeList = document.getElementById('exchangeList');

        data.slice(0, 16).forEach(exchange => {
            const name = exchange.name;
            const volume1HrsUSD = exchange.volume_1hrs_usd;
            const volume1DayUSD = exchange.volume_1day_usd;

            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h2>Operadora: ${name}</h2>
                <p>Volumen 1 hora (USD): ${volume1HrsUSD}</p>
                <p>Volumen 1 día (USD): ${volume1DayUSD}</p>
            `;
            exchangeList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Hubo un error:', error);
    }
}

fetchExchanges()