import Magician from '../Magician';

describe('class Magician', () => {
  test('test create class', () => {
    const magician = new Magician('Alex');
    const expected = {
      name: 'Alex',
      type: 'Magician',
      level: 1,
      health: 100,
      attack: 10,
      defence: 40,
    };
    expect(magician).toEqual(expected);
  });
});
