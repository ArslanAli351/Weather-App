


const from = document.querySelector("#form");
const city = document.querySelector("#city");
const main = document.querySelector("#main");

from.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log(event);

  axios(
    `http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`
  )
    .then((respones) => {
      console.log(respones)
      main.innerHTML = `
      <div class="head">
      <div class="handler ">
    <h1>${respones.data.current.temp_c}&deg </h1>
    <h5 class="mt-4">${respones.data.location.name} ${respones.data.location.country}  </h5>
    <p>${respones.data.current.condition.text} </p>
    </div>
</div> `

    })

})




















