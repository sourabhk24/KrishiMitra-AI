/**
 * ============================================================
 * KrishiMitra AI
 * WeeklyObservation.js
 * Entry point for Weekly Farm Observation Form
 * ============================================================
 */

function createWeeklyObservationForm() {

    const form = createKrishiMitraForm(
        "🌾 KrishiMitra AI | साप्ताहिक शेती निरीक्षण | Weekly Farm Observation",
        `हा फॉर्म आठवड्यातून एकदा भरावा.

This form should be filled once every week to monitor crop health.`
    );

    buildForm(form, WEEKLY_QUESTIONS);

    printFormLinks(form);

}
