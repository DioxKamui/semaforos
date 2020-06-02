import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  
  orderedLotes = [];

  ngOnInit() {


    this.controlForm = this.fb.group({
      id: [null, [Validators.required]],
    });


    this.controlForm.get("id").valueChanges.subscribe((a) => {
      console.log(a);
    })

   this.lotes = this.lotes.sort(function (a, b) {
      if (a.distanceToEstablishment > b.distanceToEstablishment) {
        return 1;
      }
      if (a.distanceToEstablishment < b.distanceToEstablishment) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });


  }

  controlForm: FormGroup;

  lotes: Array<any> = [
    {
      name: "lote 0",
      occupied: true,
      distanceToEstablishment: 20,
      id: "Lupita"

    },
    {
      name: "lote 1",

      occupied: true,
      distanceToEstablishment: 30,
      id: "Sarahi"
    },
    {
      name: "lote 2",

      occupied: false,
      distanceToEstablishment: 50,
      id: ""
    },
    {
      name: "lote 3",

      occupied: false,
      distanceToEstablishment: 70,
      id: ""
    },
    {
      name: "lote 4",

      occupied: false,
      distanceToEstablishment: 100,
      id: ""
    }

  ]


  fillSpace() {
  
    let chingon;




    for (let index = 0; index < this.lotes.length; index++) {


      if ( !this.lotes[index].occupied ) {
        this.lotes[index].occupied = true;
        this.lotes[index].id = this.controlForm.get("id").value;
        chingon = this.lotes[index].name;
        break;
      }
      
    }


    alert("Ve al slot " + chingon);



  }



  removeSpace() {

   let chingon;

    for (let index = 0; index < this.lotes.length; index++) {
      if ( this.lotes[index].occupied && this.controlForm.get("id").value === this.lotes[index].id) {
        this.lotes[index].occupied = false;
        this.lotes[index].id = ""
        chingon = this.lotes[index].name;
        break;
      }
    }
    alert("Se libero lote " + chingon);

  }


}
