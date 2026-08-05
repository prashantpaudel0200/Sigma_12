#include<iostream>
using namespace std;
int main(){
    int *num = new int;
    *num = 100;
    cout << "Value: " << *num << endl;
    delete num;
    return 0;
}