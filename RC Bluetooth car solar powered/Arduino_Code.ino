#define CUSTOM_SETTINGS
#define INCLUDE_GAMEPAD_MODULE
#include <Dabble.h>

bool isKeyPressed;
bool isPiscar_SetaEsquerda;
bool isPiscar_SetaDireita;
bool isPiscar_PiscaAlerta;

int statusLEDAmarelo_SetaDireita = LOW;
int statusLEDAmarelo_SetaEsquerda = LOW;
int statusLEDAmarelo_PiscaAlerta = LOW;

unsigned long preMillis_SetaDireita = 0;
unsigned long preMillis_SetaEsquerda = 0;
unsigned long preMillis_PiscaAlerta = 0;

void setup() {
  
  Serial.begin(250000);      
  Dabble.begin(9600); 

  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);

  isPiscar_SetaEsquerda = false;
  isPiscar_SetaDireita = false;
  
}

void loop() {
  Dabble.processInput();             
  
  Serial.print("KeyPressed: ");
  isKeyPressed = false;
  
  if (GamePad.isUpPressed())
  {
    Serial.print("UP");
    digitalWrite(13,HIGH);
    digitalWrite(11,HIGH);
    isKeyPressed = true;
  }

  if (GamePad.isDownPressed())
  {
    Serial.print("LED BACK ON");
    digitalWrite(4,HIGH);
    
    Serial.print("DOWN");
    digitalWrite(12,HIGH);
    digitalWrite(10,HIGH);
    isKeyPressed = true;
  }
  else
  {
    Serial.print("LED BACK OFF");
    digitalWrite(4, LOW);
  }

  if (GamePad.isLeftPressed())
  {
    Serial.print("Left");
    digitalWrite(13,HIGH);
    isKeyPressed = true;
  }

  if (GamePad.isRightPressed())
  {
    Serial.print("Right");
    digitalWrite(11,HIGH);
    isKeyPressed = true;
  }
  
  if (GamePad.isSquarePressed())
  {
    Serial.print("CHANGE LED SETA ESQUERDA"); 
    delay(100);

    //Desliga a seta direita
    isPiscar_SetaDireita = false;
    
    isPiscar_SetaEsquerda = !isPiscar_SetaEsquerda;
    
    Serial.print("Square");
    isKeyPressed = true;
  }

  if (GamePad.isCirclePressed())
  {
    Serial.print("CHANGE LED SETA DIREITA"); 
    delay(100);

    //Desliga a seta direita
    isPiscar_SetaEsquerda = false;
    
    isPiscar_SetaDireita = !isPiscar_SetaDireita;
    
    Serial.print("Circle");
    isKeyPressed = true;
  }

  if (GamePad.isCrossPressed()) 
  {
    Serial.print("CHANGE LED PISCA ALERTA"); 
    delay(100);

    //DEixa as variaveis em false para quando ligar ou desligar o pisca alerta, as mesmas nao voltarem piscando.
    isPiscar_SetaDireita = false;
    isPiscar_SetaEsquerda = false;
    
    isPiscar_PiscaAlerta = !isPiscar_PiscaAlerta;
    
    Serial.print("Cross");
    isKeyPressed = true;
  }

  if (GamePad.isTrianglePressed())
  {
    Serial.print("CHANGE LED DIANTEIRO"); 
    delay(100);
    
    bool statusLEDAZul_Dianteiro = digitalRead(6);
    digitalWrite(6,!statusLEDAZul_Dianteiro);
    
    Serial.print("Triangle");
    isKeyPressed = true;
  }

  if (GamePad.isStartPressed())
  {
    Serial.print("CHANGE ALL BASIC LED"); 
    delay(100);  
    
    bool statusLEDVermelho_Traseira = digitalRead(5);
    digitalWrite(5,!statusLEDVermelho_Traseira);

    bool statusLEDAZul_Dianteiro = digitalRead(6);
    digitalWrite(6,!statusLEDAZul_Dianteiro);

    bool statusLEDVerde = digitalRead(7);
    digitalWrite(7,!statusLEDVerde);
    
    Serial.print("Start");
    isKeyPressed = true;
  }

  if (GamePad.isSelectPressed())
  {
    Serial.print("CHANGE NEON LED"); 
    delay(100);  
    
    bool statusLEDVerde = digitalRead(7);
    digitalWrite(7,!statusLEDVerde);
    
    Serial.print("Select");
    isKeyPressed = true;
  }

  if(!isKeyPressed)
  {
    digitalWrite(13,LOW);
    digitalWrite(12,LOW);
    digitalWrite(11,LOW);
    digitalWrite(10,LOW);
  }

  ControleSeta_PiscaAlerta();
  
  Serial.print('\t');

  int a = GamePad.getAngle();
  Serial.print("Angle: ");
  Serial.print(a);
  Serial.print('\t');
  int b = GamePad.getRadius();
  Serial.print("Radius: ");
  Serial.print(b);
  Serial.print('\t');
  float c = GamePad.getXaxisData();
  Serial.print("x_axis: ");
  Serial.print(c);
  Serial.print('\t');
  float d = GamePad.getYaxisData();
  Serial.print("y_axis: ");
  Serial.println(d);
  Serial.println();
}

void ControleSeta_PiscaAlerta()
{
  if(isPiscar_PiscaAlerta == true)
  {   
    unsigned long ms = millis();

    if( (ms - preMillis_PiscaAlerta) >= 500)
    {
      preMillis_PiscaAlerta = ms;

      if(statusLEDAmarelo_PiscaAlerta == LOW)
      {
        statusLEDAmarelo_PiscaAlerta = HIGH;
      }
      else
      {
        statusLEDAmarelo_PiscaAlerta = LOW;
      }

      digitalWrite(8, statusLEDAmarelo_PiscaAlerta);
      digitalWrite(9, statusLEDAmarelo_PiscaAlerta);
    }   
  }
  else
  {
    ControleSeta_Direita();
    ControleSeta_Esquerda();
  }
}

void ControleSeta_Direita()
{
  if(isPiscar_SetaDireita == true)
  {    
    unsigned long ms = millis();

    if( (ms - preMillis_SetaDireita) >= 500)
    {
      preMillis_SetaDireita = ms;

      if(statusLEDAmarelo_SetaDireita == LOW)
      {
        statusLEDAmarelo_SetaDireita = HIGH;
      }
      else
      {
        statusLEDAmarelo_SetaDireita = LOW;
      }

      digitalWrite(8, statusLEDAmarelo_SetaDireita);
    }   
  }
  else
  {
    digitalWrite(8,LOW);
  }
}

void ControleSeta_Esquerda()
{
    if(isPiscar_SetaEsquerda == true)
  {   
    unsigned long ms = millis();

    if( (ms - preMillis_SetaEsquerda) >= 500)
    {
      preMillis_SetaEsquerda = ms;

      if(statusLEDAmarelo_SetaEsquerda == LOW)
      {
        statusLEDAmarelo_SetaEsquerda = HIGH;
      }
      else
      {
        statusLEDAmarelo_SetaEsquerda = LOW;
      }

      digitalWrite(9, statusLEDAmarelo_SetaEsquerda);
    }   
  }
  else
  {
    digitalWrite(9,LOW);
  }
}
