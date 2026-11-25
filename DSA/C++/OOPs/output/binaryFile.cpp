#include<iostream>
#include<fstream>
using namespace std;

class Student{
    public:
    char name[50];
    int age;
};

int main(){
   Student S;
   ifstream infile("Student.dat", ios::binary);
    infile.read((char*)&S, sizeof(S));
    infile.close();

    cout<<"Name: "<<S.name<< " Age: "<<S.age<<endl;
    return 0;
}