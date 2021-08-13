const row = document.querySelector(".row")

fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then(data => data.forEach(item => {
        row.innerHTML += `<div class="col-3 margin">
<img src="${item.flag}" alt="" class="flags">
  <div>
  <ul>
  <li class="information">Country: ${item.name}</li>
  <li class="information">languages: ${item.languages[0].name}</li>
  <li class="information">Capital: ${item.capital}</li>
  <li class="information">Region: ${item.region}</li>
  <li class="information">Currencies: ${item.currencies[0].name}</li>
  </ul>
  </div>
</div>`
    })) 


