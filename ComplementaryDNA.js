let dna = "ATTGC"


function DNAStrand(dna) {
    //your code here
    let firstDNA = dna.split('')
    let secondDNA = []
    firstDNA.forEach(element => {
        switch (element) {
            case 'A':
                secondDNA.push('T')
                break;

            case 'T':
                secondDNA.push('A')
                break;
            case 'C':
                secondDNA.push('G')
                break;
            case 'G':
                secondDNA.push('C')
                break;
        }
    });
    console.log(secondDNA.join(''))

    return secondDNA.join('')
}


DNAStrand(dna)


for (let i = 0; i < 3; i++) { 
    console.log(i);
}