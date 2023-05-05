import { hitungDiet } from "./modules/diet.js";
import { getFullEdukasi, getFourEdukasi } from "./modules/edukasi.js";
import { getfourEdukasiOlhraga, getfullEdukasiOlhraga } from "./modules/olahraga.js";
// import { login } from "./modules/login.js";

// fungsi edukasi
getFullEdukasi();
getFourEdukasi();

// fungsi edukasi olahraga
getfullEdukasiOlhraga();
getfourEdukasiOlhraga();
hitungDiet();
login();