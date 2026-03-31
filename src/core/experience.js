const BASE_XP = 100;
const GROWTH_FACTOR = 1.5;

function xpThreshold(level) {
  // Total XP needed to reach `level` from level 1
  let total = 0;
  for (let l = 1; l < level; l++) {
    total += Math.floor(BASE_XP * Math.pow(GROWTH_FACTOR, l - 1));
  }
  return total;
}

export class ExperienceSystem {
  constructor() {
    this.level = 1;
    this.experience = 0;
    this.skillPoints = 0;
  }

  addExperience(amount, _source) {
    this.experience += amount;
    while (this.experience >= xpThreshold(this.level + 1)) {
      this.level++;
      this.skillPoints++;
    }
  }

  getExpForNextLevel() {
    return xpThreshold(this.level + 1) - xpThreshold(this.level);
  }

  getExpProgress() {
    const currentLevelStart = xpThreshold(this.level);
    const nextLevelStart = xpThreshold(this.level + 1);
    const range = nextLevelStart - currentLevelStart;
    if (range <= 0) return 0;
    return (this.experience - currentLevelStart) / range;
  }

  spendSkillPoint() {
    if (this.skillPoints <= 0) return false;
    this.skillPoints--;
    return true;
  }
}
