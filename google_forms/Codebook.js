/**
 * ============================================================
 * KrishiMitra AI
 * Codebook.js
 *
 * Generates the data codebook: for every question across all
 * forms, the snake_case `field` -> DB column, its type, whether
 * it is required, its options, and the section/form it lives in.
 *
 * This is the mapping that lets Google Form responses (whose
 * Sheet headers are the long bilingual titles) be re-linked to
 * the schema columns in db/schema.sql.
 *
 * Run generateCodebook() from the Apps Script editor. It creates
 * a Google Sheet AND logs the same table as CSV.
 * ============================================================
 */

const CODEBOOK_HEADER = [
  "form",
  "section",
  "field",
  "db_column",   // == field (1:1 mapping into db/schema.sql)
  "type",
  "required",
  "options",
  "title"
];


function generateCodebook() {

  // Built inside the function (not at top level) so the question
  // arrays are referenced only at call time — by then every project
  // file has loaded. A top-level reference can hit a load-order
  // ReferenceError because Apps Script does not guarantee that
  // definitions/*.js evaluate before this file.
  const forms = [
    { form: "Farmer Registration", questions: FARMER_QUESTIONS },
    { form: "Weekly Observation",  questions: WEEKLY_QUESTIONS },
    { form: "Harvest Report",      questions: HARVEST_QUESTIONS }
  ];

  const rows = [CODEBOOK_HEADER];

  forms.forEach(function (entry) {

    let section = "";

    entry.questions.forEach(function (q) {

      // Section markers set context; they are not data columns.
      if (q.type === "section") {
        section = cleanSectionTitle(q.title);
        return;
      }

      rows.push([
        entry.form,
        section,
        q.field || "",
        q.field || "",                       // db_column mirrors field
        q.type,
        q.required === true,
        (q.options || []).join(" | "),
        String(q.title || "").replace(/\n/g, " ")
      ]);

    });

  });

  writeCodebookSheet(rows);
  logCodebookCsv(rows);
}


/**
 * Section titles look like:
 *   "👨‍🌾 शेतकऱ्याची माहिती | Farmer Information"
 * Return the English part after "|" (falling back to the whole).
 */
function cleanSectionTitle(title) {
  const parts = String(title).split("|");
  return (parts.length > 1 ? parts[1] : parts[0]).trim();
}


function writeCodebookSheet(rows) {

  const ss = SpreadsheetApp.create("KrishiMitra AI — Data Codebook");

  const sheet = ss.getSheets()[0];
  sheet.setName("codebook");

  sheet
    .getRange(1, 1, rows.length, CODEBOOK_HEADER.length)
    .setValues(rows);

  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, CODEBOOK_HEADER.length);

  Logger.log("Codebook rows : " + (rows.length - 1));
  Logger.log("Codebook Sheet: " + ss.getUrl());
}


function logCodebookCsv(rows) {
  const csv = rows
    .map(function (r) { return r.map(csvCell).join(","); })
    .join("\n");
  Logger.log(csv);
}


function csvCell(value) {
  const s = String(value);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}
