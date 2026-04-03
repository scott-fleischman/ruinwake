// Combat loop logic — extracted from main.js

export function processEnemyAttacks(ctx) {
  const { enemies, survivalStats, combatSystem, applyDifficultyDamage, applyArmor } = ctx;
  for (const enemy of enemies) {
    if (enemy.isDead()) continue;
    if (enemy.canAttack()) {
      let damage = enemy.performAttack();
      damage = applyDifficultyDamage(damage);
      if (combatSystem._guarding) damage *= 0.5;
      damage = applyArmor(damage);
      survivalStats.takeDamage(damage);
    }
  }
}

export function collectDeadEnemyLoot(ctx) {
  const { enemies, getDrops, spawnDrop, xpPerKill, factionRepPerKill, experienceSystem, factionSystem, progress } = ctx;
  for (let i = enemies.length - 1; i >= 0; i--) {
    if (enemies[i].isDead()) {
      const drops = getDrops(enemies[i].type);
      for (const drop of drops) {
        spawnDrop(enemies[i].position, drop.type, drop.count);
      }
      experienceSystem.addExperience(xpPerKill, 'combat');
      factionSystem.addReputation('road_wardens', factionRepPerKill);
      progress.killEnemy(enemies[i].type);
      enemies.splice(i, 1);
    }
  }
}
