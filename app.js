class Paciente {
    constructor(nombre, edad, rut, diagnostico){
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
    }

    get getNombre(){
        return this.nombre
    }

    set setNombre(nombre){
        this.nombre.push(nombre)
    }

    get getEdad(){
        return this.edad
    }

    set setEdad(edad){
        this.edad.push(edad)
    }

    get getRut(){
        return this.rut
    }

    set setRut(rut){
        this.rut.push(rut)
    }

    get getDiagnostico(){
        return this.diagnostico
    }

    set setDiagnostico(diagnostico){
        this.diagnostico.push(diagnostico)
    }
}

class Consultorio {
    constructor(nombre){
        this.nombre = nombre ? nombre: 'sin nombre';
        this.paciente =  [];
    }

    get getPaciente(){
        return this.paciente
    }

    set setPaciente(paciente){
        this.paciente.push(paciente)
    }
    
}

Consultorio.prototype.buscarXnombre = function(nombre){
    return this.paciente.find((p) => p.nombre.toLowerCase() === nombre.toLowerCase()) || "no encontrado";
}

Consultorio.prototype.buscarXrut = function(rut){
    return this.paciente.find((id) => id.rut.toLowerCase() === rut.toLowerCase()) || "no encontrado";
}

Consultorio.prototype.traerTodos = function(){
    this.paciente.forEach(todos => {
        console.log(todos);
    })
    
}



const benjamin = new Paciente("Benjamin", "25", "19494555-6", "asma");
const paulina = new Paciente("Paulina", "35", "16125888-7", "gastritis");

const lonquen = new Consultorio("Lonquen");

lonquen.setPaciente = paulina;
lonquen.setPaciente = benjamin;
//console.log(lonquen.getPaciente);

lonquen.traerTodos();


const catalina = new Paciente("Catalina", 30, "17000888-6", "coxalgia");
const aguilucho = new Consultorio("Aguilucho");

aguilucho.setPaciente = catalina;