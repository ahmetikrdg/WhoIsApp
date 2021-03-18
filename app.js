const websiteForm= document.getElementById("web-form");
const nameInput=document.getElementById("webname");
document.addEventListener("DOMContentLoaded",getAllSearched);//sayfa yenilendikce son aramaları alıp yazdırıcaz
const lastUsers=document.getElementById("last-users");
const clearLastUsers=document.getElementById("clear-last-users");
const ıntstop=document.getElementById("interval-stop");
const website=new Website();
const ui=new UI();
addEventListeners();

function addEventListeners(){
    websiteForm.addEventListener("submit",getdata);
    clearLastUsers.addEventListener("click",clearAllSearched);
    ıntstop.addEventListener("click",intervalstops);

}

function getdata(e){
    let value=nameInput.value;
    if(value==""){
        alert("Dikkat! Site bilgisi girmediniz.");
    }
    else
    {
        // Storage.addSearchWebSiteToStorage(value);
        website.getWebsiteData(value)
        .then(i=>{
            // ui.assSearchUserToUI(value)
            ui.showWebsite(value,i);
        })
        .catch(err=>console.log(err));
    }
    
    e.preventDefault()
}

function getAllSearched(){
    let repo=Storage.getSearchWebSiteFromStorage();
    let result="";
    repo.forEach(element => {
        result +=`<li class="list-group-item"> ${element.website+"      ------------>      "+element.ıp}</li>`
        
        console.log(element.website + element.IP)
    });
    lastUsers.innerHTML=result;
}

function submitForm(){
    document.getElementById('web-form').submit();
    }

function LoadMyFile() {
    var frm = document.getElementById("ifrm");
    var contents = frm.contentWindow.document.body.childNodes[0].innerHTML;
    while (contents.indexOf("\r") >= 0)
        contents = contents.replace("\r", "");
    var lines = contents.split("\n");
    // alert("Dosya yolu " + frm.src + " içinde  " + lines.length + " satır değer var");
    //  for (var i = 0; i < lines.length; i++) {
    //     var myLine = lines[i];
    //     setTimeout(() => {
    //         console.log(myLine);
    //         website.getWebsiteData(myLine)
    //           .then(i=>{
                 
    //                   ui.assSearchUserToUI(myLine)
    //                   Storage.addSearchWebSiteToStorage(myLine);
    //                   ui.showWebsite(i);
    //                   submitForm();
                  
    //           })
    //           .catch(err=>console.log(err));
    //         }, 10000);
    //     }      
   INTERVALS= setInterval(() => {
        lines.forEach(element => {
           
                console.log(element);
                website.getWebsiteData(element)
                  .then(i=>{
                     
                        //   ui.assSearchUserToUI(element)
                        console.log("interval çalışıyor");
                          ui.showWebsite(element,i);
                          submitForm();
                      
                  })
                  .catch(err=>console.log(err));
            
        });
     }, 10000);    
}

function intervalstops(){
    clearInterval(INTERVALS);
    console.log("inetval durduruldu");
}

function clearAllSearched(){//Tüm arananları temizler
    if (confirm("Eminmisiniz?")) {
        //silme
        console.log("Silme");
        Storage.clearAllSearchedFromStorage();//STORAGEDEN TEMİZLER
        ui.clearAllSearchedFromUI();
    }
}

