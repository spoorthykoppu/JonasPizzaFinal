import {Component, Input, OnInit} from '@angular/core';
class VegToppings {
Onion: string;
tomato: string;
}

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  @Input() vegtoppings: VegToppings[] = [];
  public SmallTotal: number = 0;	
  public MediumTotal: number = 0;
  public LargeTotal: number = 0;
  public ExtraTotal: number = 0;
  public Tomatoes: number = 1.00;
  public Onion:number=2.00;
  public ST:number;
  public SO:number;
  public STotal:number;
  

  constructor() { }

  ngOnInit() {
  }
  onSmallTomatoSelect(event) {
    if ( event.target.checked ) {
      this.ST=1;
     //this.SmallTotal = 5 + this.Tomatoes;
    }
  }
  onMediumTomatoSelect(event){
    if(event.target.checked){
      this.MediumTotal=7+this.Tomatoes;
    }
  }
  onLargeTomotoSelect(event){
    if(event.target.checked){
      this.LargeTotal=8+this.Tomatoes;
    }
  }
  onELargeTomotaSelect(event){
    if(event.target.checked){
      this.ExtraTotal=9+this.Tomatoes;
    }
  }
  onSmallOnionSelect(event) {
    //if ( event.target.checked ) {
     // this.SmallTotal = 5 + this.Onion;
     this.SO=1;
    //}
 }
  onMediumOnionSelect(event){
    if(event.target.checked){
      this.MediumTotal=7+this.Onion;
    }
  }
  onLargeOnionSelect(event){
    if(event.target.checked){
      this.LargeTotal=8+this.Onion;
    }
  }
  onELargeOnionSelect(event){
    if(event.target.checked){
      this.ExtraTotal=9+this.Onion;
    }
  }
  
  
}
