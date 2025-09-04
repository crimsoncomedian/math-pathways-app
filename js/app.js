// ------------------------------
// js/app.js (browser client)
// ------------------------------

// ---- Internals ----
const BAG_KEY = 'survey';

function safeParse(json, fallback) {
  try { return JSON.parse(json); } catch { return fallback; }
}

function readBag() {
  return safeParse(localStorage.getItem(BAG_KEY), {});
}

function writeBag(obj) {
  try {
    localStorage.setItem(BAG_KEY, JSON.stringify(obj));
    return true;
  } catch {
    // Quota or serialization error—fail silently so the UI still works
    return false;
  }
}

// ---- Public API ----

/**
 * Save/replace a value at a top-level key.
 * Example: setKV('student', { first:'Ada', last:'Lovelace' })
 */
export function setKV(key, value) {
  const bag = readBag();
  bag[key] = value;
  writeBag(bag);
}

/**
 * Shallow-merge into an existing object value.
 * Example: mergeKV('student', { last:'Lovelace' })
 */
export function mergeKV(key, partial) {
  const bag = readBag();
  const prev = (bag[key] && typeof bag[key] === 'object' && !Array.isArray(bag[key])) ? bag[key] : {};
  bag[key] = { ...prev, ...partial };
  writeBag(bag);
}

/**
 * Read a value by key. Returns defVal if missing.
 */
export function getKV(key, defVal = null) {
  const bag = readBag();
  return Object.prototype.hasOwnProperty.call(bag, key) ? bag[key] : defVal;
}

/**
 * Read the entire survey object.
 */
export function getAll() {
  return readBag();
}

/**
 * Remove a single key from the survey bag.
 */
export function removeKV(key) {
  const bag = readBag();
  if (Object.prototype.hasOwnProperty.call(bag, key)) {
    delete bag[key];
    writeBag(bag);
  }
}

/**
 * Clear all locally stored answers.
 * Use with care (e.g., after successful final submit).
 */
export function clearAll() {
  try { localStorage.removeItem(BAG_KEY); } catch {}
}

/**
 * Update the visual progress bar width (0–100).
 * Works with your markup: <div class="progress"><i></i></div>
 */
export function setProgress(pct) {
  const bar = document.querySelector('.progress > i');
  if (!bar) return;
  const clamped = Math.max(0, Math.min(100, Number(pct) || 0));
  bar.style.width = `${clamped}%`;
}

/**
 * Convenience: set progress based on step/total (1-based step).
 * Example: setStepProgress(2, 10) -> 20%
 */
export function setStepProgress(step, total) {
  const s = Math.max(0, Number(step) || 0);
  const t = Math.max(1, Number(total) || 1);
  setProgress((s / t) * 100);
}

// ---- Optional: tiny helpers you might find handy ----

/**
 * Append a value to an array key (creates the array if needed).
 * Example: appendTo('answers', { id:'q1', value:'B' })
 */
export function appendTo(key, value) {
  const bag = readBag();
  const arr = Array.isArray(bag[key]) ? bag[key] : [];
  arr.push(value);
  bag[key] = arr;
  writeBag(bag);
}

/**
 * Replace (upsert) an item in an array key by predicate.
 * Example: upsertIn('answers', x => x.id === 'q1', { id:'q1', value:'C' })
 */
export function upsertIn(key, predicate, nextItem) {
  const bag = readBag();
  const arr = Array.isArray(bag[key]) ? bag[key] : [];
  const idx = arr.findIndex(predicate);
  if (idx >= 0) arr[idx] = nextItem; else arr.push(nextItem);
  bag[key] = arr;
  writeBag(bag);
}
