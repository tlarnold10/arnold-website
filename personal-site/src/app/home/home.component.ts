import { Component } from "@angular/core";

@Component ({
    selector: 'home',
    templateUrl: './home.component.html' 
})
export class HomeComponent {
    
    currentTime:string = new Date().toLocaleTimeString();
    timeOfDay:string = "";
    
    constructor() {
        
        if(this.currentTime.includes("AM"))
        {
            this.timeOfDay = "Morning";
        }
        else
        {
            this.timeOfDay = "Afternoon"
        }
    }
}