export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  label?: string;
  formControlName?: string;
  inputType?: string;
  options?: any[];
  collections?: any;
  type: string;
  defaultValue?: any;
  inputClasses?: string[] | string;
  labelClasses?: string[] | string;
  validations?: Validator[];
}
export interface Form {
  crname?: string;
}
