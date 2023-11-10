import imgContato from "../imgs/contato.jpg";

export default function Contato() {
  return (
    <>
      <div data-aos="fade-up-left" className="content-container">
        <div className="content">
          <h1 className="border-text">Contato</h1>
          <div className="infos">
            <img className="img-contato" src={imgContato} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
