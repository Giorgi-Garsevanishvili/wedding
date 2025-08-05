import { useState, useRef } from "react";
import coupleImg from "../../assets/couple.png";
import { Footer } from "../Footer";

function InvitationComponent() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const map = useRef<HTMLDivElement | null>(null);
  const form = useRef<HTMLDivElement | null>(null);

  const toggleLocation = (): void => {
    setIsLocationOpen((prev) => {
      const newState = !prev;
      if (!prev) {
        setTimeout(() => {
          map.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return newState;
    });
  };

  const toggleForm = () => {
    setIsFormOpen((prev) => {
      const newState = !prev;
      if (!prev) {
        setTimeout(() => {
          form.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return newState;
    });
  };

  return (
    <section className="invitation">
      <div className="img-box">
        <img className="couple-img img-zoom" src={coupleImg} alt="couple" />
      </div>
      <div className="general">
        <div className="intro">
          <h2 className="arab">بسم الله الرحمن الرحيم</h2>
          <h2>
            You Are Invited To Our Wedding <br /> The Beautiful Love Story Of{" "}
          </h2>
        </div>
        <div className="names">
          <h2>Ahmed Gamal Mowafy</h2>
          <h2 className="and">&</h2>
          <h2>Stephany Angulo Blanco</h2>
        </div>
        <div className="details">
          <h3>August</h3>
          <h3>Friday | 15 | 11:30 AM</h3>
          <h3>2025</h3>
        </div>
      </div>
      <button onClick={toggleForm} className="toggle-btn">
        Attendance Form
      </button>
      <div ref={form} className={`form ${isFormOpen ? "open" : ""}`}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdhFEGw2ODivOYuhmY2zZMHizx6kzc-K7MNfDrme8a8-Hyn5A/viewform?embedded=true"
          className={`form-inp ${isFormOpen && "open"}`}
        >
          Loading…
        </iframe>
      </div>

      <button onClick={toggleLocation} className="toggle-btn">
        Location
      </button>
      <div ref={map} className={`map ${isLocationOpen && "open"}`}>
        <h3> Address: Rūpniecības iela 21</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.6468432014995!2d24.09940181153863!3d56.96591507344699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfc052b4460d%3A0xd2b67f285c625886!2zUsWrcG5pZWPEq2JhcyBpZWxhIDIxLCBaaWVtZcS8dSByYWpvbnMsIFLEq2dhLCBMVi0xMDQ1!5e0!3m2!1sen!2slv!4v1754393364229!5m2!1sen!2slv"
          className={`map-frame ${isLocationOpen && "open"}`}
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </section>
  );
}
export default InvitationComponent;
