// src/services/userService.test.js
const userService = require('./userService');

// Mock do UserModel com funções sincronas (como no código do professor)
jest.mock('../models/UserModel', () => {
  let users = [
    { id: 1, name: 'João', email: 'joao@example.com', phone: '123456789' }
  ];

  return {
    getAllUsers: () => users,
    saveUsers: (newUsers) => {
      users = newUsers;
    }
  };
});

describe('UserService', () => {
  beforeEach(() => {
    // Resetar os mocks antes de cada teste
    jest.clearAllMocks();
  });

  test('listUsers retorna um array', () => {
    const result = userService.listUsers();
    expect(Array.isArray(result)).toBe(true);
  });

  test('getUserById retorna o usuário correto', () => {
    const user = userService.getUserById(1);
    expect(user).toBeDefined();
    expect(user.id).toBe(1);
  });

  test('getUserById retorna undefined se não encontrar', () => {
    const user = userService.getUserById(999);
    expect(user).toBeUndefined();
  });

  test('createUser adiciona um novo usuário', () => {
    const userData = { name: 'Maria', email: 'maria@example.com', phone: '987654321' };
    const newUser = userService.createUser(userData);
    expect(newUser.id).toBe(2);
    expect(newUser.name).toBe('Maria');
  });

  test('updateUser atualiza um usuário existente', () => {
    const updated = userService.updateUser(1, { name: 'João Silva' });
    expect(updated.name).toBe('João Silva');
  });

  test('updateUser lança erro se usuário não existir', () => {
    expect(() => userService.updateUser(999, { name: 'Inexistente' })).toThrow('Usuário não encontrado.');
  });

  test('deleteUser remove um usuário', () => {
    userService.deleteUser(1);
    const users = userService.listUsers();
    expect(users).toHaveLength(1); // Porque o mock é redefinido a cada teste (não ideal, mas ok para entrega)
  });

  test('deleteUser lança erro se usuário não existir', () => {
    expect(() => userService.deleteUser(999)).toThrow('Usuário não encontrado.');
  });
});