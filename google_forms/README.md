# 🌾 KrishiMitra AI - Google Forms Module

## Overview

The **Google Forms Module** is responsible for collecting structured agricultural data from farmers for the KrishiMitra AI platform.

The collected data will be used for:

- 🌱 AI Model Training
- 📊 Farm Analytics
- 🤖 Recommendation Engine
- 📡 IoT Device Integration
- 📱 Flutter Mobile Application
- 🌦 Weather-based Decision Support
- 🌾 Yield Prediction
- 🐛 Disease Detection

This module is designed using a **configuration-driven architecture**, allowing new forms to be created by simply defining question objects without modifying the core builder.

---

# Folder Structure

```
google_forms/

├── Builder.js
├── Constants.js
├── Validators.js
├── FormUtils.js

├── FarmerRegistration.js
├── WeeklyObservation.js
├── HarvestReport.js

├── definitions/
│   ├── FarmerQuestions.js
│   ├── WeeklyQuestions.js
│   └── HarvestQuestions.js

└── README.md
```

---

# Architecture

```
Question Definitions
        │
        ▼
 Builder.js
        │
        ▼
 Google Forms
        │
        ▼
 Google Sheets
        │
        ▼
 Backend (FastAPI)
        │
        ▼
 PostgreSQL Database
        │
        ▼
 AI Models
```

---

# File Descriptions

## Builder.js

Core engine responsible for dynamically generating Google Forms.

Supported Question Types:

- section
- text
- paragraph
- dropdown
- checkbox
- multipleChoice
- phone
- email
- pincode
- date
- number
- scale
- rating
- yesno
- drive

---

## Constants.js

Contains reusable constant values such as:

- Districts
- Crops
- Soil Types
- Irrigation Methods
- Water Sources
- Languages
- Farm Ownership
- Smart Farming Features

These constants are shared across all forms.

---

## Validators.js

Contains reusable validation functions.

Examples:

- Mobile Number Validation
- PIN Code Validation
- Email Validation
- Number Validation
- Currency Validation
- Soil pH Validation
- GPS Validation
- Google Drive Link Validation

---

## FormUtils.js

Reusable helper functions for:

- Creating Forms
- Creating Sections
- Adding Questions
- Printing URLs
- Standard Descriptions
- Consent Sections

---

## FarmerRegistration.js

Entry point for creating the Farmer Registration Form.

Example:

```javascript
createFarmerRegistration();
```

---

## WeeklyObservation.js

Creates the Weekly Crop Observation Form.

Example:

```javascript
createWeeklyObservationForm();
```

---

## HarvestReport.js

Creates the Harvest Report Form.

Example:

```javascript
createHarvestReportForm();
```

---

# Question Definitions

All questions are stored separately inside:

```
definitions/
```

This keeps the Builder generic and reusable.

Example:

```javascript
{
    field: "farmer_name",
    type: "text",
    title: "Farmer Name",
    required: true
}
```

---

# Development Workflow

## 1. Clone Repository

```bash
git clone <repository-url>
```

---

## 2. Install clasp

```bash
npm install -g @google/clasp
```

---

## 3. Login

```bash
clasp login
```

---

## 4. Push Code

```bash
clasp push
```

---

## 5. Open Apps Script

Select one of the following functions:

```
createFarmerRegistration()

createWeeklyObservationForm()

createHarvestReportForm()
```

Click **Run**.

---

# Naming Convention

Question fields follow snake_case.

Example:

```
farmer_name

mobile_number

soil_type

farm_area

crop_name
```

These names are later mapped directly to the PostgreSQL database.

---

# Supported Languages

Current:

- English
- Marathi

Future:

- Hindi
- Kannada
- Telugu
- Tamil
- Gujarati

---

# Future Improvements

- Conditional Questions
- Dynamic Branching
- Multi-language Switching
- JSON Question Definitions
- AI-assisted Form Generation
- Automatic Database Mapping
- Google Sheets Synchronization
- Sensor Configuration Forms

---

# Sprint Status

## Sprint 1

- Dynamic Form Builder
- Farmer Registration Form
- Weekly Observation Form
- Harvest Report Form
- Validation Engine
- Constants Module
- Helper Utilities
- Apps Script Integration
- clasp Integration

Status:

✅ Completed

---

## Sprint 2

- PostgreSQL Database
- FastAPI Backend
- REST APIs
- Authentication
- Raspberry Pi Integration

Status:

🚧 In Progress

---

# Contributors

KrishiMitra AI Team

Project Goal:

Empowering farmers with Artificial Intelligence, IoT, and Data-driven Agriculture.

---

# License

This project is licensed under the MIT License.