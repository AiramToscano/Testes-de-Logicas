const vet = [
    {
        name: 'airam toscano',
        idade: 32,
    },
    {
        name: 'aira toscano',
        idade: 20,
    },
    {
        name: 'maria toscano',
        idade: 19,
    }
]

const teste = vet.map((e) => {
  return  {
    name: e.name,
    idade: e.name ==='airam toscano' ? e.idade = 10 : e.idade
  }
})

console.log(teste);