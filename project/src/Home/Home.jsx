import { useEffect } from "react";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import agua from "../imgs/agua-mulher.avif";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/index.esm";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container-home container-fluid">
        <div className="content">
          <div className="content-principal">
            <h1>Bem-vindo ao Mundo da </h1>
            <h1 className="special"> Água Pura!</h1>
            <p className="texts">
              Seja bem-vindo ao nosso site dedicado a transformar a forma como
              você consome água. No coração de cada lar, escritório ou
              estabelecimento comercial, existe uma necessidade essencial e
              universal: água pura e segura. É nesse cenário que entramos em
              ação, apresentando uma gama premium de purificadores de água que
              não apenas satisfazem essa necessidade básica, mas elevam a
              experiência da água para um novo patamar.
            </p>
          </div>
          <img className="imgs-content " src={agua} alt="" />
        </div>
        <div className="content">
          <div className="content-principal">
            <h1>Por que Escolher os Nossos </h1>
            <h1 className="special">Purificadores de Água?</h1>
            <p className="texts">
              No nosso site, você encontrará uma cuidadosa seleção dos melhores
              purificadores de água do mercado. Nossos produtos são projetados
              com tecnologia de ponta para garantir que você e sua família
              tenham acesso a água pura, livre de impurezas e contaminantes.
              Desde sistemas de filtragem avançados até designs elegantes,
              nossos purificadores não apenas proporcionam água pura, mas também
              se integram perfeitamente ao seu espaço, combinando funcionalidade
              e estilo.
            </p>
          </div>
          <img
            className="imgs-content"
            src="https://images.tcdn.com.br/img/img_prod/1136544/1668690926_banner-mobile-ultramax-home-topo.jpg"
            alt=""
          />
        </div>
        <div className="content">
          <div className="content-principal">
            <h1 className="special">O que Nos Diferencia?</h1>
            <p className="texts">
              O que nos diferencia é nosso compromisso inabalável com a
              qualidade e a saúde. Acreditamos que todos merecem água pura e
              saudável, e é por isso que selecionamos cuidadosamente cada
              purificador em nosso catálogo. Nossa equipe de especialistas em
              água está sempre disponível para fornecer orientação e suporte,
              ajudando você a encontrar o purificador perfeito que atenda às
              suas necessidades específicas. Além disso, nos dedicamos a educar
              nossos clientes sobre a importância da água pura para a saúde e o
              bem-estar. Em nosso blog, você encontrará artigos informativos,
              dicas úteis e últimas novidades sobre purificação de água e saúde.
            </p>
          </div>
          <img
            className="imgs-content"
            src="https://www.acquaunica.com.br/up/img/1586449073.jpg"
            alt=""
          />
        </div>
        <div className="content">
          <div className="content-principal">
            <h1 className="special">
              Explore Nossos Produtos e Transforme sua Vida!
            </h1>
            <p className="texts">
              Estamos aqui para ajudá-lo a fazer uma escolha informada. Explore
              nosso site para descobrir uma variedade de purificadores de água,
              desde modelos compactos para residências até soluções industriais
              para empresas. Compre com confiança, sabendo que você está
              investindo na saúde e segurança de sua família ou equipe. Junte-se
              a nós nesta jornada pela água pura. Transforme sua vida e faça
              parte de uma comunidade que valoriza a saúde, o bem-estar e a
              qualidade. Seja bem-vindo ao mundo da água pura. Seja bem-vindo ao
              nosso mundo.
            </p>
          </div>
          <img
            className="imgs-content"
            src="https://www.bonsfluidos.com.br/wp-content/uploads/2021/12/purificacao-de-ambiente-e-corpo-utilizando-apenas-um-copo-dagua-1105855.jpg"
            alt=""
          />
        </div>
        <div id="div-text-clients">
          <h1>Alguns dos nossos clientes</h1>
        </div>
        <div className="clientes container">
          <div className="clintes-group">
            <img
              src="https://mundoeko.com.br/wp-content/uploads/2018/05/cliente4.png"
              alt=""
            />
          </div>
          <div className="clintes-group">
            <img
              src="https://mundoeko.com.br/wp-content/uploads/2018/05/cliente2.png"
              alt=""
            />
          </div>
          <div className="clintes-group">
            <img
              src="https://mundoeko.com.br/wp-content/uploads/2018/05/cliente12.png"
              alt=""
            />
          </div>
          <div className="clintes-group">
            <img
              src="https://mundoeko.com.br/wp-content/uploads/2018/05/cliente11.png"
              alt=""
            />
          </div>
          <div className="clintes-group">
            <img
              src="https://mundoeko.com.br/wp-content/uploads/2018/05/cliente10.png"
              alt=""
            />
          </div>
          <div className="clintes-group">
            <img
              src="https://mundoeko.com.br/wp-content/uploads/2018/05/cliente9.png"
              alt=""
            />
          </div>
          <div className="clintes-group">
            <img
              src="https://mundoeko.com.br/wp-content/uploads/2018/05/cliente6.png"
              alt=""
            />
          </div>
          <div className="clintes-group">
            <img
              src="https://mundoeko.com.br/wp-content/uploads/2018/05/cliente7.png"
              alt=""
            />
          </div>
          <div className="clintes-group">
            <img
              src="https://mundoeko.com.br/wp-content/uploads/2018/05/cliente5.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
