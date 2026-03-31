export class DialogueManager {
  constructor() {
    this._message = '';
    this._choices = [];
    this._active = false;
    this.selectedIndex = 0;
    this._response = null;
  }

  isActive() {
    return this._active;
  }

  getMessage() {
    return this._response || this._message;
  }

  getChoices() {
    return this._response ? [] : this._choices;
  }

  startDialogue(message, choices = []) {
    this._message = message;
    this._choices = choices;
    this._active = true;
    this._response = null;
    this.selectedIndex = 0;
  }

  selectChoice(index) {
    if (index < 0 || index >= this._choices.length) return null;
    const choice = this._choices[index];
    if (choice.response === null) {
      this._active = false;
      return null;
    }
    this._response = choice.response;
    return choice.response;
  }

  selectNext() {
    if (this._choices.length > 0) {
      this.selectedIndex = Math.min(this.selectedIndex + 1, this._choices.length - 1);
    }
  }

  selectPrev() {
    this.selectedIndex = Math.max(0, this.selectedIndex - 1);
  }

  dismiss() {
    this._active = false;
    this._message = '';
    this._choices = [];
    this._response = null;
  }
}
