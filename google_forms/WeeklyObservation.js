/**
 * KrishiMitra AI
 * WeeklyObservation.gs
 * Creates the Weekly Farm Observation Form
 */
function createWeeklyObservationForm() {
  const form = FormApp.create("🌾 KrishiMitra AI | साप्ताहिक शेती निरीक्षण | Weekly Farm Observation");

  form.setDescription(`हा फॉर्म आठवड्यातून एकदा भरावा.
This form should be filled once every week to monitor crop health.`);

  form.setProgressBar(true);

  form.addPageBreakItem()
      .setTitle("🌾 Farm Identification");

  form.addTextItem()
      .setTitle("Farmer ID / शेतकरी आयडी")
      .setRequired(true);

  form.addTextItem()
      .setTitle("Farm ID / शेत आयडी")
      .setRequired(true);

  form.addDateItem()
      .setTitle("Observation Date / निरीक्षणाची तारीख")
      .setRequired(true);

  form.addPageBreakItem()
      .setTitle("🌱 Crop Status");

  form.addListItem()
      .setTitle("Current Crop Health / पिकाची स्थिती")
      .setChoiceValues([
        "Excellent / उत्कृष्ट",
        "Good / चांगली",
        "Average / मध्यम",
        "Poor / खराब"
      ])
      .setRequired(true);

  form.addCheckboxItem()
      .setTitle("Observed Problems / दिसलेल्या समस्या")
      .setChoiceValues([
        "Yellow Leaves",
        "Leaf Spots",
        "Wilting",
        "Pest Attack",
        "Slow Growth",
        "Water Stress",
        "No Problem"
      ]);

  form.addParagraphTextItem()
      .setTitle("Describe the issue / समस्येचे वर्णन");

  form.addPageBreakItem()
      .setTitle("💧 Irrigation");

  form.addMultipleChoiceItem()
      .setTitle("Was irrigation done this week? / या आठवड्यात पाणी दिले का?")
      .setChoiceValues(["Yes / होय","No / नाही"])
      .setRequired(true);

  form.addTextItem()
      .setTitle("Approx. Water Used (Litres) / वापरलेले पाणी (लिटर)");

  form.addPageBreakItem()
      .setTitle("🌿 Fertilizer & Pest Control");

  form.addTextItem()
      .setTitle("Fertilizer Used / वापरलेले खत");

  form.addTextItem()
      .setTitle("Pesticide Used / वापरलेले कीटकनाशक");

  form.addParagraphTextItem()
      .setTitle("Traditional Practice Used / वापरलेली पारंपरिक पद्धत");

  form.addPageBreakItem()
      .setTitle("📷 Photo Upload");

  form.addParagraphTextItem()
      .setTitle("Paste Google Drive link of crop photos / पिकाच्या फोटोची Google Drive लिंक");

  form.addPageBreakItem()
      .setTitle("📝 Final Remarks");

  form.addParagraphTextItem()
      .setTitle("Additional Remarks / अतिरिक्त माहिती");

  Logger.log("Form URL: " + form.getPublishedUrl());
  Logger.log("Edit URL: " + form.getEditUrl());
}