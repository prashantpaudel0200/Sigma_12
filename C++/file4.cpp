#include<iostream>
using namespace std;
namespace College{
    int roll=27;
    void display(){
        cout<<"Welcome to C++ Programming."<<endl;
    }
}
int main(){
    cout<<"Roll Number: "<<College::roll<<endl;
    College::display();
    return 0;
}

