
let bernard = {
    prenom: "Bernard",
    poids: 78,
    taille: 1.69,
    calcBMI: function(){
        return (this.poids / (this.taille * this.taille)).toFixed(2)
    }
}

let marcel = {
    prenom: "Marcel",
    poids: 92,
    taille: 1.95,
    calcBMI: function(){
        return (this.poids / (this.taille * this.taille)).toFixed(2)
    }
}

if (bernard.calcBMI()>marcel.calcBMI())
console.log('L’IMC de ',bernard.prenom,'(',bernard.calcBMI(),' est plus élevé que celui de ', marcel.prenom,  '(',marcel.calcBMI(),'})')

console.log(bernard.calcBMI())
console.log(marcel.calcBMI())

