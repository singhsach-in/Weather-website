
let search = document.getElementById('search-icon');
console.log(search)
search.addEventListener('click', () => {
    let city = document.getElementById('search').value;
    let heading = document.getElementById('city-name-div');
    heading.innerHTML = '<h1>' + city + '</h1>'
    console.log(city)

    // document.getElementById('city-name').innerHTML=city
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'feb6097ad0msh90f072f1b6d1475p114b02jsn8b6ad2bf3134',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => {
            if(!response.ok){
                throw new Error("Invalid city name. Please try again.")
              }
           return response.json()
        } ).then((response) => {
            
            if(response.cloud_pct !== undefined){
                document.getElementById('cloud_pct').innerText = response.cloud_pct
                document.getElementById('temp').innerHTML = response.temp
                document.getElementById('feels_like').innerHTML = response.feels_like
                document.getElementById('humidity').innerHTML = response.humidity
                document.getElementById('min_temp').innerHTML = response.min_temp
                document.getElementById('max_temp').innerHTML = response.max_temp
                document.getElementById('wind_speed').innerHTML = response.wind_speed
                document.getElementById('wind_degrees').innerHTML = response.wind_degrees
                document.getElementById('sunrise').innerHTML = response.sunrise
                document.getElementById('sunset').innerHTML = response.sunset
            }
            
        })
        .catch(err => {
            console.error(err)
            // alert('Enter correct city name')
        });
})

let classC = document.querySelectorAll('.city')
// console.log(classC[0].firstElementChild.innerHTML)
for (let i = 0; i < classC.length; i++) {
    let cityc = classC[i].childNodes[1].innerHTML;
    console.log(cityc)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'feb6097ad0msh90f072f1b6d1475p114b02jsn8b6ad2bf3134',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cityc, options)
        .then(response =>  response.json())
        .then((response) => {
            if(response.cloud_pct !== undefined){
                document.getElementById(cityc + '-temp').innerHTML = response.temp
                document.getElementById(cityc + '-feels_like').innerHTML = response.feels_like
                document.getElementById(cityc + '-humidity').innerHTML = response.humidity
                document.getElementById(cityc + '-min_temp').innerHTML = response.min_temp
                document.getElementById(cityc + '-max_temp').innerHTML = response.max_temp
                document.getElementById(cityc + '-wind_speed').innerHTML = response.wind_speed
                document.getElementById(cityc + '-wind_degrees').innerHTML = response.wind_degrees
                document.getElementById(cityc + '-sunrise').innerHTML = response.sunrise
                document.getElementById(cityc + '-sunset').innerHTML = response.sunset
            }
            


            // console.log(document.getElementById(cityc+'-humidity').innerHTML)
            // console.log(document.getElementById(cityc+'min_temp').innerHTML )
            // console.log(document.getElementById(cityc+'max_temp').innerHTML )
            // console.log(document.getElementById(cityc+'wind_speed').innerHTML )
            // console.log(document.getElementById(cityc+'wind_degrees').innerHTML )
            // console.log(document.getElementById(cityc+'sunrise').innerHTML )
            // console.log(document.getElementById(cityc+'sunset').innerHTML )
            // console.log(document.getElementById(cityc+'temp').innerHTML )
            // console.log(document.getElementById(cityc+'temp').innerHTML )
            // console.log(document.getElementById(cityc+'feels_like').innerHTML )
        })
        .catch(err => console.error(err));

}






