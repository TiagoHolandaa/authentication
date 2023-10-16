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
}

export default AuthValidation;