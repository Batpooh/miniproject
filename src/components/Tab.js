import React, { useState } from 'react';
import { Table, NavLink, Collapse, Button, CardBody, Card } from 'reactstrap';
import './Admin.css'

const Tab = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <Table bordered className="white">
      <thead>
        <tr>
          <th>WEAPON ID</th>
          <th>WEAPON IMAGE</th>
          <th>WEAPON DETAILS</th>
          <th>WEAPON INFORMATIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">01</th>
          <img src="https://www.kotte-zeller.de/$WS/kotte-zeller-shop/websale8_shop-kotte-zeller-shop/produkte/medien/bilder/gross/48612_3.jpg" height = "250" width = "400" ></img>
          <td id="wpname"><NavLink href="https://www.kotte-zeller.de/$WS/kotte-zeller-shop/websale8_shop-kotte-zeller-shop/produkte/medien/bilder/gross/48612_3.jpg">M4A1</NavLink></td>
          <td class="center">
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
          <Collapse isOpen={isOpen}>
          <Card>
          <CardBody>
          Place of origin : United State
          <br/>
          Type : Selective-fire carbine Assault rifle
          <br/> 
          Mass : 3.01 kg / 3.52 kg with 30 rounds
          <br/> 
          Length : 756 mm and 838 mm when stock extended
          <br/>
          Caliber : 5.56x45mm Nato
          <br/>
          Rate of fire : 700 round/min 
          <br/>
          Effective range : 100 m 
          </CardBody>
          </Card>
          </Collapse>
          </td>
          <td id="info">The M4 carbine is an automatic rifle weapon developed from the M16 assault rifle, which is a family of guns. AR-15 designed by Eugene Stoneer for Armalite Company Less length and weight than M16 There are over 80 percent parts that can be used with the M16A2 gun. The M4 can choose the firing system, including Semi-automatic and 3 rounds of fire (like M16A2) while the M4A1 has "automatic" instead of 3 rounds of fire
          <br/>
          <NavLink href="https://en.wikipedia.org/wiki/M4_carbine">More Info</NavLink></td>
        </tr>

        <tr>
          <th scope="row">02</th>
          <img src="https://images.alphacoders.com/497/thumb-1920-497699.jpg" height = "250" width = "350"></img>
          <td id="wpname"> <NavLink href="https://images.alphacoders.com/497/thumb-1920-497699.jpg">MP5K</NavLink></td>
          <td class="center">
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
          <Collapse isOpen={isOpen}>
          <Card>
          <CardBody>
          Place of origin : West Germany
          <br/>
          Type : Submachine gun
          <br/> 
          Mass : 2.0 kg 
          <br/> 
          Length : 325 mm 
          <br/>
          Caliber : 9×19mm Parabellum
          <br/>
          Rate of fire : 900 round/min 
          <br/>
          Effective range : 100 m 
          </CardBody>
          </Card>
          </Collapse>
          </td>
          <td id="info">In 1976 a shortened version of the MP5A2 was introduced. MP5K was designed for close quarters battle use by clandestine operations and special services. The MP5K does not have a shoulder stock (the receiver end was covered with a flat end cap, featuring a buffer on the inside and a sling loop on the outside), and the bolt and receiver were shortened at the rear. The resultant lighter bolt led to a higher rate of fire than the standard MP5. The barrel, cocking handle and its cover were shortened and a vertical foregrip was used to replace the standard handguard. The barrel ends at the base of the foresight, which prevents the use of any sort of muzzle device.
          <br/>
          <NavLink href="https://en.wikipedia.org/wiki/Heckler_%26_Koch_MP5">More Info</NavLink></td>
        </tr>

        <tr>
          <th scope="row">03</th>
          <img src="https://cheytac.com/wp-content/uploads/2019/01/M200-front-angle-white-bg.jpg" height = "250" width = "350" ></img>
          <td id="wpname"> <NavLink href="https://cheytac.com/wp-content/uploads/2019/01/M200-front-angle-white-bg.jpg">M200</NavLink></td>
          <td class="center">
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
          <Collapse isOpen={isOpen}>
          <Card>
          <CardBody>
          Place of origin : United State
          <br/>
          Type : Bolt-action Sniper Rifle
          <br/> 
          Mass : 14.1 kg with out scope
          <br/> 
          Length : 1,187 mm and 1,300 mm when stock extended
          <br/>
          Caliber : .408 Cheyenne Tactical or .375 Cheyenne Tactical
          <br/>
          Rate of fire : -  
          <br/>
          Effective range : 1,500 - 2,500 m 
          </CardBody>
          </Card>
          </Collapse>
          </td>
          <td id="info">The CheyTac Intervention is an American bolt-action sniper rifle manufactured by CheyTac LLC, which can also be classified as an anti-materiel rifle. It is fed by a 7-round detachable single-stack magazine (an optional 5-round magazine is also available). It is specifically chambered in either .408 Chey Tac or .375 Chey Tac ammunition. CheyTac LLC states that the system is capable of delivering sub-MOA accuracy at ranges of up to 2,500 yd (2,286 m), one of the longest ranges of all modern-day sniper rifles. It is based on the EDM Arms Windrunner.
          <br/>
          <NavLink href="https://en.wikipedia.org/wiki/CheyTac_Intervention">More Info</NavLink></td>
        </tr>

        <tr>
          <th scope="row">04</th>
          <img src="https://i.pinimg.com/originals/22/18/b6/2218b66a5f9161ec2955678ff543900d.jpg" height = "250" width = "350"></img>
          <td id="wpname"> <NavLink href="https://i.pinimg.com/originals/22/18/b6/2218b66a5f9161ec2955678ff543900d.jpg">KSG</NavLink></td>
          <td class="center">
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
          <Collapse isOpen={isOpen}>
          <Card>
          <CardBody>
          Place of origin : United State
          <br/>
          Type : Pump-action Shotgun
          <br/> 
          Mass : 3.1 kg 
          <br/> 
          Length : 660 mm 
          <br/>
          Caliber : 12 Gauge
          <br/>
          Rate of fire : -  
          <br/>
          Effective range : Close Range
          </CardBody>
          </Card>
          </Collapse>
          </td>
          <td id="info">The Kel-Tec KSG is a bullpup 12-gauge pump-action shotgun designed by Kel-Tec. It has two tube magazines which the user of the gun can switch between manually.[2] Each tube holds up to seven 2.75-inch (70 mm) 12-gauge shotshells or six 3-inch (76 mm) shotshells. Kel-Tec has also introduced a larger variant, called the KSG25, which holds 24+1 rounds to the originals 14+1 rounds.
          <br/>
          <NavLink href="https://en.wikipedia.org/wiki/Kel-Tec_KSG">More Info</NavLink></td>
        </tr>

        <tr>
          <th scope="row">05</th>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Beretta_92S.jpg" height = "250" width = "350"></img>
          <td id="wpname"> <NavLink href="https://upload.wikimedia.org/wikipedia/commons/f/fe/Beretta_92S.jpg">M92</NavLink></td>
          <td class="center">
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
          <Collapse isOpen={isOpen}>
          <Card>
          <CardBody>
          Place of origin : Italy
          <br/>
          Type : Semi-automatic pistol
          <br/> 
          Mass : 0.9 kg
          <br/> 
          Length : 217 mm 
          <br/>
          Caliber : 9×19mm Parabellum
          <br/>
          Rate of fire : -  
          <br/>
          Effective range : 50 m
          </CardBody>
          </Card>
          </Collapse>
          </td>
          <td id="info">The Beretta 92 is a series of semi-automatic pistols designed and manufactured by Beretta of Italy. It was designed in 1972 and production of many variants in different calibers continues to the present day. It is most famous for replacing the M1911 .45 ACP pistol as the standard sidearms of the United States armed forces in 1985 as the M9 pistol.
          <br/>
          <NavLink href="https://en.wikipedia.org/wiki/M92">More Info</NavLink></td>
        </tr>
      </tbody>
    </Table>
    
  );
}

export default Tab;