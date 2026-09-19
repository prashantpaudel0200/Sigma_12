#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream file("welcome.txt");

    file << "Welcome to my college";

    file.close();

    return 0;
}