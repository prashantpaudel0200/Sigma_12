#include <iostream>
using namespace std;

class Student
{
    int roll;
    string name;

public:
    Student(int r, string n)
    {
        roll = r;
        name = n;
    }

    Student(const Student &s)
    {
        roll = s.roll;
        name = s.name;
    }

    void display()
    {
        cout << "Roll No: " << roll << endl;
        cout << "Name: " << name << endl;
    }
};

int main()
{
    Student s1(101, "Prashant");
    Student s2 = s1;

    cout << "Original Object:" << endl;
    s1.display();

    cout << "\nCopied Object:" << endl;
    s2.display();

    return 0;
}