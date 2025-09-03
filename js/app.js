function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("responses");
    const body = JSON.parse(e.postData.contents);
    const ts = new Date();

    const row = [
      ts,
      body.firstName || "",
      body.lastName || "",
      (body.struggleReasons || []).join("; "),

      // M1
      (body.m1?.rank || []).join(","),
      encodeConfidence(body.m1?.confidence, body.m1?.rank),
      body.m1?.q1?.id || "", toInt(body.m1?.q1?.timeSpent),
      body.m1?.q2?.id || "", toInt(body.m1?.q2?.timeSpent),
      encodeReflection(body.m1?.reflection),

      // M2
      (body.m2?.rank || []).join(","),
      encodeConfidence(body.m2?.confidence, body.m2?.rank),
      body.m2?.q1?.id || "", toInt(body.m2?.q1?.timeSpent),
      body.m2?.q2?.id || "", toInt(body.m2?.q2?.timeSpent),
      encodeReflection(body.m2?.reflection),

      // M3
      (body.m3?.rank || []).join(","),
      encodeConfidence(body.m3?.confidence, body.m3?.rank),
      body.m3?.q1?.id || "", toInt(body.m3?.q1?.timeSpent),
      body.m3?.q2?.id || "", toInt(body.m3?.q2?.timeSpent),
      encodeReflection(body.m3?.reflection),

      // M4
      (body.m4?.rank || []).join(","),
      encodeConfidence(body.m4?.confidence, body.m4?.rank),
      body.m4?.q1?.id || "", toInt(body.m4?.q1?.timeSpent),
      body.m4?.q2?.id || "", toInt(body.m4?.q2?.timeSpent),
      encodeReflection(body.m4?.reflection)
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Helpers
function toInt(v){
  const n = Number(v);
  return Number.isFinite(n) ? Math.round(n) : "";
}
function encodeReflection(r){
  if (!r) return "";
  const base = r.difficulty || "";
  const extra = r.explain ? (" — " + r.explain) : "";
  return base + extra;
}
// Confidence aligned to the provided rank order, as letters "L/M/H" (e.g., "M,H,L,M,H")
function encodeConfidence(confMap, rankArr){
  if (!confMap || !rankArr) return "";
  return rankArr.map(id => confMap[id] || "").join(",");
}
