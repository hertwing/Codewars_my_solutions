namespace Triangle
{
  bool isTriangle(int a, int b, int c)
  {
    uint sum_a_b = a+b;
    uint sum_b_c = b+c;
    uint sum_a_c = a+c;
    if(!a || !b || !c)
      return false;
    else if(sum_a_b>c)
      if(sum_a_c>b)
        if(sum_b_c>a)
          return true;
    return false;
  }
};
