#include <iostream>
using namespace std;

int main() {
    int num;
    float value;

    cout << "Enter an integer: ";
    cin >> num;

    cout << "Enter a floating-point value: ";
    cin >> value;

    cout << "\nFormatted Output:" << endl;
    cout.width(10);
    cout << num << endl;
    cout.width(10);
    cout.precision(3);
    cout << value << endl;

    return 0;
}