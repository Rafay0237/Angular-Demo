import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService, User } from '../shared/services/user-service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './add-user.html',
  styleUrls: ['./add-user.scss']
})
export class AddUserComponent {
  userForm: FormGroup;
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private userService: UserService,private router: Router) { 
    this.userForm = this.fb.group({
      title: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      num: ['', [Validators.required]],
      pic: [null],
    });
  }

  // Handle file selection
  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.selectedImage = fileInput.files[0];

      this.userForm.get('pic')?.updateValueAndValidity();

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedImage);
    }
  }

  // Submit the form
  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);

      const newUser: User = {
        ...this.userForm.value,
        pic: this.selectedImage ? this.selectedImage.name : "https://randomuser.me/api/portraits/men/20.jpg",  
      };

      this.userService.addUser(newUser);  
      alert("New User Added, Seach your user")
      this.router.navigate(['/demo']);
    }
  }
}
