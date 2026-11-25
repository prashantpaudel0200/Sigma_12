#include <iostream>
using namespace std;

class Student
{
    int roll;

public:
    void input()
    {
        cout << "Enter Roll No: ";
        cin >> roll;
    }

    Student getObject()
    {
        return *this;
    }

    void display()
    {
        cout << "Roll No: " << roll << endl;
    }
};

int main()
{
    Student s1, s2;

    s1.input();

    s2 = s1.getObject();

    s2.display();

    return 0;
}