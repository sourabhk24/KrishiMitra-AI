/**
 * ============================================================
 * KrishiMitra AI
 * WeeklyQuestions.js
 *
 * Part 1
 * Weekly Farm Observation Form
 * ============================================================
 */

const WEEKLY_QUESTIONS = [

    // ==========================================================
    // SECTION 1
    // Farmer Identification
    // ==========================================================

    {
        type: "section",
        title: "👨‍🌾 शेतकरी माहिती | Farmer Identification"
    },

    {
        type: "text",
        field: "farmer_id",
        title: "शेतकरी आयडी\n(Farmer ID)",
        required: true
    },

    {
        type: "text",
        field: "farmer_name",
        title: "शेतकऱ्याचे नाव\n(Farmer Name)",
        required: true
    },

    {
        type: "text",
        field: "farm_id",
        title: "शेत आयडी\n(Farm ID)",
        required: true
    },

    {
        type: "date",
        field: "observation_date",
        title: "निरीक्षणाची तारीख\n(Observation Date)",
        required: true
    },

    {
        type: "dropdown",
        field: "district",
        title: "जिल्हा\n(District)",
        options: DISTRICTS,
        required: true
    },

    // ==========================================================
    // SECTION 2
    // Crop Details
    // ==========================================================

    {
        type: "section",
        title: "🌾 पिकाची माहिती | Crop Details"
    },

    {
        type: "dropdown",
        field: "crop_name",
        title: "सध्याचे पीक\n(Current Crop)",
        options: CROPS,
        required: true
    },

    {
        type: "text",
        field: "crop_variety",
        title: "पिकाची जात\n(Crop Variety)",
        required: false
    },

    {
        type: "dropdown",
        field: "crop_stage",
        title: "पिकाची वाढ अवस्था\n(Crop Growth Stage)",
        options: [
            "Seed Sowing",
            "Germination",
            "Seedling",
            "Vegetative",
            "Flowering",
            "Fruit Formation",
            "Ripening",
            "Harvest Ready"
        ],
        required: true
    },

    {
        type: "number",
        field: "crop_age",
        title: "पिकाचे वय (दिवस)\n(Crop Age in Days)",
        required: true
    },

    {
        type: "number",
        field: "plant_height",
        title: "सरासरी झाडाची उंची (से.मी.)\n(Average Plant Height in cm)",
        required: false
    },

    {
        type: "dropdown",
        field: "crop_health",
        title: "पिकाची एकूण स्थिती\n(Overall Crop Health)",
        options: [
            "Excellent",
            "Good",
            "Average",
            "Poor",
            "Critical"
        ],
        required: true
    },

    {
        type: "rating",
        field: "health_rating",
        title: "पिकाच्या आरोग्याला गुण द्या\n(Rate Crop Health)"
    },

    // ==========================================================
    // SECTION 3
    // Irrigation & Water
    // ==========================================================

    {
        type: "section",
        title: "💧 सिंचन माहिती | Irrigation Details"
    },

    {
        type: "yesno",
        field: "irrigation_done",
        title: "या आठवड्यात सिंचन केले का?\n(Was irrigation done this week?)",
        required: true
    },

    {
        type: "dropdown",
        field: "irrigation_method",
        title: "सिंचन पद्धत\n(Irrigation Method)",
        options: IRRIGATION_TYPES,
        required: false
    },

    {
        type: "number",
        field: "irrigation_frequency",
        title: "या आठवड्यात किती वेळा सिंचन केले?\n(Number of irrigations this week)",
        required: false
    },

    {
        type: "dropdown",
        field: "soil_moisture_level",
        title: "मातीतील ओलावा\n(Soil Moisture Level)",
        options: [
            "Very Dry",
            "Dry",
            "Moderate",
            "Wet",
            "Very Wet"
        ],
        required: true
    },

    {
        type: "paragraph",
        field: "water_related_issues",
        title: "पाण्यासंबंधी काही समस्या आहेत का?\n(Any water-related issues?)",
        required: false
    },
    // ==========================================================
    // SECTION 4
    // Fertilizer & Nutrient Management
    // ==========================================================

    {
        type: "section",
        title: "🌱 खत व पोषण व्यवस्थापन | Fertilizer & Nutrient Management"
    },

    {
        type: "yesno",
        field: "fertilizer_applied",
        title: "या आठवड्यात खत दिले का?\n(Was fertilizer applied this week?)",
        required: true
    },

    {
        type: "checkbox",
        field: "fertilizer_type",
        title: "खताचा प्रकार\n(Type of Fertilizer Applied)",
        options: [
            "Urea",
            "DAP",
            "NPK",
            "Organic Compost",
            "Vermicompost",
            "Cow Dung",
            "Bio Fertilizer",
            "Micronutrients",
            "Liquid Fertilizer",
            "Other"
        ],
        required: false
    },

    {
        type: "number",
        field: "fertilizer_quantity",
        title: "खताचे प्रमाण (किलो)\n(Fertilizer Quantity in Kg)",
        required: false
    },

    {
        type: "yesno",
        field: "foliar_spray",
        title: "फवारणी केली का?\n(Was foliar spray applied?)",
        required: false
    },

    {
        type: "paragraph",
        field: "fertilizer_notes",
        title: "खताबद्दल अतिरिक्त माहिती\n(Additional Fertilizer Notes)",
        required: false
    },

    // ==========================================================
    // SECTION 5
    // Pest & Disease Monitoring
    // ==========================================================

    {
        type: "section",
        title: "🐛 कीड व रोग निरीक्षण | Pest & Disease Monitoring"
    },

    {
        type: "yesno",
        field: "pest_found",
        title: "कीड आढळली का?\n(Were pests observed?)",
        required: true
    },

    {
        type: "text",
        field: "pest_name",
        title: "कीडीचे नाव\n(Name of Pest)",
        required: false
    },

    {
        type: "yesno",
        field: "disease_found",
        title: "रोग आढळला का?\n(Was any disease observed?)",
        required: true
    },

    {
        type: "text",
        field: "disease_name",
        title: "रोगाचे नाव\n(Disease Name)",
        required: false
    },

    {
        type: "dropdown",
        field: "disease_severity",
        title: "रोगाची तीव्रता\n(Disease Severity)",
        options: [
            "Low",
            "Medium",
            "High",
            "Critical"
        ],
        required: false
    },

    {
        type: "yesno",
        field: "pesticide_used",
        title: "कीटकनाशक वापरले का?\n(Was pesticide used?)",
        required: false
    },

    {
        type: "paragraph",
        field: "pest_control_method",
        title: "कीड नियंत्रणाची पद्धत\n(Pest Control Method)",
        required: false
    },

    // ==========================================================
    // SECTION 6
    // Weather Observation
    // ==========================================================

    {
        type: "section",
        title: "🌦 हवामान निरीक्षण | Weather Observation"
    },

    {
        type: "dropdown",
        field: "weekly_weather",
        title: "या आठवड्यातील हवामान\n(Weather During This Week)",
        options: [
            "Sunny",
            "Cloudy",
            "Rainy",
            "Storm",
            "Fog",
            "Mixed"
        ],
        required: true
    },

    {
        type: "yesno",
        field: "rainfall",
        title: "पाऊस झाला का?\n(Did it rain?)",
        required: true
    },

    {
        type: "number",
        field: "estimated_rainfall",
        title: "अंदाजे पर्जन्यमान (मिमी)\n(Estimated Rainfall in mm)",
        required: false
    },

    {
        type: "dropdown",
        field: "temperature_level",
        title: "तापमानाची पातळी\n(Temperature Level)",
        options: [
            "Very Low",
            "Low",
            "Normal",
            "High",
            "Very High"
        ],
        required: true
    },

    {
        type: "dropdown",
        field: "humidity_level",
        title: "आर्द्रतेची पातळी\n(Humidity Level)",
        options: [
            "Low",
            "Medium",
            "High"
        ],
        required: true
    },

    // ==========================================================
    // SECTION 7
    // Sensor Data (Future)
    // ==========================================================

    {
        type: "section",
        title: "📡 सेन्सर माहिती (भविष्यात) | Sensor Information"
    },

    {
        type: "yesno",
        field: "sensor_installed",
        title: "शेतात IoT सेन्सर बसवले आहेत का?\n(Are IoT sensors installed on your farm?)",
        required: true
    },

    {
        type: "checkbox",
        field: "available_sensors",
        title: "उपलब्ध सेन्सर्स\n(Available Sensors)",
        options: [
            "Soil Moisture",
            "Temperature",
            "Humidity",
            "Rain Sensor",
            "Light Sensor",
            "Soil pH",
            "NPK Sensor",
            "Water Level Sensor",
            "Weather Station"
        ],
        required: false
    },

    {
        type: "paragraph",
        field: "sensor_observations",
        title: "सेन्सर निरीक्षणे\n(Sensor Observations)",
        required: false
    },
    // ==========================================================
    // SECTION 8
    // Weekly Farm Activities
    // ==========================================================

    {
        type: "section",
        title: "🚜 आठवड्याचे शेती काम | Weekly Farm Activities"
    },

    {
        type: "checkbox",
        field: "weekly_activities",
        title: "या आठवड्यात केलेली कामे\n(Activities Performed This Week)",
        options: [
            "Land Preparation",
            "Sowing",
            "Transplanting",
            "Weeding",
            "Irrigation",
            "Fertilizer Application",
            "Pesticide Spray",
            "Harvesting",
            "Pruning",
            "Mulching",
            "Soil Testing",
            "Other"
        ],
        required: true
    },

    {
        type: "paragraph",
        field: "activity_notes",
        title: "अतिरिक्त माहिती\n(Additional Activity Notes)",
        required: false
    },

    // ==========================================================
    // SECTION 9
    // Traditional Farming Practices
    // ==========================================================

    {
        type: "section",
        title: "🌿 पारंपरिक शेती निरीक्षण | Traditional Farming Practices"
    },

    {
        type: "paragraph",
        field: "traditional_practice",
        title: "या आठवड्यात वापरलेली पारंपरिक शेती पद्धत\n(Traditional Practice Used This Week)",
        required: false
    },

    {
        type: "paragraph",
        field: "farmer_observation",
        title: "शेतकऱ्याचे निरीक्षण\n(Farmer's Observation)",
        required: false
    },

    {
        type: "paragraph",
        field: "recommendations",
        title: "शेतकऱ्याच्या शिफारसी\n(Farmer Recommendations)",
        required: false
    },

    // ==========================================================
    // SECTION 10
    // Image Upload
    // ==========================================================

    {
        type: "section",
        title: "📷 फोटो अपलोड | Crop Images"
    },

    {
        type: "drive",
        field: "crop_photo_front",
        title: "पिकाचा समोरील फोटो\n(Front View of Crop)"
    },

    {
        type: "drive",
        field: "crop_photo_closeup",
        title: "जवळून घेतलेला फोटो\n(Close-up Crop Image)"
    },

    {
        type: "drive",
        field: "disease_photo",
        title: "कीड किंवा रोगाचा फोटो\n(Pest / Disease Image)"
    },

    {
        type: "drive",
        field: "farm_photo",
        title: "संपूर्ण शेताचा फोटो\n(Overall Farm Image)"
    },

    // ==========================================================
    // SECTION 11
    // AI Feedback
    // ==========================================================

    {
        type: "section",
        title: "🤖 AI सहाय्य | AI Assistance"
    },

    {
        type: "yesno",
        field: "need_ai_help",
        title: "AI कडून मार्गदर्शन हवे आहे का?\n(Do you need AI recommendations?)",
        required: true
    },

    {
        type: "checkbox",
        field: "required_ai_support",
        title: "कोणत्या प्रकारची मदत हवी आहे?\n(Required AI Support)",
        options: [
            "Disease Detection",
            "Pest Identification",
            "Fertilizer Recommendation",
            "Irrigation Recommendation",
            "Weather Advisory",
            "Yield Prediction",
            "Market Price Prediction",
            "Government Scheme Information"
        ],
        required: false
    },

    // ==========================================================
    // SECTION 12
    // Feedback
    // ==========================================================

    {
        type: "section",
        title: "💬 Feedback"
    },

    {
        type: "rating",
        field: "weekly_form_rating",
        title: "हा साप्ताहिक फॉर्म किती उपयुक्त वाटला?\n(How useful was this weekly observation form?)"
    },

    {
        type: "paragraph",
        field: "weekly_feedback",
        title: "तुमच्या सूचना\n(Your Suggestions)",
        required: false
    },

    // ==========================================================
    // SECTION 13
    // Consent
    // ==========================================================

    {
        type: "section",
        title: "📜 Consent"
    },

    {
        type: "yesno",
        field: "weekly_consent",
        title: "मी दिलेली माहिती KrishiMitra AI संशोधनासाठी वापरण्यास संमती देतो.\n(I agree to allow my weekly observation data to be used for AI research and recommendations.)",
        required: true
    }

];