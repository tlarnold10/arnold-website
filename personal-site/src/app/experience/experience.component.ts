import { Component } from "@angular/core";

@Component ({
    selector: 'experience',
    templateUrl: './experience.component.html' 
})
export class ExperienceComponent {
    experiences:string[] = [];

    constructor() {
        this.experiences = [
            "May 2014: Graduate from Augustana College in Sioux Falls. Computer Information System and Business Administration",
            "January 2015: Sales Account Executive at Omnitech",
            "May 2018: Data conversion engineer at Zuercher Technologies in Sioux Falls",
            "2019: Zuercher Technologies becomes CentralSquare Technologies",
            "May 2019: Data conversion manager at CentralSquare Technologies",
            "December 2019: Graduate from USD with Masters of Business Administration",
            "2020: Move to Lester, IA",
            "July 2020: Starting up Arnold Technologies, building estimation tool for local appliance store",
            "June 2021: Software engineering manager at CentralSquare Technologies",
            "August 2022: Associate software engineer at Frontier Technology Inc", 
            "2023: Arnold Technologies software development consulting with JavaScript, htmx, and Ruby",
            "August 2023: Promotion to software engineer",
            "2024: Arnold Technologies software development consulting with JavaScript + Vue.js",
            "July 2024: Promotion to senior software engineer"
        ];
    }
}