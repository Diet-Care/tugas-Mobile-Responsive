import { hitungDiet } from "./modules/diet.js";
import { getFullEdukasi, getFourEdukasi } from "./modules/edukasi.js";
import { login } from "./modules/login.js";
import { getfourEdukasiOlhraga, getfullEdukasiOlhraga } from "./modules/olahraga.js";


// fungsi edukasi
getFullEdukasi();
getFourEdukasi();

// fungsi edukasi olahraga
getfullEdukasiOlhraga();
getfourEdukasiOlhraga();

// fungsi login
login();

// fungsi hitung diet
hitungDiet();

