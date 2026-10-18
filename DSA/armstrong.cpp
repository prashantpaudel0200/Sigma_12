#include<iostream>
using namespace std;

int main(){
    int num;
    cout<<"Enter a number: ";
    cin>> num;
    int copy = num;
    int rev=0;
    while(num != 0){
        rev = rev * 10 + num % 10;
        num /= 10;
    }
    if(rev == copy)
         cout<<"The number is armstrong.";
    else
        cout<<"The number is not armstrong.";

    return 0;
}