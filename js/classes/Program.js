// **********************************************************************************
// ********************************* Classe Program *********************************
// **********************************************************************************

import User from "./User.js"
import Message from "./Message.js"
import Image from "./Image.js"
import Gif from "./Gif.js"
class Program {

    constructor() {
        //composition
        //const name=prompt("Saisir votre nom");//au lieu de faire une alert ici on peut creé une fct dans user et on fait l'appel de cette fct
        this.user = new User();
        this.user.ask();
        this.saisie = document.getElementById("input");
        const firebaseConfig = {
            apiKey: "AIzaSyBUfdNNimq2WW9t-5EIVbWVct7_G7-Ylvo",
            authDomain: "firefsd22.firebaseapp.com",
            projectId: "firefsd22",
            storageBucket: "firefsd22.appspot.com",
            messagingSenderId: "84083496752",
            appId: "1:84083496752:web:4ad7eb315de3b965f8daf5",
            databaseURL: "https://firefsd22-default-rtdb.europe-west1.firebasedatabase.app/"
        }
        this.app = firebase.initializeApp(firebaseConfig);
        this.db = firebase.database();
        this.datas = this.db.ref("tchat/");
        this.datas.on("child_added", function (data) {
        const messageBdd = data.val();

            let message;
             if(messageBdd.src){
                message = new Image(messageBdd.text, messageBdd.user, new Date(messageBdd.date),messageBdd.src)
            }else{
                message = new Message(messageBdd.text, messageBdd.user, new Date(messageBdd.date))
            }
           message.build();
        }.bind(this))
    }
    onClick(event) {

            const message = new Message(this.saisie.value, this.user);
            //   message.build();
            //stocker dans la BDD
            const timestamp = Date.now();
            this.db.ref("tchat/" + timestamp).set(message.getObject());


        }

         addImg() {
            let src = prompt("URL :")
            const image = new Image(this.saisie.value, this.user, new Date(), src)
            const timestamp = Date.now();
            this.db.ref("tchat/" + timestamp).set(image.getObject());

        }
        addGif(event){
            const gif = new Image(this.saisie.value, this.user, new Date(),event.target.src)
             const timestamp = Date.now();
            this.db.ref("tchat/" + timestamp).set(gif.getObject());
            
        }
   
    // Méthode appelée au démarrage de l'application.
    start() {
        let sendButton = document.querySelector("#send");
        let imgButton = document.querySelector("#imageAdd");
        let gifButton = document.querySelector("#gifAdd");
        
        imgButton.addEventListener("click", this.addImg.bind(this));
        sendButton.addEventListener("click", this.onClick.bind(this));
        gifButton.addEventListener("click", ()=> {
            fetch("https://api.giphy.com/v1/gifs/trending?api_key=V7bsqcxU5G13bIh7f3Yc1pfoGpXG5IM9")
                .then(response => response.json())
                .then(function(response) {
                    for (let i = 0; i < response.data.length; i++) {
                        let image = document.createElement("img");
                        image.src = response.data[i].images.original.url
                        image.width = "100"
                        image.addEventListener("click", this.addGif.bind(this));
                        document.body.appendChild(image)
                    }
            
            
            
                }.bind(this))
            
        .catch(error => console.log("Erreur : " + error));
        })
         

       
    }

}

export default Program;
