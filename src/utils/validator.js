export default class Validator {
  static alphaNumericPattern = /^[a-zA-Z0-9]*$/;

  static validateEmail(value) {
    // if the field is empty
    if (!value) {
      return "This field is required";
    }

    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
      return "This field must be a valid email";
    }

    // All is good
    return true;
  }

  static validateAlphaNumeric(value) {
    if (!value) {
      return "This field is required";
    }

    if (!Validator.alphaNumericPattern.test(value) || value.length < 3) {
      return "This field must be alphanumeric and at least 3 characters.";
    }

    // If both conditions pass, the value is valid
    return true;
  }

  static validatePassword(value) {
    if (!value) {
      return "This field is required";
    }

    if (!Validator.alphaNumericPattern.test(value) || value.length < 6) {
      return "This field must be alphanumeric and at least 6 characters.";
    }

    // If both conditions pass, the value is valid
    return true;
  }
}
