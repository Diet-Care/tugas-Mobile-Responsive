
// menampilkan empat tampilan API Edukasi

export async function getDietMakanan(){
  try {
        const response = await fetch("https://6436ce2c3e4d2b4a12dc3844.mockapi.io/api/edukasi");
        console.log(response);
      return parseFourRes(await response.json());
  } catch (error) {
   error
  }
}

function parseFourRes(res){
  console.log(res);
  const fourEdukasi = document.getElementById('edu');
  console.log(fourEdukasi);

  const filteredResponse = res.slice(0,4);
  

  for (const res of filteredResponse) {
      fourEdukasi.innerHTML += `
      <div class="col-md-3 mb-5" >
          <div class="card">
              <img src="${res.image}" class="card-img-top" alt="${res.judul}" style="width: 100%; height: 200px;">
              <div class="card-body">
                  <h5 class="card-title">${res.judul}</h5>
                  <p class="card-text">${res.deskripsi}</a>
              </div>
              
              <button  class="btn btn-info ms-3 mb-3 text-white" style="width: 50%;" type="button" data-bs-target="#modal-${res.id}" data-bs-toggle="modal">Selengkapnya</button>

              <!-- modal -->
              <div class="modal fade" id="modal-${res.id}" aria-hidden="true" aria-labelledby="modal-label-${res.id}" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">

                      <h5 class="modal-title fs-5 " id="modal-label-${res.id}">${res.judul}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <img src="${res.image}" class="card-img-top mb-5" alt="${res.judul}" style="width: 100%; height: 200px;">
                      ${res.deskripsi}
                    </div>
                   
                  </div>
                </div>
              </div>
          </div>
          </div>
      `
  };
};

// menampilkan diet olahraga yang cocok
export async function getfourdietOlhraga(){
  try {
        const response = await fetch("https://645347f9e9ac46cedf2120a0.mockapi.io/api/v2/olahraga");
        
      return parseFourOlahRes(await response.json());
  } catch (error) {
    error
    // const eror = document.getElementById("pesan")
    //    eror.innerHTML = error;
  }
}

function parseFourOlahRes(respon){
  const idEdukasiolhraga = document.getElementById('dietolhraga');

  const filteredResponse = respon.slice(0,4);

  for (const respon of filteredResponse) {
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
                      ${respon.deskripsi}
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
  };

};

