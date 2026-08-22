#include<iostream>
using namespace std;

class Shape{ //abstract class
    virtual void draw() = 0; //pure virtual function
};

class Circle: public Shape{
    public:
        void draw(){
         cout<<"Drawing a circle";
         }
};
int main(){
    Circle C1;
    C1.draw();
    return 0;
}