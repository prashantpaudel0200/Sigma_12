#include <iostream>
using namespace std;

class Student
{
    int roll;
    string name;

public:
    Student()
    {
        roll = 101;
        name = "Prashant";
    }

    void display()
    {
        cout << "Roll No: " << roll << endl;
        cout << "Name: " << name << endl;
    }
};

int main()
{
    Student s;
    s.display();

    return 0;
}