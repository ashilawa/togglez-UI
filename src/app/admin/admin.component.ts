import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  enablRadio: string = "yes"
  names:string[] = ["abc" , "xyz" , "def" ,"ghi"]

  constructor() { }

  ngOnInit() {
    
  }

  SelectRadio(input:any){
    this.enablRadio = input
    console.log(this.enablRadio)
  }

}
