let pronombre = ["la", "nuestra"];
let adjetivo = ["estupenda", "grande "];
let sustantivo = ["corredora", "mapache",];
let dominio = [".cl", ".com", ".net"];

for( let i=0; i < pronombre.length; i++){
    for(let j=0; j < adjetivo.length; j++){
        for(let p=0; p < sustantivo.length; p++){
            for(let b=0; b < dominio.length; b++){
                let mail = pronombre[i] + adjetivo[j] + sustantivo[p] + dominio[b];
            }
        }
    }
}
console.log(mail);
