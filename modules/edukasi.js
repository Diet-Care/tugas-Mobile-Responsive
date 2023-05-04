
export async function getFullEdukasi(){
  try {
        const response = await fetch("https://6436ce2c3e4d2b4a12dc3844.mockapi.io/api/edukasi");
        
      return parseFullIdRes(await response.json());
  } catch (error) {
        error
  }
}

function parseFullIdRes(res){
  const idEdukasi = document.getElementById('getFullEdukasi');
  res.forEach((edukasi) => {
     idEdukasi.innerHTML +=  `

     <div class="col-md-3 mb-5" >
          <div class="card">
              <img src="${edukasi.image}" class="card-img-top" alt="${edukasi.judul}" style="width: 100%; height: 200px;">
              <div class="card-body">
                  <h5 class="card-title">${edukasi.judul}</h5>
                  <p class="card-text">${edukasi.deskripsi}</a>
              </div>
              
              <button  class="btn btn-info ms-3 mb-3 text-white" style="width: 50%;" type="button" data-bs-target="#modal-${edukasi.id}" data-bs-toggle="modal">Check</button>

              <!-- modal -->
              <div class="modal fade" id="modal-${edukasi.id}" aria-hidden="true" aria-labelledby="modal-label-${edukasi.id}" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">

                      <h5 class="modal-title fs-5 " id="modal-label-${edukasi.id}">${edukasi.judul}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <img src="${edukasi.image}" class="card-img-top mb-5" alt="${edukasi.judul}" style="width: 100%; height: 200px;">
                      ${edukasi.deskripsi}
                    </div>
                   
                  </div>
                </div>
              </div>
          </div>
          </div>
      `;
  })
};

export async function getFourEdukasi(){
  try {
        const response = await fetch("https://6436ce2c3e4d2b4a12dc3844.mockapi.io/api/edukasi");
        
      return parseFourIdRes(await response.json());
  } catch (error) {
    error
    // const eror = document.getElementById("pesan")
    //    eror.innerHTML = error;
  }
}

function parseFourIdRes(res){
  const idEdukasi = document.getElementById('getFourEdukasi');

  const filteredResponse = res.slice(0,4);
  

  for (const res of filteredResponse) {
      idEdukasi.innerHTML +=  `

     <div class="col-md-3 mb-5" >
          <div class="card">
              <img src="${res.image}" class="card-img-top" alt="${res.judul}" style="width: 100%; height: 200px;">
              <div class="card-body">
                  <h5 class="card-title">${res.judul}</h5>
                  <p class="card-text">${res.deskripsi}</a>
              </div>
              
              <button  class="btn btn-info ms-3 mb-3 text-white" style="width: 50%;" type="button" data-bs-target="#modal-${res.id}" data-bs-toggle="modal">Check</button>

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
      `;
  };

};


      

// menampilkan semua tampilan API Edukasi
// export async function getFullEdukasi(){
//     try {
//           const response = await fetch("https://6436ce2c3e4d2b4a12dc3844.mockapi.io/api/edukasi");
        
//         return parseFullRes(await response.json());
//     } catch (error) {
//          error
//     }
// }

// function parseFullRes(res){
//     const fullEdukasi = document.getElementById('getFullEdukasi');
//     res.forEach((edukasi) => {
//         fullEdukasi.innerHTML +=  `
//         <div class="col-md-3 mb-5" >
//             <div class="card">
//                 <img src="${edukasi.image}" class="card-img-top" alt="${edukasi.judul}" style="width: 100%; height: 200px;">
//                 <div class="card-body">
//                     <h5 class="card-title">${edukasi.judul}</h5>
//                     <p class="card-text">${edukasi.deskripsi}</a>
//                 </div>
//                 <button  class="btn btn-info ms-3 mb-3 text-white" style="width: 50%;" type="button" data-bs-target="#modal-${edukasi.id}" data-bs-toggle="modal">Selengkapnya</button>
//             </div>
//         </div>    
//         `;
//     })
// };

// menampilkan getFulledukasi berdasarkan id tampilan API Edukasi
