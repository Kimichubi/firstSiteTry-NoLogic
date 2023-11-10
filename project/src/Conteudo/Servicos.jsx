import "../styles/servicosEcontato.css";
import imgHigi from "../imgs/fotoHigienizacao.jpg.jpg";
import videoFr600 from "../imgs/intsaVideo.mp4";
import videoFr600Resultado from "../imgs/resultadoHigienizacao.mp4";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Servicos() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos="fade-up-left" className="content-container">
        <div className="content">
          <h1 className="border-text">Higienização</h1>
          <div className="infos">
            <ol>
              <li>
                Remoção de Resíduos: Esvazie completamente o reservatório de
                água e remova todos os componentes removíveis, como a bandeja de
                gotejamento e os filtros. Descarte a água acumulada e lave esses
                itens com água corrente.
              </li>
              <li>
                Limpeza com Produtos Adequados: Utilize produtos específicos
                para a limpeza de purificadores e bebedouros, evitando o uso de
                substâncias abrasivas que possam danificar os componentes. Pano
                macio e esponjas não abrasivas são ideais para limpar as
                superfícies.
              </li>
              <li>
                Foco nos Filtros: Se o purificador possui um sistema de
                filtragem, siga as instruções do fabricante para a limpeza ou
                substituição dos filtros. A manutenção regular dos filtros é
                essencial para garantir a eficácia do processo de purificação.
              </li>
              <li>
                Desinfecção: Além da limpeza, é fundamental desinfetar as partes
                do purificador que entram em contato com a água. Use produtos
                desinfetantes apropriados ou soluções de água e vinagre para
                garantir a eliminação de germes e bactérias.
              </li>
              <li>
                Secagem Adequada: Após a limpeza e desinfecção, certifique-se de
                que todas as partes estejam completamente secas antes de montar
                o purificador ou bebedouro novamente. A umidade residual pode
                favorecer o crescimento de microorganismos.
              </li>
              <li>
                Verificação Regular: Estabeleça uma rotina para verificar e
                realizar a manutenção dos purificadores e bebedouros. Isso ajuda
                a identificar precocemente qualquer problema e a garantir a
                continuidade da qualidade da água.
              </li>
            </ol>
            <img
              className="img-higienizacao"
              src="https://blog.superfilter.com.br/wp-content/uploads/2021/08/limpeza-higienizacao-purificador-de-agua.jpg"
              alt=""
            />
          </div>
          <h3>
            Ao adotar essas práticas de higienização, você não apenas prolonga a
            vida útil do seu purificador ou bebedouro, mas também assegura que a
            água que você e sua família consomem seja sempre de qualidade,
            contribuindo para a promoção da saúde e do bem-estar.
          </h3>
        </div>
        <div className="content">
          <h1 className="border-text">
            Nossa equipe treinada pode fazer isso por você!
          </h1>
          <img className="img-higienizacao" src={imgHigi} alt="" />
          <h3>
            Basta entrar em contato no nosso
            <strong> Whatsapp (41) 98896-8008</strong> para solicitar um
            orçamento!
          </h3>
          <h1 className="border-text">Alguns dos nossos serviços</h1>
        </div>

        <div className="content-videos">
          <video muted className="video" src={videoFr600} controls></video>
          <video muted className="video" src={videoFr600Resultado} controls></video>
        </div>
      </div>
    </>
  );
}
