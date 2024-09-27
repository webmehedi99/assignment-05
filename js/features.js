document.getElementById('donation-page').addEventListener('click', function(){
    document.getElementById('donation').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
})
document.getElementById('donation-history').addEventListener('click',function(){
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('donation').classList.add('hidden');
})

/* Buttons */
const donationPage =document.getElementById('donation-page');
const historyPage = document.getElementById('donation-history');

function activeButton(activeBtn){
    donationPage.classList.remove('active');
    historyPage.classList.remove('active');
    activeBtn.classList.add('active');
}
donationPage.onclick =function(){
    activeButton(donationPage)
}
historyPage.onclick =function(){
    activeButton(historyPage)
}