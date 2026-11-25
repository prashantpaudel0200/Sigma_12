#include<iostream>
using namespace std;

class Animal{
    public:
    virtual void sound() = 0;
};

class Dog: public Animal{
    public:
    void sound(){
        cout<<"Dog make 'raf-raf' sound"<<endl;
    }
};

class Cat: public Animal{
    public:
    void sound(){
        cout<<"Cat makes 'meow' sound";
    }
};
int main(){
    Animal *ptr;
    Dog d;
    Cat c;
    
    ptr = &d;
    ptr->sound();
    
    ptr = &c;
    ptr->sound();
    
    return 0;
}