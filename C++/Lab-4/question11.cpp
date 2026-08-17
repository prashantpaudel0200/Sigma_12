#include <iostream>
using namespace std;

class Address
{
public:
    string city;

    Address(string c)
    {
        city = c;
    }
};

class Student
{
    Address address;

public:
    Student(string city) : address(city)
    {
    }

    void display()
    {
        cout << "Student's City: " << address.city << endl;
    }
};

int main()
{
    Student s("Kathmandu");

    s.display();

    return 0;
}