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

    void display()
    {
        cout << "Number = " << num << endl;
    }

    friend void operator++(Number &n);
};

void operator++(Number &n)
{
    ++n.num;
}

int main()
{
    Number n;

    n.input();

    ++n;

    n.display();

    return 0;
}