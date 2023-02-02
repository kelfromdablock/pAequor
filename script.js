// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (speciesNum, dna) => {
    return {
      speciesNum,
      dna,
      mutate() {
        let i = Math.floor(Math.random()*this.dna.length);     
        let mutatedDNA = mockUpStrand();
        while (this.dna[i] === mutatedDNA) {
          mutatedDNA = mockUpStrand();
        }
        this.dna[i] = mutatedDNA[i];
        return this.dna
          },
      compareDNA(obj) {
          let matchDNA = 0;
          for (let i = 0; i < this.dna.length; i++){
            if (this.dna[i] === obj.dna[i]) {
              matchDNA++;
              percentage = Math.round((matchDNA / 15) * 100);
              console.log(`Specimen #${this.speciesNum} and Specimen #${obj.speciesNum} have ${percentage}% DNA in common.`);
              }
            }
          },
      willLikelySurvive() {
          let cgBase = 0;
          for (let k = 0; k < this.dna.length; k++)
            if (this.dna[k] === 'C' ||this.dna[k] === 'G') {
              cgBase++;}
              gcPercent = Math.round(cgBase / 15);
              //return cgBase;
              return gcPercent >= .60? true : false;
            
      },
      complementStrand() {
        let compStrand = [];
        for (let l = 0; l < this.dna.length; l++) 
          switch (this.dna[l]) {
            case 'A':
            compStrand[l] = 'T';
            break;
            case 'T':
            compStrand[l] = 'A';
            break;
            case 'C':
            compStrand[l] = 'G';
            break;
            case 'G':
            compStrand[l] = 'C';
            break; 
          }
        return compStrand;
      }
    }}
  
  
  
  const survivingpAequor = (willLikelySurvive) => {
      let survisingInstance = [];
      let i = 1;
        while (survisingInstance.length < 30) {
          let instance = pAequorFactory(i, mockUpStrand());
          if (instance.willLikelySurvive() === true) {
      survisingInstance.push(instance)
    };
    i++}        
        return survisingInstance;
        }
  
  
  
  
        
  //tests:
  
  // testing factory function
    const pAequor = pAequorFactory(1, mockUpStrand());
    console.log(pAequor);
  // testing mutute method in factory function
    //console.log(pAequor.mutate());
  
  // testing the compare method 
    //let testStrandTwo = pAequorFactory(1, mockUpStrand());
    //let testStrandThree = pAequorFactory(2, mockUpStrand())
  //console.log(testStrandTwo.compareDNA(testStrandThree));
   
  
   // testing willLikelySurvive
   //console.log(pAequor.willLikelySurvive());
  
  //testing the 30 instances
  //console.log(survivingpAequor());
  
  //testing compStrand Part 1
  console.log(pAequor.complementStrand());
  
  
  
  
  
  