// ==========
// App State
// ==========

let state = {
  name: null,
  struggle_reasons: [],
  currentModule: null,
  rankings: {},
  confidence: {},
  answers: {},
  reflection: {},
};

// Try to load from sessionStorage if available
try {
  const raw = sessionStorage.getItem('math_app_state');
  if (raw) state = { ...state, ...JSON.parse(raw) };
} catch (e) {
  console.warn('Could not parse session state:', e);
}

// ===============
// State Helpers
// ===============

export function setKV(key, value) {
  state[key] = value;
  try {
    sessionStorage.setItem('math_app_state', JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save session state:', e);
  }
}

export function getKV(key) {
  return state[key];
}

// ===============
// Progress Helper
// ===============

export function setProgress(percent) {
  const bar = document.querySelector('.progress i');
  if (bar) bar.style.width = `${percent}%`;
}

// ========================
// Utility: Get Module Data
// ========================

export function getCurrentModuleQuestions() {
  const mod = state.currentModule;
  if (!mod || !MODULE_QUESTIONS[mod]) return [];
  return MODULE_QUESTIONS[mod];
}

// ============
// DOM Utility
// ============

export function $(selector) {
  return document.querySelector(selector);
}

export function $all(selector) {
  return [...document.querySelectorAll(selector)];
}

// =====================
// For Debugging (opt.)
// =====================

window.mathApp = {
  getState: () => structuredClone(state),
  reset: () => {
    sessionStorage.removeItem('math_app_state');
    location.reload();
  },
};

// Optional: import module content if available
import { MODULE_QUESTIONS, MODULE_TITLES } from './modules.js';
export { MODULE_QUESTIONS, MODULE_TITLES };
