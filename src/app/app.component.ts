import { Component } from '@angular/core';
import { User } from './user';
import { UserdataService } from './userdata.service';

@Component({
  selector: 'td-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  languages = ['Angular', 'React', 'Typescript'];
  userModel = new User('John', 'john@test.com', 1234567890, 'default', 'morning', true);
  languageError = true;

  constructor(private userdataService: UserdataService) {}

  validateLanguage(value) {
    if (value === 'default') {
       this.languageError = true;
    } else {
      this.languageError = false;
    }
  }

  onSubmit() {
    this.userdataService.register(this.userModel).subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    );
  }
}
