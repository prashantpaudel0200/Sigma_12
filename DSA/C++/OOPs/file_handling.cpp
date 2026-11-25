#include<iostream>
#include<fstream>
#include<string>
using namespace std;

int main(){
  ofstream outfile;
  outfile.open("file.txt");
  outfile <<"Prashant Paudel"<<endl;
  outfile<<"School"<<endl;

  outfile.close();

  ifstream infile;
  infile.open("file.txt");
  string line;
  
  while(getline(infile, line)){
    cout<<line<<endl;
  }

  infile.close();
}