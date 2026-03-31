export class DeathSystem {
  isDead(survivalStats) {
    return survivalStats.health <= 0;
  }

  respawn(survivalStats, player, spawnPos) {
    survivalStats.health = survivalStats.maxHealth * 0.5;
    survivalStats.hunger = Math.max(survivalStats.hunger, 50);
    survivalStats.stamina = 100;
    player.position.x = spawnPos.x;
    player.position.y = spawnPos.y;
    player.position.z = spawnPos.z;
  }
}
