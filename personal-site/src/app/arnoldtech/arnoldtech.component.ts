import { Component } from "@angular/core";

@Component ({
    selector: 'arnoldtech',
    templateUrl: './arnoldtech.component.html' 
})
export class ArnoldTechComponent {
    services:string[] = [];

    constructor() {
        this.services = [
            "Software Development and Engineering",
            "Data Analytics",
            "Technology Strategy Consulting"
        ];
    }
}