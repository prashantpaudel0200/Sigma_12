#include<iostream>
#include<string>
using namespace std;

class Teacher{


    //Properties/ Attributes
    protected:
        double salary;
    public:
        string name;
        string dept;
        string subject;


    //Constructor:


    //1. Non-Parameterized Constructor
    Teacher(){
        dept = "Computer Science";
    }


    //2. Parameterized Constructor
    Teacher(string name, string subject, double salary){
        this->name = name;
        this->subject = subject;
        this->salary = salary;
    }


    //3. Copy Constructor
    Teacher(Teacher &orgObj){
        cout<<"Hi i am custom copy constructor.....\n";
        this->name = orgObj.name;
        this->subject = orgObj.subject;
        this->salary = orgObj.salary;
    }







    //Methods / Member functions
    void changeDept(string newDept){
        dept = newDept;
    }

    //setter
    void setSalary(double s){
        salary = s;
    }

    //getter
    double getSalary(){
        return salary;
    }

    void getInfo(){
        cout<<"Name: "<<name<<endl;
        cout<<"Subject: "<<subject<<endl;
        cout<<"Salary: "<<salary<<endl;
    }
};



int main(){
    // Teacher T1("Prashant","Java", 8000);//Parametrized Constructor
    // // Teacher T2(T1);//Custom Copy constructor
    // Teacher T3; //Non Parameterized Constructor 
    
    return 0;
}