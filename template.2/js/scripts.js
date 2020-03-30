

window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.darksky.net/forecast/1ad03f8d8b1b5501f2d9bfb5b1eb9d61/${lat},${long}`;
            fetch(api)
                .then(data => {
                    return data.json()
                })
                .then(data => {
                    console.log(data);
                })
        })

    } else {
        h1.textContent = "this no worky cause reasons"
    }

});