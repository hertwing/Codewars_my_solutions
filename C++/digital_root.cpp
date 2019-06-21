#include <string>

int digital_root(int n)
{
    int sum=0;
    std::string s = std::to_string(n);
    while(1)
    {
      for(int i=0; i<s.size(); i++)
      {
        sum+=((int)s[i])-48;
      }
      if(sum<10)
        return sum;
      else {
        s = std::to_string(sum);
        sum=0;
      }
    }
    
}
