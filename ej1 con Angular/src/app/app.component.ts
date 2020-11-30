import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  
  URL:string= "https://rjzh17nu94.execute-api.us-east-1.amazonaws.com/dev/buscar3/algo";
  form: FormGroup;
  keysArray=[];
  valueKeys:string;
 
  constructor(private apiService: ApiService, private fb: FormBuilder ) {}

  ngOnInit(): void {

    this.form= this.fb.group({
      searchField: ['', [Validators.required]],
    });
    
  }

  get(){
    
    this.apiService.get().subscribe((res)=>{
    
      this.keysArray=Object.keys(res).sort()
      for(let element of this.keysArray){
        this.valueKeys=JSON.stringify(res[element]);
      }

    })

  }

  ngOnDestroy():void{
    this.apiService.get().subscribe().unsubscribe();
  }
  
}

/*
@Component is metadata that defines our class as an Angular component

ngOnInit() to initialize our form controller to use reactive form approach.
ngOnDestroy() to perform cleanup of our component avoiding memory leaks.



I'm using dependency injection in the constructor params to
inject and start using my service

Inside my get method, I subscribe to my Observable to start receiving values.
As you can see, I'm using the lines of code of my basic JS file 

I transform the elements in the sorted JSON to string, asign it to a class 
variable which displays its content on the DOM using interpolation (one way binding).

*/