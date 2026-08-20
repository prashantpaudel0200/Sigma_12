#include<iostream>
#include<string>
using namespace std;

class Person{
    public:
        string name;
        int age;
};
class Student: public Person{
    public:
        int rollno;
        void getInfo(){
            cout<<"Name: "<<name<<endl;
            cout<<"Age: "<<age<<endl;
            cout<<"Roll Number: "<<rollno<<endl;
        }
};

int main(){
    Student s1;
    s1.name = "Prashant Paudel";
    s1.age = 19;
    s1.rollno= 27;
    s1.getInfo();
    return 0;
}