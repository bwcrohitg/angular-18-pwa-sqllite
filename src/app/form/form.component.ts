import { Component, input, model } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  public formDataInput = input.required<string>();
  public formDataModel = model.required<string>();
  onInputChange($evt: any) {
    this.formDataInput
    console.log('formDataInput',$evt,this.formDataInput());
    
   }
   onModelChange($evt: any) {
    this.formDataModel
    this.formDataModel.set($evt)
    console.log('onModelChange',$evt,this.formDataModel());
    
   }
}
