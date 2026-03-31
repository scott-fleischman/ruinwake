import { describe, it, expect } from 'vitest';
import { DialogueManager } from '../../src/core/dialogueManager.js';

describe('Dialogue state machine', () => {
  function makeDialogue() {
    const dm = new DialogueManager();
    dm.startDialogue('Hello traveler!', [
      { text: 'Tell me about this place', response: 'This was once a great hall.' },
      { text: 'What do you need?', response: 'Help restore the old sites.' },
      { text: 'Farewell', response: null },
    ]);
    return dm;
  }

  it('starts in CHOICES state with choices visible', () => {
    const dm = makeDialogue();
    expect(dm.getState()).toBe('choices');
    expect(dm.getChoices().length).toBe(3);
  });

  it('selecting a response transitions to RESPONSE state', () => {
    const dm = makeDialogue();
    dm.selectChoice(0);
    expect(dm.getState()).toBe('response');
    expect(dm.getMessage()).toBe('This was once a great hall.');
    expect(dm.getChoices().length).toBe(0);
  });

  it('acknowledging response returns to CHOICES state', () => {
    const dm = makeDialogue();
    dm.selectChoice(0);
    expect(dm.getState()).toBe('response');

    dm.acknowledge();
    expect(dm.getState()).toBe('choices');
    expect(dm.getChoices().length).toBe(3);
    expect(dm.getMessage()).toBe('Hello traveler!');
  });

  it('selecting Farewell (null response) closes dialogue', () => {
    const dm = makeDialogue();
    dm.selectChoice(2); // Farewell
    expect(dm.isActive()).toBe(false);
    expect(dm.getState()).toBe('inactive');
  });

  it('can select multiple responses in sequence', () => {
    const dm = makeDialogue();

    // First conversation
    dm.selectChoice(0);
    expect(dm.getState()).toBe('response');
    dm.acknowledge();
    expect(dm.getState()).toBe('choices');

    // Second conversation
    dm.selectChoice(1);
    expect(dm.getMessage()).toBe('Help restore the old sites.');
    dm.acknowledge();
    expect(dm.getState()).toBe('choices');

    // End conversation
    dm.selectChoice(2);
    expect(dm.isActive()).toBe(false);
  });

  it('dismiss works from any state', () => {
    const dm = makeDialogue();
    dm.selectChoice(0);
    expect(dm.getState()).toBe('response');
    dm.dismiss();
    expect(dm.isActive()).toBe(false);
    expect(dm.getState()).toBe('inactive');
  });

  it('selectedIndex resets when returning to choices', () => {
    const dm = makeDialogue();
    dm.selectedIndex = 2;
    dm.selectChoice(0);
    dm.acknowledge();
    expect(dm.selectedIndex).toBe(0);
  });
});
