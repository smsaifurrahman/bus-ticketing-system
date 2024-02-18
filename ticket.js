const buttons = document.getElementsByClassName('button');
const selectedBtn =[]
for(const button of buttons) {
    button.addEventListener('click',function(e){
        const btnValue = e.target.innerText;
        if(!selectedBtn.includes(btnValue) ){
            if(selectedBtn.length < 4) {
               const btnId = selectedBtn.push(btnValue);
              
               
                // change background color of selected seat
                setBackgroundColorById(btnValue);
                // gets value of total seat
                const seatLeft = document.getElementById('seat-left').innerText;
                let remainingSeat = seatLeft-1;
                setInnerText('seat-left', remainingSeat);

                 // setting count of selected seat   
                const initialSelectedSeat = parseInt(document.getElementById('selected-seat-count').innerText) ;
                const selectedSeatCount = initialSelectedSeat + 1;
                setInnerText('selected-seat-count', selectedSeatCount );


                // Adding ticket name and price to screen
               
                  const rowValues = [btnValue, 'Economy', 550];
                  const priceTable = document.getElementById('price-table');

                  const newRow = document.createElement('tr');
                  rowValues.forEach( rowValue => {
                    const cell = document.createElement('td');
                    cell.classList.add('px-4', 'py-2', 'text-center');
                    cell.innerText = rowValue;
                    newRow.appendChild(cell);
                   
                  })  ;

                  priceTable.appendChild(newRow);

                  //Calculate total price
                //   const perTicketPrice  = parseInt(document.getElementById('ticket-price').innerText);
                //   console.log(perTicketPrice);
                  const initialTotalPrice = parseInt(document.getElementById('total-price').innerText);
                  const totalPrice = initialTotalPrice + 550;
                  setInnerText('total-price', totalPrice);

                  // Calculate Grand total
                  const initialGrandTotal = parseInt(document.getElementById('grand-total').innerText);
                  const grandTotal = initialGrandTotal + 550;
                  setInnerText('grand-total', grandTotal);

                  // 
                  if(totalPrice>= 2200) {
                        removeClassById('coupon-field');
                  }
                






                
                
            }
            else {
                alert("You can not buy more than 4 seats")
            }
           
        }
        else {
            alert('You have already selected this seat');
        }
       
        
       
        
        
        
    

    });
}





function setInnerText(elementID,value) {
    document.getElementById(elementID).innerText = value;
}


function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    // element.classList.add('bg-[#1DD100]');
    element.style.backgroundColor = '#1DD100';
}

function removeClassById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('disabled', 'pointer-events-none', 'opacity-50');
}