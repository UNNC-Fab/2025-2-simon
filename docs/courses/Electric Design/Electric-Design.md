# Electric Design
To build your own electric circuit PCB board is done possible with open source software 嘉立创EDA. Download link below. \
https://pro.lceda.cn/

## JIA LI CHUANG EDA
Once software is downloaded you can register for free acount to start creating your own PCB.
The first screenshot shows the tool bar. This is where you can find projects you have, common library, library(components you can search for to add). On second screenshot there is wiring tools and drawing tools that can be chosen to draw your design. Last screenshot is an example of searching library in EDA. For my PCB board I wanted to use XIAO ESP32C3 thus by searching in the library I found the model I needed and placed it onto the sketch sheet.
![Screen 1](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/JIA%20LI%20CHUANG%20screen.png)
![Screen 2](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/JIA%20LI%20CHUANG%20screen%202.png)

![Library](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/EDA%20Library.png)

### Sketch and PCB
These are my first attempts on creating a PCB board. The thought process was to have 3 LED lights being controlled by 3 seperate switches. There was an issue where the pins I created did not actually connect all the wires I want when I finished the sketch an entered PCB to wire. As shown below, only the volt was connected and no GND was showing lines for connection.
|||
|-------------|-------------|
|![Attempt 1](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/PCB%20Sketch.png)|![Attempt 2](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/PCB%20.png)| 

Thus after adding tripins from library I was able to obtain following sketch below. One thing to note when wiring the PCB board is to make sure none of the wires cross each other and have enough space between each wire. When welding the PCB boards space is crucial so wires don't get mixed up. Placing components to areas where they can connect easier or even rotating them is needed to create a clean wiring on PCB. (I started rotating to help connect but ended up rotating everything hence why it looks upside down)
|||
|-------------|-------------|
|![Final Sketch ](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/Electric%20Design%20End%20Sketch.png)|![Final PCB wire](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/Electric%20PCB%20link.png)| 

![Final PCB](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/Electric%20PCB%20Final%20.png)


## JIA LI CHUANG ORDER
Once the PCB wiring is done, under fabicration select PCB fabicration. This will lead to the screenshot on the right. You can choose some settings of your PCB board before generating a Gerber. This is needed when you are ready to order PCB online.
|||
|-------------|-------------|
|![Gerber](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/Electric%202.png)|![Gerber 2](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/Electric%203.png)| 


Now to order "嘉立创下单助手" is needed. This can be done through webpage or app downloaded. In my case I downloaded the app to use coupons for new users. After logging in (Uses same login as JIA LI CHUANG EDA) click to order PCB. Then upload the Gerber zip file that was generated earlier. Afterwards it would ask you to fill in settings of your PCB (materials used, how many, adress, contact information etc.) 
|||
|-------------|-------------|
|![Order 1](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/PCB%20order%201.png)|![Order 2](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/PCB%20order%202.png)| 

Result looks like this when order arrived. 
![PCB board](https://raw.githubusercontent.com/ChocoLateDreAm/imageuploadservice/main/img/PCB%20order%20result.jpg)

[Project File](BackupProjects_yousa_x_psyd_personal_0_20260103.zip) 

[PCB Gerber File](Gerber_New-Project_PCB_New-Project_2_2025-12-24.zip)