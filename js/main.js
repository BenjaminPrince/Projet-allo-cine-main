fetch("data/moovies.json")
    .then(function (response){
        console.log(response)
        return response.json()
    }).then(function (moovies){
        console.log(moovies);


    function template(film) {
    return `
        <div class="block-film d-flex align-items-center m-3 ">

            <img class="photo w-10" src="${film.Poster}">
            <div class="text m-3">
                <h2 class="titre-film display"> ${film.Title} ${film.Year} ${film.Runtime}</p>
                <p class="genrefilm"> ${film.Genre}</p>
                <p class="directorfilm">${film.Director} </p>
                <p class="resume">${film.Plot} </p>
                <p class="recompense">${film.Awards} </p>
                <p class="note">${film.imdbRating}/10</p>
                <div>
                ${film.Images.map(function (image){
                    return `<img class="film-images img-fluid" src="${image}" >`
                }).join('')}
              </div>
            </div>
        </div> `
    }

        document.getElementById("app").innerHTML = `
        <h1 class="Films-title"> Projet mini allo-ciné</h1>
        ${moovies.map(template).join('')}
        <p class="footer">Ces ${moovies.length} films ont été ajoutés récement.</p>
        `
})