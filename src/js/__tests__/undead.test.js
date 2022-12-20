import Undead from '../Undead';

describe('class Undead', () => {
  test('test create class', () => {
    const undead = new Undead('Alex');
    const expected = {
      name: 'Alex',
      type: 'Undead',
      level: 1,
      health: 100,
      attack: 25,
      defence: 25,
    };
    expect(undead).toEqual(expected);
  });
});
