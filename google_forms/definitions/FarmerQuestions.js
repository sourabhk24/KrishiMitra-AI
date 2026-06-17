/**
 * ============================================================
 * KrishiMitra AI
 * FarmerQuestions.js
 *
 * Part 1
 * Farmer Information + Location + Farm Information
 * ============================================================
 */

const FARMER_QUESTIONS = [

    // ==========================================================
    // SECTION 1
    // Farmer Information
    // ==========================================================

    {
        type: "section",
        title: "👨‍🌾 शेतकऱ्याची माहिती | Farmer Information"
    },

    {
        type: "text",
        field: "farmer_name",
        title: "शेतकऱ्याचे पूर्ण नाव\n(Farmer Full Name)",
        required: true
    },

    {
        type: "phone",
        field: "mobile_number",
        title: "मोबाईल क्रमांक\n(Mobile Number)",
        required: true
    },

    {
        type: "phone",
        field: "whatsapp_number",
        title: "व्हॉट्सअॅप क्रमांक\n(WhatsApp Number)",
        required: false
    },

    {
        type: "dropdown",
        field: "gender",
        title: "लिंग\n(Gender)",
        options: GENDERS,
        required: true
    },

    {
        type: "number",
        field: "age",
        title: "वय\n(Age)",
        required: true
    },

    {
        type: "dropdown",
        field: "education",
        title: "शिक्षण\n(Education)",
        options: EDUCATION_LEVELS,
        required: true
    },

    {
        type: "dropdown",
        field: "experience",
        title: "शेतीचा अनुभव\n(Farming Experience)",
        options: FARMING_EXPERIENCE,
        required: true
    },

    // ==========================================================
    // SECTION 2
    // Location Information
    // ==========================================================

    {
        type: "section",
        title: "📍 स्थानाची माहिती | Location Information"
    },

    {
        type: "text",
        field: "village",
        title: "गाव\n(Village)",
        required: true
    },

    {
        type: "text",
        field: "taluka",
        title: "तालुका\n(Taluka)",
        required: true
    },

    {
        type: "dropdown",
        field: "district",
        title: "जिल्हा\n(District)",
        options: DISTRICTS,
        required: true
    },

    {
        type: "text",
        field: "state",
        title: "राज्य\n(State)",
        helpText: "Default: Maharashtra",
        required: true
    },

    {
        type: "pincode",
        field: "pincode",
        title: "पिन कोड\n(PIN Code)",
        required: true
    },

    {
        type: "paragraph",
        field: "gps_location",
        title: "Google Maps Location (Optional)",
        required: false
    },

    // ==========================================================
    // SECTION 3
    // Farm Information
    // ==========================================================

    {
        type: "section",
        title: "🌱 शेताची माहिती | Farm Information"
    },

    {
        type: "text",
        field: "farm_name",
        title: "शेताचे नाव (असल्यास)\n(Farm Name)",
        required: false
    },

    {
        type: "number",
        field: "farm_area",
        title: "एकूण शेती (एकरमध्ये)\n(Total Farm Area in Acres)",
        required: true
    },

    {
        type: "dropdown",
        field: "ownership",
        title: "शेतीचा प्रकार\n(Farm Ownership)",
        options: OWNERSHIP_TYPES,
        required: true
    },

    {
        type: "checkbox",
        field: "soil_type",
        title: "मातीचा प्रकार\n(Soil Type)",
        options: SOIL_TYPES,
        required: true
    },

    {
        type: "checkbox",
        field: "water_source",
        title: "पाण्याचा स्रोत\n(Water Source)",
        options: WATER_SOURCES,
        required: true
    },

    {
        type: "dropdown",
        field: "irrigation",
        title: "सिंचन पद्धत\n(Irrigation Method)",
        options: IRRIGATION_TYPES,
        required: true
    },

    {
        type: "yesno",
        field: "electricity",
        title: "शेतीमध्ये वीज उपलब्ध आहे का?\n(Is electricity available on the farm?)",
        required: true
    },
    // ==========================================================
    // SECTION 4
    // Crop Information
    // ==========================================================

    {
        type: "section",
        title: "🌾 पिकांची माहिती | Crop Information"
    },

    {
        type: "checkbox",
        field: "current_crops",
        title: "सध्या घेतली जाणारी पिके\n(Current Crops)",
        options: CROPS,
        required: true
    },

    {
        type: "dropdown",
        field: "main_crop",
        title: "मुख्य पीक\n(Main Crop)",
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
        field: "crop_cycles",
        title: "वर्षातून किती पिके घेतली जातात?\n(Number of Crop Cycles per Year)",
        options: [
            "1",
            "2",
            "3",
            "More than 3"
        ],
        required: true
    },

    {
        type: "number",
        field: "average_yield",
        title: "सरासरी उत्पादन (किलो)\n(Average Yield in Kg)",
        required: false
    },

    {
        type: "paragraph",
        field: "major_crop_problem",
        title: "मुख्य शेती समस्या\n(Major Farming Problem)",
        required: false
    },

    // ==========================================================
    // SECTION 5
    // Technology
    // ==========================================================

    {
        type: "section",
        title: "📱 तंत्रज्ञान वापर | Technology Usage"
    },

    {
        type: "yesno",
        field: "smartphone",
        title: "तुमच्याकडे स्मार्टफोन आहे का?\n(Do you own a Smartphone?)",
        required: true
    },

    {
        type: "yesno",
        field: "internet",
        title: "इंटरनेट उपलब्ध आहे का?\n(Is Internet Available?)",
        required: true
    },

    {
        type: "checkbox",
        field: "languages",
        title: "पसंतीची भाषा\n(Preferred Language)",
        options: LANGUAGES,
        required: true
    },

    {
        type: "dropdown",
        field: "mobile_usage",
        title: "मोबाईल अॅप वापरण्याचा अनुभव\n(Experience Using Mobile Apps)",
        options: [
            "Excellent",
            "Good",
            "Average",
            "Beginner",
            "Never Used"
        ],
        required: true
    },

    {
        type: "yesno",
        field: "upi_usage",
        title: "UPI वापरता का?\n(Do you use UPI Payments?)",
        required: false
    },

    {
        type: "yesno",
        field: "government_apps",
        title: "सरकारी कृषी अॅप वापरता का?\n(Do you use Government Agriculture Apps?)",
        required: false
    },

    // ==========================================================
    // SECTION 6
    // Smart Farming
    // ==========================================================

    {
        type: "section",
        title: "🤖 स्मार्ट शेती | Smart Farming"
    },

    {
        type: "yesno",
        field: "ai_interest",
        title: "AI आधारित शेती अॅप वापरण्यास तयार आहात का?\n(Would you use an AI Farming App?)",
        required: true
    },

    {
        type: "checkbox",
        field: "required_features",
        title: "कोणती सुविधा उपयुक्त वाटेल?\n(Which Features Would You Like?)",
        options: APP_FEATURES,
        required: true
    },

    {
        type: "rating",
        field: "technology_interest",
        title: "नवीन तंत्रज्ञान स्वीकारण्याची तयारी\n(Willingness to Adopt New Technology)"
    },

    {
        type: "paragraph",
        field: "expectations",
        title: "KrishiMitra AI कडून तुमच्या अपेक्षा काय आहेत?\n(What do you expect from KrishiMitra AI?)",
        required: false
    },

    // ==========================================================
    // SECTION 7
    // Farming Challenges
    // ==========================================================

    {
        type: "section",
        title: "⚠️ शेतीतील अडचणी | Farming Challenges"
    },

    {
        type: "checkbox",
        field: "major_challenges",
        title: "तुमच्या मुख्य अडचणी कोणत्या आहेत?\n(Select Your Major Challenges)",
        options: [
            "Water Shortage",
            "Pest Attack",
            "Diseases",
            "Fertilizer Cost",
            "Labour Shortage",
            "Weather",
            "Market Price",
            "Storage",
            "Transportation",
            "Government Support"
        ],
        required: true
    },

    {
        type: "paragraph",
        field: "other_challenges",
        title: "इतर अडचणी\n(Other Challenges)",
        required: false
    },
    // ==========================================================
    // SECTION 8
    // Traditional Farming Knowledge
    // ==========================================================

    {
        type: "section",
        title: "🌿 पारंपरिक शेती ज्ञान | Traditional Farming Knowledge"
    },

    {
        type: "paragraph",
        field: "traditional_methods",
        title: "तुमच्या पूर्वजांकडून शिकलेली उपयुक्त शेती पद्धत सांगा.\n(Share a traditional farming practice that is still useful today.)",
        required: false
    },

    {
        type: "paragraph",
        field: "rain_prediction",
        title: "पाऊस येणार आहे हे तुम्ही कसे ओळखता?\n(How do you predict rainfall?)",
        required: false
    },

    {
        type: "paragraph",
        field: "traditional_pest_control",
        title: "कीड नियंत्रणासाठी कोणते पारंपरिक उपाय वापरता?\n(Traditional pest control methods used)",
        required: false
    },

    {
        type: "paragraph",
        field: "traditional_fertilizer",
        title: "सेंद्रिय किंवा घरगुती खत वापरता का?\n(Do you use traditional/organic fertilizers?)",
        required: false
    },

    {
        type: "paragraph",
        field: "other_traditional_knowledge",
        title: "इतर पारंपरिक शेती ज्ञान\n(Any other traditional farming knowledge)",
        required: false
    },

    // ==========================================================
    // SECTION 9
    // Farm Assets
    // ==========================================================

    {
        type: "section",
        title: "🚜 शेतीतील साधने | Farm Assets"
    },

    {
        type: "checkbox",
        field: "farm_machinery",
        title: "तुमच्याकडे कोणती शेती यंत्रे आहेत?\n(Farm Machinery Available)",
        options: [
            "Tractor",
            "Power Tiller",
            "Rotavator",
            "Cultivator",
            "Sprayer",
            "Drip Irrigation",
            "Sprinkler",
            "Drone",
            "None",
            "Other"
        ],
        required: false
    },

    {
        type: "yesno",
        field: "soil_testing",
        title: "माती परीक्षण केले आहे का?\n(Have you done Soil Testing?)",
        required: true
    },

    {
        type: "yesno",
        field: "weather_station",
        title: "तुमच्याकडे हवामान मोजण्याची उपकरणे आहेत का?\n(Do you have any weather monitoring equipment?)",
        required: false
    },

    // ==========================================================
    // SECTION 10
    // Photo Upload
    // ==========================================================

    {
        type: "section",
        title: "📷 फोटो अपलोड | Photo Upload"
    },

    {
        type: "drive",
        field: "farmer_photo",
        title: "शेतकऱ्याचा फोटो (Google Drive Link)\n(Farmer Photo)"
    },

    {
        type: "drive",
        field: "farm_photo",
        title: "शेताचा फोटो (Google Drive Link)\n(Farm Photo)"
    },

    {
        type: "drive",
        field: "crop_photo",
        title: "सध्याच्या पिकाचा फोटो (Google Drive Link)\n(Current Crop Photo)"
    },

    {
        type: "drive",
        field: "soil_report",
        title: "माती परीक्षण अहवाल (Google Drive Link)\n(Soil Test Report)"
    },

    // ==========================================================
    // SECTION 11
    // Future IoT Integration
    // ==========================================================

    {
        type: "section",
        title: "📡 IoT Integration (Future)"
    },

    {
        type: "yesno",
        field: "interested_iot",
        title: "भविष्यात सेन्सर आधारित स्मार्ट शेती वापरण्यास इच्छुक आहात का?\n(Are you interested in IoT-based Smart Farming?)",
        required: true
    },

    {
        type: "checkbox",
        field: "preferred_sensors",
        title: "कोणते सेन्सर्स उपयुक्त वाटतात?\n(Which sensors would you like?)",
        options: [
            "Soil Moisture",
            "Temperature",
            "Humidity",
            "Rain Sensor",
            "Light Sensor",
            "Water Level",
            "Soil pH",
            "NPK Sensor"
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
        field: "form_experience",
        title: "हा फॉर्म भरणे किती सोपे होते?\n(How easy was this form to fill?)"
    },

    {
        type: "paragraph",
        field: "suggestions",
        title: "तुमच्या सूचना\n(Suggestions for KrishiMitra AI)",
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
        field: "consent",
        title: "मी दिलेली माहिती संशोधन, AI मॉडेल विकसित करणे आणि KrishiMitra AI सुधारण्यासाठी वापरण्यास संमती देतो.\n(I agree to allow my data to be used for research and improving KrishiMitra AI.)",
        required: true
    }

];