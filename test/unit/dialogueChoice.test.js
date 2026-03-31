import { describe, it, expect } from 'vitest';
import { DialogueManager } from '../../src/core/dialogueManager.js';

describe('DialogueManager', () => {
  it('starts with no active dialogue', () => {
    const dm = new DialogueManager();
    expect(dm.isActive()).toBe(false);
  });

  it('startDialogue sets NPC message and choices', () => {
    const dm = new DialogueManager();
    dm.startDialogue('Hello traveler!', [
      { text: 'Tell me about this place', response: 'This was once a great hall.' },
      { text: 'I need supplies', response: 'Check the crates by the wall.' },
      { text: 'Farewell', response: null },
    ]);
    expect(dm.isActive()).toBe(true);
    expect(dm.getMessage()).toBe('Hello traveler!');
    expect(dm.getChoices()).toHaveLength(3);
  });

  it('selectChoice returns the response', () => {
    const dm = new DialogueManager();
    dm.startDialogue('Hello!', [
      { text: 'Tell me more', response: 'Long ago...' },
      { text: 'Bye', response: null },
    ]);
    const result = dm.selectChoice(0);
    expect(result).toBe('Long ago...');
  });

  it('selectChoice with null response ends dialogue', () => {
    const dm = new DialogueManager();
    dm.startDialogue('Hello!', [
      { text: 'Bye', response: null },
    ]);
    dm.selectChoice(0);
    expect(dm.isActive()).toBe(false);
  });

  it('dismiss closes dialogue', () => {
    const dm = new DialogueManager();
    dm.startDialogue('Hello!', []);
    dm.dismiss();
    expect(dm.isActive()).toBe(false);
  });

  it('selectedIndex starts at 0', () => {
    const dm = new DialogueManager();
    dm.startDialogue('Hi', [{ text: 'A', response: 'a' }, { text: 'B', response: 'b' }]);
    expect(dm.selectedIndex).toBe(0);
  });

  it('selectNext and selectPrev navigate choices', () => {
    const dm = new DialogueManager();
    dm.startDialogue('Hi', [{ text: 'A', response: 'a' }, { text: 'B', response: 'b' }]);
    dm.selectNext();
    expect(dm.selectedIndex).toBe(1);
    dm.selectPrev();
    expect(dm.selectedIndex).toBe(0);
  });
});
