#include <iostream>
using namespace std;

class Number
{
    int num;

public:
    Number(int n)
    {
        num = n;
    }

    void display()
    {
        cout << "Number = " << num << endl;
    }
};

int main()
{
    int x = 100;

    Number n = x;

    n.display();

    return 0;
}