
#include <iostream>
using namespace std;

class Student {
public:
    string name;
    int age;
    float gpa;

    void displayDetails() {
        cout << "Student Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "GPA: " << gpa << endl;
    }
};

int main() {
    Student s1;

    s1.name = "Prashant";
    s1.age = 19;
    s1.gpa = 3.86;

    s1.displayDetails();

    return 0;
}
