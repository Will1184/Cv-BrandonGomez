function change_mode(){
document.body.classList.toggle("dark_mode");
}

function scaleCv() {
    document.body.classList.add("scale__cv");
  }
    
  function removeScale() {
    document.body.classList.remove("scale__cv");
  }
  
let areaCv = document.body;
let resumeButton = document.getElementById("generate-pdf");

let opt = {
  margin: 0,
  filename: "CV-BrandonGomez.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 4 ,letterRendering:true},
  pagesplit: false,
  jsPDF: {
    format: "a4",
    orientation: "portrait",
    unit: "cm"
  }
};

// Function to call areaCv and Html2Pdf options
function generateResume() {
  html2pdf(areaCv, opt);
}

// resumeButton.addEventListener("click", () => {  
//   scaleCv();
//   generateResume();
//   setTimeout(removeScale, 5000);
// });

const getCurrentYear=()=> {
  return new Date().getFullYear();  
}
document.querySelector("#aa").textContent=getCurrentYear();
