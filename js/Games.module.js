import { Details } from "./Details.module.js";
import { UI } from "./UI.module.js";
export const Loading = document.querySelector(".loading");
export class Games{
    constructor() {
        this.getGame("mmorpg");
        document.querySelectorAll(".nav-item .nav-link").forEach((link) =>{
            link.addEventListener("click", (e) => {
                document.querySelector(".nav-item .active")?.classList.remove("active");
                e.target.classList.add("active");
                this.getGame(e.target.dataset.category);
            });
        });
        this.ui = new UI();
    }

    async getGame(category) {
        
        Loading?.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '837ce3f78emsh74c992efb251142p17bdb6jsnff5bac12bc09',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
        const res = await url.json();
        this.ui.DisplayGames(res);
        this.event();
        console.log(res);
        Loading?.classList.add("d-none")
    }
    event() {
        document.querySelectorAll(".card").forEach((c) =>{
            c.addEventListener("click", () => {
                const id = c.dataset.id;
                this.show(id);
            });
        });
    }
    show(idgame) {
        const details = new Details(idgame);
        document.querySelector("#games")?.classList.add("d-none");
        document.querySelector(".details")?.classList.remove("d-none");
    }
}