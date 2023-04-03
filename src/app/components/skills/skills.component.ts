import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent {
  skills = [
    {
      language: "Javascript",
      knowledge: "Intermediário",
      image: "../../../assets/Javascript.svg"
    },
    {
      language: "C",
      knowledge: "Intermediário",
      image: "../../../assets/C.svg"
    },
    {
      language: "C++",
      knowledge: "Básico",
      image: "../../../assets/C++.svg"
    },
    {
      language: "CSS",
      knowledge: "Intermediário",
      image: "../../../assets/CSS.svg"
    },
    {
      language: "HTML",
      knowledge: "Avançado",
      image: "../../../assets/HTML.svg"
    },
    {
      language: "React",
      knowledge: "Básico",
      image: "../../../assets/React.svg"
    },
    {
      language: "Angular",
      knowledge: "Básico",
      image: "../../../assets/Angular.svg"
    },
    {
      language: "ExpressJS",
      knowledge: "Intermediário",
      image: "../../../assets/Express.svg"
    },
    {
      language: "Sequelize",
      knowledge: "Básico",
      image: "../../../assets/Sequelize.svg"
    },
    {
      language: "Electron",
      knowledge: "Básico",
      image: "../../../assets/Electron.svg"
    },
  ];

  search = '';
  showSkills = this.skills;
  onSearch(event: any){
    this.search = '';
    this.search += event.target.value;
    if(!this.search)
      this.showSkills = this.skills;
    else{
      this.showSkills = [];
      for(let i = 0; i < this.skills.length; i++){
        if(this.search == this.skills[i].language){
          this.showSkills.push(this.skills[i]);
        }
      }
    }
  }
}
