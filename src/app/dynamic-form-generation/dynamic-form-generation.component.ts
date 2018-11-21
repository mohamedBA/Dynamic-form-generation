import { Component, OnInit, Input } from "@angular/core";
import { FieldConfig } from "../models/field.model";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: "app-dynamic-form-generation",
  templateUrl: "./dynamic-form-generation.component.html",
  styleUrls: ["./dynamic-form-generation.component.css"]
})
export class DynamicFormGenerationComponent implements OnInit {
  @Input() private fields: FieldConfig[];
  private registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    const group: any = {};
    this.fields.forEach(element => {
      if (element.list) {
        if (element.defaultValue) {
          const groupArray: any[] = [];
          element.defaultValue.forEach((value, index) => {
            groupArray.push(new FormControl(value));
          });
          group[element.formControlName] = this.formBuilder.array(groupArray);
        } else {
          group[element.formControlName] = this.formBuilder.array([]);
        }
      } else {
        group[element.formControlName] = this.formBuilder.control(
          element.defaultValue || ""
        );
      }
    });
    this.registerForm = new FormGroup(group);
  }
  public add(formControlNamePath: string) {
    const formArray: FormArray = <FormArray>(
      this.registerForm.get(formControlNamePath)
    );
    formArray.push(new FormControl(""));
  }
  public remove(index: number, formControlNamePath: string) {
    const formArray: FormArray = <FormArray>(
      this.registerForm.get(formControlNamePath)
    );
    formArray.removeAt(index);
  }
  public onSubmit(event: any) {
    console.log(this.registerForm.value);
  }
}
