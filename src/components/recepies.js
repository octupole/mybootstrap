import React from 'react';
import './recepies.css';
import { Col, Row, Container, Input, Buttons, Form, FormGroup, Label} from 'reactstrap';

const mystyle={
	textAlign: 'left',
	fontFamily: 'Open Sans, sans-serif',
	fontSize: '16px'
};

const recepies=(props) =>(

      <div>
        <h1>
          <center>Ricette </center>
		  &nbsp;
        </h1>
        <table style={{width: '400px', height: '141px'}} id="mine" align="center"><tbody><tr>
			<td >
                <table style={{width: '400px', height: '141px'}} id="mytable">
				
<caption><center><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Idratazione 75 %</span></center></caption>	
                  <tbody><tr>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Ingrediente</span></td>
                      <td style={{textAlign: 'justify', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Peso</span></td>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Percentuale</span></td>
                    </tr>
                    <tr style={{textAlign: 'right', backgroundColor: 'white'}}>
                      <td style={{textAlign: 'left', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Farina</span></td>
                      <td style={{textAlign: 'left', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>508
                          g</span></td>
                      <td style={{textAlign: 'left', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>100
                          %</span></td>
                    </tr>
                    <tr>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Acqua</span></td>
                      <td style={{textAlign: 'justify', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>381
                          g</span></td>
                      <td style={{height: '19px'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>75
                          %</span></td>
                    </tr>
                    <tr>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Lievito</span></td>
                      <td style={{textAlign: 'justify', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>102
                          g</span></td>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>20 %</span></td>
                    </tr>
                    <tr>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Sale</span></td>
                      <td style={{textAlign: 'justify', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>9
                          g</span></td>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>1.8 %</span></td>
                    </tr>
                    <tr>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Totale</span></td>
                      <td style={{textAlign: 'justify', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>1000
                          g</span></td>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>197 %</span></td>
                    </tr>
                  </tbody>
                </table>
              </td><td className="mine">
                <table style={{width: '400px', height: '141px'}} id="mytable">
                  <tbody><tr>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Ingrediente</span></td>
                      <td style={{textAlign: 'justify', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Peso</span></td>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Percentuale</span></td>
                    </tr>
                    <tr style={{textAlign: 'right', backgroundColor: 'white'}}>
                      <td style={{textAlign: 'left', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Farina</span></td>
                      <td style={{textAlign: 'left', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>508
                          g</span></td>
                      <td style={{textAlign: 'left', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>100
                          %</span></td>
                    </tr>
                    <tr>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Acqua</span></td>
                      <td style={{textAlign: 'justify', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>381
                          g</span></td>
                      <td style={{height: '19px'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>75
                          %</span></td>
                    </tr>
                    <tr>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Lievito</span></td>
                      <td style={{textAlign: 'justify', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>102
                          g</span></td>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>20 %</span></td>
                    </tr>
                    <tr>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Sale</span></td>
                      <td style={{textAlign: 'justify', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>9
                          g</span></td>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>1.8 %</span></td>
                    </tr>
                    <tr>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Totale</span></td>
                      <td style={{textAlign: 'justify', backgroundColor: 'white'}}><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>1000
                          g</span></td>
                      <td><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>197 %</span></td>
                    </tr>
                  </tbody><caption><center><span style={{fontFamily: 'Helvetica,Arial,sans-serif'}}>Idratazione 68 % </span></center></caption>
                </table>
              </td></tr></tbody></table>

&nbsp;
<ul>
	<li style={mystyle}><strong>Lievito madre</strong> -Si inizia la mattina del primo 
	giorno prelevando il lievito madre dopo averlo rinnovato il giorno prima. Si assume che il 
	lievito madre sia forte da raddoppiare dopo tre ore dal rinnovo. I grammi da prelevare sono 
	per molte ricette il 20 % in peso del peso della farina. Dopo averlo prelevato si effettua un 
	rinfresco abituale con 50 % di farina e 50 % d'acqua.</li>
	<li style={mystyle}><strong>Impasto 1</strong>- Dopo che il lievito ha almeno raddoppiato di volume, 
	quindi 3-4 ore dal rinfresco, si mescolano prima la farina e l'acqua 
	con l'impastatrice a velocità 1 per 3-4 minuti fino a che si abbia una miscela omogenea. 
	Dopodiché si aspettano 20 minuti, lasciando l'impasto nel recipiente dell'impastatrice.</li>
	<li style={mystyle}><strong>Impasto 2 </strong>-Dopo i 20 minuti, si aggiungono il lievito madre 
	precedentemente preparato, il sale e si impasta per 5 minuti a velocità 1. Poi si aggiunge il lievito madre 
	e si continua ad impastare per 10 minuti questa volta a velocità 2. A questo punto l'impasto dovrebbe 
	essere liscio ed ed elastico.</li>
	<li style={mystyle}><strong>Prima lievitazione </strong>- A questo punto si mette tutto in un recipente 
	precedentemente col fondo infarinato. L'impasto sarà piuttosto colloso e per trasferirlo la cosa più 
	semplice è di inumidirsi le mani o la spatola. Dopo circa 1 ora e mezza si fanno tre pieghe all'impasto
	 nel recipiente dove sta fermentando oppure sul tavolo precedentemente infarinato. Due pieghe une in 
	 direzione opposta dell'altra e la terza a 90 gradi nell'altra direzione. Si continua la lievitazione 
	 per 3 ore dopo la piega. Alla fine della lievitazione l'impasto dovrà essersi raddoppiato. Ovviamente 
	 il tempo esatto dipende dalla temperatura ambiente, d'estate sarà tutto più corto, mentre in inverno i 
	 tempi si allungheranno.</li>
	<li style={mystyle}><strong>Preparazione del pane</strong> - Dopo che la prima lievitazione è 
	terminata si forma la pagnotta o il filone sul tavolo di lavoro. Per questi ci sono molti video 
	disponibili su youtube. In generale, si eviterà di lavorare troppo sull'impasto, appiattendolo 
	gentilmente per sgonfiarlo un po' dei gas della fermentazione, ma senza eccedere visto che la 
	lievitazione col lievito madre è più debole di quella ottenibile col lievito di birra. Dopo aver 
	preparatp il pane lo si mette nel cestino di lievitazione od altro recipiente adatto precedentemente 
	infarinato. Fare attenzione a mettere la saldatura dell'impasto (formata durante la preparazioen d
	ella pagnotta o del filone) in alto perché questa è la parte della pagnotta a mettere sulla paletta 
	per l'infornata.</li>
	<li style={mystyle}><strong>Seconda Lievitazione </strong>- Il pane preparato nel cestino di 
	lievitazione viene poi messo in frigo per la notte, nella parte meno fredda dello stesso.</li>
	<li style={mystyle}><strong>Il Forno </strong>- Al mattino del giorno successivo, si toglie il 
	cestino dal frigo e si accende il forno con la pietra refrattaria od il piano di ghisa sulla 
	griglia. Aggiungere dell'acqua (1-2 litri) nel vassoi nella parte inferiore del forno, questo è molto 
	importante per la riuscita del pane. 
	La temperatura del forno è di 240 gradi in questa prima fase. Il forno va tenuto a questa 
	temperatura per 20 minuti dopo che la temperatura è raggiunta, per dar modo alla pietra refrattaria 
	o alla ghisa di arrivare alla temperatura voluta.</li>
	<li style={mystyle}><strong>Cottura</strong> - Quando il forno è pronto si rovescia il cestino su 
	una paletta precedentemente infarinata di farina di semola di grano duro. Prima di infornare, è bene 
	fare dei tagli sulla superficie del pane con una lametta o coltello molto affilato. Dopo aver 
	messo il pane in forno, si abbassa la temperatura a 190 e si lascia cuocere per 40-45 minuti. 
	Se si vuole una crosta più scura si può lasciare il forno a 240 per 4-5 minuti e poi a 190 per il 
	resto del tempo.</li>
	<li style={mystyle}><strong>Farina </strong>- Evitare di utilizzare una farina 00 per il pane, 
	piuttosto scegliere una farina 1 o 2, aggiungendo 100-150 g di farina Manitoba o altra farina 
	forte sui 508 g della ricetta.</li>
	<li style={mystyle}><strong>Osservazione</strong> - La preparazione del pane è diversa dalla 
	preparazione di una pizza. In generale, l'idratazione dell'impasto è più alta e, dunque, l'impasto 
	è molto più appiccicoso e difficile da maneggiare.</li>
	
</ul>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h4>Le Tappe della Panificazione</h4>
              <ul className="timeline">
                <li>
                  <div target="_blank" rel="noopener noreferrer">
					  Preparazione Lievito</div>
                  <p className="float-right">Giorno 1 &nbsp;  &nbsp; <b>8:00</b></p>
                  <p>Tappe: <strong>Lievito madre</strong></p>
                </li>
                <li>
                  <div>Impasto</div>
                  <p className="float-right">Giorno 1 &nbsp;  &nbsp; <b>11:00</b></p>
                  <p>Tappe: <strong>Impasto 1 + Impasto 2</strong></p>
                </li>
                <li>
                  <div>Lievitazione Massa</div>
                  <p className="float-right">Giorno 1 &nbsp;  &nbsp; <b>11:30</b></p>
                  <p>Tappe: <strong>Prima Lievitazione</strong></p>
                </li>
                <li>
                  <div>Piega</div>
                  <p className="float-right">Giorno 1 &nbsp;  &nbsp; <b>13:00</b></p>
                  <p>Tappe: <strong>Prima Lievitazione</strong></p>
                </li>
                <li>
                  <div>Preparare il Pane</div>
                  <p className="float-right">Giorno 1 &nbsp;  &nbsp; <b>16:00</b></p>
                  <p>Tappe: <strong>Preparazione del Pane</strong></p>
                </li>
                <li>
                  <div>In Frigo</div>
                  <p className="float-right">Giorno 1 &nbsp;  &nbsp; <b>16:20</b></p>
                  <p>Tappe: <strong>Seconda lievitazione</strong></p>
                </li>
                <li>
                  <div>In Forno</div>
                  <p className="float-right">Giorno 2 &nbsp;  &nbsp; <b>8:00</b></p>
                  <p>Tappe: <strong>Il Forno + Cottura</strong></p>
                </li>
                <li>
                  <div>Fuori dal Forno</div>
                  <p className="float-right">Giorno 2 &nbsp;  &nbsp; <b>9:00</b></p>
                  <p>Il pane è finalmente pronto</p>
                </li>
                <li>
                  <div></div>
                  <p></p>
                  <p>&nbsp;</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
		
 

</div>
);

export default recepies;