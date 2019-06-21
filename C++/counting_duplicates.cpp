#include <string>

size_t duplicateCount(const std::string& in); // helper for tests

size_t duplicateCount(const char* in)
{
  std::string s = in;
  std::transform(s.begin(), s.end(), s.begin(), ::toupper);
  int count = 0;
  bool found = false;
  bool add = false;
  for(int i=0; i<s.size();)
  {
    for(int j=1; j<s.size(); j++)
    {
      if((s[i]==s[j]) && (!found))
      {
        found=true;
        s.erase(s.begin()+j);
        j--;
      }
      if(found && !add)
      {
        add=true;
        count++;
      }
      found = false;
    }
    s.erase(s.begin());
    add = false;
  }
  return count;
}
