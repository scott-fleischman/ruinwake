// Diminishing returns formula: effective_damage = damage * (100 / (100 + armor))
// This means armor never reduces damage to 0, and high armor has diminishing returns.
export function calculateDamageReduction(damage, armor) {
  return damage * (100 / (100 + armor));
}
