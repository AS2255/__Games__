

export class UI{
    DisplayGames(a){
        let GamesBox ='';
        for(let i = 0; i < a.length; i++){
            GamesBox += 
            `
            <div class="col-md-6 col-lg-4 col-xl-3">
                <div data-id = "${a[i].id}" class="h-100 bg-transparent card" >
                    <div class="card-body">
                        <figure class="position-relative">
                        <img class="card-img-top object-fit-cover h-100" src="${a[i].thumbnail}" alt="${a[i].title}">
                        </figure>
                        <figcaption>
                            <div class="hstack justify-content-between">
                                <h3 class=" small">${a[i].title}</h3>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                            <p class="card-text small text-center opacity-50 text-white">
                                ${a[i].short_description.split(" ", 8)}
                            </p>
                        </figcaption>
                    </div>
                    <footer class="card-footer small hstack justify-content-between">
                        <span class="badge bg-color">${a[i].genre}</span>
                        <span class="badge bg-color">${a[i].platform}</span>
                    </footer>
                </div>
            </div>
            `
        }
        document.getElementById("GamesData").innerHTML= GamesBox;
    }
    DisplayDetails(d){
        const DetailsContent=`
        <figure class="col-md-4">
            <img class="w-100" src="${d.thumbnail}" alt="image">
        </figure>
        <div class="col-md-8">
            <h3>Title: ${d.title}</h3>
            <p> Category: <span class="badge text-bg-info">${d.genre}</span></p>
            <p> Platform: <span class="badge text-bg-info">${d.platform}</span></p>
            <p> Status: <span class="badge text-bg-info">${d.status}</span></p>
            <p class="small">${d.description}</p>
            <a class="btn btn-outline-warning text-white" target="_blank" href="${d.game_url}">Show Game</a>
        </div>
        `;
        document.getElementById("DetailsBody").innerHTML= DetailsContent;
    }
}