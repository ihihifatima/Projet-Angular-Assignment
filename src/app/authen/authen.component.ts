import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-authen',
  templateUrl: './authen.component.html',
  styleUrls: ['./authen.component.css']
})
export class AuthenComponent implements OnInit {
  username:string = '';
  password:string = '';
 
  constructor(private authService:AuthService,
    private notificationService: NotificationService,
     private router:Router) { }

  datas=[
    {username: 'Admin', password:'123'},{username: 'Pesonne',Password: '123'}
  ]
   ngOnInit(): void {
    
  }
    
  login()
  {this.datas.forEach(data => {
     if(this.username==data.username && this.password==data.password){
          this.authService.logIn();
          this.router.navigate(["/home"]);
          this.notificationService.success(':: Supprimer avec succes!!');
      }else{
        this.notificationService.warn(':: Element Non Supprimer!!');
      }
     
  });
   
  }
 

@Input() error: string | null | undefined;
  
    @Output() submitEM = new EventEmitter();
  
}
