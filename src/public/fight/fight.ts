import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";

interface FightInterface {
  startFight: (fighter: Fighter, improvedFighter: ImprovedFighter, ...points: number[]) => void;
}

export default class Fight implements FightInterface {
  private fighter: Fighter;
  private improvedFighter: ImprovedFighter;

  constructor() { 
    this.fighter = new Fighter("Oksana", 100, 5);
    this.improvedFighter = new ImprovedFighter("Zoriana", 200, 5);
      
    this.initializeFight();
  }
  
  initializeFight() {
    const startButton = document.getElementById('start') as HTMLButtonElement;
    startButton.addEventListener('click', () => { 
      console.log('here');
      this.startFight(this.fighter, this.improvedFighter, 3, 5, 6, 9, 1, 5, 7, 6, 8);
    });
  }

  async startFight(fighter: Fighter, improvedFighter: ImprovedFighter, ...points: number[]) {
    for (let i = 0; i < points.length; i++) {
      const turn = i % 2;
  
      turn
        ? fighter.hit(improvedFighter, points[i])
        : improvedFighter.hit(fighter, points[i]);
  
      const loser =
        (fighter.health <= 0 && fighter) ||
        (improvedFighter.health <= 0 && improvedFighter);
  
      if (loser) {
        console.log(`${loser.name} in knockout`);
        await fighter.knockout().then(() => {});
  
        const winner = loser.name === fighter.name ? improvedFighter : fighter;
        console.log(`Winner: ${winner.name}, health: ${winner.health}`);
        console.log(`Loser: ${loser.name}, health: ${loser.health}`);
        break;
      }
    }
  };
}
