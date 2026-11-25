#include<iostream>
using namespace std;

class Height{
    int meter, centimeter;
    public:
    Height(int m =0, int cm = 0){
    meter = m;
    centimeter = cm;
    }
    void display(){
    cout<<meter<<" Meters "<<centimeter<<" Centimeters"<<endl;
    }
    friend Height operator+(Height H1, Height H2);
};

Height operator+(Height H1, Height H2){
    Height temp;
    temp.meter = H1.meter + H2.meter;
    temp.centimeter = H1.centimeter + H2.centimeter;
    if(temp.centimeter >= 100){
        temp.meter += temp.centimeter/100;
        temp.centimeter = temp.centimeter % 100;
    }
    return temp;
}

int main(){
    Height H1(5, 85);
    Height H2(3, 55);
    Height H3 = H1+H2;
    H3.display();
    return 0;
}