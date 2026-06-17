/**
 * ============================================================
 * KrishiMitra AI
 * FarmerRegistration.js
 * Entry point for Farmer Registration Form
 * ============================================================
 */

function createFarmerRegistration() {

    const form = createKrishiMitraForm(
        "🌾 KrishiMitra AI | शेतकरी नोंदणी | Farmer Registration",
        getStandardDescription()
    );

    buildForm(form, FARMER_QUESTIONS);

    printFormLinks(form);

}