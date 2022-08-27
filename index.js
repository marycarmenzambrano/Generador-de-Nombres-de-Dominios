let pronombre = ["la", "nuestra"];
let adjetivo = ["estupenda", "grande "];
let sustantivo = ["corredora", "mapache",];
let dominio = [".cl", ".com", ".net"];

for( let i=0; i < pronombre.length; i++){
    for(let j=0; j < adjetivo.length; j++){
        for(let k=0; k < sustantivo.length; k++){
            for(let l=0; l < dominio.length; l++){
                let nombres = pronombre[i] + adjetivo[j] + sustantivo[k] + dominio[l];
            }
        }
    }
}

