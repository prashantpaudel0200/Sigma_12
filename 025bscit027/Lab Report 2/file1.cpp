#include <iostream>
using namespace std;

class Employee
{
    int id;
    string name;
    float salary;

public:
    void input();
    void display();
};

void Employee::input()
{
    cout << "Enter Employee ID: ";
    cin >> id;

    cout << "Enter Employee Name: ";
    cin >> name;

    cout << "Enter Salary: ";
    cin >> salary;
}

void Employee::display()
{
    cout << "\nEmployee ID: " << id;
    cout << "\nEmployee Name: " << name;
    cout << "\nSalary: " << salary << endl;
}

int main()
{
    Employee e[5];

    for (int i = 0; i < 5; i++)
    {
        cout << "\nEnter details of Employee " << i + 1 << ":\n";
        e[i].input();
    }

    cout << "\n--- Employee Information ---\n";

    for (int i = 0; i < 5; i++)
    {
        e[i].display();
    }

    return 0;
}