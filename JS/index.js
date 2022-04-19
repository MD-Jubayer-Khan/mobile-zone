const searchPhones = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.data));
    };
    const displaySearchResult = phones => {
        const searchResult = document.getElementById('search-result');
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

const loadDetail = phoneSlug => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}
  `
  console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(data => displayPhoneDetail(data.data))
};

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
  <h3 class="card-title card-p">Model: ${phone.phone_name}</h3> 
  <h5 class="fw-bold">Main Features: </h5>
         <p>Storage: ${phone.mainFeatures.storage}</p>
         <p>Display: ${phone.mainFeatures.displaySize}</p>
         <p>Chipset: ${phone.mainFeatures.chipSet}</p>
         <p>Memory: ${phone.mainFeatures.memory}</p>
  
        <p class="fw-bold">Sensore: ${phone.mainFeatures.sensore || "No sensore available"}</p>
       
    </div>   
</div>`;
phoneDetail.appendChild(div);
}