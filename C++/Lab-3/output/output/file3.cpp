#include <iostream>
using namespace std;

class Number
{
    int num;

public:
    Number(int n = 0)
    {
        num = n;
    }

    Number operator+(Number n)
    {
        return Number(num + n.num);
    }

    void display()
    {
        cout << "Sum = " << num << endl;
    }
};

int main()
{
    Number n1(10);

    Number result = n1 + Number(20);

    result.display();

    return 0;
}