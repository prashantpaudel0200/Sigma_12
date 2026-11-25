#include <iostream>
using namespace std;

class Number
{
    int num;

public:
    void input()
    {
        cout << "Enter a number: ";
        cin >> num;
    }

    bool operator==(Number n)
    {
        return num == n.num;
    }
};

int main()
{
    Number n1, n2;

    n1.input();
    n2.input();

    if (n1 == n2)
        cout << "Both numbers are equal.";
    else
        cout << "Both numbers are not equal.";

    return 0;
}