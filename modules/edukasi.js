export async function getFullEdukasi(){
    try {
          const response = await fetch("https://6436ce2c3e4d2b4a12dc3844.mockapi.io/api/edukasi");
          
        return parseRes(await response.json());
    } catch (error) {
          console.error("ini ada yang error",error);
    }
}

function parseRes(res){
    const fullEdukasi = document.getElementById('getFullEdukasi');
    res.forEach((edukasi) => {
        fullEdukasi.innerHTML +=  `
        <div class="col-md-3 mb-5" >
            <div class="card">
                <img src="${edukasi.image}" class="card-img-top" alt="${edukasi.judul}" style="width: 100%; height: 200px;">
                <div class="card-body">
                    <h5 class="card-title">${edukasi.judul}</h5>
                    <p class="card-text">${edukasi.deskripsi}</a>
                </div>
            </div>
        </div>    
        `;
    });
}


