export default class User {
    constructor(name = null, age = null) {
        this.name = name;
        this.age = age;
    }
    getObject(){
        return {name:this.name, age:this.age}
    }
    ask() {
       
        let userApp =localStorage.getItem("userApp");
       
        //s'il y a déja des user enregistrées dans le local storage on ajoute notre user
        if (userApp) {
            
            let user = JSON.parse(userApp);
           this.name=user.name;
           this.age=user.age;
            //s'il n'ya pas des user on crée notre tableau et on ajoute notre 1er user
        }
        else {

            this.name = prompt("Quel est votre nom ?")
            this.age = prompt("Quel est votre age ?")
            let listString = JSON.stringify(this);
            //console.log(listString);
            localStorage.setItem("userApp", listString);


        }

    }
}
