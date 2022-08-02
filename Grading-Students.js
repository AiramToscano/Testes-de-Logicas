function gradingStudents(grades) {
    var multipleToRoundTo = 5;
    var numberToRoundAt = 2;
    const teste = grades.map((e) => {
        if(e >= 38 && (e % multipleToRoundTo) > numberToRoundAt) {
          return newvalor = e + (multipleToRoundTo - (e % multipleToRoundTo));
          }
          return e
    })
    return teste
  }
  
  console.log(gradingStudents([73,67,38,33]));