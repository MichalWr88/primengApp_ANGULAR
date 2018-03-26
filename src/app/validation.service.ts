export class ValidationService {
  static getValidationMessage(validator: string, validatorValue?: any) {
    const messages = {
      required: 'To pole jest wymagane',
      oneRequired: 'At least one field is required',
      minlength: `Min length is ${validatorValue.requiredLength} characters`,
      startsWith: `This field must start with ${validatorValue}`,
      digits: 'This field must be a digit'
    };

    return messages[validator];
  }
}
