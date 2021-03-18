class Website{

    constructor(){
        this.url="http://ip-api.com/json/";
    }

    async getWebsiteData(website){
        const websiteInfo=await fetch(this.url+website);

        const websiteData= await websiteInfo.json();

        return{
            web:websiteData
        }
    }

}