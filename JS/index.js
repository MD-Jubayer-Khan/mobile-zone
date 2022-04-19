// button onclick function
const searchPhones = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear input field
    searchField.value = '';
    // fetch api
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
    };
    const displaySearchResult = phones => {
        const searchResult = document.getElementById('search-result');
        if (phones.length == 0){
          alert('Please enter a phone name')
        };
        // clear search result innerHTML
          searchResult.innerHTML= '';
        phones.forEach(phone => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML =`
            <div class="card h-100">
         <img  src="${phone.image}" class="card-img-top" alt="">
         <div class="card-body text-bg">
         <h4 class="card-p card-text">Brand: ${phone.brand}</h4>
          <h3 class="card-title card-p">Model: ${phone.phone_name}</h3>   
          <button onClick="loadDetail('${phone.slug}')" class="btn btn-primary"> Details </button>
        </div>
         </div>
        `;
          searchResult.appendChild(div);
          
        })
    };
    // clear search Result
          searchResult ='';

// fetch phone details data
const loadDetail = phoneSlug => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}
  `
  console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhoneDetail(data.data))
};
// display details information
const displayPhoneDetail = phone => {
  const phoneDetail = document.getElementById('phone-details');
  const div = document.createElement('div');
  div.classList.add('col');
  div.innerHTML =`
  <div class="card h-100">
    <img src="${phone.image}" class="card-img-top" alt="...">
  <div class="card-body">
     <p> releaseDate : ${phone.releaseDate ||"No release date found"}</p>
     <h4 class="card-p card-text">Brand: ${phone.brand}</h4>
     <h3 class="card-title card-p">Model: ${phone.name}</h3> 
     <h5 class="fw-bold">Main Features: </h5>
         <p>Storage: ${phone.mainFeatures.storage}</p>
         <p>Display: ${phone.mainFeatures.displaySize}</p>
         <p>Chipset: ${phone.mainFeatures.chipSet}</p>
         <p>Memory: ${phone.mainFeatures.memory}</p>
         <div>
         <h5 class="fw-bold">Sensore:
             <p class = "text-primary">${phone.mainFeatures.sensors[0] || "No sensore available"}</p>
             <p class = "text-primary">${phone.mainFeatures.sensors[1] || "No sensore available"}</p>
             <p class = "text-primary">${phone.mainFeatures.sensors[2] || "No sensore available"}</p>
             <p class = "text-primary">${phone.mainFeatures.sensors[3] || "No sensore available"}</p>
             <p class = "text-primary">${phone.mainFeatures.sensors[4] || "No sensore available"}</p>
             <p class = "text-primary">${phone.mainFeatures.sensors[5] || "No sensore available"}</p>
          </h5>        
         </div>
        <div>
        <h5 class="fw-bold">Others: </h5>
        <p>Bluetooth: ${phone.others?.Bluetooth || "No Bluetooth available"}</p>
        <p>WLAN: ${phone.others?.WLAN || "No WLAN available"}</p> 
        <p>GPS: ${phone.others?.GPS || "No GPS available"}</p> 
        <p>NFC: ${phone.others?.NFC || "No NFC available"}</p> 
        <p>Radio: ${phone.others?.Radio || "No Radio fetures available"}</p> 
        </div>
    </div>   
</div>`;
phoneDetail.appendChild(div);
};
