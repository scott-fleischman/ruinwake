import { describe, it, expect } from 'vitest';
import { InputState } from '../../src/inputState.js';

describe('InputState initialization', () => {
  it('initializes with default state', () => {
    const s = new InputState();
    expect(s.keys).toEqual({});
    expect(s.locked).toBe(false);
    expect(s.mouseDx).toBe(0);
    expect(s.mouseDy).toBe(0);
    expect(s.leftClick).toBe(false);
    expect(s.rightClick).toBe(false);
    expect(s.scrollDelta).toBe(0);
    expect(s.menuOpen).toBe(false);
    expect(s.onPointerUnlock).toBeNull();
  });
});

describe('InputState movement and jump', () => {
  it('getMovementInput returns all false initially', () => {
    const s = new InputState();
    expect(s.getMovementInput()).toEqual({ forward: false, back: false, left: false, right: false });
  });

  it('getMovementInput reflects key state', () => {
    const s = new InputState();
    s.keyDown('KeyW');
    s.keyDown('KeyD');
    expect(s.getMovementInput()).toEqual({ forward: true, back: false, left: false, right: true });
  });

  it('getJump reflects Space key', () => {
    const s = new InputState();
    expect(s.getJump()).toBe(false);
    s.keyDown('Space');
    expect(s.getJump()).toBe(true);
  });
});

describe('InputState key events', () => {
  it('keyDown sets key and justPressed', () => {
    const s = new InputState();
    s.keyDown('KeyW');
    expect(s.keys['KeyW']).toBe(true);
    expect(s.consumeKeyPress('KeyW')).toBe(true);
  });

  it('keyDown does not re-trigger justPressed on held key', () => {
    const s = new InputState();
    s.keyDown('KeyW');
    s.consumeKeyPress('KeyW'); // consume first press
    s.keyDown('KeyW'); // still held — should not re-trigger
    expect(s.consumeKeyPress('KeyW')).toBe(false);
  });

  it('keyUp clears key', () => {
    const s = new InputState();
    s.keyDown('KeyW');
    s.keyUp('KeyW');
    expect(s.keys['KeyW']).toBe(false);
  });
});

describe('InputState mouse', () => {
  it('consumeMouse returns accumulated deltas and resets', () => {
    const s = new InputState();
    s.locked = true;
    s.mouseMove(5, -3);
    s.mouseMove(2, 1);
    expect(s.consumeMouse()).toEqual({ dx: 7, dy: -2 });
    expect(s.consumeMouse()).toEqual({ dx: 0, dy: 0 });
  });

  it('mouseMove is ignored when not locked', () => {
    const s = new InputState();
    s.mouseMove(5, -3);
    expect(s.consumeMouse()).toEqual({ dx: 0, dy: 0 });
  });

  it('consumeLeftClick returns and resets', () => {
    const s = new InputState();
    s.locked = true;
    s.mouseButtonDown(0);
    expect(s.consumeLeftClick()).toBe(true);
    expect(s.consumeLeftClick()).toBe(false);
  });

  it('consumeRightClick returns and resets', () => {
    const s = new InputState();
    s.locked = true;
    s.mouseButtonDown(2);
    expect(s.consumeRightClick()).toBe(true);
    expect(s.consumeRightClick()).toBe(false);
  });

  it('mouseButtonDown ignored when not locked', () => {
    const s = new InputState();
    s.mouseButtonDown(0);
    expect(s.consumeLeftClick()).toBe(false);
  });

  it('mouseButtonUp clears mouseLeft key', () => {
    const s = new InputState();
    s.locked = true;
    s.mouseButtonDown(0);
    expect(s.keys['mouseLeft']).toBe(true);
    s.mouseButtonUp(0);
    expect(s.keys['mouseLeft']).toBe(false);
  });
});

describe('InputState scroll', () => {
  it('consumeScroll returns accumulated and resets', () => {
    const s = new InputState();
    s.locked = true;
    s.wheel(120);
    s.wheel(-240);
    expect(s.consumeScroll()).toBe(0); // +1 + -1 = 0
  });

  it('wheel ignored when not locked', () => {
    const s = new InputState();
    s.wheel(120);
    expect(s.consumeScroll()).toBe(0);
  });
});

describe('InputState pointer lock', () => {
  it('setLocked(false) fires onPointerUnlock when was locked', () => {
    const s = new InputState();
    let called = false;
    s.onPointerUnlock = () => { called = true; };
    s.setLocked(true);
    expect(called).toBe(false);
    s.setLocked(false);
    expect(called).toBe(true);
  });

  it('setLocked(false) does not throw without callback', () => {
    const s = new InputState();
    s.setLocked(true);
    s.setLocked(false); // should not throw
    expect(s.locked).toBe(false);
  });
});
