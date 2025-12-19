#include<iostream>
using namespace std;
int main()
{
    int a=6;
    int b=7;
    int c=8;
    cout<<a<<b<<c<<endl;

    a=a+b+c;
    b=a-b-c;
    c=a-b-c;
    a=a-b-c;
    
    

    cout<<a<<b<<c;
}