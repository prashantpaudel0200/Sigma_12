#include <iostream>
using namespace std;

class B;  // Forward declaration

class A
{
    int num1;

public:
    void input()
    {
        cout << "Enter first number: ";
        cin >> num1;
    }

    friend void multiply(A, B);
};

class B
{
    int num2;

public:
    void input()
    {
        cout << "Enter second number: ";
        cin >> num2;
    }

    friend void multiply(A, B);
};

void multiply(A a, B b)
{
    cout << "Multiplication = " << a.num1 * b.num2 << endl;
}

int main()
{
    A obj1;
    B obj2;

    obj1.input();
    obj2.input();

    multiply(obj1, obj2);

    return 0;
}