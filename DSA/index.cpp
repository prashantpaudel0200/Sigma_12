#include<iostream>
using namespace std;


int Isprime(int n){
    int count = 0;
    for(int i = 1; i<=n; i++){
        if(n % i == 0){
            count += 1;
        }
    }
    return count;
}

int main(){
    int num;
    cout<<"Enter a number: ";
    cin>>num;
    int check = Isprime(num);
    if(check == 2){
        cout<<"It is prime number."<<num<<endl;
    } else{
        cout<<"The number is not prime"<<num<<endl;
    }
    return 0;
}