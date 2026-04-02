import { describe, it, expect } from 'vitest';
import { Settings } from '../../src/core/settings.js';
import { InputState } from '../../src/inputState.js';

describe('Remappable key bindings', () => {
  it('Settings has default key bindings', () => {
    const settings = new Settings();
    expect(settings.keyBindings).toBeDefined();
    expect(settings.keyBindings.forward).toBe('KeyW');
    expect(settings.keyBindings.back).toBe('KeyS');
    expect(settings.keyBindings.left).toBe('KeyA');
    expect(settings.keyBindings.right).toBe('KeyD');
    expect(settings.keyBindings.jump).toBe('Space');
    expect(settings.keyBindings.sprint).toBe('ShiftLeft');
    expect(settings.keyBindings.crouch).toBe('KeyC');
    expect(settings.keyBindings.interact).toBe('KeyT');
    expect(settings.keyBindings.eat).toBe('KeyF');
    expect(settings.keyBindings.throwItem).toBe('KeyH');
  });

  it('can remap a key binding', () => {
    const settings = new Settings();
    settings.setKeyBinding('forward', 'ArrowUp');
    expect(settings.keyBindings.forward).toBe('ArrowUp');
  });

  it('rejects remapping to an unknown action', () => {
    const settings = new Settings();
    const result = settings.setKeyBinding('nonexistent_action', 'KeyQ');
    expect(result).toBe(false);
  });

  it('resetKeyBindings restores defaults', () => {
    const settings = new Settings();
    settings.setKeyBinding('forward', 'ArrowUp');
    settings.resetKeyBindings();
    expect(settings.keyBindings.forward).toBe('KeyW');
  });

  it('InputState uses key bindings for movement', () => {
    const settings = new Settings();
    settings.setKeyBinding('forward', 'ArrowUp');

    const input = new InputState(settings.keyBindings);
    input.keyDown('ArrowUp');
    const move = input.getMovementInput();
    expect(move.forward).toBe(true);
    expect(move.back).toBe(false);
  });

  it('InputState falls back to defaults without bindings', () => {
    const input = new InputState();
    input.keyDown('KeyW');
    const move = input.getMovementInput();
    expect(move.forward).toBe(true);
  });
});
