function calculateParallelogramArea(){
    const paraBaseInput = document.getElementById('para-base');
    const paraBaseText = paraBaseInput.value;
    const paraBase = parseFloat(paraBaseText);
    
    const paraHeightInput = document.getElementById('para-height');
    const paraHeightText = paraHeightInput.value;
    const paraHeight = parseFloat(paraHeightText);
    
    const paraArea = paraBase * paraHeight;
    
    const paraAreaSpan = document.getElementById('para-area');
    paraAreaSpan.innerText = paraArea;
}