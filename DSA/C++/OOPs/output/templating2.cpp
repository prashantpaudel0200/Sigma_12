
#include <iostream>
using namespace std;

template <class T>
class Calculator
{
    T a, b;

public:
    Calculator(T x, T y)
    {
        a = x;
        b = y;
    }

    T add()
    {
        return a + b;
    }

    T multiply()
    {
        return a * b;
    }
};

int main()
{
    Calculator<int> c1(10, 20);
    Calculator<float> c2(2.5, 3.5);

    cout << "Integer Addition: " << c1.add() << endl;
    cout << "Integer Multiplication: " << c1.multiply() << endl;

    cout << "Float Addition: " << c2.add() << endl;
    cout << "Float Multiplication: " << c2.multiply() << endl;

    return 0;
}
