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
            <div class="card h-100  ">
         <img  src="${phone.image}" class="card-img-top w-75 mx-auto img-bg " alt="">
         <div class="card-body text-bg">
          <h3 class="card-title card-p">${phone.phone_name}</h3>
          <h4 class="card-p card-text">Brand: ${phone.brand}</h4>
          <button onClick="loadDetail('${phone.slug}')" class="btn btn-primary"> Details </button>
        </div>
         </div>
        `;
          searchResult.appendChild(div);
           
        })
    };