#include <iostream>
using namespace std;

class Student
{
    int roll;

public:
    void setRoll(int roll)
    {
        this->roll = roll;
    }

    void display()
    {
        cout << "Roll No: " << roll << endl;
    }
};

int main()
{
    Student s;
    s.setRoll(101);
    s.display();

    return 0;
}