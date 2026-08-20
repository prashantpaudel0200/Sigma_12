#include<iostream>
#include<string>
using namespace std;

class Student{
    public:
        string name;
        double* cgpaPtr;
    
    Student(string name, double cgpa){
        this->name = name;
        cgpaPtr = new double;
        *cgpaPtr = cgpa;
    }

    void getInfo(){
        cout<<"Name: "<<name<<endl;
        cout<<"CGPA: "<<*cgpaPtr<<endl;
    }
    ~Student(){
        cout<<"Hi I am distructor.";
        delete cgpaPtr;
    }
};

int main(){
    Student s1("Prashant Paudel", 9.2);
    s1.getInfo();
    return 0;
}