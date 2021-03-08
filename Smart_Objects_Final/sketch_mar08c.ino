void setup() {
  Serial.begin(9600);
}

void loop() 
{
 int readVal = analogRead(A1);
 Serial.println(readVal);
 

}
