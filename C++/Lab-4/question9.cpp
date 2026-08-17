#include <iostream>
using namespace std;

class Polygon
{
protected:
    float dimension1, dimension2;

public:
    void read()
    {
        cout << "Enter two dimensions: ";
        cin >> dimension1 >> dimension2;
    }
};

class Rectangle : public Polygon
{
public:
    void area()
    {
        cout << "Area of Rectangle = " << dimension1 * dimension2 << endl;
    }
};

class Triangle : public Polygon
{
public:
    void area()
    {
        cout << "Area of Triangle = " << 0.5 * dimension1 * dimension2 << endl;
    }
};

int main()
{
    Rectangle r;
    Triangle t;

    cout << "For Rectangle:" << endl;
    r.read();
    r.area();

    cout << "\nFor Triangle:" << endl;
    t.read();
    t.area();

    return 0;
}