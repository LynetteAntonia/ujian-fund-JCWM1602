function fibonanci(number){
 
    let mulai = 0
    let tambah = 1
    let x
    let output = []
    
 
        output.push(mulai)
        output.push(tambah)
      
        x = mulai + tambah 
       while(x <= number){
       output.push(x)
        
            mulai = tambah
            tambah = x
            x = mulai+tambah
       }      
       
    console.log(output)
} fibonanci(100)


//GANJIL & sum of ganjil

function fibonanci1(number){
 
    let mulai = 0
    let tambah = 1
    let x
    let output = []
    let ganjil = []
    
 
        output.push(mulai)
        output.push(tambah)   
        
        x = mulai + tambah 
       while(x <= number){
            output.push(x)
        
            mulai = tambah
            tambah = x
            x = mulai+tambah
            
       }      
       //
    console.log(output)
} fibonanci1(100)


