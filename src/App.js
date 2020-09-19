import React from 'react';
import Card from './components/Card/Card';
import Content from './components/Content/Content';
import './App.scss';

const datos = [
  { id: 1, 
    titulo: "WONDER WOMAN", 
    text: `Diana Prince is the most recognizable female superhero in the world. 
     Her debut film Wonder Woman is the highest grossing superhero origin film of all time.
     Created in 1941 and beloved for over 76 years, Diana Prince is a strong, 
     compassionate role model for men and women everywhere.`,
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/614007/wonder_woman_ver6_xxlg.png"
  },
  { id: 2, 
    titulo: "GENERAL LEIA ORGANA", 
    text: `Leia is the most powerful female figurehead in the Star Wars franchise. 
    This year she will take her final bow in Star Wars: The Last Jedi, 
    as fans celebrate actress Carrie Fisher’s legacy one last time.`,
    img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/614007/Leia_Organa.png"
  },
  {id: 3, 
   titulo: "LARA CROFT", 
   text: `This powerhouse of strength, smarts, and beauty is not to be trifled with. 
   After the recent reboot of her 20-year-old video game franchise Tomb Raider,
    Lara is headed to the big screen next year for even greater adventures.` ,
    img:"https://i.pinimg.com/originals/cc/25/28/cc25289e71d60c1bcb178d186820dc97.jpg"
  }
];

function App() {

  return (
    <div className="big-container">
      {
        datos.map(item =>{
          return(
              <Card imgprop={item.img}>
                 <Content itemprop={item} />
              </Card>
          )
        })
      }
    </div>
  );
}

export default App;
