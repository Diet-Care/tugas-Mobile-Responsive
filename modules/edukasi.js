export async function edukasi(){
    try {
          const response = await fetch("https://6436ce2c3e4d2b4a12dc3844.mockapi.io/api/v1/edukasi");
          
        return parseRes(await response.json());
    } catch (error) {
          console.error("ini ada yang error",error);
    }
}

function parseRes(res){
    const fullEdukasi = document.getElementById('getFullEdukasi');
    res.forEach((edukasi) => {
        fullEdukasi.innerHTML +=  `
        <div class="col-3 mb-5" >
        <div class="card">
        <img src="${edukasi.image}" class="card-img-top" alt="${edukasi.judul}" style="width: 100%;">
            <div class="card-body">
            <h5 class="card-title">${edukasi.judul}</h5>
            <p class="card-text">${edukasi.deskripsi}</a>
            </div>
            </div>
            </div>    
        `;
    });
}

// export async function edukasi(){
//     try {
//         const images = document.getElementById('image');
//           const response = await fetch("https://6436ce2c3e4d2b4a12dc3844.mockapi.io/api/v1/edukasi").then((res) => res.json()).then((res) =>{
//             res.forEach((edukasi) => {
//                 images.innerHTML +=  `
//                 <div class="col-3 mb-5" >
//                 <div class="card">
//                 <img src="${edukasi.image}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                     <h5 class="card-title">${edukasi.judul}</h5>
//                     <p class="card-text">${edukasi.deskripsi}</a>
//                     </div>
//                     </div>
//                     </div>    
//                 `;
//             });
//             return response.json();
//           })
         
//             // console.log(await response.json());
//             // return edu;
//     } catch (error) {
//           console.error("ini ada yang error",error);
//     }
// }


