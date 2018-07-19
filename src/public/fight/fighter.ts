import ImprovedFighter from "./improvedFighter";

export interface FighterInterface {
  name: string;
  health: number;
  power: number;
  setDamage: (damage: number) => void;
  hit: (enemy: Fighter | ImprovedFighter, point: number) => void;
  knockout: () => Promise<void>;

}
export default class Fighter implements FighterInterface {
  name: string;
  health: number;
  power: number;

  constructor(name: string, health: number, power: number) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  setDamage(damage: number) {
    console.log(`${this.name} health: ${(this.health -= damage)}`);
  }

  hit(enemy: Fighter | ImprovedFighter, point: number) {
    const damage = point * this.power;
    enemy.setDamage(damage);
  }

  knockout(): Promise<void> {
    return new Promise<void> (resolve => {
      setTimeout(() => {
        console.log("Time is over");
        resolve();
      }, 500);
    });
  } 
}
