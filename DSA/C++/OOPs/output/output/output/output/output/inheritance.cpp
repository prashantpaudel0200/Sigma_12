#include<iostream>
#include<string>
using namespace std;

class Person{
    public:
        string name;
        int age;
        Person(string name, int age){
            this->name = name;
            this->age = age;
            cout<<"Parent Constructor"<<endl;
        }
};
class Student: public Person{
    public:
        int rollno;
        Student(string name, int age, int roll): Person(name, age){
            this->rollno = roll;
            cout<<"Child Constructor"<<endl;
        }
        void getInfo(){
            cout<<"Name: "<<name<<endl;
            cout<<"Age: "<<age<<endl;
            cout<<"Roll Number: "<<rollno<<endl;
        }
};

int main(){
    Student s1("Prashant Paudel", 19, 27);
    s1.getInfo();
    return 0;
}