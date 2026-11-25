#include <iostream>
using namespace std;

class A
{
    int num;

public:
    A(int n)
    {
        num = n;
    }

    friend void show(A);
};

void show(A a)
{
    cout << "Number = " << a.num << endl;
}

int main()
{
    A obj(100);

    show(obj);

    return 0;
}