#include <iostream>
using namespace std;

class Animal
{
public:
    void showAnimal()
    {
        cout << "This is Animal class." << endl;
    }
};

class Dog : public Animal
{
public:
    void showDog()
    {
        cout << "This is Dog class." << endl;
    }
};

class Cat : public Animal
{
public:
    void showCat()
    {
        cout << "This is Cat class." << endl;
    }
};

int main()
{
    Dog d;
    Cat c;

    d.showAnimal();
    d.showDog();

    c.showAnimal();
    c.showCat();

    return 0;
}