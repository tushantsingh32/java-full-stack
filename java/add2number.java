
void main()
{
   int a=34;
   int b=41;
   int sum=0;
   while (b!=0) {
    sum=a^b;
    b=(a&b)<<1;
    a=sum;
   }
   IO.println(a);
}