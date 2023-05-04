
export function hitungDiet(){
    // variabel submit
    const btnSubmit = document.getElementById('submit');
    
    // variabel reset
    const btnreset = document.getElementById('reset');

    // variabel form
    const form = document.getElementById('form');

    // variabel text-form
    const resettext = document.getElementById('text-reset');

    btnSubmit.addEventListener('click', function(){
        const bb = document.getElementById("inputBerat").value;
        const tb = document.getElementById("inputTinggi").value;
        const usia = document.getElementById("inputUsia").value;


        const bmitotal = document.getElementById("total-bmi");
        const bmicategory = document.getElementById("BMI-category");
        
        const hasilumur = document.getElementById("umur");

        const bmi = Number(bb)/(Number(tb)/100)**2;
        
        bmitotal.innerText = bmi.toFixed(1);
        
        if(bmi < 18.5){
        bmicategory.innerText = "Underweight";
        hasilumur.innerText = ` ${usia} kamu harus melakukan diet ini`;
        bmicategory.style.color = "rgb(245, 147, 0)"; 
        } else if(bmi <= 24.9 ){
            bmicategory.innerText = "Normal Weight";
            hasilumur.innerText = ` ${usia} kamu harus melakukan diet ini`;
            bmicategory.style.color = "green"; 
        } else if(bmi <= 29.9){
            bmicategory.innerText = "Overweight";
            hasilumur.innerText = ` ${usia} kamu harus melakukan diet ini`;
            bmicategory.style.color = "red"; 
        } else{
            bmicategory.innerText = "Obesity";
            bmicategory.style.color = "red"; 
        }
    });

    btnreset.addEventListener('click', () =>{
      form.reset();
      resettext.reset();
    });



}