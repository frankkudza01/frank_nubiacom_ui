function clear(){
    document.getElementById('Cash').style.display ='none';
    document.getElementById('Card').style.display ='none';
    document.getElementById('Paynow').style.display ='none';
}
function card(){
    document.getElementById('Card').style.display ='block';
    document.getElementById('Cash').style.display ='none';
    document.getElementById('Paynow').style.display ='none';
  }

function cash(){
    document.getElementById('Cash').style.display = 'block';
    document.getElementById('Card').style.display ='none';
    document.getElementById('Paynow').style.display ='none';
}

function paynow(){
    document.getElementById('Cash').style.display = 'none';
    document.getElementById('Card').style.display ='none';
    document.getElementById('Paynow').style.display ='block';
}