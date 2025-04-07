window.onload = function () {

  const toggleBtn = document.querySelector(".toggle-button")
  const dropdown = document.querySelector(".dropdown-menu")
  const myBolumEkleButton = document.getElementById("my-bolum-ekle-button")
  const upload = document.getElementById('upload-form');
  const cancelBtn = document.getElementById("cancelbtn")

  toggleBtn.addEventListener("click", () => {

    dropdown.classList.toggle("top-16")

  })

  myBolumEkleButton.addEventListener("click", () => {

    if (upload.style.visibility == 'visible') {
      upload.style.visibility = 'hidden';
    }
    else
      upload.style.visibility = 'visible'
  })

  cancelBtn.addEventListener("click", () => {
    upload.style.visibility = "hidden"
  })
}
