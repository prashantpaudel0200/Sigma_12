#include<iostream>
#include<fstream>
using namespace std;

class MOVIE{
    public:
    char name[50], genre[50];
};

int main(){
    MOVIE m;
    ofstream file1("COMEDY.DAT", ios::binary);
    ofstream file2("ACTION.DAT", ios::binary);
    cout<<"Enter Movie Name: ";
    cin>>m.name;
    cout<<"\n Enter Genre[COMEDY/ACTION]: ";
    cin>>m.genre;
    if(!strcmp(m.genre, "ACTION")){
        file2.write((char*)&m, sizeof(m));
    } else if(!strcmp(m.genre, "COMEDY")){
        file1.write((char*)&m, sizeof(m));
    } else{
        cout<<"\n Enter Valid Genre";
    }

    file1.close();
    file2.close();
    return 0;
}