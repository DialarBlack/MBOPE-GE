import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

   tasks = [
    {
      id: 1,
      title: "Complete Project Proposal",
      description: "Write a detailed project proposal including scope, objectives, and deliverables.",
      status: "In Progress",
      startDate: new Date("2024-02-01"),
      endDate: new Date("2024-02-15"),
      submittedDate: null,
      employee: {
        id: 1,
        name: "John Doe",
        department: "Marketing"
      }
    },
    {
      id: 2,
      title: "Create Wireframes",
      description: "Design wireframes for the user interface of the application.",
      status: "Pending",
      startDate: new Date("2024-02-05"),
      endDate: new Date("2024-02-10"),
      submittedDate: null,
      employee: {
        id: 2,
        name: "Jane Smith",
        department: "Design"
      }
    },
    {
      id: 3,
      title: "Implement Backend API",
      description: "Develop the backend API for the application using Node.js and Express.",
      status: "In Progress",
      startDate: new Date("2024-02-10"),
      endDate: new Date("2024-02-28"),
      submittedDate: null,
      employee: {
        id: 3,
        name: "Alex Johnson",
        department: "Development"
      }
    },
    {
      id: 4,
      title: "Conduct User Testing",
      description: "Organize and conduct user testing sessions to gather feedback on the application.",
      status: "Pending",
      startDate: new Date("2024-02-15"),
      endDate: new Date("2024-02-18"),
      submittedDate: null,
      employee: {
        id: 4,
        name: "Emily Davis",
        department: "Quality Assurance"
      }
    },
    {
      id: 5,
      title: "Prepare Presentation",
      description: "Create a presentation to showcase the project progress and outcomes.",
      status: "Completed",
      startDate: new Date("2024-02-20"),
      endDate: new Date("2024-02-25"),
      submittedDate: new Date("2024-02-26"),
      employee: {
        id: 5,
        name: "Michael Brown",
        department: "Marketing"
      }
    }
  ];

  filteredTasks = this.tasks;
  searchTerm = '';
  showSuccessMessage: boolean = false;


  constructor(private router: Router, public alertController: AlertController,  public toastController: ToastController) { }

  ngOnInit() {
  }

  filterTasks() {
    if (this.searchTerm.trim() !== '') {
      this.filteredTasks = this.tasks.filter(task =>
        task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredTasks = this.tasks;
    }
  }

  editTask() {
    // Redirect to the edit task page with the task ID
    // Assuming you are using Angular Router, import the Router module and add the following code:
    this.router.navigate(['/edit-task']);
  }

  addTask() {
    // Handle the add functionality here
    
    this.router.navigate(['/add-task']);
  }
  async deleteItem(index: number) {
    const alert = await this.alertController.create({
       header: 'Confirm delete',
       message: 'Are you sure you want to delete this task?',
       buttons: [{
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Delete cancelled');
         }
       }, {
         text: 'Delete',
         handler: () => {
           this.tasks.splice(index, 1);
           this.showToast('Task deleted successfully');
         }
       }]
    });
   
    await alert.present();
   }
   
   async showToast(message: string) {
    const toast = await this.toastController.create({
       message: message,
       duration: 2000
    });
    toast.present();
   }

}
