class CountDig
{
public:
    static int nbDig(int n, int d){
      uint count=0;
      for(uint i=0; i<=n; i++)
      {
        int k = i*i;
        for(uint j=0; j<std::to_string(k).size(); j++)
          if(std::to_string(k)[j]==(std::to_string(d)[0]))
            count++;
      }
      return count;
    }
};
