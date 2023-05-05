
export async function getfullEdukasiOlhraga(){
    try {
          const response = await fetch("https://645347f9e9ac46cedf2120a0.mockapi.io/api/v2/olahraga");
          
        return parseFullolahRes(await response.json());
    } catch (error) {
          error
    }
  }
  
  function parseFullolahRes(res){
    const idEdukasiolhraga = document.getElementById('getfulledukasiolhraga');
    res.forEach((respon) => {
        idEdukasiolhraga.innerHTML +=  `
  
       <div class="col-md-3 mb-5" >
            <div class="card">
                <img src="${respon.image}" class="card-img-top" alt="${respon.judul}" style="width: 100%; height: 200px;">
                <div class="card-body">
                    <h5 class="card-title">${respon.judul}</h5>
                    <p class="card-text">${respon.deskripsi}</a>
                </div>
                
                <button  class="btn btn-info ms-3 mb-3 text-white" style="width: 50%;" type="button" data-bs-target="#modalolh-${respon.id}" data-bs-toggle="modal">Selengkapnya</button>
  
                <!-- modal -->
                <div class="modal fade" id="modalolh-${respon.id}" aria-hidden="true" aria-labelledby="modalolh-label-${respon.id}" tabindex="-1">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
  
                        <h5 class="modal-title fs-5 " id="modalolh-label-${respon.id}">${respon.judul}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <img src="${respon.image}" class="card-img-top mb-5" alt="${respon.judul}" style="width: 100%; height: 200px;">
                        
                        <h3 class="colors-blue mb-3">Deskripsi</h3>
                         <p class="mb-3">${respon.deskripsi}</p>
                        <h3 class="colors-blue mb-3 mt-3">Deskripsi lengkap</h3>
                          <p class=" mb-3 ">${respon.deslengkap}</p>
                          <h3 class="colors-blue mb-3">Deskripsi Jumlah Kalori</h3>
                          <p class=" mb-3">${respon.jmlhkalori}</p>
                      </div>
                     
                    </div>
                  </div>
                </div>
            </div>
            </div>
        `;
    })
  };
  
  export async function getfourEdukasiOlhraga(){
    try {
          const response = await fetch("https://645347f9e9ac46cedf2120a0.mockapi.io/api/v2/olahraga");
          
        return parseFourOlahRes(await response.json());
    } catch (error) {
      error
      // const eror = document.getElementById("pesan")
      //    eror.innerHTML = error;
    }
  }
  
  function parseFourOlahRes(res){
    const idEdukasiolhraga = document.getElementById('getfouredukasiolhraga');
  
    const filteredResponse = res.slice(0,4);
    
  
    for (const respon of filteredResponse) {
        idEdukasiolhraga.innerHTML +=  `
  
       <div class="col-md-3 mb-5" >
       
            <div class="card">
                <img src="${respon.image}" class="card-img-top" alt="${respon.judul}" style="width: 100%; height: 200px;">
                <div class="card-body">
                    <h5 class="card-title">${respon.judul}</h5>
                    <p class="card-text">${respon.deskripsi}</a>
                </div>
                
                <button  class="btn btn-info ms-3 mb-3 text-white" style="width: 50%;" type="button" data-bs-target="#modal-${respon.id}" data-bs-toggle="modal">Selengkapnya</button>
  
                <!-- modal -->
                <div class="modal fade" id="modal-${respon.id}" aria-hidden="true" aria-labelledby="modal-label-${respon.id}" tabindex="-1">
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
  
                        <h5 class="modal-title fs-5 " id="modal-label-${respon.id}">${respon.judul}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <img src="${respon.image}" class="card-img-top mb-5" alt="${respon.judul}" style="width: 100%; height: 200px;">
                        ${respon.deskripsi}
                      </div>
                     
                    </div>
                  </div>
                </div>
            </div>
            </div>
        `;
    };
  
  };
  
  