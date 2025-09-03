export function setKV(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
export function getKV(key, fallback=null){
  try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch{ return fallback; }
}
export function setProgress(pct){
  const bar = document.querySelector(".progress > i");
  if(bar){ bar.style.width = Math.max(0, Math.min(100, pct)) + "%"; }
}

