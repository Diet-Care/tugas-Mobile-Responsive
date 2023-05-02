export function mockapi(){
    const images = document.getElementById('image');
    console.log("tes tes");

    // fetch("https://6436ce2c3e4d2b4a12dc3844.mockapi.io/api/v1/edukasi").then((res) => res.json())
    // .then((res) =>{
    //     let img = document.getElementById("image");
        
    //     res.forEeach((edukasi) =>{
    //         img.innerHTML = 
    //         `
    //         <div class="col-3" >
    //          <div class="card">
    //            <img src="${edukasi.image}" class="card-img-top" alt="...">
    //            <div class="card-body">
    //              <h5 class="card-title">${edukasi.judul}</h5>
    //              <p class="card-text">${edukasi.deskripsi}</a>
    //            </div>
    //          </div>
    //        </div>
     
    //         `
    //     });
    // });

  
    responsEdukasi(images);
// console.log(Getimage());
//     console.log(parseResponse());
//     console.log(responsEdukasi);

    // function getEdukasi(){
    //     fetch("https://6436ce2c3e4d2b4a12dc3844.mockapi.io/api/v1/edukasi").then((res) => res.json())
    //     .then((res) =>{
    //         const img = document.getElementById("image");
            
    //         res.forEeach((edukasi) =>{
    //             img.innerHTML = 
    //             `
    //             <div class="col-3" >
    //              <div class="card">
    //                <img src="${edukasi.image}" class="card-img-top" alt="...">
    //                <div class="card-body">
    //                  <h5 class="card-title">${edukasi.judul}</h5>
    //                  <p class="card-text">${edukasi.deskripsi}</a>
    //                </div>
    //              </div>
    //            </div>
         
    //             `
    //         });
    //     });
    //     console.log(response);
    // }
    // return getEdukasi();
}



// function Getimage(image){
//     console.log("hello world");
//     const img = async() =>{
//         // image.textContent = "";

//         try {
//             let response = await fetch("https://6436ce2c3e4d2b4a12dc3844.mockapi.io/api/v1/edukasi");

//             console.log(response);
//             if(!response.ok){
//                 throw new Error(`HTTP error: ${response.status}`);
//             }
//             image.innerHTML = parseResponse((await response.json()));
//         } catch (error) {
//             image.innerHTML = error;
//         }
//     }
//     console.log(img);
// }

const responsEdukasi = async(images) =>{
    try {
        let response = fetch("https://6436ce2c3e4d2b4a12dc3844.mockapi.io/api/v1/edukasi");
        console.log(await response);
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        images.innerHTML += parseResponse(await response.json());
        // console.log(parseResponse((await response).json()));
    } catch (error) {
        result.innerHTML = error;
    }
}

function parseResponse(education){
    // let responseJSON =[];
    for(let i =0; i< education; i++){
        if(education[i]){
            console.log(i);
        let showText = `
            <div class="col-3 mb-5" >
            <div class="card">
            <img src="${edu.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${edu.judul}</h5>
                <p class="card-text">${edu.deskripsi}</a>
                </div>
                </div>
                </div> 
        `;
        return showText;
        }
    }
}

// console.log(parseResponse());