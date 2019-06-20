std::string encrypt(std::string text, int n)
{
  if(text.size() == 0 || text.size() == 1 || n<=0)
    return text;
  else {
    while(n>0)
    {
      std::string f_half = "";
      std::string s_half = "";
      for(int i=0; i<text.size(); i+=2)
        s_half+=text[i];
      for(int i=1; i<text.size(); i+=2)
        f_half+=text[i];
      text = "";
      text += f_half;
      text += s_half;
      n--;
    }
    return text;
  }
}

std::string decrypt(std::string encryptedText, int n)
{
  if(encryptedText.size() == 0 || n<=0)
    return encryptedText;
  else {
    while(n>0)
    {
      int start = encryptedText.size()/2;
      std::string new_text = "";
      for(int i=0; i<=encryptedText.size()/2; i++)
      {
        if((start+i)<encryptedText.size())
          new_text += *(encryptedText.begin()+start+i);
        if(i<(encryptedText.size()/2))
          new_text += *(encryptedText.begin()+i);
      }
      encryptedText = new_text;
      n--;
    }
    return encryptedText;
  }
}
