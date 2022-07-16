import { Component } from "@angular/core";

@Component ({
    selector: 'experience',
    templateUrl: './experience.component.html' 
})
export class ExperienceComponent {
    experiences:string[] = [];

    constructor() {
        this.experiences = [
            "Graduate from Augustana College in Sioux Falls. Computer Information System and Business Administration. 2014 graduate.",
            "Sales Account Executive at Omnitech.",
            "Start MBA program at University of South Dakota.",
            "Data conversion engineer at Zuercher Technologies in Sioux Falls.",
            "Zuercher Technologies becomes CentralSquare Technologies.",
            "Data conversion manager at CentralSquare Technologies.",
            "Graduate from USD with Masters of Business Administration, December 2019.",
            "Move to Lester, IA",
            "Starting up Arnold Technologies.",
            "Software engineering manager at CentralSquare Technologies."
        ];
    }
}