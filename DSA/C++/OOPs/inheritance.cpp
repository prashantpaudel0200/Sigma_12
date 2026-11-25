#include <iostream>
using namespace std;

// Parent Class
class Animal {
public:
    void eat() {
        cout << "Animal is eating." << endl;
    }
};

// Child Class
class Dog : public Animal {
public:
    void bark() {
        cout << "Dog is barking." << endl;
    }
};

int main() {

    Dog d1;

    d1.eat();  
    d1.bark(); 

    return 0;
}