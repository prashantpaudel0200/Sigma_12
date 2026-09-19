#include <iostream>
#include <fstream>
using namespace std;

int main() {
    fstream file("data.txt", ios::out | ios::in | ios::trunc);

    file << "Hello World";

    cout << "Current position: " << file.tellp() << endl;

    file.seekp(6);
    file << "C++";

    file.close();

    return 0;
}