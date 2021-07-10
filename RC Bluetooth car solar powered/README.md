# RC Bluetooth car solar powered 🕹

Hello, welcome to my tutorial how to build a RC Bluetooth car solar powered with Arduino.

*******
Tabelas de conteúdo 
 1. [Objective](#Objective)
 2. [How was it done?](#how)
 3. [Ferramentas](#tools)
 4. [Aprendizado](#Learning)

*******

<div id='Objective'/> 

## Objective
O objetivo do projeto consiste no desenvolvimento de um carro a bateria recarregado por energia solar e controlado via bluetooth. 


<div id='tools'/> 

## Ferramentas e materiais utilizados:
1 - Modulo Bluetooth HC-05 <br/>
1 - Arduino UNO <br/>
1 - Celular com Bluetooth e App Dabble instalado. <br/>
? - Jumpers <br/>
1 - Protoboard <br/>
2 - Interruptores <br/>
1 - Power Bank 1000mAh <br/>
4 - Motores <br/>
4 - Rodas.  <br/>
1 - Ponte H L298N 12v. <br/>
2 - Chapa de metal de 1mm - 20cm x 30cm (W x H) <br/>
4 - Parafusos (Fixar uma chapa na outra) <br/>
2 - Red LED <br/>
4 - White LED <br/>
4 - Yellow LED <br/>
4 - Green LED <br/>
1 - Ferro de solda, estanho e pasta de solda. <br/>
1 - Superbonder <br/>
1 - Alicate de corte <br/>
2 - Suportes para pilha <br/>
3 - Pilha de 4.2V 8800mAh <br/>
1 - Stepup 3.5V a 30V <br/>
2 - Módulo regulador de tensão <br/>


<div id='how'/> 

## How was it done?
O circuito do projeto ficou dessa maneira.
#FOTO AQUI

Algumas fotos do processo de montagem:

![01](https://user-images.githubusercontent.com/51727640/125173505-19da1a00-e196-11eb-8a46-53cf4396a69b.jpeg)
![02](https://user-images.githubusercontent.com/51727640/125173506-1b0b4700-e196-11eb-80fc-7d35a8bc251b.jpeg)
![03](https://user-images.githubusercontent.com/51727640/125173508-1b0b4700-e196-11eb-979d-93220a5f2177.jpeg)
![04](https://user-images.githubusercontent.com/51727640/125173509-1ba3dd80-e196-11eb-9b26-5511624a00e9.jpeg)

Ao finalizar todas as instalações é necessário compilar o código no Arduino e conectar o controle remoto. O código está disponível no mesmo diretório, nomeado como “Arduino_Code.ino”. 

O código foi programado pensado em fazer o carro andar para frente, para trás, virar para ambos os lados, ligar o pisca alerta, dar seta, acender e apagar todas as luzes, além de ligar o neon e luzes de ré ao dar ré. Observação: Necessário instalar a biblioteca <Dabble.h> a versão utilizada foi a 1.5.2.
 
Nesse caso o controlador é um celular, esse tem instalado o aplicativo “Dabble”, ao abrir o app vá para opção “Gamepad” onde é possível visualizar o controle que será usado para dar comandos para o Arduino, além de estabelecer a conexão com o modulo bluetooth. 

![05](https://user-images.githubusercontent.com/51727640/125173609-8ead5400-e196-11eb-9ae2-a543955ced2c.jpeg)

![06](https://user-images.githubusercontent.com/51727640/125173610-910fae00-e196-11eb-863e-1ef9fa6a2570.jpeg)


<div id='Apresentation'/> 

## Apresentation
Se tudo ocorreu corretamente até aqui já é possível visualizar o carro respondendo aos comandos.
Postei o funcionamento no meu Instagram, é possível visualizar no link:
https://www.instagram.com/p/CQryeUUDg05M9OJZKdIiE3tmn6Pjj25s5OH73I0/


<div id='Learning'/>

## Process of learning (Difficulty e New skills)
Como tenho conhecimento de eletrônica e programação, não houve muitas complicações em programar o Arduino e montar o circuito. Porém, houve situações que consumiram boa parte do tempo ao definir um protótipo ideal, pois queríamos o mínimo de baterias possíveis, mas que não afetasse a potência do motor e que não demorasse muito para realizar uma carga completa sem adicionar mais placas solares, que até então era apenas uma. Isso era importante para diminuir ao máximo seu peso, que consequente faria o carro andar mais rápido e por mais tempo.

Para contornar essa situação, foram necessárias duas pilhas para a ponte H e uma outra para o Arduino de mesma potência, que inicialmente queríamos que funcionasse com apenas um powerbank que não foi possível devido fornecer uma corrente baixa o que impactava na potência dos motores. 
Além do mais, adicionamos mais uma placa solar ao circuito para aumentar o tempo de recarga e um stepup para subir a tensão de 4.2V da pilha para 5v no Arduino, sem isso não era possível liga-lo.

Alguns conceitos de eletrônica que aprendi foram relembrados no projeto, para mim a montagem do carro era nova, já havia feito outros projetos com Arduino mas nada relacionado a carro e recarga por placas solares. 

