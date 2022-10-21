for (i=1; i <=20; i++) {

    if (i % 5 !== 0 && i % 3 !== 0) {
        console.log(i)
    }

    else if (i % 5 === 0 && i % 3 === 0) {
        console.log (`${i} -> Frontend simplified`)
    }

    else if (i % 3 === 0) {
        console.log (`${i} -> Frontend`)
    }
    
    else if (i % 5 === 0) {
        console.log (`${i} -> Simplified`)
    }
    
}