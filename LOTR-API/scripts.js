let url = "https://the-one-api.herokuapp.com/v1/quote";
let token = "tFfWwi63MlKSr2qqHgfB"
fetch(url, {
    method: "GET",
    headers: new Headers({ accept: "application/json" })
})



    .then(function (response) {
        return response.json();
    }).then(function (data) {
        data.docs.forEach(quoteGroup => console.log(quoteGroup.dialog))
    })