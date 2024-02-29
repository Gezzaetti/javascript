// DOM Elements
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const valueEl = document.querySelector('.value');

const acEl = document.querySelector('.ac');
const pmEl = document.querySelector('.pm');
const percentEl= document.querySelector('.percent');

const additionEl = document.querySelector('.addition');
const subtractionEl = document.querySelector('.subtraction');
const multiplicationEl = document.querySelector('.multiplication');
const divisionEl = document.querySelector('.division');
const equalEl = document.querySelector('.equal');


const decimalEl = document.querySelector('.decimal');
const num_0El = document.querySelector('.num_0');
const num_1El = document.querySelector('.num_1');
const num_2El = document.querySelector('.num_2');
const num_3El = document.querySelector('.num_3');
const num_4El = document.querySelector('.num_4');
const num_5El = document.querySelector('.num_5');
const num_6El = document.querySelector('.num_6');
const num_7El = document.querySelector('.num_7');
const num_8El = document.querySelector('.num_8');
const num_9El = document.querySelector('.num_9');
const numElArray = [
    num_0El, num_1El, num_2El, num_3El, num_4El, num_5El, num_6El, num_7El, num_8El, num_9El
];

// variables

let valueStrInMemory = null;
let operatorInMemory = null;

//functions
const getValueAsStr = () => valueEl.textContent.split(',').join('');
    
const getValueAsNum = () => {
    return parseFloat(getValueAsStr());
};
const setStrAsValue = (valueStr) => {
    if (valueStr[valueStr.length - 1] === '.') {
        valueEl.textContent += '.';
        return;
    }

 const [wholeNumStr, decimalStr] = valueStr.split('.');
    if (decimalStr) {
        valueEl.textContent =
        parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
    } else {
        valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
    }

};
debugger;
const handleNumberClick = (numStr) => {
    const currentValueStr  = getValueAsStr();
    if (currentValueStr === '0'){
    setStrAsValue(numStr); 
} else {
    setStrAsValue(currentValueStr + numStr);
  }
};

const getResultOfOperationAsStr = () => {
    const currentValueNum = getValueAsNum();
    const valueNumInMemory = parseFloat(valueStrInMemory);
    let newValueNum;
    if (operatorInMemory === 'addition') {
        newValueNum = valueNumInMemory + currentValueNum;
    } else if (operatorInMemory === 'subtraction') {
        newValueNum = valueNumInMemory - currentValueNum; 
    } else if (operatorInMemory === 'multiplication') {
        newValueNum = valueNumInMemory * currentValueNum; 
    } else if (operatorInMemory === 'division') {
        newValueNum = valueNumInMemory / currentValueNum; 
    }
    return newValueNum.toString();
    };

const handleOperatorClick = (operation) => {
    const currentValueStr = getValueAsStr();
    

  if(!valueStrInMemory) {
    valueStrInMemory = currentValueStr;
    operatorInMemory = operation;
    setStrAsValue('0');
    return;
  }
    
valueStrInMemory = getResultOfOperationAsStr()
operatorInMemory = operation;
setStrAsValue('0');

};


// add event listners to functions

acEl.addEventListener('click', () => {
    setStrAsValue('0');
    valueStrInMemory = null;
    operatorInMemory = null;
});
pmEl.addEventListener('click', () => {
const currentValueNum = getValueAsNum();
const currentValueStr = getValueAsStr();

if (currentValueNum === '-0') {
    setStrAsValue('0');
    return;
}
if (currentValueNum >= 0) {
    setStrAsValue('-' + currentValueStr);
} else {
    setStrAsValue(currentValueStr.substring(1));
}
});
percentEl.addEventListener('click', () => {
    const currentValueNum = getValueAsNum();
    const newValueNum = currentValueNum / 100;
    setStrAsValue(newValueNum.toString());
    valueStrInMemory = null;
    operatorInMemory = null;
});

// add event listener to operators
additionEl.addEventListener('click', () => {
    handleOperatorClick('addition');
});
// subtractionEl.addEventListener('click', () => {
    // handleOperatorClick('subtraction');
// });
multiplicationEl.addEventListener('click', () => {
    handleOperatorClick('multiplication');
});
divisionEl.addEventListener('click', () => {
    handleOperatorClick('division');
});
equalEl.addEventListener('click', () => {
    if(valueStrInMemory) {
        setStrAsValue(getResultOfOperationAsStr());
        valueStrInMemory = null;
        operatorInMemory = null;

    }
});
// add event listeners to numbers and decimal

for (let i = 0; i < numElArray.length; i++) {
    const numEl = numElArray[i];
    numEl.addEventListener('click', () => {
        handleNumberClick(i.toString());
    });
}
decimalEl.addEventListener('click', () => {
    const currentValueStr = getValueAsStr();
    valueEl.textContent = currentValueStr + '.';
    if (!currentValueStr.includes ('.')) {
        setStrAsValue(currentValueStr + '.');
    }
} );






//set up time
const updateTime = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2, '0');

}
setInterval(updateTime, 1000);
updateTime();
