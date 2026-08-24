#include <iostream>
using namespace std;

template <class T>
T add(T a, T b) {
    return a + b;
}

template <class T>
T add(T a, T b, T c) {
    return a + b + c;
}

int main() {
    cout << "Sum of two numbers: " << add(10, 20) << endl;
    cout << "Sum of three numbers: " << add(10, 20, 30) << endl;

    return 0;
}