#include <iostream>
using namespace std;

class Base
{
    int num;

public:
    Base(int n)
    {
        num = n;
    }

    void displayBase()
    {
        cout << "Base class number: " << num << endl;
    }
};

class Derived : public Base
{
public:
    Derived(int n) : Base(n)
    {
    }
};

int main()
{
    Derived d(100);

    d.displayBase();

    return 0;
}