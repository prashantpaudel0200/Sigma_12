#include <iostream>
using namespace std;

template <class T>
class Calculator {
    T a, b;

public:
    Calculator(T x, T y) {
        a = x;
        b = y;
    }

    T add() {
        return a + b;
    }
};

int main() {
    Calculator<int> obj1(10, 20);
    Calculator<float> obj2(5.5, 2.5);

    cout << "Integer addition: " << obj1.add() << endl;
    cout << "Fractional addition: " << obj2.add() << endl;

    return 0;
}