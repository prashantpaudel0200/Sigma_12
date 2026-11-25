#include<iostream>
#include<string>
using namespace std;

class Student{
    public:
        string Name;
        int ID_Number;

    void getInfo(){
        cout<<Name<<endl;
        cout<<ID_Number<<endl;
    }
    Student(string Name, int ID){
        this->Name = Name;
        this-> ID_Number = ID;
    }

};

int main(){
    Student s1("Prashant", 101);
    Student s2("Laxmi", 505);
    s1.getInfo();
    s2.getInfo();
    return 0;
}