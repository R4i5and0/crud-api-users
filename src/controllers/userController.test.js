const userController = require('./userController');

describe('UserController', () => {
  test('Deve ter a função listUsers definida', () => {
    expect(typeof userController.listUsers).toBe('function');
  });

  test('Deve ter a função getUserById definida', () => {
    expect(typeof userController.getUserById).toBe('function');
  });

  test('Deve ter a função createUser definida', () => {
    expect(typeof userController.createUser).toBe('function');
  });

  test('Deve ter a função updateUser definida', () => {
    expect(typeof userController.updateUser).toBe('function');
  });

  test('Deve ter a função deleteUser definida', () => {
    expect(typeof userController.deleteUser).toBe('function');
  });
});