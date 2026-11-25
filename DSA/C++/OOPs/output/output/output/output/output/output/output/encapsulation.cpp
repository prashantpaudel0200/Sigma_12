
#include <iostream>
using namespace std;

class BankAccount {
private:
    double balance;

public:
    BankAccount(double initialBalance) {
        balance = initialBalance;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposit Successful!" << endl;
        }
    }

    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrawal Successful!" << endl;
        } else {
            cout << "Insufficient Balance!" << endl;
        }
    }

    void displayBalance() {
        cout << "Current Balance: "
             << balance << endl;
    }
};

int main() {
    BankAccount account(5000);

    account.deposit(2000);
    account.withdraw(1500);

    account.displayBalance();

    return 0;
}
