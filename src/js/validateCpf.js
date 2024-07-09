export class ValidateCPF {
    constructor(cpf) {
      this.cpf = cpf.replace(/\D+/g, '')
    }

    valid() {
        if (!this.cpf || this.cpf.length !== 11 || this.isSequence()) return false

        const partialCPF = this.cpf.slice(0, -2)
        const digit1 = this.createDigit(partialCPF)
        const digit2 = this.createDigit(partialCPF + digit1)
        const newCPF = partialCPF + digit1 + digit2

        return newCPF === this.cpf
    }

    isSequence() {
        return this.cpf.split('').every(char => char === this.cpf[0])
    }

    createDigit(partialCPF) {
        const cpfArray = [...partialCPF].map(Number)
        const total = cpfArray.reduce((acc, num, index) => acc + num * (cpfArray.length + 1 - index), 0)
        const digit = 11 - (total % 11)
    
        return digit > 9 ? "0" : digit.toString()
    }
}