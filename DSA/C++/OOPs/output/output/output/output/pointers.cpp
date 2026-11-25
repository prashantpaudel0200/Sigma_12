
#include <iostream>
using namespace std;

int main() {
    int number = 100;

    // Store the address of number
    int *ptr = &number;

    cout << "Value of number: "
         << number << endl;

    cout << "Address of number: "
         << &number << endl;

    cout << "Pointer stores address: "
         << ptr << endl;

    cout << "Value using pointer: "
         << *ptr << endl;

    // Modify value using pointer
    *ptr = 200;

    cout << "Updated number: "
         << number << endl;

    return 0;
}
