#include <iostream>
using namespace std;

int main() {
    int choice;

    cout << "Enter 1 for integer exception: ";
    cin >> choice;

    try {
        if (choice == 1)
            throw 10;
        else
            throw "String exception";
    }
    catch (int e) {
        cout << "Integer exception caught: " << e << endl;
    }
    catch (const char* e) {
        cout << "String exception caught: " << e << endl;
    }

    return 0;
}