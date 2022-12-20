import Daemon from '../Daemon';

describe('class Daemon', () => {
  test('test create class', () => {
    const daemon = new Daemon('Alex');
    const expected = {
      name: 'Alex',
      type: 'Daemon',
      level: 1,
      health: 100,
      attack: 10,
      defence: 40,
    };
    expect(daemon).toEqual(expected);
  });
});
