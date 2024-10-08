document.getElementById('donation-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const donateInput = document.getElementById('donate-input').value;

    //For Negative amount //
   
    if (donateInput < 0) {
        alert('Negative values are not allowed for donations!');
        event.preventDefault();
        return false;
    }

    //  For empty donation //

    if (donateInput === "") {
        alert("Please enter a donation amount.");
        return false; 
    }

    

    if (!isNaN(donateInput)) {
        const donateMoney = document.getElementById('donate-money').innerText;

        const totalMoney = document.getElementById('total-money').innerText;

        const title = document.getElementById('card-title').innerText;

      // if donate amount is greater than total money //

        if(donateInput > totalMoney){
            alert('Donation amount should not be greater than available balance');
            return false ;
        }

        const newDonateInput = parseFloat(donateInput);
        const newDonateMoney = parseFloat(donateMoney);
        const remainingBalance = parseFloat(totalMoney);
        const newDonation = newDonateMoney + newDonateInput;
        const newRemainingBalance = remainingBalance - newDonateInput;

        document.getElementById('donate-money').innerText = newDonation;
        document.getElementById('total-money').innerText = newRemainingBalance;

        my_modal_1.showModal();

        /* History */
        const li = document.createElement('li');
        li.className = (`p-5 rounded-lg m-5 shadow-xl bg-lime-100`);
        li.innerText = `BDT: ${newDonateInput} taka Donated For Noakhali (${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()})`;
        const history = document.getElementById('history');
        history.insertBefore(li, history.firstChild);


    }
    else (
        alert('Please Give A Valid Number.')
    )
})


/* Feni Donation */
document.getElementById('feni-donation-button').addEventListener('click', function (event) {
    event.preventDefault();

    const feniDonationInput = document.getElementById('feni-donate-input').value;

    //For Negative amount //

    if (feniDonationInput < 0) {
        alert('Negative values are not allowed for donations!');
        event.preventDefault();
        return false;
    }

    //  For empty donation //

    if (feniDonationInput === "") {
        alert("Please enter a donation amount.");
        return false; 
    }
   
    if (!isNaN(feniDonationInput)) {
        const donateFeni = document.getElementById('donate-feni').innerText;
        const totalMoney = document.getElementById('total-money').innerText;

        const newFeniDonateInput = parseFloat(feniDonationInput);
        const newDonateFeni = parseFloat(donateFeni);
        const remainingBalance = parseFloat(totalMoney);

        // if donate amount is greater than total money //

        if(feniDonationInput > totalMoney){
            alert('Donation amount should not be greater than available balance');
            return false ;
        }

        const newFeniDonation = newFeniDonateInput + newDonateFeni;
        const newRemainingBalance = remainingBalance - newFeniDonateInput;

        document.getElementById('donate-feni').innerText = newFeniDonation;
        document.getElementById('total-money').innerText = newRemainingBalance;

        my_modal_1.showModal();

       

        /* History */
        const li = document.createElement('li');
        li.className = (`p-5 rounded-lg m-5 shadow-xl bg-lime-100`);
        li.innerText = `BDT: ${newFeniDonateInput} taka Donated For Feni (${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()})`;
        const history = document.getElementById('history');
        history.insertBefore(li, history.firstChild);
    }

    else {
        alert('Please Give A Valid Number.')
    }
})

/* QUOTA DONATION */

document.getElementById('quota-donation-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const quotaDonationInput = document.getElementById('quota-donation-input').value;

    //For Negative amount //

    if (quotaDonationInput < 0) {
        alert('Negative values are not allowed for donations!');
        event.preventDefault();
        return false;
    }
 
    //  For empty donation //

    if (quotaDonationInput === "") {
        alert("Please enter a donation amount.");
        return false; 
    }

    
    if (!isNaN(quotaDonationInput)) {
        const donateQuota = document.getElementById('donate-quota').innerText;
        const totalMoney = document.getElementById('total-money').innerText;

        const newQuotaDonateInput = parseFloat(quotaDonationInput);
        const newDonateQuota = parseFloat(donateQuota);
        const remainingBalance = parseFloat(totalMoney);

         // if donate amount is greater than total money //

        if(quotaDonationInput > totalMoney){
            alert('Donation amount should not be greater than available balance');
            return false ;
        }


        const newQuotaDonation = newQuotaDonateInput + newDonateQuota;
        const newRemainingBalance = remainingBalance - newQuotaDonateInput;

        document.getElementById('donate-quota').innerText = newQuotaDonation;
        document.getElementById('total-money').innerText = newRemainingBalance;

        my_modal_1.showModal();

        /* History */
        const li = document.createElement('li');
        li.className = (`p-5 rounded-lg m-5 shadow-xl bg-lime-100`);
        li.innerText = `BDT: ${newQuotaDonateInput} taka Donated For Quota (${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()})`;
        const history = document.getElementById('history');
        history.insertBefore(li, history.firstChild);
    }
    else {
        alert('Please Give A Valid Number.')
    }
})