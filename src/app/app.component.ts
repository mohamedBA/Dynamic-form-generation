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
      label: "Date",
      formControlName: "birthday",
      inputType: "date",
      type: "input",
      defaultValue: "2018-11-15"
    },
    {
      label: "Old",
      formControlName: "old",
      inputType: "number",
      type: "input",
      defaultValue: 25
    },
    {
      label: "Hobbies",
      formControlName: "hobbie",
      inputType: "text",
      type: "input",
      list: true,
      defaultValue: ["azz", "aaa"]
    },
    {
      label: "Nationality",
      formControlName: "nationality",
      inputType: "text",
      options: [
        { text: "tn", value: "TUN" },
        { text: "fr", value: "FR" },
        { text: "usa", value: "USA" }
      ],
      type: "select"
    }
  ];
}
