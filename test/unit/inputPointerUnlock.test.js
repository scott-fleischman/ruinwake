import { describe, it, expect } from 'vitest';
import { InputState } from '../../src/inputState.js';

describe('InputState.onPointerUnlock', () => {
  it('calls onPointerUnlock when pointer lock is lost', () => {
    const state = new InputState();
    let called = false;
    state.onPointerUnlock = () => { called = true; };

    state.setLocked(true);
    expect(called).toBe(false);

    state.setLocked(false);
    expect(called).toBe(true);
  });

  it('does not throw when onPointerUnlock is not set', () => {
    const state = new InputState();
    state.setLocked(true);
    state.setLocked(false); // should not throw
    expect(state.locked).toBe(false);
  });
});
