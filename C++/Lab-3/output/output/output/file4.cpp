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

    Number operator+(Number n)
    {
        Number temp;
        temp.num = num + n.num;
        return temp;
    }

    void display()
    {
        cout << "Sum = " << num << endl;
    }
};

int main()
{
    Number n1, n2, result;

    n1.input();
    n2.input();

    result = n1 + n2;

    result.display();

    return 0;
}