/**
 * ============================================================
 * KrishiMitra AI
 * Builder.js
 *
 * Dynamic Google Form Builder
 * Version : 1.0
 * ============================================================
 */

function buildForm(form, questions) {

  questions.forEach(question => {

    switch (question.type) {

      // ===========================================
      // SECTION
      // ===========================================

      case "section":

        addSection(
          form,
          question.title
        );

        break;

      // ===========================================
      // TEXT
      // ===========================================

      case "text":

        const text = form.addTextItem();

        text.setTitle(question.title);

        text.setRequired(question.required || false);

        if (question.helpText) {
          text.setHelpText(question.helpText);
        }

        if (question.validation) {
          text.setValidation(question.validation());
        }

        break;

      // ===========================================
      // PARAGRAPH
      // ===========================================

      case "paragraph":

        const paragraph = form.addParagraphTextItem();

        paragraph.setTitle(question.title);

        paragraph.setRequired(question.required || false);

        if (question.helpText) {
          paragraph.setHelpText(question.helpText);
        }

        break;

      // ===========================================
      // DROPDOWN
      // ===========================================

      case "dropdown":

        const dropdown = form.addListItem();

        dropdown.setTitle(question.title);

        dropdown.setChoiceValues(question.options);

        dropdown.setRequired(question.required || false);

        break;

      // ===========================================
      // MULTIPLE CHOICE
      // ===========================================

      case "multipleChoice":

        const mcq = form.addMultipleChoiceItem();

        mcq.setTitle(question.title);

        mcq.setChoiceValues(question.options);

        mcq.setRequired(question.required || false);

        break;

      // ===========================================
      // CHECKBOX
      // ===========================================

      case "checkbox":

        const checkbox = form.addCheckboxItem();

        checkbox.setTitle(question.title);

        checkbox.setChoiceValues(question.options);

        checkbox.setRequired(question.required || false);

        break;

      // ===========================================
      // DATE
      // ===========================================

      case "date":

        const date = form.addDateItem();

        date.setTitle(question.title);

        date.setRequired(question.required || false);

        break;

      // ===========================================
      // SCALE
      // ===========================================

      case "scale":

        const scale = form.addScaleItem();

        scale.setTitle(question.title);

        scale.setBounds(
          question.min || 1,
          question.max || 5
        );

        scale.setLabels(
          question.leftLabel || "",
          question.rightLabel || ""
        );

        break;

      // ===========================================
      // YES / NO
      // ===========================================

      case "yesno":

        const yesNo = form.addMultipleChoiceItem();

        yesNo.setTitle(question.title);

        yesNo.setChoiceValues([
          "Yes / होय",
          "No / नाही"
        ]);

        yesNo.setRequired(question.required || false);

        break;

      // ===========================================
      // NUMBER
      // ===========================================

      case "number":

        const number = form.addTextItem();

        number.setTitle(question.title);

        number.setRequired(question.required || false);

        number.setValidation(
          positiveNumberValidation()
        );

        break;

      // ===========================================
      // PHONE
      // ===========================================

      case "phone":

        const phone = form.addTextItem();

        phone.setTitle(question.title);

        phone.setRequired(question.required || false);

        phone.setValidation(
          mobileNumberValidation()
        );

        break;

      // ===========================================
      // EMAIL
      // ===========================================

      case "email":

        const email = form.addTextItem();

        email.setTitle(question.title);

        email.setRequired(question.required || false);

        email.setValidation(
          emailValidation()
        );

        break;

      // ===========================================
      // PINCODE
      // ===========================================

      case "pincode":

        const pin = form.addTextItem();

        pin.setTitle(question.title);

        pin.setRequired(question.required || false);

        pin.setValidation(
          pinCodeValidation()
        );

        break;

      // ===========================================
      // DRIVE LINK
      // ===========================================

      case "drive":

        const drive = form.addParagraphTextItem();

        drive.setTitle(question.title);

        drive.setHelpText(
          "Paste Google Drive Sharing Link"
        );

        drive.setRequired(question.required || false);

        break;

      // ===========================================
      // RATING
      // ===========================================

      case "rating":

        const rating = form.addScaleItem();

        rating.setTitle(question.title);

        rating.setBounds(1,5);

        rating.setLabels(
          "Poor",
          "Excellent"
        );

        break;

      // ===========================================
      // UNKNOWN
      // ===========================================

      default:

        Logger.log(
          "Unknown Question Type : " +
          question.type
        );

    }

  });

}