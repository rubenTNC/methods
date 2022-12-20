import Swordsman from '../Swordsman';

describe('class Swordsman', () => {
  test('test create class', () => {
    const swordsman = new Swordsman('Alex');
    const expected = {
      name: 'Alex',
      type: 'Swordsman',
      level: 1,
      health: 100,
      attack: 40,
      defence: 10,
    };
    expect(swordsman).toEqual(expected);
  });
});
