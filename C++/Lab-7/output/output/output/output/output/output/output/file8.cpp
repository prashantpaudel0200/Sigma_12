#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream outFile("data.txt");
    outFile << "Welcome to my college";
    outFile.close();

    ifstream inFile("data.txt");
    string text;
    getline(inFile, text);
    cout << "Data read from file: " << text;
    inFile.close();

    return 0;
}