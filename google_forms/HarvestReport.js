/**
 * ============================================================
 * KrishiMitra AI
 * HarvestReport.js
 * Entry point for Harvest Report Form
 * ============================================================
 */

function createHarvestReportForm() {

    const form = createKrishiMitraForm(
        "🌾 KrishiMitra AI | काढणी अहवाल | Harvest Report",
        `हा फॉर्म प्रत्येक हंगामाच्या शेवटी भरावा.

This form should be filled after harvesting each crop.
The information will help improve AI recommendations and yield prediction.`
    );

    buildForm(form, HARVEST_QUESTIONS);

    printFormLinks(form);

}
