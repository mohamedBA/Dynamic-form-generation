import { Component } from "@angular/core";
import { FieldConfig } from "./models/field.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private fields: FieldConfig[] = [
    {
      label: "Name",
      formControlName: "name",
      inputType: "text",
      type: "input",
      defaultValue: "Mohamed"
    },
    {
      label: "Old",
      formControlName: "old",
      inputType: "number",
      type: "input",
      defaultValue: 25
    },
    {
      label: "Name",
      formControlName: "name",
      inputType: "text",
      options: [
        { text: "1992", value: "1992" },
        { text: "1993", value: "1993" },
        { text: "1994", value: "1994" }
      ],
      type: "select",
      defaultValue: "Mohamed"
    }
  ];
}
