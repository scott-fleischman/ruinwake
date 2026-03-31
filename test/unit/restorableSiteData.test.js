import { describe, it, expect } from 'vitest';
import { allRestorableSites, getRestorableSiteById } from '../../src/core/restorableSiteData.js';

describe('restorableSiteData', () => {
  it('defines at least 5 restorable sites per spec', () => {
    expect(allRestorableSites.length).toBeGreaterThanOrEqual(5);
  });

  it('includes starter watch-post', () => {
    const site = getRestorableSiteById('starter_watchpost');
    expect(site).toBeDefined();
    expect(site.name).toBeTruthy();
    expect(site.requirements.length).toBeGreaterThan(0);
  });

  it('includes roadside hall', () => {
    const site = getRestorableSiteById('roadside_hall');
    expect(site).toBeDefined();
  });

  it('includes mountain workshop', () => {
    const site = getRestorableSiteById('mountain_workshop');
    expect(site).toBeDefined();
  });

  it('includes forest beacon', () => {
    const site = getRestorableSiteById('forest_beacon');
    expect(site).toBeDefined();
  });

  it('includes ward bastion', () => {
    const site = getRestorableSiteById('ward_bastion');
    expect(site).toBeDefined();
  });

  it('all sites have id, name, description, position, and requirements', () => {
    for (const site of allRestorableSites) {
      expect(site.id).toBeTruthy();
      expect(site.name).toBeTruthy();
      expect(site.description).toBeTruthy();
      expect(site.position).toBeDefined();
      expect(site.requirements.length).toBeGreaterThan(0);
    }
  });

  it('all sites start unrestored', () => {
    for (const site of allRestorableSites) {
      expect(site.restored).toBe(false);
    }
  });
});
