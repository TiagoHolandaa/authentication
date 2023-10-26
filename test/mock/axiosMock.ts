import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// Exemplo: configurando o mock para simular uma solicitação POST bem-sucedida
mock.onPost('/sua-rota').reply(200, { data: 'Resposta simulada' });

// Agora, quando você fizer uma solicitação POST para '/sua-rota', o Axios responderá com o objeto { data: 'Resposta simulada' }

// Exemplo: configurando o mock para simular uma solicitação GET com erro
mock.onGet('/outra-rota').reply(500, { error: 'Erro simulado' });

// Agora, quando você fizer uma solicitação GET para '/outra-rota', o Axios responderá com um erro 500 e o objeto { error: 'Erro simulado' }

// Você pode adicionar mais configurações de acordo com suas necessidades de teste

// Lembre-se de restaurar o mock após os testes para não afetar outros testes
mock.restore();