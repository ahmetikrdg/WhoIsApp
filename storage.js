class Storage{

    static getSearchWebSiteFromStorage(){
        let website;
        if(localStorage.getItem("searched")===null){
            website=[];
        }
        else{
            website=JSON.parse(localStorage.getItem("searched"))
        }
        return website;
    }

    static addSearchWebSiteToStorage(websites,IP){
        let ws=this.getSearchWebSiteFromStorage();

            let obj={
                website:websites,
                ıp:IP
            };
            console.log(obj);
            ws.push(obj);

        localStorage.setItem("searched",JSON.stringify(ws));
    }

    static clearAllSearchedFromStorage(){
        localStorage.removeItem("searched");
    }

}