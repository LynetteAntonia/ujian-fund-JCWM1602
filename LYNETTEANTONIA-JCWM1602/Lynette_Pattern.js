function pattern(number){

    let print = ""
    let n = 1

    for(let i=1; i<=number; i++){
        for(let j=1; j<=i; j++){
            print += n
            n=n+2
        } 
        print +=" \n"
    } 
    
    console.log(print)
}

pattern(3)

function pattern2(number){ //genap - selisih 1

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let print2 = ""
    let x = alphabet[1]

    for(let y=1; y<=number; y++){
        for(let z=1; z<=y; z++){
            print2 += x
            x += 
        

     print2 += "\n"

    }

    console.log(print2)
}
}
// pattern2(3)