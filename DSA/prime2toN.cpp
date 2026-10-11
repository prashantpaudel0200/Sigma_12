#include<iostream>
using namespace std;

void printPrime(int num){
    int count = 0;
    for(int i = 2; i<= num; i++){
        for(int j = 1; j<= i; j++){
            if(i%j == 0){
                count++;
            }
        }
        if(count == 2){
            cout<<i<<endl;
        }
        count = 0;
    }
}

int main(){
    int num;
    cout<<"Enter a number:\t";
    cin>>num;
    printPrime(num);
    return 0;
}