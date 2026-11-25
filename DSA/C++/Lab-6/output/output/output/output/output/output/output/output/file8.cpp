#include <iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int index;

    cout << "Enter array index: ";
    cin >> index;

    try {
        if (index < 0 || index >= 5)
            throw "Array index out of bounds.";

        cout << "Element: " << arr[index] << endl;
    }
    catch (const char* msg) {
        cout << "Exception: " << msg << endl;
    }

    return 0;
}