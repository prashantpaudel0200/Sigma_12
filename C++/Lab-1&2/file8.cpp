#include <iostream>

using namespace std;

// Inline function to add two numbers
inline int add(int a, int b)
{
    return a + b;
}

// Inline function to multiply two numbers
inline int multiply(int a, int b)
{
    return a * b;
}

int main()
{
    int x = 10, y = 5;

    cout << "Addition = " << add(x, y) << endl;
    cout << "Multiply = " << multiply(x, y) << endl;

    return 0;
}