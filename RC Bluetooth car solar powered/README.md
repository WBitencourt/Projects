# RC Bluetooth car solar powered 🕹

Hello, welcome to my tutorial how to build a RC Bluetooth car solar powered with Arduino.

*******
Tabelas de conteúdo 
 1. [Objective](#Objective)
 2. [Tools](#tools)
 3. [How was it done?](#how)
 4. [Apresentation](#Apresentation)
 5. [Process of learning (Difficulty e New skills)](#Learning)

*******

<div id='Objective'/> 

## Objective
The project aims to develop a battery-powered car recharged by solar energy and controlled via Bluetooth.


<div id='tools'/> 

## Ferramentas e materiais utilizados:
1 - Bluetooth Module HC-05 <br/>
1 - Arduino UNO <br/>
1 - Smartphone with Bluetooth and Dabble App installed. <br/>
? - Jumper wires <br/>
1 - Breadboard <br/>
2 - Switches <br/>
1 - 3.7V 1000mAh Battery <br/>
4 - Motors <br/>
4 - Wheels <br/>
1 - H Bridge L298N 12V <br/>
2 - 1mm Metal Plate - 20cm x 30cm (W x H) <br/>
4 - Screws (to attach one plate to another) <br/>
2 - Red LEDs <br/>
4 - White LEDs <br/>
4 - Yellow LEDs <br/>
4 - Green LEDs <br/>
1 - Soldering iron, solder, and solder paste <br/>
1 - Wire cutter <br/>
2 - Battery holders <br/>
1 - 9V 8800mAh Battery <br/>
1 - Step-up 3.5V to 30V <br/>
2 - Voltage regulator modules <br/>


<div id='how'/> 

## How was it done?
The circuit for the project looked like this. The schema was created using Fritzing software, and the file is available in the same directory, named "Schema.fzz".

![Fritizing print](https://user-images.githubusercontent.com/51727640/128605992-7a751faf-83cd-4330-9d0e-670deb363110.PNG)

Some photos of the assembly process:

![01](https://user-images.githubusercontent.com/51727640/125173505-19da1a00-e196-11eb-8a46-53cf4396a69b.jpeg)
![02](https://user-images.githubusercontent.com/51727640/125173506-1b0b4700-e196-11eb-80fc-7d35a8bc251b.jpeg)
![03](https://user-images.githubusercontent.com/51727640/125173508-1b0b4700-e196-11eb-979d-93220a5f2177.jpeg)
![04](https://user-images.githubusercontent.com/51727640/125173509-1ba3dd80-e196-11eb-9b26-5511624a00e9.jpeg)

After completing all installations, it is necessary to compile the code on the Arduino and connect the remote control. The code is available in the same directory, named "Arduino_Code.ino".

The code was programmed to make the car move forward, backward, turn in both directions, turn on the hazard lights, signal lights, turn all lights on and off, as well as turn on the neon and reverse lights when reversing. Note: It is necessary to install the <Dabble.h> library; the version used was 1.5.2.

In this case, the controller is a smartphone with the "Dabble" app installed. When opening the app, go to the "Gamepad" option where you can see the control that will be used to command the Arduino and establish a connection with the Bluetooth module.

![05](https://user-images.githubusercontent.com/51727640/125174161-b4882800-e199-11eb-8a99-bc37c738f8e9.jpeg)
![06](https://user-images.githubusercontent.com/51727640/125174164-b6ea8200-e199-11eb-8133-31871ea506e8.jpeg)

<div id='Apresentation'/>

## Apresentation
If everything has gone correctly so far, you should be able to see the car responding to commands. I posted the operation in the video below, which is edited, as it is the same video on my Instagram.

https://user-images.githubusercontent.com/51727640/125174344-3036a480-e19b-11eb-86b6-2667dd08b5f5.mp4


<div id='Learning'/>

## Process of learning (Difficulty e New skills)
As I have knowledge of electronics and programming, there weren't many complications in programming the Arduino and assembling the circuit. However, there were situations that consumed a significant amount of time in defining an ideal prototype, as we wanted to use the minimum number of batteries possible without affecting the motor power and without taking too long to complete a full charge without adding more solar panels, of which there was only one at the time. This was important to minimize its weight, which would, in turn, make the car move faster and for a longer time.

To overcome this situation, two batteries were needed for the H bridge and another one for the Arduino, both of the same power. Initially, we wanted it to work with just one power bank, but that was not possible due to it providing a low current, which impacted the motor power. Additionally, we added another solar panel to the circuit to increase the recharge time and a step-up to raise the voltage from the 4.2V of the battery to 5V for the Arduino; without this, it was not possible to power it on.

Some electronics concepts that I had learned were revisited in the project. For me, the assembly of the car was new, as I had done other projects with Arduino but nothing related to cars and solar-powered charging.

