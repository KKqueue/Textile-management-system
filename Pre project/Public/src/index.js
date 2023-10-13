
const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle")

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close")
      })


const image = document.querySelector("#xyz"),
      images = document.querySelector("#abc"),
      input = document.querySelector("#zyx");

      input.addEventListener("change", () => {
        image.src = URL.createObjectURL(input.files[0]);
        images.src = URL.createObjectURL(input.files[0]);
      })