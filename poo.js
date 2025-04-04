//Definir la clase Automovil
class Automovil {
    constructor(marca,modelo,año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.encendido = false;
        this.velocidad = 0;
    }
    //Creando los métodos
    encender(){
        if(!this.encendido){
            this.encendido = true;
            console.log(`El automovil ${this.marca} ${this.modelo} ha sido encendido`);
        }else{
            console.log(`El automovil ${this.marca} ${this.modelo} ya está encendido`);
        }
    }
    acelerar(cantidad){
        if(!this.encendido){
            console.log(`El automovil ${this.marca} ${this.modelo} no puedo acelerar ya que está apagado`);
        }else{
            this.velocidad += cantidad;
            //this.velocidad = this.velocidad + cantidad;
            console.log(`El automovil ${this.marca} ${this.modelo} ahora va a ${this.velocidad} km /h`);
        }
    }
    frenar(cantidad){
        if(!this.encendido){
            console.log(`El automovil ${this.marca} ${this.modelo} ya está apagado`);
        }else{
            this.velocidad = Math.max(0, this.velocidad - cantidad);
            //this.velocidad = this.velocidad + cantidad;
            console.log(`El automovil ${this.marca} ${this.modelo} ahora va a ${this.velocidad} km /h`);
        } 
    }
    apagar(){
        if(!this.encendido){
            console.log(`El automovil ${this.marca} ${this.modelo} ya está apagado`);
        }else{
            this.velocidad = 0;
            this.encendido = false;
            //this.velocidad = this.velocidad + cantidad;
            console.log(`El automovil ${this.marca} ${this.modelo} está apagado`);
        } 
    }
}

//Trabjando con la Herencia
class Electrico extends Automovil{
    constructor(marca,modelo,año,bateria){
        super(marca,modelo,año);
        this.bateria = bateria;
    }
    //Creando un nuevo método
    cargarBateria(){
        console.log(`Cargando la beteria del atomovil ${this.marca} ${this.modelo}`);
    }
}

// Probando nuestra clase
//Instanciando la creación del objeto
let miAuto = new Automovil('Toyota','Etios',2024);
console.log(miAuto);
miAuto.encender();
miAuto.acelerar(50);
miAuto.frenar(20);
miAuto.apagar();

//Probando el tema de la herencia
let miAutoElectrico = new Electrico('Tesla','Model S', 2024,100) ;
console.log(miAutoElectrico);
miAutoElectrico.encender();
miAutoElectrico.acelerar(120);
miAutoElectrico.frenar(50);
miAutoElectrico.cargarBateria();
miAutoElectrico.apagar();



