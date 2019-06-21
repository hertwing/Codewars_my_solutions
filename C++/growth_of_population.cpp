class Arge
{
  public:
  static int nbYear(int p0, double percent, int aug, int p){
    uint count = 0;
    percent*=0.01;
    while(p0<p)
    {
      p0 = p0 + (p0*percent) + aug;
      count++;
    }
    return count;
  }
};
