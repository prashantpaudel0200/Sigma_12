
#include <iostream>
using namespace std;

int main() {
    double num1, num2;

    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    try {
        if (num2 == 0) {
            throw "Division by zero is not allowed!";
        }

        double result = num1 / num2;

        cout << "Result: " << result << endl;
    }

    catch (const char* error) {
        cout << "Error: " << error << endl;
    }

    cout << "Program continues..." << endl;

    return 0;
}
