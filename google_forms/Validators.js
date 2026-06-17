/**
 * ==========================================================
 * KrishiMitra AI
 * Validators.gs
 *
 * Common validation helpers for Google Forms
 * ==========================================================
 */


/**
 * 10-digit Mobile Number Validation
 */
function mobileNumberValidation() {

  return FormApp.createTextValidation()
    .requireTextMatchesPattern("^[6-9][0-9]{9}$")
    .setHelpText("Enter a valid 10-digit Indian mobile number.")
    .build();

}


/**
 * 6-digit PIN Code Validation
 */
function pinCodeValidation() {

  return FormApp.createTextValidation()
    .requireTextMatchesPattern("^[1-9][0-9]{5}$")
    .setHelpText("Enter a valid 6-digit PIN code.")
    .build();

}


/**
 * Email Validation
 */
function emailValidation() {

  return FormApp.createTextValidation()
    .requireTextIsEmail()
    .setHelpText("Enter a valid email address.")
    .build();

}


/**
 * Positive Number Validation
 */
function positiveNumberValidation() {

  return FormApp.createTextValidation()
    .requireTextMatchesPattern("^[0-9]+(\\.[0-9]+)?$")
    .setHelpText("Only positive numbers are allowed.")
    .build();

}


/**
 * Currency Validation
 */
function currencyValidation() {

  return FormApp.createTextValidation()
    .requireTextMatchesPattern("^[0-9]+(\\.[0-9]{1,2})?$")
    .setHelpText("Enter amount in INR.")
    .build();

}


/**
 * Percentage Validation
 */
function percentageValidation() {

  return FormApp.createTextValidation()
    .requireTextMatchesPattern("^(100|[0-9]{1,2})(\\.[0-9]+)?$")
    .setHelpText("Enter value between 0 and 100.")
    .build();

}


/**
 * Soil pH Validation
 */
function soilPHValidation() {

  return FormApp.createTextValidation()
    .requireTextMatchesPattern("^(1[0-4]|[0-9])(\\.[0-9]+)?$")
    .setHelpText("Valid pH range: 0 - 14")
    .build();

}


/**
 * Temperature Validation
 */
function temperatureValidation() {

  return FormApp.createTextValidation()
    .requireTextMatchesPattern("^-?[0-9]+(\\.[0-9]+)?$")
    .setHelpText("Temperature in °C")
    .build();

}


/**
 * GPS Coordinate Validation
 */
function gpsValidation() {

  return FormApp.createTextValidation()
    .requireTextMatchesPattern(
      "^-?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*-?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$"
    )
    .setHelpText("Example: 18.5204, 73.8567")
    .build();

}


/**
 * Google Drive Link Validation
 */
function driveLinkValidation() {

  return FormApp.createTextValidation()
    .requireTextMatchesPattern("^https://.*")
    .setHelpText("Paste a valid Google Drive link.")
    .build();

}


/**
 * Aadhaar Validation (Optional)
 */
function aadhaarValidation() {

  return FormApp.createTextValidation()
    .requireTextMatchesPattern("^[0-9]{12}$")
    .setHelpText("Enter 12-digit Aadhaar number.")
    .build();

}


/**
 * Farm ID Validation
 */
function farmIdValidation() {

  return FormApp.createTextValidation()
    .requireTextMatchesPattern("^FARM-[0-9]{4}$")
    .setHelpText("Example: FARM-0001")
    .build();

}


/**
 * Farmer ID Validation
 */
function farmerIdValidation() {

  return FormApp.createTextValidation()
    .requireTextMatchesPattern("^FMR-[0-9]{4}$")
    .setHelpText("Example: FMR-0001")
    .build();

}


/**
 * Apply Validation Helper
 */
function applyValidation(item, validation) {

  item.setValidation(validation);

  return item;

}


/**
 * Apply Required Field
 */
function makeRequired(item) {

  item.setRequired(true);

  return item;

}


/**
 * Apply Optional Field
 */
function makeOptional(item) {

  item.setRequired(false);

  return item;

}


/**
 * Apply Help Text
 */
function addHelp(item, text) {

  item.setHelpText(text);

  return item;

}


/**
 * Standard Date Help
 */
function dateHelp(item) {

  item.setHelpText("Select the appropriate date.");

  return item;

}