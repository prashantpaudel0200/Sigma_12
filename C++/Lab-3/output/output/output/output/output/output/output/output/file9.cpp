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

    operator int()
    {
        return num;
    }
};

int main()
{
    Number n;
    n.input();

    int x;
    x = n;

    cout << "Number = " << x << endl;

    return 0;
}