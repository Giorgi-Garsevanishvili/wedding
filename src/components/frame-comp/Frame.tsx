import InvitationComponent from "../invitation-comp/invitation-component";
import frameLeft from "../../assets/floral-left.png";
import frameRight from "../../assets/floral-right.png";

function Frame() {
  return (
    <main>
      <aside className="frame-left">
        <img
          className="frame-l-img img-zoom"
          src={frameLeft}
          alt="frame-left"
        />
      </aside>
      <InvitationComponent />
      <aside className="frame-right">
        <img
          className="frame-r-img img-zoom"
          src={frameRight}
          alt="frame-right"
        />
      </aside>
    </main>
  );
}
export default Frame;
