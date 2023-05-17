function getCountries(done){

    const results = fetch('https://restcountries.com/v3.1/all');

    results 
        .then (response => response.json())
        .then(data => {
            done(data)
        });
}

getCountries(data => {
    data.forEach(country => {

        const article = document.createRange().createContextualFragment(`
        
        <article>

        <div class="img-container">
            <img src="${country.flags.png}" alt="">
        </div>

        <div class="info-container">
            <h3>${country.name.common}</h3>
            <span>${country.capital}</span>
        </div>
        </article>
        `)
        const main = document.querySelector('main')

        main.append(article)
    });
});