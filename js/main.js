let sandwich_Base =150; 
let tipo_Pan =50;

let pollo = 150;
let carne = 200;
let vegetariano = 100;
let blanco = 50;
let negro = 60;
let sin_Gluten = 75;

if (sandwich_Base == 150 && tipo_Pan==50 ){
    console.log('tu total a pagar es: ' + sandwich_Base+tipo_Pan)
} else if(sandwich_Base==150 && tipo_Pan==60){
    console.log('tu total a pagar es: ' + sandwich_Base+tipo_Pan)
} else if(sandwich_Base==150 && tipo_Pan==75){
    console.log('tu total es de: ' + sandwich_Base+tipo_Pan)
} else if (sandwich_Base==200 && tipo_Pan==50){
    console.log('tu total a pagar es: ' + sandwich_Base+ tipo_Pan)
} else if(sandwich_Base==200 && tipo_Pan==60){
    console.log('tu toal a pagar es de: ' + sandwich_Base+tipo_Pan)
} else if(sandwich_Base==200 && tipo_Pan==75){
    console.log('tu total a pagar es de: ' + sandwich_Base+tipo_Pan)
}else if (sandwich_Base==100 && tipo_Pan==50){
    console.log('tu total a pagar es de: ' + sandwich_Base+tipo_Pan)
}else if(sandwich_Base==100 && tipo_Pan==60){
    console.log('tu total a pagar es de: ' + sandwich_Base+ tipo_Pan)
}else{
    console.log('tu total a pagar es de: ' + sandwich_Base+tipo_Pan)
};
