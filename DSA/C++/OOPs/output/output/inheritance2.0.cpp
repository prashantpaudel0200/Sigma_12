
#include <iostream>
using namespace std;

// Parent class
class Animal {
public:
    void eat() {
        cout << "Animal is eating." << endl;
    }
};

// Child class
class Dog : public Animal {
public:
    void bark() {
        cout << "Dog is barking." << endl;
    }
};

int main() {
    Dog d1;

    d1.eat();  // Inherited method
    d1.bark(); // Child class method

    return 0;
}
