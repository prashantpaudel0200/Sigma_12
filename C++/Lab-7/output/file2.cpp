#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;

    cout << "Enter a multi-word string: ";
    getline(cin, str);

    cout << "You entered: " << str;

    return 0;
}