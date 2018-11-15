import { Component, OnInit, Input } from "@angular/core";
import { FieldConfig } from "../models/field.model";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

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
      group[element.formControlName] = new FormControl(
        element.defaultValue || ""
      );
    });
    this.registerForm = new FormGroup(group);
  }
  public onSubmit(event: any) {}
}
