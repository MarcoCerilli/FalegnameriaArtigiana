import { fromPath } from "pdf2pic";
import fs from "fs";

const pdfFile = "./src/catalogo.pdf";
const outputDir = "./public/images/";

// Crea la cartella se non esiste
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const options = {
  density: 300,          // Alta qualità per stampa/web
  saveFilename: "arredo_mave",
  savePath: outputDir,
  format: "jpg",
  width: 1500,           // Larghezza generosa per il tuo componente Image
  height: 2000
};

const convert = fromPath(pdfFile, options);

// Funzione per estrarre tutte le 45 immagini
async function extractAll(totalPage) {
  for (let i = 1; i <= totalPage; i++) {
    console.log(`Estrazione pagina ${i}...`);
    await convert(i);
  }
  console.log("Finito! Trovi tutto in /public/gallery/");
}

extractAll(45);