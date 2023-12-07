// function update(event) {
     
//     let eve = event.target;

//     if(eve.id === 'myRange1')
//     {

//     let slider1 = document.getElementById('myRange1');

//     let div1 = document.getElementById('val1');
    
//     div1.textContent = slider1.value;
//     }

//     else if(eve.id === 'myRange2')
//     {
        
//     let slider2 = document.getElementById('myRange2');

//     let div2 = document.getElementById('val2');
    
//     div2.textContent = slider2.value;
//     }

//     else
//     {
//         console.log('hello');
//     }
// }

function valueUpdate(event) {
   

  const hexRange = event.target;

  const value = parseInt(hexRange.value).toString(16).toUpperCase();

  if(hexRange.id === 'hexRange_red')
  {
     const hexValue = document.getElementById('hexValue_red');
     hexValue.value = value;
  }

  else if(hexRange.id === 'hexRange_blue')
  {
     const hexValue = document.getElementById('hexValue_blue');
     hexValue.value = value;
  }

  else
  {
     const hexValue = document.getElementById('hexValue_green');
     hexValue.value = value;
  }

  const hex1 = parseInt(document.getElementById('hexValue_red').value,16);
  const hex2  = parseInt(document.getElementById('hexValue_blue').value,16);
  const hex3 =  parseInt(document.getElementById('hexValue_green').value,16);

  const blob = document.getElementById('blob');
  blob.setAttribute("fill", `rgb(${hex1}, ${hex2}, ${hex3})`);

}

function sliderUpdate(event) {
   
  const hexValue = event.target;

  const value = parseInt(hexValue.value, 16);
  
  if (!isNaN(value) && value >= 0 && value <= 255) {
    {
         if(hexValue.id === 'hexValue_red')
          {
             const hexRange = document.getElementById('hexRange_red');
             hexRange.value = value;
          }

          else if(hexValue.id === 'hexValue_blue')
          {
             const hexRange = document.getElementById('hexRange_blue');
             hexRange.value = value;
          }

        else
          {
             const hexRange = document.getElementById('hexRange_green');
             hexRange.value = value;
          }
    }

  const hex1 = parseInt(document.getElementById('hexRange_red').value,16);
  const hex2  = parseInt( document.getElementById('hexRange_blue').value,16);
  const hex3 = parseInt(document.getElementById('hexRange_green').value);

  const blob = document.getElementById('blob');
  blob.setAttribute("fill", `rgb(${hex1}, ${hex2}, ${hex3})`);

}
}

// const hexRange = document.getElementById('hexRange');
// const hexValue = document.getElementById('hexValue');

// hexRange.addEventListener('input', function () {
//   hexValue.textContent = parseInt(hexRange.value).toString(16).toUpperCase();
// });

// hexValue.addEventListener('input', function () {
//   const value = parseInt(hexValue.value, 16);
//   if (!isNaN(value) && value >= 0 && value <= 255) {
//     hexRange.value = value;
//   }
// });