import { describe, it, expect } from 'vitest';
import { InputHandler } from '../../src/input.js';

function makeFakeCanvas() {
  const listeners = {};
  return {
    addEventListener: (ev, fn) => { listeners[ev] = fn; },
    requestPointerLock: () => {},
    _listeners: listeners,
  };
}

function makeFakeDocument(canvas) {
  const listeners = {};
  return {
    addEventListener: (ev, fn) => {
      if (!listeners[ev]) listeners[ev] = [];
      listeners[ev].push(fn);
    },
    pointerLockElement: null,
    _fire: (ev, data) => {
      for (const fn of (listeners[ev] || [])) fn(data);
    },
    _listeners: listeners,
  };
}

describe('InputHandler.onPointerUnlock', () => {
  it('calls onPointerUnlock when pointer lock is lost', () => {
    const canvas = makeFakeCanvas();
    const fakeDoc = makeFakeDocument(canvas);
    const origDoc = globalThis.document;
    globalThis.document = fakeDoc;

    const input = new InputHandler(canvas);
    let called = false;
    input.onPointerUnlock = () => { called = true; };

    // Simulate pointer lock acquired
    fakeDoc.pointerLockElement = canvas;
    fakeDoc._fire('pointerlockchange');
    expect(called).toBe(false);

    // Simulate pointer lock lost (e.g. browser ESC)
    fakeDoc.pointerLockElement = null;
    fakeDoc._fire('pointerlockchange');
    expect(called).toBe(true);

    globalThis.document = origDoc;
  });

  it('does not call onPointerUnlock if not set', () => {
    const canvas = makeFakeCanvas();
    const fakeDoc = makeFakeDocument(canvas);
    const origDoc = globalThis.document;
    globalThis.document = fakeDoc;

    const input = new InputHandler(canvas);
    // No callback set — should not throw
    fakeDoc.pointerLockElement = null;
    fakeDoc._fire('pointerlockchange');

    globalThis.document = origDoc;
  });
});
