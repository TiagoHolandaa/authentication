class AuthValidation {
    static validateEmail(email: string): boolean {
        // Verificar se o email possui um formato válido usando uma expressão regular (regex).
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static validatePassword(password: string): boolean {
        // Verificar se a senha tem pelo menos 8 caracteres.
        return password.length >= 8;
    }

    static validateCPF(cpf: string): boolean {
        // Remove caracteres não numéricos do CPF.
        const cleanedCPF = cpf.replace(/\D/g, '');
    
        // Verifica se o CPF tem 11 dígitos após a limpeza.
        if (cleanedCPF.length !== 11) {
          return false;
        }
    
        // Calcula os dígitos verificadores do CPF.
        const cpfArray = cleanedCPF.split('').map(Number);
        const [a, b, c, d, e, f, g, h, i] = cpfArray;
        const checksumA = (a * 10 + b * 9 + c * 8 + d * 7 + e * 6 + f * 5 + g * 4 + h * 3 + i * 2) % 11;
        const checksumB = (a * 11 + b * 10 + c * 9 + d * 8 + e * 7 + f * 6 + g * 5 + h * 4 + i * 3 + checksumA * 2) % 11;
    
        // Verifica se os dígitos verificadores são válidos.
        if (checksumA === 0 || checksumA === 1 || checksumB === 0 || checksumB === 1) {
          return false;
        }
    
        return checksumA === cpfArray[9] && checksumB === cpfArray[10];
      }

      static validatePhone(phone: string): boolean {
        // Remove todos os caracteres não numéricos do número de telefone.
        const cleanedPhone = phone.replace(/\D/g, '');
    
        // Verifica se o telefone tem entre 10 e 11 dígitos.
        if (cleanedPhone.length < 10 || cleanedPhone.length > 11) {
          return false;
        }
    
        // Verifica se os primeiros dígitos correspondem a códigos de DDD válidos no Brasil.
        const validDDDs = ['11', '12', '13', '14', '15', '16', '17', '18', '19', /* Adicione mais DDDs válidos conforme necessário */];
        const ddd = cleanedPhone.slice(0, 2);
    
        if (!validDDDs.includes(ddd)) {
          return false;
        }
    
        return true;
      }
}

export default AuthValidation;