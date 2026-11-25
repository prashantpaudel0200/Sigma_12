#include <iostream>
using namespace std;

template <class T>
T subtract(T a, T b) {
    return a - b;
}

int main() {
    int a = 20, b = 8;
    float x = 15.5, y = 6.2;

    cout << "Subtraction of integers: " << subtract(a, b) << endl;
    cout << "Subtraction of fractional numbers: " << subtract(x, y) << endl;

    return 0;
}