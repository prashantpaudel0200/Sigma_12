
#include <iostream>
using namespace std;

class Student
{
    int id;
    string name;

public:
    Student()
    {
        id = 101;
        name = "Prashant";
    }

    void display()
    {
        cout << "Student ID: " << id << endl;
        cout << "Student Name: " << name << endl;
    }
};

int main()
{
    Student s;

    s.display();

    return 0;
}
