export const DEFAULT_MOVE_SPEED = 5.0;
const CROUCH_SPEED_MULTIPLIER = 0.5;

export class Player {
  constructor({ x, y, z }, { moveSpeed = DEFAULT_MOVE_SPEED } = {}) {
    this.position = { x, y, z };
    this.velocity = { x: 0, y: 0, z: 0 };
    this.yaw = 0;
    this.pitch = 0;
    this.moveSpeed = moveSpeed;
    this.onGround = false;
    this.crouching = false;
    this.cameraMode = 'first_person';
  }

  toggleCamera() {
    this.cameraMode = this.cameraMode === 'first_person'
      ? 'third_person_behind'
      : 'first_person';
  }

  setCrouch(active) {
    this.crouching = active;
  }

  applyMovementInput(input, dt) {
    let dx = 0;
    let dz = 0;

    if (input.forward) dz -= 1;
    if (input.back) dz += 1;
    if (input.left) dx -= 1;
    if (input.right) dx += 1;

    if (dx === 0 && dz === 0) return;

    const len = Math.sqrt(dx * dx + dz * dz);
    dx /= len;
    dz /= len;

    const cosYaw = Math.cos(this.yaw);
    const sinYaw = Math.sin(this.yaw);

    const worldX = dx * cosYaw - dz * sinYaw;
    const worldZ = dx * sinYaw + dz * cosYaw;

    const speed = this.crouching ? this.moveSpeed * CROUCH_SPEED_MULTIPLIER : this.moveSpeed;

    this.position.x += worldX * speed * dt;
    this.position.z += worldZ * speed * dt;
  }
}
