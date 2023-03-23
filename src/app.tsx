import './app.css'
import { useState } from "preact/hooks";

export function App() {
    const [infos, setInfos] = useState(false);

    const discover = (e: Event) => {
        e.preventDefault();
        setInfos(!infos);
    }

    return (
        <>
            <div class='lspc'>
                <div class='cols'>
                    <div class='en'>Monday–Friday<br/>7am–12pm</div>
                    <div class='spec'>0€</div>
                    <div class='fr'>lundi–vendredi<br/>7h–12h</div>
                </div>
            </div>
            <div class='expand'>
                <div class='central'>
                    <h1>minute<br/>papillons</h1>
                    {infos ?
                        <>
                            <div class='cols spc'>
                                <div class='en'>
                                    <p>Grenoble</p>
                                    <p>Alsace-Lorraine stop</p>
                                </div>
                                <div class='spec'>📍</div>
                                <div class='fr'>
                                    <p>Grenoble</p>
                                    <p>arrêt Alsace-Lorraine</p>
                                </div>
                            </div>
                            <div className='cols spc'>
                                <div className='en'>
                                    <p>by appointment</p>
                                    <p>travel possible</p>
                                </div>
                                <div className='spec'>🛋</div>
                                <div className='fr'>
                                    <p>sur rendez-vous</p>
                                    <p>voyages possibles</p>
                                </div>
                            </div>
                            <div class='cols spc'>
                                <div class='en'>discover via <a href="mailto:visit@mpaps.fr">E-mail</a> or <a
                                    href='https://wa.me/+33783255756'>WhatsApp</a></div>
                                <div class='spec'>📨</div>
                                <div class='fr'>découvrir par <a href="mailto:visite@mpaps.fr">E-mail</a> ou <a
                                    href='https://wa.me/+33783255756'>WhatsApp</a></div>
                            </div>
                        </>
                        :
                        <div class='menu'>
                            <div class='cols spc'>
                                <div class='en'>
                                    <h2>tea</h2>
                                    <p>longjing (green), jin xuan (oolong), puerh (fermented)</p>
                                </div>
                                <div class='spec'>5–8g</div>
                                <div class='fr'>
                                    <h2>thé</h2>
                                    <p>longjing (vert), jin xuan (oolong), puerh (fermenté)</p>
                                </div>
                            </div>
                            <div class='cols spc'>
                                <div class='en'>
                                    <h2 class="first">coffee</h2>
                                    <p>shot (3–6cl), immersion (12–33cl)</p>
                                </div>
                                <div class='spec'>9–18g</div>
                                <div class='fr'>
                                    <h2 class='first'>café</h2>
                                    <p>pression (3–6cl), immersion (12–33cl)</p>
                                </div>
                            </div>
                            <div className='cols spc'>
                                <div className='en'>
                                    <h2 className="first">eau</h2>
                                    <p>still, sparkling</p>
                                </div>
                                <div className='spec'>—</div>
                                <div className='fr'>
                                    <h2 className='first'>eau</h2>
                                    <p>plate, gazeuse</p>
                                </div>
                            </div>
                        </div>
                    }
                    {infos ? <div class='cols em'>
                        <div class='en'>
                            Please respect the neighbourhood.<br/>
                            Your food is welcome.
                        </div>
                        <div class='fr'>
                            Merci de respecter le voisinage.<br/>
                            Votre nourriture est bienvenue.
                        </div>
                    </div> : <div class='cols'>
                        <div class='en em'>
                            <a href='https://en.wikipedia.org/wiki/Caffeine'>Caffeine</a> is an addictive psychotropic
                            stimulant<br/>
                            Adverse effects include tachycardia &amp; insomnia.<br/>
                            Adults (18+) only.
                        </div>
                        <div class='spec'>⚠️</div>
                        <div class='fr em'>
                            <a href='https://fr.wikipedia.org/wiki/Caf%C3%A9ine'>La caféine</a> est un stimulant
                            psychotrope addictif.<br/>
                            Les effets adverses incluent tachychardie &amp; insomnie.<br/>
                            Adultes (18+) seulement.
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div class='lspc'>
                <div className='cols'>
                    <div className='en'><a href='#' onClick={discover}>{infos ? 'menu' : 'visit'}</a></div>
                    <div className='fr'><a href='#' onClick={discover}>{infos ? 'menu' : 'visiter'}</a></div>
                </div>
            </div>
        </>
    )
}
