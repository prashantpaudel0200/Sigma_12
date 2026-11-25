
#include <iostream>
#include <fstream>
using namespace std;

int main() {

    // Writing into a file
    ofstream outFile("student.txt");

    outFile << "Name: Prashant" << endl;
    outFile << "Course: BSc CSIT" << endl;
    outFile << "Semester: 2nd" << endl;

    outFile.close();

    cout << "Data written successfully!" << endl;

    // Reading from a file
    ifstream inFile("student.txt");

    string line;

    cout << "\nReading File Contents:\n";

    while (getline(inFile, line)) {
        cout << line << endl;
    }

    inFile.close();

    return 0;
}
