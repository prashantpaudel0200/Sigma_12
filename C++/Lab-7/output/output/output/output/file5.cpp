#include <iostream>
using namespace std;

int main() {
    int num;

    cout << "Enter an integer: ";
    cin >> num;

    if (cin.fail())
        cout << "Input failed.";
    else
        cout << "Valid input.";

    return 0;
}