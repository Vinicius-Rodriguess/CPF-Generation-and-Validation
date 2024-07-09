import { ValidateCPF } from "./validateCpf.js";

document.querySelector("#btn-validator").addEventListener("click", () => {
  const inputValidate = document.querySelector("#input-validator")
  const validateCPF = new ValidateCPF(inputValidate.value)

  if (validateCPF.valid())
    inputValidate.classList.add("valid")
  else 
    inputValidate.classList.add("error")
})