#include <iostream>
using namespace std;

class A
{
public:
    void showA()
    {
        cout << "This is Class A." << endl;
    }
};

class B : public A
{
public:
    void showB()
    {
        cout << "This is Class B." << endl;
    }
};

class C : public A
{
public:
    void showC()
    {
        cout << "This is Class C." << endl;
    }
};

class D : public B, public C
{
public:
    void showD()
    {
        cout << "This is Class D." << endl;
    }
};

int main()
{
    D d;

    d.showB();
    d.showC();
    d.showD();

    return 0;
}