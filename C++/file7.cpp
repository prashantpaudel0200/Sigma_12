#include <iostream>

using namespace std;

// Function with default arguments
void student(string name, int age = 18, string country = "Nepal")
{
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Country: " << country << endl;
    cout << "------------------------" << endl;
}

int main()
{
    // Passing all arguments
    student("Prashant", 20, "China");

    // Passing only name (age and country will use default values)
    student("Asha");

    // Passing name and age (country will use default value)
    student("Balen", 35);

    return 0;
}