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
            <div id='construction'/>
            <div class='lspc'>
                <div class='cols'>
                    <div class='en'>Thursday–Sunday<br/>7am–12pm<br/>
                        <a href='#' onClick={discover}>{infos ? 'menu' : 'visit'}</a>
                    </div>
                    <div class='spec'>0€</div>
                    <div class='fr'>jeudi–dimanche<br/>7h–12h<br/>
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
                                <div class='en'>
                                    <p>private salon by appointment</p>
                                    <p>visits &amp; travel possible</p>
                                </div>
                                <div class='spec'>🛋</div>
                                <div class='fr'>
                                    <p>salon privé sur rendez-vous</p>
                                    <p>visites &amp; voyages possibles</p>
                                </div>
                            </div>
                            <div class='cols spc'>
                                <div class='en'>
                                    <p>Grenoble</p>
                                    <p>Alsace-Lorraine stop</p>
                                    <p>limited accessibility</p>
                                </div>
                                <div class='spec'>📍</div>
                                <div class='fr'>
                                    <p>Grenoble</p>
                                    <p>arrêt Alsace-Lorraine</p>
                                    <p>accessibilité limitée</p>
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
                                    <p>longjing (green) — jin xuan (oolong) — puerh (fermented)</p>
                                    <p>80°C — 90°C — 98°C water dispensers</p>
                                    <p>your brew (western — gongfu)</p>
                                </div>
                                <div class='spec'>5–8g</div>
                                <div class='fr'>
                                    <h2>thé</h2>
                                    <p>longjing (vert) — jin xuan (oolong) — puerh (fermenté)</p>
                                    <p>distributeurs d'eau à 80°C — 90°C — 98°C</p>
                                    <p>votre infusion (occidental — gongfu)</p>
                                </div>
                            </div>
                            <div class='cols spc'>
                                <div class='en'>
                                    <h2 class="first">coffee</h2>
                                    <p>shot (1–6cl) — immersion (12–33cl)</p>
                                    <p>light — medium — dark</p>
                                    <p>ground and extracted to your liking</p>
                                </div>
                                <div class='spec'>9–18g</div>
                                <div class='fr'>
                                    <h2 class='first'>café</h2>
                                    <p>pression (1–6cl) — immersion (12–33cl)</p>
                                    <p>doux — moyen — corsé</p>
                                    <p>moulu et extrait à votre goût</p>
                                </div>
                            </div>
                            <div class='cols spc'>
                                <div class='en'>
                                    <h2>juice</h2>
                                    <p>pomelo — orange</p>
                                    <p>cut &amp; squeezed on demand</p>
                                </div>
                                <div class='spec'>16cl</div>
                                <div class='fr'>
                                    <h2>jus</h2>
                                    <p>pomelo — orange</p>
                                    <p>coupé &amp; pressé à la demande</p>
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
                    {infos ? <div class='cols em'>
                        <div class='en'>
                            Hosting&nbsp;&amp; service are voluntary&nbsp;&amp; conditional.<br/>
                            Please respect the neighbourhood.<br/>
                            Your food is welcome.
                        </div>
                        <div class='fr'>
                            Accueil&nbsp;&amp; service sont volontaires&nbsp;&amp; conditionnels.<br/>
                            Merci de respecter le voisinage.<br/>
                            Votre nourriture est bienvenue.
                        </div>
                    </div> : <div class='cols'>
                        <div class='en em'>
                            Tea and coffee contain <a href='https://en.wikipedia.org/wiki/Caffeine'>caffeine</a>, an
                            addictive psychotropic stimulant with many adverse effects (tachycardia, insomnia,
                            etc.). <br/>
                            Adults (18+) only.
                        </div>
                        <div class='spec'>⚠️</div>
                        <div class='fr em'>Thé et café contiennent de la <a
                            href='https://fr.wikipedia.org/wiki/Caf%C3%A9ine'>caféine</a>, un stimulant psychotrope
                            addictif aux nombreux effets secondaires (tachychardie, insomnie, etc.).<br/>Adultes (18+)
                            seulement.
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div id='bottom' class='lspc'>
                <img src='/bottom3.webp' style='width: 40em; max-width: 90%;' alt='accessories'/>
            </div>
        </>
    )
}
