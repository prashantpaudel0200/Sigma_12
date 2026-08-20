#include<iostream>
#include<string>
using namespace std;

class Person{
    public:
        string name;
        int age;
};
class Student:public Person{
    public:
        int rollno;
};
class GradStd: public Student{
    public:
        string topic;
        
    void getInfo(){
        cout<<"Name: "<<name<<endl;
        cout<<"Age: "<<age<<endl;
        cout<<"Roll Number: "<<rollno<<endl;
        cout<<"Research Topic: "<<topic<<endl;
    }
};

int main(){
    GradStd G1;
    G1.name = "Prashant Paudel";
    G1.age = 19;
    G1.rollno = 27;
    G1.topic = "AI Automation";
    G1.getInfo();
    return 0;
}