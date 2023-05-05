
import { getDietMakanan, getfourdietOlhraga } from "./routediet.js";


export function hitungDiet(){
    // variabel submit
    const btnSubmit = document.getElementById('submit');
    
    // variabel reset
    const btnreset = document.getElementById('reset');

    // variabel form
    const form = document.getElementById('form');

    const teksolgraga = document.getElementById('teksolahraga');
    const teksmakan = document.getElementById('teksmakanan');

    btnSubmit.addEventListener('click', function(){
        // input berat
        const bb = document.getElementById("inputBerat").value;

        // input tinggi
        const tb = document.getElementById("inputTinggi").value;

        // input usia
        const usia = document.getElementById("inputUsia").value;

        // total hitungan bmi
        const bmitotal = document.getElementById("total-bmi");

        const bmicategory = document.getElementById("BMI-category");
        
        const hasilumur = document.getElementById("umur");

        // rumus bmi
        const bmi = Number(bb)/(Number(tb)/100)**2;
        
        bmitotal.innerText = bmi.toFixed(1);
        
        if(bmi < 18.5){
        bmicategory.innerText = "Underweight";
        hasilumur.innerText = ` ${usia} kamu harus melakukan diet dibawah ini`;
        
        bmicategory.style.color = "rgb(245, 147, 0)"; 
        getDietMakanan();
        getfourdietOlhraga();
        } else if(bmi <= 24.9 ){
            bmicategory.innerText = "Normal Weight";
            hasilumur.innerText = ` ${usia} kamu harus melakukan diet dibawah ini`;
            bmicategory.style.color = "green"; 
            getDietMakanan();
            getfourdietOlhraga();
        } else if(bmi <= 29.9){
            bmicategory.innerText = "Overweight";
            hasilumur.innerText = ` ${usia} kamu harus melakukan diet dibawah ini`;
            bmicategory.style.color = "red"; 
            getfourdietOlhraga();
        } else{
            bmicategory.innerText = "Obesity";
            bmicategory.style.color = "red"; 
            hasilumur.innerText = ` ${usia} kamu harus melakukan diet dibawah ini`;
            getfourdietOlhraga();
        }
        teksolgraga.innerText = "Rekomendasi Olahraga";
        teksmakan.innerText = "Rekomendasi Makan";
        
    });

    btnreset.addEventListener('click', () =>{
       
      form.reset();
      const fourEdukasi = document.getElementById('edu');
      const dietolah = document.getElementById('dietolhraga');
      const bmitotal = document.getElementById("total-bmi");
      const bmicategory = document.getElementById("BMI-category");
      
      const hasilumur = document.getElementById("umur");

      bmitotal.innerText = '-';
      fourEdukasi.innerText = "";
      dietolah.innerText = "";
      bmicategory.innerText = '';
      hasilumur.innerText = '';

      teksolgraga.innerText = "";
        teksmakan.innerText = "";
    });

}