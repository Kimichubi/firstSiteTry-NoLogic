import imgloja1 from "../imgs/imgloja1.jpg";
import imgloja2 from "../imgs/imgloja2.jpg";
import imgloja3 from "../imgs/imgloja3.jpg";
import imgloja4 from "../imgs/imgloja4.jpg";
import imgloja5 from "../imgs/imgloja5.jpg";


export default function Visite() {
  return (
    <>
      <div data-aos="fade-up-left" className="content-container">
        <div className="content">
          <h1 className="border-text">Visite</h1>
          <div className="infos-imagens-loja">
            <img className="img-contato" src={imgloja1}alt="" />
             <img className="img-contato" src={imgloja2}alt="" />
             <img className="img-contato" src={imgloja3}alt="" />
             <img className="img-contato" src={imgloja4}alt="" />
             <img className="img-contato" src={imgloja5}alt="" />
          </div>
          <h1 className="border-text"> R. Rio Paraná, 186/Loja 11 - WeissópolisPinhais - PR, 83322-000
</h1>
        </div>
      </div>
    </>
  );
}
