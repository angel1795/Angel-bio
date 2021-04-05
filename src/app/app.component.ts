import { Component } from '@angular/core';
import { faDiscord, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  sunPath = "../assets/icon/sun.png"
  moonPath = "../assets/icon/moon.png"
  pathToggle =  faSun
  darkMode = true
  buttonMode = true
  letterColor = "#000000"
  toggleColor = "#82eaf8af"
  bgColorSkills = "#b4e2da"



  redes = [
    {
      name: "Twitter",
      icon: faTwitter,
      url: "https://twitter.com/AMP_solutionsES"
    },
    {
      name: "Linkedin",
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/angel-martin-paule/"
    },
    {
      name: "Discord",
      icon: faDiscord,
      url: "https://discord.gg/2pfJnhvUJr"
    },
    {
      name: "GitHub",
      icon: faGithub,
      url: "https://github.com/angel1795"
    },
  ]
  skills = [
    {
      name: "FRONT END",
      icon: "../assets/icon/frontend.png",
      color: "#007dfe",
      bgcolor: "#104181",
      bgcolord: "#061a35",
      content : ["HTML", "CSS", "Javascript", "Angular", "Bootstrap"]

    },
    {
      name: "BACKEND",
      icon: "../assets/icon/backend.png",
      color: "#f7496c",
      bgcolor: "#8b142e",
      bgcolord: "#440a17",
      content : ["Node.js", "Express"]
    },
    {
      name: "DATABASE",
      icon: "../assets/icon/database.png",
      color: "#3ce28c",
      bgcolor: "#2e723ef8",
      bgcolord: "#1c4726f8",
      content : ["Mongo", "MySql"]
    },
    {
      name: "DEV OPS",
      icon: "../assets/icon/devops.png",
      color: "#ffce21",
      bgcolor: "#7a5a00af",
      bgcolord: "#443200af",
      content : ["NGINX", "Docker", "Kubernetes", "DNS", "Hosting", "Git"]
    },
    {
      name: "MOBILE APP",
      icon: "../assets/icon/mobile.png",
      color: "#d1dbe4",
      bgcolor: "#abb4bd",
      bgcolord: "#54585c",
      content : ["Java", "Kotlin"]
    }
  ]



  toggleMode(){
    console.log("eee")
    this.buttonMode = !this.buttonMode
    if (!this.darkMode){
      this.pathToggle = faSun
      this.letterColor = "#000000"
      this.toggleColor = "#82eaf8af"
      this.bgColorSkills = "#b4e2da"
    }
    else{
      this.pathToggle = faMoon
      this.letterColor = "#aaf9ff"
      this.toggleColor = "#ffffff"
      this.bgColorSkills = "#4c5f5c"
    }
    this.darkMode = !this.darkMode
  }
}
