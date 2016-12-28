import {ValidationSeverity} from "./validation-severity.enum"
export class ModelValidation {
    ClassName: string;
    PropertyName: string;
    IdentifierValue: string;
    TextValue: string;
    Message: string;
    ValidationSeverity: ValidationSeverity
}
