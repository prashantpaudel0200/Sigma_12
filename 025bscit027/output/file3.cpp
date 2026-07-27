#include <iostream>
using namespace std;

class Student
{
    int roll;
    string name;

public:
    Student(int, string);
    void display();
};

Student::Student(int r, string n)
{
    roll = r;
    name = n;
}

void Student::display()
{
    cout << "Roll No: " << roll << endl;
    cout << "Name: " << name << endl;
}

int main()
{
    Student s(101, "Prashant");
    s.display();

    return 0;
}