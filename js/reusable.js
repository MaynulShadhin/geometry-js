// rhombus funciton
function calculateRhombusArea(){
    const rhombusD1 = getInputValueById('rhombus-d1');
    const rhombusD2 = getInputValueById('rhombus-d2');
    const rhombusArea = 0.5 * rhombusD1 * rhombusD2;

    setInnerTextById('rhombus-area', rhombusArea);
}

// pentagon function
function calculatePentagonArea(){
    const pentagonPeri = getInputValueById('pentagon-peri');
    const pentagonApo = getInputValueById('pentagon-apo');
    const pentagonArea = 0.5 * pentagonPeri * pentagonApo;

    setInnerTextById('pentagon-area', pentagonArea);
}

//Ellipse function
function calculateEllipseArea(){
    const ellipseMajorAxis = getInputValueById('major-axis');
    const ellipseMinorAxis = getInputValueById('minor-axis');
    const ellipseArea = 3.1416 * ellipseMajorAxis * ellipseMinorAxis;

    setInnerTextById('ellipse-area', ellipseArea);
}

// reusable function
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}