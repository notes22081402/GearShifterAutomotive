import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
 formData = {
    name: '',
    email: '',
    message: ''
  };
  constructor(private http: HttpClient) {}
  onSubmit(){
    this.http.post('https://localhost:7023/api/Email', this.formData).subscribe({
      next:(res)=>{
        console.log('Success',res);
        alert("Message sent!");
      },
      error:(err)=>{
        console.error("Error Sending Messsage",err);
        alert('Failed to send message.');
      }
    })
  }

}
