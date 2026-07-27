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

    void display(Student s)
    {
        cout << "Roll No: " << s.roll << endl;
    }
};

int main()
{
    Student s1;
    s1.input();

    s1.display(s1);

    return 0;
}