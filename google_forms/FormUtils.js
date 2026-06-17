/**
 * ============================================================
 * KrishiMitra AI
 * FormUtils.gs
 *
 * Common helper functions used across all Google Forms
 * ============================================================
 */


/**
 * Creates a new KrishiMitra Form
 */
function createKrishiMitraForm(title, description) {

  const form = FormApp.create(title);

  form.setDescription(description);

  form.setProgressBar(true);

  form.setShuffleQuestions(false);

  form.setCollectEmail(false);

  return form;
}


/**
 * ------------------------------------------------------------
 * SECTION
 * ------------------------------------------------------------
 */

function addSection(form, title) {

  return form
    .addPageBreakItem()
    .setTitle(title);

}


/**
 * ------------------------------------------------------------
 * SHORT TEXT
 * ------------------------------------------------------------
 */

function addRequiredText(form, title, helpText = "") {

  const item = form.addTextItem();

  item.setTitle(title);

  item.setRequired(true);

  if (helpText !== "") {

    item.setHelpText(helpText);

  }

  return item;

}


function addOptionalText(form, title, helpText = "") {

  const item = form.addTextItem();

  item.setTitle(title);

  item.setRequired(false);

  if (helpText !== "") {

    item.setHelpText(helpText);

  }

  return item;

}


/**
 * ------------------------------------------------------------
 * LONG PARAGRAPH
 * ------------------------------------------------------------
 */

function addParagraph(form, title, required = false) {

  return form
    .addParagraphTextItem()
    .setTitle(title)
    .setRequired(required);

}


/**
 * ------------------------------------------------------------
 * DATE
 * ------------------------------------------------------------
 */

function addDate(form, title, required = true) {

  return form
    .addDateItem()
    .setTitle(title)
    .setRequired(required);

}


/**
 * ------------------------------------------------------------
 * DROPDOWN
 * ------------------------------------------------------------
 */

function addDropdown(form, title, values, required = true) {

  return form
    .addListItem()
    .setTitle(title)
    .setChoiceValues(values)
    .setRequired(required);

}


/**
 * ------------------------------------------------------------
 * MULTIPLE CHOICE
 * ------------------------------------------------------------
 */

function addMultipleChoice(form, title, values, required = true) {

  return form
    .addMultipleChoiceItem()
    .setTitle(title)
    .setChoiceValues(values)
    .setRequired(required);

}


/**
 * ------------------------------------------------------------
 * CHECKBOX
 * ------------------------------------------------------------
 */

function addCheckbox(form, title, values, required = false) {

  return form
    .addCheckboxItem()
    .setTitle(title)
    .setChoiceValues(values)
    .setRequired(required);

}


/**
 * ------------------------------------------------------------
 * SCALE (1-5)
 * ------------------------------------------------------------
 */

function addRating(form, title) {

  return form
    .addScaleItem()
    .setTitle(title)
    .setBounds(1, 5)
    .setLabels("Poor", "Excellent");

}


/**
 * ------------------------------------------------------------
 * YES / NO
 * ------------------------------------------------------------
 */

function addYesNo(form, title, required = true) {

  return form
    .addMultipleChoiceItem()
    .setTitle(title)
    .setChoiceValues([
      "Yes / होय",
      "No / नाही"
    ])
    .setRequired(required);

}


/**
 * ------------------------------------------------------------
 * LINEAR SCALE
 * ------------------------------------------------------------
 */

function addScale(form, title, start, end, leftLabel, rightLabel) {

  return form
    .addScaleItem()
    .setTitle(title)
    .setBounds(start, end)
    .setLabels(leftLabel, rightLabel);

}


/**
 * ------------------------------------------------------------
 * FILE LINK
 * (Google Forms API limitation:
 * File uploads can only be created for Workspace accounts.
 * Therefore we use Drive link.)
 * ------------------------------------------------------------
 */

function addDriveLink(form, title) {

  return form
    .addParagraphTextItem()
    .setTitle(title)
    .setHelpText(
      "Upload the file to Google Drive and paste the sharing link here."
    );

}


/**
 * ------------------------------------------------------------
 * IMAGE URL
 * ------------------------------------------------------------
 */

function addImageLink(form, title) {

  return form
    .addParagraphTextItem()
    .setTitle(title)
    .setHelpText(
      "Paste Google Drive Image Link."
    );

}


/**
 * ------------------------------------------------------------
 * EMAIL
 * ------------------------------------------------------------
 */

function addEmail(form, title) {

  return form
    .addTextItem()
    .setTitle(title)
    .setValidation(emailValidation())
    .setRequired(false);

}


/**
 * ------------------------------------------------------------
 * PHONE
 * ------------------------------------------------------------
 */

function addPhone(form, title) {

  return form
    .addTextItem()
    .setTitle(title)
    .setValidation(mobileNumberValidation())
    .setRequired(true);

}


/**
 * ------------------------------------------------------------
 * PINCODE
 * ------------------------------------------------------------
 */

function addPincode(form, title) {

  return form
    .addTextItem()
    .setTitle(title)
    .setValidation(pinCodeValidation())
    .setRequired(true);

}


/**
 * ------------------------------------------------------------
 * CURRENCY
 * ------------------------------------------------------------
 */

function addCurrency(form, title) {

  return form
    .addTextItem()
    .setTitle(title)
    .setValidation(currencyValidation());

}


/**
 * ------------------------------------------------------------
 * NUMBER
 * ------------------------------------------------------------
 */

function addNumber(form, title) {

  return form
    .addTextItem()
    .setTitle(title)
    .setValidation(positiveNumberValidation());

}


/**
 * ------------------------------------------------------------
 * CONSENT SECTION
 * ------------------------------------------------------------
 */

function addConsent(form) {

  return form
    .addMultipleChoiceItem()
    .setTitle(
`मी दिलेली माहिती संशोधन, AI मॉडेल विकसित करणे आणि KrishiMitra AI सुधारण्यासाठी वापरण्यास संमती देतो.

I agree to use my responses for research, AI model development and improving KrishiMitra AI.`
    )
    .setChoiceValues([
      "Yes / होय",
      "No / नाही"
    ])
    .setRequired(true);

}


/**
 * ------------------------------------------------------------
 * FOOTER
 * ------------------------------------------------------------
 */

function printFormLinks(form) {

  Logger.log("");

  Logger.log("========================================");

  Logger.log("KrishiMitra AI Form Created Successfully");

  Logger.log("");

  Logger.log("Published URL");

  Logger.log(form.getPublishedUrl());

  Logger.log("");

  Logger.log("Edit URL");

  Logger.log(form.getEditUrl());

  Logger.log("");

  Logger.log("========================================");

}


/**
 * ------------------------------------------------------------
 * STANDARD DESCRIPTION
 * ------------------------------------------------------------
 */

function getStandardDescription() {

return `
नमस्कार!

KrishiMitra AI हा AI आधारित स्मार्ट शेती प्रकल्प आहे.

या फॉर्ममध्ये दिलेली माहिती केवळ संशोधन आणि AI मॉडेल विकसित करण्यासाठी वापरली जाईल.

आपली वैयक्तिक माहिती गोपनीय ठेवली जाईल.

------------------------------------------------------------

Hello!

KrishiMitra AI is an AI Powered Smart Farming Platform.

The information collected through this form will only be used for research and AI model development.

Your personal information will remain confidential.
`;

}