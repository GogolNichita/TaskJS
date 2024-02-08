
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

function MinimalMaximal(){
    const a = Number(prompt("Introduce a= "));
    const b = Number(prompt("Introduce b= "));
    const c = Number(prompt("Introduce c= "));

    alert("Minimal number is " + Math.min(a,b,c));
    alert("Maximal number is " + Math.max(a,b,c));
}

function ucFirst() {
   let str = prompt ("Introduce string");
    if (!str) return str;
    alert( str[0].toUpperCase() + str.slice(1));
}

function extractCurrencyValue(){
    let str = prompt("Introduce you currency and value");
    alert(+str.slice(1));
}

function PromptAlert(){
    let number = Number(prompt("Introduce number = "));
    if (number === "number") {
        if (number > 0) alert(1);
        else if (number < 0) alert(-1);
        else if (number === 0) alert(0);
    }
        alert('Error');
}

function Age(){
    const age = Number(prompt("Introduce Age"));
    if (age >= 14 && age <= 90) alert("Without Not : It's okey");
        else alert("Without Not: Error");
    if (!(age <14 || age > 90)) alert("With Not : It's okey");
        else alert("With Not: Error");
}

function UserInteraction(){
    const name = prompt('Как тебя зовут?')

    alert(`Привет ${name}. Приятно познакомится!`)

    const knowJS = confirm('Знаешь ли ты JavaScript?')
    if (knowJS) {
        alert('Молодец')
    } else {
        alert('Можно начать изучение прямо сейчас')
    }
}

function Divide(){
    const number = Number(prompt("Introduce Number= "))
    for (let i = 2; i<=number/2; i++ )
        if (number % i === 0 )  console.log(i);
}

//Task();
//SumOfNumber();
//InteravalSum();
//MinimalMaximal();
//ucFirst();
//extractCurrencyValue();
// PromptAlert();
// Age();
// UserInteraction();
Divide();