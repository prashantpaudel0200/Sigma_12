#include <iostream>
using namespace std;

class Shape
{
public:
    virtual void area() = 0;
};

class Rectangle : public Shape
{
public:
    void area()
    {
        int l = 10, b = 5;
        cout << "Area of Rectangle = " << l * b << endl;
    }
};

int main()
{
    Rectangle r;

    r.area();

    return 0;
}