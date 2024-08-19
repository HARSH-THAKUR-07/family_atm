// Sample accounts
const accounts = [
    { name: "Alice", balance: 1000, pin: "1234" },
    { name: "Bob", balance: 1500, pin: "5678" },
    { name: "Charlie", balance: 2000, pin: "9101" }
];

let currentAccount = null;

function login() {
    console.log('Login function called');
    const pin = document.getElementById('pin').value;
    const loginMessage = document.getElementById('login-message');

    if (pin === "") {
        loginMessage.textContent = 'Please enter a PIN.';
        loginMessage.className = 'error';
        return;
    }

    const account = accounts.find(acc => acc.pin === pin);
    if (account) {
        currentAccount = account;
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('atm-section').style.display = 'block';
        document.getElementById('user-name').textContent = account.name;
        loginMessage.textContent = '';  // Clear any previous login error messages
        loginMessage.className = '';    // Clear message class
    } else {
        loginMessage.textContent = 'Incorrect PIN.';
        loginMessage.className = 'error';
    }
}

function logout() {
    currentAccount = null;
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('atm-section').style.display = 'none';
    
    // Reset any messages or input fields
    document.getElementById('login-message').textContent = '';
    document.getElementById('balance-message').textContent = '';
    document.getElementById('deposit-message').textContent = '';
    document.getElementById('withdraw-message').textContent = '';
    document.getElementById('pin').value = '';
    document.getElementById('deposit-amount').value = '';
    document.getElementById('withdraw-amount').value = '';
}

function checkBalance() {
    if (currentAccount) {
        document.getElementById('balance-message').textContent = Your balance is $${currentAccount.balance};
        document.getElementById('balance-message').className = 'success';
    } else {
        document.getElementById('balance-message').textContent = 'Error: Not logged in.';
        document.getElementById('balance-message').className = 'error';
    }
}

function showDeposit() {
    document.getElementById('deposit-section').style.display = 'block';
    document.getElementById('withdraw-section').style.display = 'none';
    document.getElementById('deposit-message').textContent = '';  // Clear any previous deposit messages
    document.getElementById('deposit-message').className = '';
}

function showWithdraw() {
    document.getElementById('withdraw-section').style.display = 'block';
    document.getElementById('deposit-section').style.display = 'none';
    document.getElementById('withdraw-message').textContent = '';  // Clear any previous withdrawal messages
    document.getElementById('withdraw-message').className = '';
}

function deposit