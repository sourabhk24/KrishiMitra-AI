/**
 * ============================================================
 * KrishiMitra AI
 * HarvestQuestions.js
 *
 * Part 1
 * Harvest Report Form
 * ============================================================
 */

const HARVEST_QUESTIONS = [

    // ==========================================================
    // SECTION 1
    // Farmer Identification
    // ==========================================================

    {
        type: "section",
        title: "👨‍🌾 शेतकरी माहिती | Farmer Information"
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
        field: "harvest_date",
        title: "कापणीची तारीख\n(Harvest Date)",
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
    // Crop Information
    // ==========================================================

    {
        type: "section",
        title: "🌾 पिकाची माहिती | Crop Information"
    },

    {
        type: "dropdown",
        field: "crop_name",
        title: "पीक\n(Crop)",
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
        type: "number",
        field: "cultivated_area",
        title: "लागवड क्षेत्र (एकर)\n(Cultivated Area in Acres)",
        required: true
    },

    {
        type: "number",
        field: "crop_duration",
        title: "पिकाचा कालावधी (दिवस)\n(Crop Duration in Days)",
        required: true
    },

    {
        type: "dropdown",
        field: "season",
        title: "हंगाम\n(Season)",
        options: [
            "Kharif",
            "Rabi",
            "Summer",
            "Perennial"
        ],
        required: true
    },

    // ==========================================================
    // SECTION 3
    // Harvest Details
    // ==========================================================

    {
        type: "section",
        title: "🚜 कापणी माहिती | Harvest Details"
    },

    {
        type: "number",
        field: "total_yield",
        title: "एकूण उत्पादन (किलो)\n(Total Yield in Kg)",
        required: true
    },

    {
        type: "number",
        field: "yield_per_acre",
        title: "प्रति एकर उत्पादन (किलो)\n(Yield Per Acre in Kg)",
        required: false
    },

    {
        type: "dropdown",
        field: "crop_quality",
        title: "उत्पादनाची गुणवत्ता\n(Crop Quality)",
        options: [
            "Excellent",
            "Good",
            "Average",
            "Poor"
        ],
        required: true
    },

    {
        type: "rating",
        field: "quality_rating",
        title: "उत्पादन गुणवत्तेला गुण द्या\n(Rate Crop Quality)"
    },

    {
        type: "yesno",
        field: "crop_loss",
        title: "कापणीमध्ये नुकसान झाले का?\n(Was there any crop loss?)",
        required: true
    },

    {
        type: "paragraph",
        field: "loss_reason",
        title: "नुकसानाचे कारण\n(Reason for Crop Loss)",
        required: false
    },

    // ==========================================================
    // SECTION 4
    // Storage
    // ==========================================================

    {
        type: "section",
        title: "🏬 साठवणूक | Storage Information"
    },

    {
        type: "yesno",
        field: "stored_crop",
        title: "पीक साठवले आहे का?\n(Is the crop stored?)",
        required: true
    },

    {
        type: "dropdown",
        field: "storage_type",
        title: "साठवणूक पद्धत\n(Storage Method)",
        options: [
            "Home Storage",
            "Warehouse",
            "Cold Storage",
            "Government Storage",
            "Private Storage"
        ],
        required: false
    },

    {
        type: "paragraph",
        field: "storage_notes",
        title: "साठवणूक माहिती\n(Storage Notes)",
        required: false
    },
    // ==========================================================
    // SECTION 5
    // Market & Selling Information
    // ==========================================================

    {
        type: "section",
        title: "💰 बाजार व विक्री माहिती | Market & Selling Information"
    },

    {
        type: "yesno",
        field: "crop_sold",
        title: "पीक विकले आहे का?\n(Has the crop been sold?)",
        required: true
    },

    {
        type: "dropdown",
        field: "selling_place",
        title: "विक्रीचे ठिकाण\n(Place of Sale)",
        options: [
            "APMC Market",
            "Local Market",
            "Direct Customer",
            "Farmer Producer Company (FPO)",
            "Government Procurement",
            "Private Buyer",
            "Export",
            "Other"
        ],
        required: false
    },

    {
        type: "number",
        field: "selling_price_per_kg",
        title: "प्रति किलो विक्री किंमत (₹)\n(Selling Price per Kg)",
        required: false
    },

    {
        type: "number",
        field: "total_income",
        title: "एकूण उत्पन्न (₹)\n(Total Income)",
        required: false
    },

    {
        type: "dropdown",
        field: "market_satisfaction",
        title: "बाजारभावाबद्दल समाधान\n(Satisfaction with Market Price)",
        options: [
            "Very Satisfied",
            "Satisfied",
            "Neutral",
            "Unsatisfied",
            "Very Unsatisfied"
        ],
        required: false
    },

    {
        type: "paragraph",
        field: "market_challenges",
        title: "विक्रीतील अडचणी\n(Market Challenges)",
        required: false
    },

    // ==========================================================
    // SECTION 6
    // Expenses & Profit
    // ==========================================================

    {
        type: "section",
        title: "💸 खर्च व नफा | Expenses & Profit"
    },

    {
        type: "number",
        field: "seed_cost",
        title: "बियाणे खर्च (₹)\n(Seed Cost)",
        required: false
    },

    {
        type: "number",
        field: "fertilizer_cost",
        title: "खत खर्च (₹)\n(Fertilizer Cost)",
        required: false
    },

    {
        type: "number",
        field: "pesticide_cost",
        title: "कीटकनाशक खर्च (₹)\n(Pesticide Cost)",
        required: false
    },

    {
        type: "number",
        field: "labour_cost",
        title: "मजुरी खर्च (₹)\n(Labour Cost)",
        required: false
    },

    {
        type: "number",
        field: "irrigation_cost",
        title: "सिंचन खर्च (₹)\n(Irrigation Cost)",
        required: false
    },

    {
        type: "number",
        field: "other_expenses",
        title: "इतर खर्च (₹)\n(Other Expenses)",
        required: false
    },

    {
        type: "number",
        field: "estimated_profit",
        title: "अंदाजे नफा (₹)\n(Estimated Profit)",
        required: false
    },

    // ==========================================================
    // SECTION 7
    // Sustainable Farming
    // ==========================================================

    {
        type: "section",
        title: "🌿 शाश्वत शेती | Sustainable Farming"
    },

    {
        type: "yesno",
        field: "organic_practices",
        title: "सेंद्रिय शेती पद्धती वापरल्या का?\n(Did you use organic farming practices?)",
        required: true
    },

    {
        type: "yesno",
        field: "water_conservation",
        title: "पाणी बचत तंत्र वापरले का?\n(Did you use water conservation methods?)",
        required: true
    },

    {
        type: "yesno",
        field: "soil_conservation",
        title: "मृदा संवर्धन उपाय केले का?\n(Did you adopt soil conservation practices?)",
        required: true
    },

    {
        type: "paragraph",
        field: "sustainable_notes",
        title: "शाश्वत शेतीबद्दल माहिती\n(Sustainable Farming Notes)",
        required: false
    },

    // ==========================================================
    // SECTION 8
    // Harvest Weather
    // ==========================================================

    {
        type: "section",
        title: "🌦 कापणीवेळी हवामान | Weather During Harvest"
    },

    {
        type: "dropdown",
        field: "harvest_weather",
        title: "कापणीवेळी हवामान\n(Weather During Harvest)",
        options: [
            "Sunny",
            "Cloudy",
            "Rainy",
            "Windy",
            "Mixed"
        ],
        required: true
    },

    {
        type: "yesno",
        field: "weather_affected_harvest",
        title: "हवामानामुळे कापणीवर परिणाम झाला का?\n(Did weather affect harvesting?)",
        required: true
    },

    {
        type: "paragraph",
        field: "weather_notes",
        title: "हवामान निरीक्षण\n(Weather Notes)",
        required: false
    },

    // ==========================================================
    // SECTION 9
    // Harvest Images
    // ==========================================================

    {
        type: "section",
        title: "📷 कापणी फोटो | Harvest Images"
    },

    {
        type: "drive",
        field: "harvest_photo",
        title: "कापणीचा फोटो\n(Harvest Photo)"
    },

    {
        type: "drive",
        field: "yield_photo",
        title: "उत्पादनाचा फोटो\n(Yield Photo)"
    },

    {
        type: "drive",
        field: "storage_photo",
        title: "साठवणुकीचा फोटो\n(Storage Photo)"
    },
    // ==========================================================
    // SECTION 10
    // AI Insights & Future Planning
    // ==========================================================

    {
        type: "section",
        title: "🤖 AI मार्गदर्शन | AI Insights & Future Planning"
    },

    {
        type: "yesno",
        field: "need_ai_analysis",
        title: "या कापणीचे AI विश्लेषण हवे आहे का?\n(Do you want AI analysis for this harvest?)",
        required: true
    },

    {
        type: "checkbox",
        field: "required_ai_services",
        title: "AI कडून कोणती मदत हवी आहे?\n(Which AI services would you like?)",
        options: [
            "Yield Analysis",
            "Profit Analysis",
            "Next Crop Recommendation",
            "Fertilizer Recommendation",
            "Disease Prediction",
            "Weather Advisory",
            "Market Price Forecast",
            "Government Scheme Suggestions"
        ],
        required: false
    },

    {
        type: "dropdown",
        field: "next_crop_plan",
        title: "पुढील हंगामात कोणते पीक घेणार?\n(Planned Crop for Next Season)",
        options: CROPS,
        required: false
    },

    {
        type: "paragraph",
        field: "future_farming_goals",
        title: "पुढील हंगामासाठी तुमचे उद्दिष्ट\n(Future Farming Goals)",
        required: false
    },

    // ==========================================================
    // SECTION 11
    // Farmer Feedback
    // ==========================================================

    {
        type: "section",
        title: "💬 शेतकऱ्याचे अभिप्राय | Farmer Feedback"
    },

    {
        type: "rating",
        field: "overall_harvest_satisfaction",
        title: "या हंगामाबद्दल तुमचे समाधान\n(Overall Satisfaction with this Harvest)"
    },

    {
        type: "yesno",
        field: "would_recommend_platform",
        title: "तुम्ही KrishiMitra AI इतर शेतकऱ्यांना सुचवाल का?\n(Would you recommend KrishiMitra AI to other farmers?)",
        required: true
    },

    {
        type: "paragraph",
        field: "platform_feedback",
        title: "KrishiMitra AI बद्दल अभिप्राय\n(Feedback about KrishiMitra AI)",
        required: false
    },

    {
        type: "paragraph",
        field: "additional_comments",
        title: "इतर सूचना\n(Additional Comments)",
        required: false
    },

    // ==========================================================
    // SECTION 12
    // Government Schemes
    // ==========================================================

    {
        type: "section",
        title: "🏛 सरकारी योजना | Government Schemes"
    },

    {
        type: "yesno",
        field: "government_scheme_used",
        title: "या पिकासाठी कोणती सरकारी योजना वापरली का?\n(Did you use any government scheme for this crop?)",
        required: true
    },

    {
        type: "paragraph",
        field: "government_scheme_name",
        title: "योजनेचे नाव\n(Government Scheme Name)",
        required: false
    },

    {
        type: "yesno",
        field: "need_scheme_information",
        title: "भविष्यात सरकारी योजनांची माहिती हवी आहे का?\n(Would you like information about government schemes?)",
        required: true
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
        field: "harvest_consent",
        title: "मी दिलेली माहिती संशोधन, AI मॉडेल प्रशिक्षण आणि KrishiMitra AI सुधारण्यासाठी वापरण्यास संमती देतो.\n(I agree to allow my harvest data to be used for AI research and improving KrishiMitra AI.)",
        required: true
    }

];