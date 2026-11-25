#include <iostream>

using namespace std;

// Call by Value
void value(int x)
{
    x = x + 10;
    cout << "Inside Call by Value = " << x << endl;
}

// Call by Reference
void reference(int &x)
{
    x = x + 10;
    cout << "Inside Call by Reference = " << x << endl;
}

int main()
{
    int num = 20;

    cout << "Original Value = " << num << endl;

    value(num);
    cout << "After Call by Value = " << num << endl;

    reference(num);
    cout << "After Call by Reference = " << num << endl;

    return 0;
}