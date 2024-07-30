import { CPF } from "./CPF.js";

const inputCPF = document.querySelector("#input-validator")
const validateButton = document.querySelector("#btn-validator")
const generateButton = document.querySelector("#btn-generator")
const spanResult = document.querySelector("#input-cpf")

const CpfController = new CPF()

inputCPF.addEventListener("input", e => {
  let cpf = e.target.value.replace(/\D/g, '')
  if (cpf.length > 11) cpf = cpf.substring(0, 11)
  e.target.value = CpfController.format(cpf)
})

validateButton.addEventListener("click", () => {
  inputCPF.classList.remove("valid", "error")

  CpfController.isValid(inputCPF.value)
    ? inputCPF.classList.add("valid")
    : inputCPF.classList.add("error")
})

generateButton.addEventListener("click", () => 
  spanResult.innerHTML = CpfController.generate()
)