# Week 2 - Arduino

## Open Source Software and Hardware
Open source products are source code which anybody can have access to. 

Some software examples are Java, Blender, Firefox.

![Open Source Software](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/Open%20Source%20Software.png){width=300px height=100px}

Open source hardware are products like Arduino, RaspberryPi etc.
![Open Source Hardware](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/Open%20Source%20Hardware.png){width=300px height=100px}

This leads to different licenses that can be granted:
![Open Source License Distribution](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/Open%20Source%20License%20Distribution.png){width=500px height=100px}


## Arduino Basic
There are many different types of Arduino boards that have been created.
The one for course that will likely be most often used is the Arduino Uno board.

![Arduino Uno](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/Arduino%20Uno.png)

Some examples of components used in Arduino: \
Breadboard (Where all the components placed to connect onto a Arduino)

![Breadboard](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/Breadboard%20Arduino.png)

Resistors (Arduino has output of 3.3V and 5V without resistors some objects such as led lights will fry)
![Resistor Table](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/Resistor%20Arduino.png)


## Arduino Code

```Bash
digitalread()
```
Reads value of pin either HIGH or LOW. \
Example: 
```Bash
val = digitalRead(inPin); 
```
While digitalread is to process what is given. There is also a need to give commands.

```Bash
digitalwrite()
```

Write a HIGH or LOW value to a digital pin. Does not return anything

```Bash
pinMode()
```

Configures specified pin to input or output.

An example with all of the above:

```Bash
int ledPin = 13;  // LED connected to digital pin 13
int inPin = 7;    // pushbutton connected to digital pin 7
int val = 0;      // variable to store the read value

void setup() {
  pinMode(ledPin, OUTPUT);  // sets the digital pin 13 as output
  pinMode(inPin, INPUT);    // sets the digital pin 7 as input
}

void loop() {
  val = digitalRead(inPin);   // read the input pin
  digitalWrite(ledPin, val);  // sets the LED to the button's value
}
```

## Alert
For connecting wires to Arduino board, 3.3V or 5V is positive whereas GND is the negative. \
Always use red wires for positive and black wires for GND to avoid confusion.

