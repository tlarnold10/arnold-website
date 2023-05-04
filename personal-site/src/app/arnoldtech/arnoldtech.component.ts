import { Component } from "@angular/core";

@Component ({
    selector: 'arnoldtech',
    templateUrl: './arnoldtech.component.html' 
})
export class ArnoldTechComponent {
    services:string[] = [];

    constructor() {
        this.services = [
            "Startup CTO (if the right fit)",
            "Startup MVP Development",
            "Software Development and Engineering",
            "Data Analytics",
            "Technology Strategy Consulting"
        ];
    }
}