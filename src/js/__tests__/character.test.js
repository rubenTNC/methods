import Character from '../Character';

describe('class Character', () => {
  test('test create class', () => {
    const character = new Character('hero', 'Bowerman', 40, 20);
    const expected = {
      name: 'hero',
      type: 'Bowerman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 20,
    };
    expect(character).toEqual(expected);
  });
  test('test error name', () => {
    expect(() => {
      const character = new Character('Крокодил Гена', 'Daemon', 40, 20);
      return character;
    }).toThrow(new Error('Name length must be in [2;10] interval!'));
  });
  test('test error type', () => {
    expect(() => {
      const character = new Character('Гена', 'Pacman', 40, 20);
      return character;
    }).toThrow(new Error('Not valid character type!'));
  });
  test('test method call levelUp', () => {
    const character = new Character('hero', 'Bowerman', 40, 20);
    character.levelUp();
    const expected = {
      name: 'hero',
      type: 'Bowerman',
      health: 100,
      level: 2,
      attack: 40 + 40 * 0.2,
      defence: 20 + 20 * 0.2,
    };
    expect(character).toEqual(expected)
  });
  test('test method call levelUp health 0', () => {
    expect(() => {
      const character = new Character('hero', 'Bowerman', 40, 20);
      character.health = 0;
      character.levelUp()
      return character
    }).toThrow('нельзя повысить левел умершего')
  })
  test('test method damage', () => {
    const character = new Character('hero', 'Bowerman', 40, 20);
    character.damage(10)
    const expected = {
      name: 'hero',
      type: 'Bowerman',
      health: 100 - 10 * (1 - 20 / 100),
      level: 1,
      attack: 40,
      defence: 20,
    };
    expect(character).toEqual(expected)
  })
  test('test method damage health less 0', () => {
    const character = new Character('hero', 'Bowerman', 40, 20);
    character.health = -1;
    character.damage(10)
    const expected = {
      name: 'hero',
      type: 'Bowerman',
      health: -1,
      level: 1,
      attack: 40,
      defence: 20,
    };
    expect(character).toEqual(expected)
  }) 
})
