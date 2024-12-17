
import { UI } from "./UI.module.js";
import { Loading } from "./Games.module.js";
export class Details{
    constructor(id){
        this.ui=new UI();
        document.querySelector("#BtnClose").addEventListener("click",()=>{
            document.querySelector("#games")?.classList.remove("d-none");
            document.querySelector(".details")?.classList.add("d-none");
        });
        this.getdetails(id);
    }
    async getdetails(idgame){
        Loading?.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '837ce3f78emsh74c992efb251142p17bdb6jsnff5bac12bc09',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idgame}`,options);
        const res = await url.json();
        this.ui.DisplayDetails(res);
        Loading?.classList.add("d-none");
    }
}