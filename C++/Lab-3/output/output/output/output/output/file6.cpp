#include <iostream>
using namespace std;

class Amount
{
    int money;

public:
    void input()
    {
        cout << "Enter amount: ";
        cin >> money;
    }

    bool operator>(Amount a)
    {
        return money > a.money;
    }
};

int main()
{
    Amount a1, a2;

    a1.input();
    a2.input();

    if (a1 > a2)
        cout << "First amount is greater.";
    else
        cout << "Second amount is greater or both are equal.";

    return 0;
}