import Bowman from '../Bowman';

describe('class Bowman', () => {
  test('test create class', () => {
    const bowman = new Bowman('Alex');
    const expected = {
      name: 'Alex',
      type: 'Bowerman',
      level: 1,
      health: 100,
      attack: 25,
      defence: 25,
    };
    expect(bowman).toEqual(expected);
  });
});
