class UI {
  constructor() {
    this.websiteInfos = document.getElementById("websitesi");
    this.cardbody = document.getElementsByClassName("card-body");
    this.ınputn = document.getElementById("webname");
    this.lastusers = document.getElementById("last-users");
  }

  showWebsite(websiteadress,values) {
    // this.ınputn.select();
    // document.execCommand("copy");
    this.websiteInfos.innerHTML = `
          <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">URL</th>
                    <th scope="col">IP</th>
                    <th scope="col">ÜLKE</th>
                    <th scope="col">ŞEHİR</th>
                    <th scope="col">İLÇE</th>
                    <th scope="col">Servis Sağlayıcı</th>
                    <th scope="col">KURULUŞ ADI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th>${this.ınputn.value}</th>
                    <td>${values.web.query}</td>
                    <td>${values.web.country}</td>
                    <td>${values.web.regionName}</td>
                    <td>${values.web.city}</td>
                    <td>${values.web.isp}</td>
                    <td>${values.web.as}</td>
                    </tr>
                </tbody>
          </table>
           `;
    Storage.addSearchWebSiteToStorage(websiteadress, values.web.query);
  }

//   assSearchUserToUI(username) {
//     let users = Storage.getSearchWebSiteFromStorage();
//     if (users.indexOf(username) === -1) {
//       const li = document.createElement("li");
//       li.className = "list-group-item";
//       li.textContent = username;
//       this.lastusers.appendChild(li);
//     }
//   }

  clearAllSearchedFromUI() {
    while (this.lastusers.firstChild != null) {
      this.lastusers.removeChild(this.lastusers.firstElementChild);
    }
  }
}
