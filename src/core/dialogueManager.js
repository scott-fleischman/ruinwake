export class DialogueManager {
  constructor() {
    this._message = '';
    this._choices = [];
    this._active = false;
    this._state = 'inactive'; // 'inactive' | 'choices' | 'response'
    this.selectedIndex = 0;
    this._response = null;
  }

  getState() {
    return this._state;
  }

  isActive() {
    return this._active;
  }

  getMessage() {
    return this._response || this._message;
  }

  getChoices() {
    return this._state === 'choices' ? this._choices : [];
  }

  startDialogue(message, choices = []) {
    this._message = message;
    this._choices = choices;
    this._active = true;
    this._state = 'choices';
    this._response = null;
    this.selectedIndex = 0;
  }

  selectChoice(index) {
    if (this._state !== 'choices') return null;
    if (index < 0 || index >= this._choices.length) return null;
    const choice = this._choices[index];
    if (choice.response === null) {
      this._active = false;
      this._state = 'inactive';
      return null;
    }
    this._response = choice.response;
    this._state = 'response';
    return choice.response;
  }

  acknowledge() {
    if (this._state !== 'response') return;
    this._response = null;
    this._state = 'choices';
    this.selectedIndex = 0;
  }

  selectNext() {
    if (this._state === 'choices' && this._choices.length > 0) {
      this.selectedIndex = Math.min(this.selectedIndex + 1, this._choices.length - 1);
    }
  }

  selectPrev() {
    if (this._state === 'choices') {
      this.selectedIndex = Math.max(0, this.selectedIndex - 1);
    }
  }

  dismiss() {
    this._active = false;
    this._state = 'inactive';
    this._message = '';
    this._choices = [];
    this._response = null;
  }
}
