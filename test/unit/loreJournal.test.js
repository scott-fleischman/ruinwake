import { describe, it, expect } from 'vitest';
import { LoreJournal, LoreEntry, LoreCategory } from '../../src/core/loreJournal.js';

describe('LoreCategory', () => {
  it('defines expected categories', () => {
    expect(LoreCategory.HISTORY).toBeDefined();
    expect(LoreCategory.INSCRIPTION).toBeDefined();
    expect(LoreCategory.SONG).toBeDefined();
    expect(LoreCategory.MAP_NOTE).toBeDefined();
    expect(LoreCategory.RELIC_VISION).toBeDefined();
  });
});

describe('LoreEntry', () => {
  it('creates an entry with id, title, text, and category', () => {
    const entry = new LoreEntry({
      id: 'lore_01',
      title: 'The Fall of Gil-galad',
      text: 'Long ago the elven king fell...',
      category: LoreCategory.HISTORY,
    });
    expect(entry.id).toBe('lore_01');
    expect(entry.title).toBe('The Fall of Gil-galad');
    expect(entry.text).toBe('Long ago the elven king fell...');
    expect(entry.category).toBe(LoreCategory.HISTORY);
  });
});

describe('LoreJournal', () => {
  it('starts empty', () => {
    const journal = new LoreJournal();
    expect(journal.getEntries()).toHaveLength(0);
  });

  it('addEntry adds a lore entry', () => {
    const journal = new LoreJournal();
    journal.addEntry(new LoreEntry({
      id: 'lore_01',
      title: 'Old Road Marker',
      text: 'The stone bears an inscription...',
      category: LoreCategory.INSCRIPTION,
    }));
    expect(journal.getEntries()).toHaveLength(1);
  });

  it('does not add duplicate entries', () => {
    const journal = new LoreJournal();
    const entry = new LoreEntry({
      id: 'lore_01',
      title: 'Old Road Marker',
      text: 'The stone bears an inscription...',
      category: LoreCategory.INSCRIPTION,
    });
    journal.addEntry(entry);
    journal.addEntry(entry);
    expect(journal.getEntries()).toHaveLength(1);
  });

  it('hasEntry checks by id', () => {
    const journal = new LoreJournal();
    journal.addEntry(new LoreEntry({
      id: 'lore_01',
      title: 'Old Road Marker',
      text: 'Text...',
      category: LoreCategory.INSCRIPTION,
    }));
    expect(journal.hasEntry('lore_01')).toBe(true);
    expect(journal.hasEntry('lore_02')).toBe(false);
  });

  it('getByCategory filters entries', () => {
    const journal = new LoreJournal();
    journal.addEntry(new LoreEntry({ id: 'l1', title: 'A', text: 'T', category: LoreCategory.HISTORY }));
    journal.addEntry(new LoreEntry({ id: 'l2', title: 'B', text: 'T', category: LoreCategory.SONG }));
    journal.addEntry(new LoreEntry({ id: 'l3', title: 'C', text: 'T', category: LoreCategory.HISTORY }));
    expect(journal.getByCategory(LoreCategory.HISTORY)).toHaveLength(2);
    expect(journal.getByCategory(LoreCategory.SONG)).toHaveLength(1);
  });

  it('serialize and deserialize preserves entries', () => {
    const journal = new LoreJournal();
    journal.addEntry(new LoreEntry({ id: 'l1', title: 'A', text: 'T1', category: LoreCategory.HISTORY }));
    journal.addEntry(new LoreEntry({ id: 'l2', title: 'B', text: 'T2', category: LoreCategory.SONG }));

    const data = journal.serialize();
    const journal2 = new LoreJournal();
    journal2.deserialize(data);

    expect(journal2.getEntries()).toHaveLength(2);
    expect(journal2.hasEntry('l1')).toBe(true);
    expect(journal2.hasEntry('l2')).toBe(true);
  });
});
