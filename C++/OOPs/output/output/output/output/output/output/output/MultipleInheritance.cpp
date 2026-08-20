#include<iostream>
#include<string>
using namespace std;

class Person{
    public:
        string name;
        int age;
};
class Student{
    public:
        string course;
        int rollno;
};

class Details: public Person, public Student{
    public:
        void getinfo(){
            cout<<"\nEnter Name: ";
            cin>>name;
            cout<<"\nEnter Age: ";
            cin>>age;
            cout<<"\nEnter your course: ";
            cin>>course;
            cout<<"\nEnter your Roll Number: ";
            cin>>rollno;
        }

        void displayInfo(){
            cout<<"Name: "<<name<<endl;
            cout<<"Age: "<<age<<endl;
            cout<<"Course: "<<course<<endl;
            cout<<"Roll Number: "<<course<<endl;
        }
};

int main(){
    Details D1;
    D1.getinfo();
    cout<<"\nInput Taken Sucessfully"<<endl;
    D1.displayInfo();
    cout<<"\n Displayed the information sucessfully";
    return 0;
}