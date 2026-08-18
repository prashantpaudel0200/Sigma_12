#include <iostream>
using namespace std;

class A
{
    int num;

public:
    A()
    {
        num = 1000;
    }

    friend class B;
};

class B
{
public:
    void display(A obj)
    {
        cout << "Number = " << obj.num << endl;
    }
};

int main()
{
    A a;
    B b;

    b.display(a);

    return 0;
}