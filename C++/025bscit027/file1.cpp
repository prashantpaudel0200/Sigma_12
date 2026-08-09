#include <iostream>
#include <iomanip>   // Required for setw() and setprecision()
#include<string>
using namespace std;

int main()
{
    string name = "Prashant";
    int age = 19;
    double marks = 96.561;

    // Using endl
    cout << "Example of endl:" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl << endl;

    // Using setw()
    cout << "Example of setw():" << endl;
    cout << setw(15) << "Name"
         << setw(10) << "Age"
         << setw(15) << "Marks" << endl;

    cout << setw(15) << name
         << setw(10) << age
         << setw(15) << marks << endl << endl;

    // Using setprecision()
    cout << "Example of setprecision():" << endl;

    cout << "Without fixed: "
         << setprecision(4) << marks << endl;

    cout << "With fixed: "
         << fixed << setprecision(2) << marks << endl;

    return 0;
}