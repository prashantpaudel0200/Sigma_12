
#include <iostream>
using namespace std;

class Calculator {
public:
    int add(int a, int b) {
        return a + b;
    }

    float add(float a, float b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
};

int main() {
    Calculator calc;

    cout << "Integer Addition: "
         << calc.add(10, 20) << endl;

    cout << "Float Addition: "
         << calc.add(5.5f, 4.5f) << endl;

    cout << "Three Numbers Addition: "
         << calc.add(10, 20, 30) << endl;

    return 0;
}
