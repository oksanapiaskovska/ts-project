import Fighter, { FighterInterface } from "./fighter";

interface ImprovedFighterInterface extends FighterInterface {
  doubleHit: (enemy: Fighter | ImprovedFighter, point: number) => void;
}
export default class ImprovedFighter extends Fighter {

  constructor(name: string, health: number, power: number) {
    super(name, health, power);
  }
  doubleHit(enemy: Fighter | ImprovedFighter, point: number) {
    let doublePoint = point * 2;
    super.hit(enemy, doublePoint);
  }
}