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
                    <div class='en'>Wednesday-Sunday<br/>7am-12pm<br/>
                        <a href='#' onClick={discover}>{infos ? 'menu' : 'visit'}</a>
                    </div>
                    <div class='spec'>0€</div>
                    <div class='fr'>mercredi-dimanche<br/>7h-12h<br/>
                        <a href='#' onClick={discover}>{infos ? 'menu' : 'visiter'}</a>
                    </div>
                </div>
            </div>
            <div class='expand'>
                <div class='central'>
                    <h1>minute</h1>
                    {infos ?
                        <>
                            <div class='cols spc'>
                                <div class='en'>private salon</div>
                                <div class='spec'>🤫</div>
                                <div class='fr'>salon privé</div>
                            </div>
                            <div class='cols spc'>
                                <div class='en'>Grenoble<br/>Alsace-Lorraine stop</div>
                                <div class='spec'>📍</div>
                                <div class='fr'>Grenoble<br/>arrêt Alsace-Lorraine</div>
                            </div>
                            <div class='cols spc'>
                                <div class='en'>from December 1st</div>
                                <div class='spec'>📅</div>
                                <div class='fr'>dès le 1er décembre</div>
                            </div>
                            <div class='cols spc'>
                                <div class='en'>join via <a href="mailto:visit@mpaps.fr">E-mail</a> or <a
                                    href='https://wa.me/+15102924154'>WhatsApp</a></div>
                                <div class='spec'>📨</div>
                                <div class='fr'>joindre par <a href="mailto:visite@mpaps.fr">E-mail</a> ou <a
                                    href='https://wa.me/+15102924154'>WhatsApp</a></div>
                            </div>
                        </>
                        :
                        <div class='menu'>
                            <div class='cols spc'>
                                <div class='en'>
                                    <h2>tea</h2>
                                    <p>western — gongfu</p>
                                    <p>longjing — jin xuan — puerh</p>
                                </div>
                                <div class='spec'>8g</div>
                                <div class='fr'>
                                    <h2>thé</h2>
                                    <p>occidental — gongfu</p>
                                    <p>longjing — jin xuan — puerh</p>
                                </div>
                            </div>
                            <div class='cols spc'>
                                <div class='en'>
                                    <h2 class="first">coffee</h2>
                                    <p>shot — immersion</p>
                                    <p>light — medium — dark</p>
                                </div>
                                <div class='spec'>18g</div>
                                <div class='fr'>
                                    <h2 class='first'>café</h2>
                                    <p>pression — immersion</p>
                                    <p>doux — moyen — corsé</p>
                                </div>
                            </div>
                            <div class='cols spc'>
                                <div class='en'>
                                    <h2>juice</h2>
                                    <p>squeezed on demand</p>
                                    <p>pomelo — orange</p>
                                </div>
                                <div class='spec'>16cl</div>
                                <div class='fr'>
                                    <h2>jus</h2>
                                    <p>pressé à la demande</p>
                                    <p>pomelo — orange</p>
                                </div>
                            </div>
                            <div class='cols spc'>
                                <div class='en'>
                                    <h2>additives</h2>
                                    <p>oatmilk — honey — stevia</p>
                                </div>
                                <div class='spec'>—</div>
                                <div class='fr'>
                                    <h2>additifs</h2>
                                    <p>lait d'avoine — miel — stevia</p>
                                </div>
                            </div>
                        </div>
                    }
                    <h1>papillons</h1>
                    {infos && <div class='cols em'>
                        <div class='en'>
                            Please respect the neighbourhood.<br/>
                            Hosting&nbsp;&amp; service are voluntary&nbsp;&amp; conditional.<br/>
                            Your food is welcome.
                        </div>
                        <div class='fr'>
                            Merci de respecter le voisinage.<br/>
                            Accueil&nbsp;&amp; service sont volontaires&nbsp;&amp; conditionnels.<br/>
                            Votre nourriture est bienvenue.
                        </div>
                    </div>}
                </div>
            </div>
            <div id='bottom' class='lspc'>
                <img src='/bottom3.webp' style='width: 40em; max-width: 90%;' alt='accessories'/>
            </div>
        </>
    )
}
