// **********************************************************************************
// ********************************* Classe Message ***********************************
// **********************************************************************************
import {} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";

export default class Message {

    constructor(content, user) {
        this.content=content;
        this.user =user
        this.date=new Date();
        
        
    }
    
   
     getDate(){
        //return date au format humain
       
        return (this.date.getDate()+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear() +" à "+ this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds());
        
    }
    getObject(){
        return {text:this.content, user:this.user, date:this.date.toString()}
    }
    
     build(){
        let para1=document.createElement("h3")
        let para2 = document.createElement("p");// Create a <p> element
        let para3 = document.createElement("p");
        para1.innerText=`Author: ${this.user.name}`;
        para2.innerText = `Message:${this.content}`; // Insert text
        para3.innerText = `Message envoyé le ${this.getDate()}`;
        document.body.appendChild(para1);
        document.body.appendChild(para2);
        document.body.appendChild(para3);
    }
}