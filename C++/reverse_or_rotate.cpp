#include <string>
#include <iostream>

using namespace std;

class RevRot
{
public:
    static std::string revRot(const std::string &strng, unsigned int sz){
      string s = "";
      string ret = "";
      int chunk=0;
      int sum=0;
      for(int i=0; i<strng.size(); i++)
      {
        sum+=((int)(strng[i]))-48;
        s+=strng[i];
        chunk+=1;
        if(chunk==sz)
        {
          if(sum%2 == 0)
          {
            std::reverse(s.begin(), s.end());
            ret+=s;
          } else {
            s+=s[0];
            s.erase(s.begin());
            ret+=s;
          }
          chunk=0;
          sum=0;
          s="";
        }
      }
      cout<<ret<<endl;
      return ret;
    }
};
