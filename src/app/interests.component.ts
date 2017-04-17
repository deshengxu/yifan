import {Component, OnInit}          from '@angular/core';
import { PersonService } from "./services/person.service";
import { Interest } from "./db/data.interest";

@Component({
    selector: 'my-interests',
    templateUrl: './templates/interests.component.html',
    styleUrls: ['./styles/interests.component.css']
})
export class InterestsComponent implements OnInit{
    interests: Interest[];
    selectedInterest: Interest;

    constructor(
        private personService: PersonService,
    ){}

    getInterests(): void {
        this.personService.getInterests().then(interests =>{
            this.interests = interests;
        })
    }

    onSelect(interest: Interest){
        this.selectedInterest = interest;
    }

    ngOnInit(): void{
        this.getInterests();
    }

}
