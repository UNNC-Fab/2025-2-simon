# Arduino Example

Goal is to make an Arduino project that has two lights and a motor. \
While the Red Light is on, the motor will stop. \
When the Green Light is on, the motor will start moving.

Here is the code written to create above plan:
```Bash
int RED_LED = 13
int GREEN_LED = 9
int MOTOR = 8

void setup() {
  // put your setup code here, to run once:
  pinMode (RED_LED, OUTPUT);
  pinMode (GREEN_LED, OUTPUT);
  pinMode (MOTOR, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite (RED_LED, HIGH);
  digitalWrite (GREEN_LED, LOW);
  digitalWrite (MOTOR, LOW);
  delay(2000);
  digitalWrite (GREEN_LED, HIGH);
  digitalWrite (MOTOR, HIGH);
  digitalWrite (RED_LED, LOW);
  delay(4000);
}
```
This code will have the red light shine for 2 seconds while the motor is off. \
Then the green light will shine for 4 seconds turning the motor on, continuously looping.

Using TinkerCad I created a simulation:
![Arduino Ex](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/Arduino%20Two%20Light%20One%20Motor.png)

Following link shows simulation in real time: \
https://www.tinkercad.com/things/1tI5ihkDcKO/editel

