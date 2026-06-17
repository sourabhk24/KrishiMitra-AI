/**
 * KrishiMitra AI
 * HarvestReport.gs
 * Creates Harvest Report Form
 */

function createHarvestReportForm() {

  const form = FormApp.create("🌾 KrishiMitra AI | काढणी अहवाल | Harvest Report");

  form.setDescription(`हा फॉर्म प्रत्येक हंगामाच्या शेवटी भरावा.

This form should be filled after harvesting each crop.
The information will help improve AI recommendations and yield prediction.`);

  form.setProgressBar(true);
  form.setCollectEmail(false);

  // =====================================================
  // Section 1
  // =====================================================

  form.addPageBreakItem()
      .setTitle("👨‍🌾 Farmer & Farm Information");

  form.addTextItem()
      .setTitle("Farmer ID / शेतकरी आयडी")
      .setRequired(true);

  form.addTextItem()
      .setTitle("Farm ID / शेत आयडी")
      .setRequired(true);

  form.addTextItem()
      .setTitle("Farmer Name / शेतकऱ्याचे नाव")
      .setRequired(true);

  form.addDateItem()
      .setTitle("Harvest Date / काढणीची तारीख")
      .setRequired(true);

  // =====================================================
  // Section 2
  // =====================================================

  form.addPageBreakItem()
      .setTitle("🌾 Crop Information");

  form.addTextItem()
      .setTitle("Crop Name / पिकाचे नाव")
      .setRequired(true);

  form.addTextItem()
      .setTitle("Crop Variety / पिकाची जात");

  form.addTextItem()
      .setTitle("Area Harvested (Acres) / काढणी झालेले क्षेत्र (एकर)")
      .setRequired(true);

  form.addTextItem()
      .setTitle("Total Yield (Kg) / एकूण उत्पादन (किलो)")
      .setRequired(true);

  form.addTextItem()
      .setTitle("Yield per Acre (Kg) / प्रति एकर उत्पादन")
      .setRequired(false);

  // =====================================================
  // Section 3
  // =====================================================

  form.addPageBreakItem()
      .setTitle("💰 Sales & Income");

  form.addTextItem()
      .setTitle("Selling Price per Kg (₹) / विक्री किंमत प्रति किलो");

  form.addTextItem()
      .setTitle("Total Income (₹) / एकूण उत्पन्न");

  form.addTextItem()
      .setTitle("Buyer / विक्रेता किंवा बाजार");

  form.addMultipleChoiceItem()
      .setTitle("Where was the crop sold? / पीक कुठे विकले?")
      .setChoiceValues([
        "APMC",
        "Local Market",
        "Trader",
        "Exporter",
        "Direct Customer",
        "Self Consumption"
      ]);

  // =====================================================
  // Section 4
  // =====================================================

  form.addPageBreakItem()
      .setTitle("💸 Expenses");

  form.addTextItem()
      .setTitle("Seed Cost (₹) / बियाणे खर्च");

  form.addTextItem()
      .setTitle("Fertilizer Cost (₹) / खत खर्च");

  form.addTextItem()
      .setTitle("Pesticide Cost (₹) / कीटकनाशक खर्च");

  form.addTextItem()
      .setTitle("Labour Cost (₹) / मजुरी खर्च");

  form.addTextItem()
      .setTitle("Irrigation Cost (₹) / सिंचन खर्च");

  form.addTextItem()
      .setTitle("Other Expenses (₹) / इतर खर्च");

  // =====================================================
  // Section 5
  // =====================================================

  form.addPageBreakItem()
      .setTitle("📈 Harvest Quality");

  form.addMultipleChoiceItem()
      .setTitle("Overall Crop Quality / पिकाची गुणवत्ता")
      .setChoiceValues([
        "Excellent",
        "Good",
        "Average",
        "Poor"
      ]);

  form.addMultipleChoiceItem()
      .setTitle("Any Disease During Season? / हंगामात रोग झाला का?")
      .setChoiceValues([
        "Yes",
        "No"
      ]);

  form.addParagraphTextItem()
      .setTitle("Disease Details / रोगाचे तपशील");

  // =====================================================
  // Section 6
  // =====================================================

  form.addPageBreakItem()
      .setTitle("📷 Upload");

  form.addParagraphTextItem()
      .setTitle("Harvest Photos (Google Drive Link) / काढणीचे फोटो (Google Drive लिंक)");

  form.addParagraphTextItem()
      .setTitle("Crop Quality Photos (Drive Link)");

  // =====================================================
  // Section 7
  // =====================================================

  form.addPageBreakItem()
      .setTitle("🤖 AI Feedback");

  form.addMultipleChoiceItem()
      .setTitle("Did KrishiMitra AI help you? / कृषीमित्र AI उपयोगी पडले का?")
      .setChoiceValues([
        "Very Helpful",
        "Helpful",
        "Neutral",
        "Not Helpful"
      ]);

  form.addCheckboxItem()
      .setTitle("Which features were useful? / कोणती सुविधा उपयुक्त ठरली?")
      .setChoiceValues([
        "Disease Detection",
        "Weather Alerts",
        "Irrigation Advice",
        "Fertilizer Recommendation",
        "Market Price",
        "Traditional Knowledge"
      ]);

  form.addParagraphTextItem()
      .setTitle("Suggestions for Improvement / सुधारणा सूचना");

  // =====================================================
  // Section 8
  // =====================================================

  form.addPageBreakItem()
      .setTitle("📜 Consent");

  form.addMultipleChoiceItem()
      .setTitle("I agree to use this data for AI research and improving KrishiMitra AI.\nमी ही माहिती संशोधनासाठी वापरण्यास संमती देतो.")
      .setChoiceValues([
        "Yes / होय",
        "No / नाही"
      ])
      .setRequired(true);

  Logger.log("====================================");
  Logger.log("Harvest Report Form Created");
  Logger.log("Form URL : " + form.getPublishedUrl());
  Logger.log("Edit URL : " + form.getEditUrl());
  Logger.log("====================================");

}