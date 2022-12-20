import Zombie from '../Zombie';

describe('class Zombie', () => {
  test('test create class', () => {
    const zombie = new Zombie('Alex');
    const expected = {
      name: 'Alex',
      type: 'Zombie',
      level: 1,
      health: 100,
      attack: 40,
      defence: 10,
    };
    expect(zombie).toEqual(expected);
  });
});
