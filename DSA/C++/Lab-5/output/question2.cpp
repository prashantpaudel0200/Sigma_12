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

    void display()
    {
        cout << "Roll No: " << roll << endl;
    }
};

int main()
{
    Student s;
    Student *ptr;

    ptr = &s;

    ptr->input();
    ptr->display();

    return 0;
}