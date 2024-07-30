export class CPF {
    isValid(cpf) {
        const cleanedCPF = cpf.replace(/\D+/g, "")
        if (!cleanedCPF || cleanedCPF.length !== 11 || this.isSequence(cleanedCPF)) return false

        const partialCPF = cleanedCPF.slice(0, -2)
        const digit1 = this.calculateDigit(partialCPF)
        const digit2 = this.calculateDigit(partialCPF + digit1)
        const fullCPF = partialCPF + digit1 + digit2

        return fullCPF === cleanedCPF
    }

    isSequence(cpf) {
        return cpf.split("").every(char => char === cpf[0])
    }

    calculateDigit(partialCPF) {
        const cpfArray = [...partialCPF].map(Number)
        const total = cpfArray.reduce((acc, num, index) => acc + num * (cpfArray.length + 1 - index), 0)
        const digit = 11 - (total % 11)
    
        return digit > 9 ? "0" : digit.toString()
    }

    format(cpf) {
        if (cpf.length > 9) return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        if (cpf.length > 6) return cpf.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3")
        return cpf.replace(/(\d{3})(\d{3})/, "$1.$2")
    }

    generate() {
        const min = 100000000
        const max = 999999999

        const partialCPF = String(Math.floor(Math.random() * (max - min) + min))
        const digit1 = this.calculateDigit(partialCPF)
        const digit2 = this.calculateDigit(partialCPF + digit1)
        const newCPF = partialCPF + digit1 + digit2

        return this.format(newCPF)
    }
}