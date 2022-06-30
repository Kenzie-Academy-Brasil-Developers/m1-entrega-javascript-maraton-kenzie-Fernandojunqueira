let competidores = ["Rafael", "Manoel" , "Daniel"]

function positions(competidores){
    let positionDaniel = competidores.indexOf("Daniel")
    if(positionDaniel === 0){
        return `Daniel é o vencedor`
    }else{
    competidores.splice(positionDaniel-1,2,competidores[positionDaniel],competidores[positionDaniel-1])
    }
    return `Este é o pódio: ${competidores}`
}
console.log(positions(competidores))