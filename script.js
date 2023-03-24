

const form = document.getElementById('converter');
const source = document.getElementById('source');
const target = document.getElementById('target');
const amount = document.getElementById('amount');
const result = document.getElementById('result');
const swap = document.getElementById('swap');
form.addEventListener('submit', e => {
    e.preventDefault();
    const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${source.value}&want=${target.value}&amount=${amount.value}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '5e937b4952msh0cd60cae124352dp1bd119jsna9ca7300a732',
            'x-rapidapi-host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            result.innerHTML = `${amount.value} ${source.value} = ${data.new_amount} ${target.value}`;
        })
        .catch(error => console.log(error));
});
swap.addEventListener('click', () => {
    
    const temp = source.value;
    source.value = target.value;
    target.value = temp;
});
