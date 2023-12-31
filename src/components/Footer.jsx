import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer
      className="container text-center"
      style={{ marginTop: "5rem", paddingBottom: "2rem", maxWidth: "100%" }}
    >
      <div className="row">
        <div className="col">
          <h5>MIKROHOME</h5>
            <p onClick={()=>navigate("/about")} style={{ cursor: "pointer"}}
            >
              Om os
            </p>

      
          <p onClick={()=>navigate("/contact")} style={{ cursor: "pointer"}}
            >
              Kontakt
            </p>
          <p>Info</p>
        </div>

        <div className="col">
          <h5>FORHANDLER</h5>
          <p>Bliv forhandler</p>
          <p>Billedbank</p>
          <p onClick={()=>navigate("/policies")} style={{ cursor: "pointer"}}
            >
              Handelsbetingelser
            </p>
        </div>

        <div className="col">
          <h5>PRESSE</h5>
          <p>Inspiration</p>
          <p>Kataloger</p>
          <p>Messer & Events</p>
          <p>Nyhedsbrev</p>
        </div>

        <div className="col">
          <h5>SUPPORT</h5>
          <p>FAQ</p>
          <p>Pleje</p>
          <p>Tekstilguide</p>
        </div>
      </div>

      <div className="row justify-content-center my-2">
        <div className="col-1">
          <a
            href="https://www.facebook.com/Mikrohome"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img style={{ width: "29px" }} src="/Facebook_Logo_Primary.png" />
          </a>
        </div>

        <div className="col-1">
          <a
            href="https://www.instagram.com/mikrohomeinterior/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              style={{ width: "29px" }}
              src="/Instagram_Glyph_Gradient.svg"
            />
          </a>
        </div>
      </div>

      <p className="mt-3 px-5">
        Formålet med Mikrohome er at give dig indsigt og inspiration til at
        indrette efter dine følelser og opnå en oplevelse af bedst muligt
        velvære i dit hjem og dine omgivelser. For mig er det vigtigt at du
        sætter dig selv, og dine egne behov i fokus og udtænker en strategi for
        hvordan dit hjem skal indrettes således at det påvirker dit
        endorfinniveau til det højeste. Utroligt nok har det en stor effekt på
        dig hvilket miljø du befinder dig i. Hvordan det føles. Hvordan du
        mærker stemningen i dit hjem efter en hård arbejdsdag når du lægger dig
        på sofaen. Det er klart at flere elementer i livet har en indflydelse på
        ens endorfinproduktion for eksempel social omgangskreds, livssituation,
        arbejde eller sygdom.
      </p>

      <p>
        © 2023 - VAT: DK12345678 - Mikrohome A/S - Rebekkavej 3, kld - 2900
        Hellerup - Denmark
      </p>
    </footer>
  );
}
