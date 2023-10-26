import { encryptData } from '@/infrastructure/encryptAnddecrypt/encrypt';
import CryptoJS from 'crypto-js';

describe('encryptData', () => {
  it('deve criptografar os dados com sucesso', () => {
    // Dado um dado de entrada
    const inputData = 'dados-confidenciais';

    // Chame a função de criptografia
    const encryptedData = encryptData(inputData);

    // Verifique se a função retornou um resultado não nulo
    expect(encryptedData).not.toBeNull();

    // Verifique se o resultado não é igual ao dado de entrada (ou seja, ele foi criptografado)
    expect(encryptedData).not.toEqual(inputData);
  });

  it('deve lidar com erros durante a criptografia', () => {
    // Simule um erro durante a criptografia
    jest.spyOn(CryptoJS.AES, 'encrypt').mockImplementation(() => {
      throw new Error('Erro de criptografia');
    });

    // Dado um dado de entrada
    const inputData = 'dados-confidenciais';

    // Chame a função de criptografia
    const encryptedData = encryptData(inputData);

    // Verifique se a função retornou nulo devido ao erro
    expect(encryptedData).toBeNull();
  });
});
