import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  public form: FormGroup;

  public formValue: MyForm;

  public get middleNameControls(): FormControl[] {
    return (this.form.get('middleNames') as FormArray)
      .controls as FormControl[];
  }
  public ngOnInit() {
    this.form = this.makeForm();
  }

  public addMiddlename() {
    (this.form.get('middleNames') as FormArray).push(new FormControl(''));
  }

  public removeMiddlename(index: number) {
    (this.form.get('middleNames') as FormArray).removeAt(index);
  }

  public submit() {
    const formValue = this.form.value;

    this.formValue = formValue as MyForm;
  }

  private makeForm(): FormGroup {
    const form = new FormGroup({
      firstName: new FormControl(''),
      middleNames: new FormArray([]),
      lastName: new FormControl(''),
    });

    return form;
  }
}

interface MyForm {
  firstName: string;
  middleNames: string[];
  lastName: string;
}
