#include <iostream>
using namespace std;

class Base
{
public:
    ~Base()
    {
        cout << "Base class destructor called." << endl;
    }
};

class Derived : public Base
{
public:
    ~Derived()
    {
        cout << "Derived class destructor called." << endl;
    }
};

int main()
{
    Derived d;

    return 0;
}