#include <iostream>
using namespace std;

class ClassA
{
    int num;

public:
    void input()
    {
        cout << "Enter a number: ";
        cin >> num;
    }

    int getNum()
    {
        return num;
    }
};

class ClassB
{
    int value;

public:
    ClassB(ClassA a)
    {
        value = a.getNum();
    }

    void display()
    {
        cout << "Value = " << value << endl;
    }
};

int main()
{
    ClassA a;
    a.input();

    ClassB b = a;

    b.display();

    return 0;
}