const a = {
    grapes : 200,
    banana : 300,
    orange : 500,
    apple : 1000
}
for (let [x,y] of Object.entries(a)){
    if(y > 300){
        console.log(x + ":" + y)
    }
}