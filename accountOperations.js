const acctBalanceLbl = document.getElementById("acctBalanceLbl");
const deposits = [];
const withdrawals = [];
let totalBalance = 100;
const userDeposit = document.getElementById("userDeposit");
const btnDeposit = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");
const ul=document.querySelector("ul")
const empty = document.querySelector('.empty')

// formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

// Deposits
btnDeposit.addEventListener('click', () => {
    // checks if deposit is a number
    if (isNaN(userDeposit.value)) {
        alert("Please enter a number.");
        return userDeposit.value = '';
    } 
    else {
        // checks if deposit meets parameters
        if (userDeposit.value < 0.01 || userDeposit.value > 10000) {
            alert("You can only deposit between $0.01 and $10,000.")
            return userDeposit.value = '';
        } 
        else {
            alert("You deposited $" + userDeposit.value + " to your account.") // Mesage in the screen
            deposits.push(Number(userDeposit.value)); // push deposit to array
            totalBalance += (Number(userDeposit.value)); // calculate new balance
            localStorage.setItem("balance", totalBalance)
            let totalBalanceFormatted = formatter.format(totalBalance); // format the balance
            document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
            console.log("$" + userDeposit.value);
            // Creating the receipt message
            const text=userDeposit.value;
            const li=document.createElement('li');
            const p=document.createElement('p');
            const d = new Date();
            let da = d.toLocaleDateString();
            const h = new Date();
            let ho = h.toLocaleTimeString();
            p.textContent= da+ " @ "+ho+ ": You deposited $" +text+ " to your account";
            // End of receipt
            li.appendChild(p);
            ul.appendChild(li);
            return userDeposit.value = '';
        }
    }
    
});

// Withdrawals
btnWithdraw.addEventListener('click', () => {
    if (isNaN(userWithdraw.value)) { // checks if withdrawal is a number
        alert("Please enter a number.");
        return userWithdraw.value = '';
    }
    else {
        if (userWithdraw.value > totalBalance - 5) { // checks if withdrawal can be applied
            alert("Your total balance cannot drop below $5.");
            return userWithdraw.value = '';
        }
        else {
            withdrawals.push(Number(userWithdraw.value));
            totalBalance -= (Number(userWithdraw.value)); // calculate new Balance
            localStorage.setItem("balance", totalBalance)
            let totalBalanceFormatted = formatter.format(totalBalance); // format the balance
            document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
            alert("You withdrew $" + userWithdraw.value + " from your account.")
            console.log("$" + userWithdraw.value);
            // Creating the receipt message
            const text=userWithdraw.value;
            const li=document.createElement('li');
            const p=document.createElement('p');
            const d = new Date();
            let da = d.toLocaleDateString();
            const h = new Date();
            let ho = h.toLocaleTimeString();
            p.textContent= da+ " @ "+ho+ ": You withdrew $" +text+ " from your account";
            li.appendChild(p);
            ul.appendChild(li);
            // End of receipt
            return userWithdraw.value = '';
        }
        
    }
});
let totalBalanceFormatted = formatter.format(totalBalance); // format the total balance, localStorage.getItem("balance")
document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;