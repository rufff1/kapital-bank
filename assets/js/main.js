function calc() {
    
    var x=parseFloat(document.getElementById('amount').value);
    var y=parseFloat(document.getElementById('period').value);
    var z=parseFloat(document.getElementById('interest-rate').value);
    
    var d=document.getElementById('pay-month');
    

     

    if(x>=300 && y>=3 && z>=12.9){
         
         var monthPay=(x/y)+(x*(z/100));
         d.innerHTML=(monthPay.toFixed(2));
         

    }
    else{
        alert('Zehmet olmasa duzgun reqem daxil edin');
    }

}