#include <iostream>
#include <fstream>
using namespace std;

int main() {
    fstream file("data.txt", ios::in | ios::out | ios::trunc);

    file << "Hello World";

    cout << "Current position: " << file.tellg() << endl;

    file.seekg(6);

    char ch;
    file.get(ch);

    cout << "Character at position 6: " << ch;

    file.close();

    return 0;
}