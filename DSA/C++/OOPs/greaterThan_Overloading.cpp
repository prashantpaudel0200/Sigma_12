#include<iostream>
#include<string>
using namespace std;
class Person{
    int age;
    string name;
    public:
    Person(int a, string n){
        age = a;
        name = n;
    }
    void operator>(Person P){
        if(age>P.age){
            cout<<name<<" is elder."<<endl;
        } else if(P.age> age){
            cout<<P.name<<" is elder";
        } else{
            cout<<"Both are of same age.";
        }
    }
};
int main(){
    Person P1(40, "Aarav");
    Person P2(30, "Shyam");
    P1>P2;
    return 0;
}