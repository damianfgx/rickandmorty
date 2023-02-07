

const apiRick=async (pagina)=>{

    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api = await fetch(url);
    const data=await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado");
    divRes.innerHTML=""
    data.results.map(item=>{

        divItem=document.createElement('div')
        divItem.innerHTML=`
        <div class="container-fluid">
  
        <div class="card mb-3" style="max-width: 500px;">
          <div class="row g-0">
            <div class="image-container col-md-4">
              <img src="${item.image}" class="img-fluid rounded-start " alt="Personaje">
            </div>
            <div class="col-md-8">
              <div class="card-body text-center">
                <h5 class="card-title fw-bold">${item.name}</h5>
                <p class="card-text fw-bold">Estatus: ${item.species}</p>
                <p class="card-text fw-bold">Estatus: ${item.status}</p>
               
              </div>
            </div>
          </div>
        </div>
       
      </div>
        
        `
        divRes.appendChild(divItem);
    });

    

}

apiRick(1)