import Image from "./Image.js"

export default class Gif extends Image{
    
    constructor(content,user,date,src){
        //appeler le constructeur de la classe Parent/Mère
        super(content,user,date,src)
    }
    getObject(){
        return {text:this.content, user:this.user, date:this.date.toString(), src:this.src}
    }
    //surcharge de la méthode build de Message
    build(){
        //au lieu de faire copier/coller la méthode build de message on fait l'appel de cette fonction à partir de super
        let para1=document.createElement("h3")
        let para2 = document.createElement("p");// Create a <p> element
        let para3 = document.createElement("p");
        para1.innerText=`Author: ${this.user.name}`;
        para2.innerText = `Message:${this.content}`; // Insert text
        para3.innerText = `Message envoyé le ${this.getDate()}`;
        document.body.appendChild(para1);
        document.body.appendChild(para2);
        document.body.appendChild(para3);
        const img = document.createElement("img");
        img.src=this.src;
        img.width="100";
        img.height="100";
        document.body.appendChild(img);
        
       

        
        
        // explication
        
        // const div = document.createElement("div");
        // div.classList.add("image")
        // const newParagraph = document.createElement("p");
        // const img = document.createElement("img");
        // img.src=this.src;
        // newParagraph.classList.add("message")
        // newParagraph.innerText= this.content;
        // div.appendChild(newParagraph);
        // div.appendChild(img);
        // document.body.appendChild(div);
    }
    
    
}