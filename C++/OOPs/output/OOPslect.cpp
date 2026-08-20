#include<iostream>
#include<string>
using namespace std;

class Student{
    public:
        string name;
        double cgpa;

    Student(string name, double cgpa){
        this->name = name;
        this->cgpa = cgpa;
    }

    void getInfo(){
        cout<<"Name: "<<name<<endl;
        cout<<"CGPA: "<<cgpa;
    }
};

int main(){
    Student s1("Prashant", 9.1);
    s1.getInfo();
    return 0;
}