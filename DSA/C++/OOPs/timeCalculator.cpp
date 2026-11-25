#include<iostream>
using namespace std;

class Time{
    int hour, minute;
    public:
    Time(int h, int m){
        hour = h;
        minute = m;
    }
    Time(int totalTime){
        hour = totalTime / 60;
        minute = totalTime % 60;
    }
    void display(){
        cout<<"Time: "<<hour<<" Hours "<<minute <<" Minutes"<<endl;
    }
};

int main(){
    int totalTime;
    cout<<"Enter total Time: ";
    cin>>totalTime;
    Time T(totalTime);
    T.display();
    return 0;
}