export default class Character {
  constructor(name, type, attack, defence, healt = 100, level = 1) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name length must be in [2;10] interval!');
    }
    const types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (!types.includes(type)) {
      throw new Error('Not valid character type!');
    }

    this.name = name;
    this.type = type;
    this.health = healt;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }
  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack / 100 * 20;
      this.defence += this.defence / 100 * 20;
    } else {
      throw new Error ("нельзя повысить левел умершего")
    }
  };
  damage(points) {
    if(this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
