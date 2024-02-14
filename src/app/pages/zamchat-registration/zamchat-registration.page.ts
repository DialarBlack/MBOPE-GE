import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-zamchat-registration',
  templateUrl: './zamchat-registration.page.html',
  styleUrls: ['./zamchat-registration.page.scss'],
})
export class ZamchatRegistrationPage implements OnInit {

  sexualPreferenceOptions: string[] = [
    "Heterosexual",
    "Homosexual",
    "Bisexual",
    "Pansexual",
    "Asexual",
    "Other"
  ];
  selectedSexualPreferences: string[] = [];

  ageRangeOptions: string[] = [
    "18-25",
    "26-35",
    "36-45",
    "46-55",
    "56+"
  ];
  selectedAgeRanges: string[] = [];
  selectedAfricanMealOptions: string[] = [];
  selectedLeisureOptions: string[] = [];
  selectedPreferenceOptions: string[] = [];

  leisureOptions: string[] = [
    "Reading",
    "Sports",
    "Movies",
    "Hiking",
    "Gaming",
    "Painting",
    "Photography",
    "Cooking",
    "Dancing",
    "Yoga",
    "Meditation",
    "Gardening",
    "Writing",
    "Crafts",
    "Singing"
  ];
  
  africanMealOptions: string[] = [
    "Jollof Rice",
    "Fufu and Soup",
    "Pounded Yam and Egusi",
    "Banku and Tilapia",
    "Injera and Doro Wat",
    "Bunny Chow",
    "Chapati and Sukuma Wiki",
    "Bobotie",
    "Braai",
    "Nsima and Ndiwo",
    "Maafe",
    "Piri Piri Chicken",
    "Cachupa",
    "Tagine",
    "Piri Piri Prawns"
  ];
  
  preferenceOptions: string[] = [
    "Music",
    "Travel",
    "Food",
    "Art",
    "Nature",
    "Technology",
    "Reading",
    "Sports",
    "Movies",
    "Fashion",
    "History",
    "Fitness",
    "Animals",
    "Photography",
    "Cooking"
  ];

  currentForm = 1; // Variable to track the current form
  selectedSex: string;
  name: string;
  surname: string;
  birthDate: string;
  sex: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  town: string;
  profession: string;
  salary: string;
  hasCar: boolean;
  leisure: string;
  preferences: string;
  meal: string;
  sexualPreferences: string;
  ageInterval: string;
  aboutYou: string;
  partnerExpectations: string;

  nextForm() {
    if (this.currentForm < 6) {
      this.currentForm++;
    }
  }

  previousForm() {
    if (this.currentForm > 1) {
      this.currentForm--;
    }
  }

  constructor(private menuCtrl: MenuController) {
    this.selectedSex = '';
    this.name = '';
    this.surname = '';
    this.birthDate = '';
    this.sex = '';
    this.email = '';
    this.phone = '';
    this.password = '';
    this.confirmPassword = '';
    this.country = '';
    this.town = '';
    this.profession = '';
    this.salary = '';
    this.hasCar = false;
    this.leisure = '';
    this.preferences = '';
    this.meal = '';
    this.sexualPreferences = '';
    this.ageInterval = '';
    this.aboutYou = '';
    this.partnerExpectations = '';
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  submitForm() {
    // Perform form submission logic here
    // You can access all the form field values using the component variables

    // Basic validation example
    if (this.currentForm === 6) {
      if (this.password !== this.confirmPassword) {
        // Passwords don't match, display an error message or take appropriate action
        return;
      }

      if (!this.name || !this.surname || !this.birthDate || !this.sex || !this.phone) {
        // Required fields are missing, display an error message or take appropriate action
        return;
      }

      // All validations passed, you can proceed with form submission
      console.log('Form submitted!');
    }
  }

}
