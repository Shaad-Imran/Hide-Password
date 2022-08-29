const pass_field = document.querySelector("input");
const showBtn = document.querySelector(".fa-eye");
showBtn.addEventListener("click", () => {
  if (pass_field.type === "password") {
    pass_field.type = "type";
    showBtn.classList.add("hide");
  } else {
    pass_field.type = "password";
    showBtn.classList.remove("hide");
  }
});
