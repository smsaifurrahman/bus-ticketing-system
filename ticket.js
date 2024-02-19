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
                  const initialTotalPrice = parseInt(getInnerTextById('total-price'));
                  const totalPrice = initialTotalPrice + 550;
                  setInnerText('total-price', totalPrice);

                  // Calculate Grand total
                  const initialGrandTotal = parseInt(getInnerTextById('grand-total'));
                  
                  const grandTotal = initialGrandTotal + 550;
                  setInnerText('grand-total', grandTotal);

                  // make coupon filed usable 
                  if(totalPrice>= 2200) {
                        removeClassById('coupon-field');
                  }
                  // Making Next button Visible
            
                     const phoneNumber = getIdById('phone-number');
                  if(totalPrice >= 550  ) {

                     phoneNumber.addEventListener('input',function(){
                      
                        const phoneNumberValue = phoneNumber.value
                        const phoneNumberLength = phoneNumberValue.trim();
                        if(phoneNumberLength.length !== 0) {
                                 removeClassById('next-btn');
                        }
                     });
                
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

        // Apply discount 

        const couponBtn = getIdById('coupon-btn');
        couponBtn.addEventListener('click',function(){
        console.log('Coupon button clicked'); 

            const couponValue = getElementValueById('coupon-input');
            if(couponValue === 'NEW15') {
                const grandTotal=  parseInt(getInnerTextById('grand-total'));
                
                const discount = grandTotal * .15;
                const   newGrandTotal = grandTotal - discount;


                const h3 = document.createElement('h3');
                h3.innerHTML = 'You got 15%<br> discount:';
                h3.classList.add('font-bold');
                h3.style.color = 'green';

                const p = document.createElement('p');
                p.innerText = `Discounted amount- ${discount}`;
                p.classList.add('font-bold');
                p.style.color = 'green';
                const discountContainer = document.getElementById('discount-container');
                discountContainer.appendChild(h3);
                discountContainer.appendChild(p);
                console.log(grandTotal);

            
                
            } else if(couponValue === 'Couple 20') {
                const grandTotal=  parseInt(getInnerTextById('grand-total'));
                
                const discount = grandTotal * .20;
                const   newGrandTotal = grandTotal - discount;

               


                const h3 = document.createElement('h3');
                h3.innerHTML = 'You got 20%<br> discount:';
                h3.classList.add('font-bold');
                h3.style.color = 'green';

                const p = document.createElement('p');
                p.innerText = `Discounted amount- ${discount}`;
                p.classList.add('font-bold');
                p.style.color = 'green';
                const discountContainer = document.getElementById('discount-container');
                discountContainer.appendChild(h3);
                discountContainer.appendChild(p);
                console.log(grandTotal);
            }
            else {
                alert('please Enter a right Coupon code');
            }
        });








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

function getElementValueById(elementId) {
   const element =  document.getElementById(elementId).value;
   return element;
}

function getIdById(elementId) {
    const element = document.getElementById(elementId);
    return element;
} 

function getInnerTextById (elementId) {
    const element = document.getElementById(elementId).innerText;
    return element;
}