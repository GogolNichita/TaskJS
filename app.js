
function CaseTask()
{
    const n = prompt('Introduce digit')

    const digit = Number(n);

    switch (digit) {
        case 0:
            alert('You Introduced Zero');
            break;
        case 1:
            alert('You Introduced One');
            break;
        case 2:
            alert('You Introduced Two');
            break;
        case 3:
            alert('You Introduced Three');
            break;
        case 4:
            alert('You Introduced Four');
            break;
        case 5:
            alert('You Introduced Five');
            break;
        case 6:
            alert('You Introduced Six');
            break;
        case 7:
            alert('You Introduced Seven');
            break;
        case 8:
            alert('You Introduced Eight');
            break;
        case 9:
            alert('You Introduced Nine');
            break;
        default:
            alert(n + ' is not a digit');
            break;
    }
}

function SumOfNumber(){
    let sum = 0;
   const n= Number(prompt("How many numbers you want?"));
    for(let i = 1; i<=n; i++ ){
        let num = Number(prompt("Introduce number " + i));
        sum = sum + num;
    }
    alert("Sum is: " + sum);
}

function InteravalSum(){
    let sum = 0;
    const left = Number(prompt("Start of the interval"));
    const right = Number(prompt("End of the interval"));
    for (let i = left; i <= right; i++ ){
        if(i % 2 === 0) sum = sum + i;
    }
        alert("Sum of even numbers at the [" + left + ";" + right +"] is " + sum);
}
//
// function StringConvert(){
//     const ucFirst = prompt("Introduce string");
//     let str =
// }
//Task();
//SumOfNumber();
//InteravalSum();