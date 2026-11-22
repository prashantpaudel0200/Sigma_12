
#include <iostream>
using namespace std;

class Student {
public:
    string name;

    // Constructor
    Student(string studentName) {
        name = studentName;
        cout << "Constructor Called!" << endl;
    }

    void display() {
        cout << "Student Name: " << name << endl;
    }

    // Destructor
    ~Student() {
        cout << "Destructor Called!" << endl;
    }
};

int main() {
    Student s1("Prashant");

    s1.display();

    return 0;
}
