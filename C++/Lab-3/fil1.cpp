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

    void operator--()
    {
        --num;
    }

    void display()
    {
        cout << "Number = " << num << endl;
    }
};

int main()
{
    Number n;

    n.input();

    --n;

    n.display();

    return 0;
}