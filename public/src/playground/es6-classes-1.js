class Person {
    //Definisi variabel2 yang akan di olah
    constructor(name='kosong', age=0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `hai i am ${this.name}`;
    }

    //method yang akan mengolah definisi variabel diatas
    getDescription(){
        return `${this.name} berumur ${this.age}!`   ;
    }
 
}

//membuat class Student dengan mengambil referensi Person
//-constructor() dengan identifier name,age, dan major
//-super() mengambil ref 'name' dan 'age' dari class person
//deklarasi variabel asli milik student, yaitu 'Major'
class Student extends Person { 
    constructor(name, age, Major){
        super(name,age);
        this.Major = Major;
    }

    //Method untuk memberikan nilai False pada this.Major
    //-!this.Major = True, !!this.Major=False
    hasMajor(){
        return !!this.Major;
    }

    //-getDescription() untuk menampilkan
    //-membuat variabel 'let description' dengan nilai menggunakan super() karena
    //--mengambil nilai dari Person.getDescription
    //-Mengecek, jika hasMajor()
    //--Jika hasMajor() terisi = 'aris winandi berumur 26!and has major Matematika'
    //--Jika hasMajor() tidak terisi = 'aris winandi berumur 26!
    //--catatan: jika tanpa fungsi hasMajor() tetap akan tampil namun,
    //-----------jika this.Major tidak terisi, akan tampil 'undefined' :
    //-----------'aris winandi berumur 26! and has major undefined'
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()) {
            description = description + `and has major ${this.Major}`;
        }
        return description;
        //return `${description} and has major ${this.Major}`;
    }
    
    
}

class homeLoc extends Person {
    constructor(name,location){
        super(name);
        this.location = location;
    }

    hasLoc(){
        return !!this.location;
    }

    Greeting(){
        let GetG = super.getGreeting();
        if (this.hasLoc()){
            GetG = GetG + ` i am from ${this.location}`;
        }
        
        return GetG;
    }
    
}

//pemanggilan class dengan parameter lengkap
const write = new Student('aris winandi', 27,'Matematika');
console.log(write.getDescription());

//pemanggilan class dengan parameter kosong
const other = new Student()
console.log(other.getDescription());

const Greeting2 = new homeLoc('Andi Winaris','tuban');
console.log(Greeting2.Greeting());











