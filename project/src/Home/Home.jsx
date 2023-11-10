import { useEffect } from "react";
import "../styles/homeEHeader.css";
import AOS from "aos";
import "aos/dist/aos.css";
import agua from "../imgs/agua-mulher.avif";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container-home"
      >
        <div
          data-aos="fade-rigth"
          data-aos-duration="2000"
          className="first-content"
        >
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="content-principal"
          >
            <h1>Bem-vindo ao Mundo da </h1>
            <h1 className="special"> Água Pura!</h1>
            <p data-aos="fade-down" data-aos-duration="1000" className="texts">
              Seja bem-vindo ao nosso site dedicado a transformar a forma como
              você consome água. No coração de cada lar, escritório ou
              estabelecimento comercial, existe uma necessidade essencial e
              universal: água pura e segura. É nesse cenário que entramos em
              ação, apresentando uma gama premium de purificadores de água que
              não apenas satisfazem essa necessidade básica, mas elevam a
              experiência da água para um novo patamar.
            </p>
          </div>
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            className="imgs"
            src={agua}
            alt=""
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="second-content"
        >
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="content-principal"
          >
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
            data-aos="fade-rigth"
            data-aos-duration="2000"
            className="imgs-purificador"
            src="https://images.tcdn.com.br/img/img_prod/1136544/1668690926_banner-mobile-ultramax-home-topo.jpg"
            alt=""
          />
        </div>
        <div
          data-aos="fade-rigth"
          data-aos-duration="2000"
          className="third-content"
        >
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="content-principal"
          >
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
            data-aos="fade-rigth"
            data-aos-duration="2000"
            className="imgs-purificador"
            src="https://www.acquaunica.com.br/up/img/1586449073.jpg"
            alt=""
          />
        </div>
        <div
          data-aos="fade-rigth"
          data-aos-duration="2000"
          className="third-content"
        >
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
            data-aos="fade-rigth"
            data-aos-duration="2000"
            className="imgs-purificador"
            src="https://www.bonsfluidos.com.br/wp-content/uploads/2021/12/purificacao-de-ambiente-e-corpo-utilizando-apenas-um-copo-dagua-1105855.jpg"
            alt=""
          />
        </div>
        <div
          data-aos="fade-rigth"
          data-aos-duration="2000"
          id="div-text-clients"
        >
          <h1>Alguns dos nossos clientes</h1>
        </div>
        <div
          data-aos="fade-rigth"
          data-aos-duration="2000"
          className="principais-clientes"
        >
          <div className="clientes grid">
            <div className="clientes">
              <img
                className="imgs"
                src="https://static.vagas.com.br/portais-de-carreira/images/components/galleries/original/Hospital_do_Rocio_-_Imagem_do_hospital_do_Rocio_e_o_logotipo_com_o_texto_Gente_que_cuida_de_Gente!_.jpg?1615902529"
                alt=""
              />
            </div>
            <div
              data-aos="fade-rigth"
              data-aos-duration="2000"
              className="clientes"
            >
              <img
                className="imgs"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANDRAODxAQEA8OEBIPFg4QDg8PDg8QFxUYGBcSFxUYHSggGRsnHRYXITMhJSkrLjAvGR8zODMtNygtLisBCgoKDg0OGxAQGy0lICU1LSstMistLS0tLS0tLzUtLTctLSstLSstLS0tLS0vLS0tLS8tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIFBgcEA//EAEUQAAEEAQEEBQgHBAgHAAAAAAEAAgMRBBIFBiExE0FRcZEHIjJhcoGS0RQWI1OhwcJCUoKxNUNUYnSisuEVM3Ozw/Dx/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAEEAgMFBgf/xAA/EQACAQEDBggMBwADAQAAAAAAAQIRAwQhBRIxQVGhYXGBgpGxwdEUFRYzNGJjorLh4vAGEyIyQkPCUpLxI//aAAwDAQACEQMRAD8A7iiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiLRfKR6eP7Mn6VtsbP8yajWn/AJUq328+DWLtaVpTCtNLS00e3Yb0i4l4+JTx8Srvi/1t3zOJ5Rey9/6DtqLiXj4lPHxKeL/W3fMeUXsvf+g7ai4l4+JTx8Sni/1t3zHlF7L3/oO2ouJePiU8fEp4v9bd8x5Rey9/6DtqLiXj4lPHxKjxf6275jyi9l7/ANB21FxLx8Snj4lT4v8AW3fMeUXsvf8AoO2ouJH38+1drZyHcFWvF3/JpjWtdVNHLwnSydlLwzO/Rm5tNda1rwLYWREVY6YREQBERAEREAREQBERAEREAWieUn0sf2ZP0re1onlJ9LH9mT9Ks3Tzy5epnMyz6FPm/EjTURF2jw4REUAIi++FivnkbFG0l5NAfmewI3TFkxi5Oi0nwAW4YW4z3NDpZQwkXoazUR/FYCzuwt2YsQBzgJJuesjzWn+6Orv5rYFzLe+Nuln0nqbhkSMY514VW9Cq8ONp49XHq0qXcRpHmZFH1x8PwK9c+5OO4DQ57DVE3qDj2kH8itqRV3ebX/kzpLJdzVf/AJrHj3Y4chznam5k8QLonCdo46A3Q6vZvj7j7lrJFGjwI4Uu2LRd/NktAblMFWdMgHWT+1+FH3K3dr25SzZ9Jx8p5HhZ2btbHVpWnDauLZjgaWfzC7YzkO4LiZ/MLtjOQ7goyh/Hl7Cfw7/bzf8ARZERc49MEREAREQBERAEREAREQBERAFonlJ9LH9mT9K3taJ5SfSx/Zk/SrN088uXqZy8s+hT5vxI01ERdo8QERFAC6VulsX6JDrePtpQL7Wt6m/mf9lo27sIfm47DyLwT6x2fguuLn360apBcbPSZAusZOVvLSsFwYY9a37Tx7Rz4saPpJXaW3QoWXOPIAdZWnZ+/L9VQxNDe2Qlzj7rAH4qnlDnc7Iij/ZYzVX95xIJ/ALUlN2usHBSljUxyplW3hbSsrJ5qWvW3TqNvwt+ZA8CaNpZfEs1NeB20SQe7gt2xMpk0YkjOpjuRoi+Nda40ukbrbYhkxY4y9rJI2hhYSBqrk4Xzv8AnawvdhGEVKC4zdkfKNrazdnbSrhVV09OCNlWF3tDTs+fVy0t8dba/GlmVqHlAzw2FmMD50rgXAcwByvv5/wqpYRcrSKW07GULRWd2tJS2NcrwW80H5hdsZyHcFxM/JdsZyHcFcyh/Hl7Difhz+3m/wCiyIi5x6YIiIAiIgCIiAIiIAiIgCIiALRPKT6WP7Mn6Vva0Tyk+lj+zJ+lWbp55cvUzl5Z9CnzfiRpqIi7R4gIiKAenZ2T0MzJR/VuB7wDZC7BHIHtDmm2uAII5EHkVxZbZupvN0FY85PR/sv5lnqPq/l3cqV8sXNZ0dK6ju5Fv0LGbsrR0UtD2Ph49ptG3thR5rRqtkjQQ2QcavqI6wufbW2FPiE62Es6pR5zT8u7gurRyNeA5pDmuFhwIII7QVdU7G8zs8NK2HbvuSrG9PP/AGy2rtWvc+E4mi6vm7CxZwQ+FlnjqaNLr7bHP3rVtrbluja6THeZdPHoi0ayOuiOBPqoK9Z32EnR4fe08/ech3izVY0muDT0Psb4jAYO2MjHBbFM5jT+zwe33A2B7l5JpXSOL3uLnE2XOJJJ71EkbmmnAtI6iCCPcVVWlFVrQ5UrSbioNui0KrouJaip/MLtjOQ7guJn8wu2M5DuC5+UP48vYei/Dv8Abzf9FkRFzj0wREQBFFpaAlERAEREAREQBERAFonlJ9LH9mT9K3taJ5SfSx/Zk/SrN088uXqZy8s+hT5vxI01ERdo8QERFACL6Y8DpXtjY0ue40GjmSvZtjZhxJGxue1z6BcBwDCb82+s1R96xc0nm6zYrGcoOaX6VRN8f3qGzNs5GIfspCG9cZ85p/hPL3LaMHfoGhNCW9r4zqHw9XiVo6LXaXeznjJFm75RvFgqQlhseK36OSh1/Z204cltxSNf2jk5ve08QvcuLQyujcHscWubxDmk6h71u27u92siLJoE8GzcgT2OHV38lQtrnKH6o4reeiuOW4WzULVZr26n3cvSbLtHZ0WUzRKwOFGjyc09oPUVz7eDdqTD+0aekhutQFOZfIEfh8l09fKaJsjXMeAWuBaQeRB5habG8Ssnho2F2/ZPsr1H9WEtT79q+1Q4sfzC7U13mjuC5BtTFOPPJCf6txbfaL4HwpdcZyHcFavzTUGuHsOT+H4uMraL0rNXRnF9RUWqpa556QspVbRAWtLUIgLWiqiA+qIigkIiIAiIgC0Tyk+lj+zJ+lb2tE8pPpY/syfpVm6eeXL1M5eWfQp834kaaiIu0eICIigGzbsVjYuTnEAuYBHHfGi6hf4j8Vrkkhe4ucS5xJJceJJPMrYN2HCeKfAca6ZrXsceTXto8fUaHgsFlYz4XujkaQ9potP/ALxHrWiz85Ounsph2l+81d2sc39qTXPq6141SnAfFERbygFClevZ2DJlStjjFud19Qb1uPYAjaWLJjBzajFVbwS2nRtz8p82FG5/EguaHHm5oJAP5e5ZxeTZ2G3HiZCzlG2r6yesnvPFWzclsET5XmmsbqPr9XeeS8/NqUm47T6JYRdnYxVo8UlV8SxOY71uDto5BH7zR7wAD+IXTmngO4Lj+TOZHvkd6TySe8myuvM5DuCvXyObGC4+w4eRJq0tbea1tPpcmXtLVbS1RoegLoq2lqAWS1FpaAm0UIgPQiIoMgiIgCIiALRPKT6WP7Mn6Vva0Tyk+lj+zJ+lWbp55cvUzl5Z9CnzfiRpqIi7R4gIiKAfWCd0T2yMOl7SHAjqK33HycTa0QbMGiccNIdTwf7pPpd3H1rnqhabWxVpR1o1rRdul+ld86LipRemL0M3PL3EddxTNr917C2vfxvwXgO5eXdVH36xX8lfZ28LGMDXOnhI4ao5BKzvLH3XivfFvBfD/iB9+OA78I3BVs68xw613VOr+Xky0o6Ursmlum0+hFMHcV13NK0N/djaS4++gB4FbZsvZ0OKzRC0D943bnH1lay7bOO7/mZ5cOtoZPZ+EN/kV9Hb4YsEYZBG59DgKEbSes+PqWm0jb2mDq+SiL12tMn3asoOK4c5SluqzbnvDQSSAALJJoAdtrnm9+8AyXdBEfsWGy7l0hHX3D/fsWP2xvFkZnmuIYz7tthp9/MrEKxd7pmPOnpOblLK/wCdH8qx/a9L1v5dewfMLsLTwHcFx0/muwN5DuCxv/8AHl7Db+HtNrzf9FrU2q2i5x6Usiram0JqWtLVbU2gqTaKEQVPWiIsTIIiIAiKkkgaLKAsTQsrVt59lHNfGWvDBGHc2E6rr5LLTZBeewdi8W080Y2PLO4FwhjdIWirIaLoLbZtxlVaSteLOFtBwmv06+THsNb+pr/v2/A75p9TX/ft+F3zW2sdYB7QCvLszPGTF0rQWjXIyiRdse5hP+W1v8Ktdu5dxz/FFz0ZvvS7zXPqa/79vwO+an6mP+/b8DvmstDtqSYGTHxZJYbOmUywxCUDhqja42R2E1a92zc9mTH0jNQ85zHMeNMkcjTTmOHUQVLvNste5ELJVyeiL/7S7zW/qY/79vwO+afUx/8AaG/A75rMR7Zkl1nHxnzRse6PpTLFEJHNJDgwONkAgizQsL2bN2izJi6VgcKLmOY8U+N7CQ5jh2ghPCbbbuQWSrk/4+9LvNb+pj/v2/A75p9TH/ft+B3zWUg3gkfjtyvoc3QOYJdTZYXvEdXq0agTw6hxXuztqMhxvpQ+0jIjI0kec2RzWtIvq84FT4RbbdyHiu5Urmvbpl3mvfUt/wB+34HfNPqW/wC/b8Dvmtlz8mWKujgdMKJJEsbNNe0eK8+xtqPymRy/R3RxSxiRsjpYnWCAQNINjgVHhNtSteonxTc60zX0y7zBfUt/37fgd80+pb/7Q34HfNZ3P22yDJixy1x6TRqkBboh1u0R6r4+c4ECuxZS1DvVstYWSLm8M33pd5p31Kf/AGhvwO+a3NvALx7KzhlY8c7WlolaHhpIsDsNL12tdpazn+/UWrrdLG71dkqVprb4tLe1lrS1W1NrSWy1oq2loSWU2qWptAWtFW0QHvREWJmERfKaYRiz7h1lATNKGCz4dZWLlmLzZ8OoKkspebP+wVbWaVDU5VLWsXvV/RuZ/hpf9JWSXx2jiNyYJYHEhszHRktrUA4USL4Ws06NGElVNHmhGbpb5+LyH9XN2e0vFsDV/wAMk/f1Zfo3WrpJeXvWcjeB5oIJaBwsEjvC8+zsNuNH0bSSNcj7cRdveXkcBytxSuBjm49JTd8j6Di1y+jQ/wDbavjsI/b59cvpfuvoYr/FVbsUx22DKngiJJ6FnQPYyzZDDIxxaLPK6HVS9uBhx40QjZYaCXFznFznOcbc9zjzJJu1LpjQlZ1VVGOxMWaJpdgzQy48j3yNhlB0tc5xLgyZh4N1XwLTXFe7ZWcMiBz+j6JzXyRvjJB0ysJDhY4O48b67XlZsbSXHHypoI5HOeY4+gkjDnG3Fmtji2zZoGrPJe7BwmY8QijvTbiS5xc9znElz3E8ySSUbT++siKafB96DA7Cy8l2zMeKLEcScdrGzSTQth4toPIDi+uutNr07axfo+yBADqELcSLVyvRLE2/wWU2djsxYYsZrrETGxt1lutwAqzVfyU7Swm5MLoXlzWuLDba1ea9rxzB62hM5Z1eEjMebw0pu4j1znzXdx/ksZul/RuF/hof9AWSdxBHaCvHjbPbFiNxGPeGsh6ASW3pQA3SHcq1dfJYrRQ2OudU1xuZDlQ5zndKH5byI3sxMmQNji82BzXsYQfOBfwP7S2bY2f9KxYp6oyRgub+5IOD2+5wI9y+2JA2GJkTBTImNjaOxrRQ/kvjg4bYOlDC4iWV82k1THP4uDaHImzx63FZSaegxjGSaf3t7+k8u6P9G4v/AER+azFrCYWxXwMZHHmZAjjAAZpxCNI6r6O/xWZtRJpuqMoVUUmXtLVLU2sTItam1VLUUBa0tVU2lCS1oq2igGSRFR7w0EngAsTYVmlDG6j/APT2LETTF7rPh1AdiZWQZHX1DkOxfK1sjGhplKpKm1W0WRiWtYLfiSZuzpjBq1+aCWXrEeoaiK49/qtZteHbsWQ/HcMSQRTghzSQ0h1c2GwQLHX20pjhJGFoqwaOT7PbgOjjJyMjFymut04j6WI3fohhDgeXHvWe35N52AS8SkwRfagACT7Q+eBZoHnz61XP2TtLNayKXChbIHC8uoWSOH99zTxHHqCyW8u6U7ocR2MRJLhxNiLSQ0v0mw5t8Od8D1Urbms5Nvbrrq2lFQkoNKOzU1XkPL5UOObiez/5FTeHXtPbowHyOZAx2kNb1aY9bnVyLiQRZ5cFZ+xNpbTy4pM2NkDItIJGkeaHWQ1ocSXHwXt3j2Blx7RG0sFrZHEgmMloLXaNB4Ei2kdhviVgmlSNcaPpMpxlJylR0bXG0ljgefdnHiwtqCLGz2ujc90bsZ7JRI4gGwSG6NQI9LhyXi3KMjcjahhH2wgmLKAJ16zpr12slu7u9lSbRGflxR44YS4RRhjdbyCL0tJ7SSSbJVt09g5kE+a5zTAZo3tjmJjeA8vtrqBPfxCSaxx1LrJhGVY4UVXt0U4dHAaZgfRJBKM1+QzJLvNnDRK1hHPW0kOLrvrXRRtEY2wnytyvpNRuZHkaCx5c46WtLSSbaT19iwOfibXmjkgyMOHJc7g3KLcfpGDtY8EV7wm0d2cyPZsGFFH0rnTvnlLXsDGO0hrWW4i+HHvCyk1Jqr17ftoxgpWadFqepp14dT4zC7Ajds3L2dlO4MyhZ5CmOe6M/wCXS/3rOtcNn7ySOd5scrZZCeXmujLz/mYV89v7gyshjOM+XIkBDTG5zAGN08S266wAvtvhsDMzGYc7IXOnGP0UzdbAWubxHM0bLn8kc4yenSmn2EKE4JpLQ1Ja+BmJ3O2m+DIyZX+b9LxZ5gTyc9upwcO3i14Xp3Xd9C2JnZY4STkY7D18tII7jI4/wrIbz7pzuw8FmPHrkx4nRSBrmtJ1AOJskcNWv4lXbe72Wdm4GFBCXFlzS+ewBkrv2TZ41rfy7FDlGXK9yJUZw1VonTjl9swm7sbtm52zpz6GZGCeAADJHuZXcBoeuwrme8O4MkcUbsV8uQ8O0lj3MGhlcC26riKr1hdC2e97oIjK0tlMbdbTRIfQ1Dhw52tVs1Kkkyxdoyg3BrDCnbieu0tVtTa0FotaWqWptAXtSvnam0JLoqWiAy6w20MvWdIPmj8T2r07TytI0N5nn6gsQoitYnLUfS0tVtLWZrL2iraakBe0tVtLQFrS1CWhJKm1W1NoCUtVtTaAtaWq2iUBe0tVS0oC9paraWoBdLVbS0JLWptVtLQFrU2qWptAXtTa+dqbQVL2ipaIKnjfIXEk8STai1VFkYH0UKtpaAsii0tAXtLVLVkBNqdSqigkvaWqWptAXtFS1NoC1qbVLU2gJtTaram0JJtFClATaWotRaAtam1VLQFrU2qpaUBa1NqlqbUAsiraKaA8aBEUmJKIiAKURAFIREBZERQAiIgJREQBERASpREJCkIiAIiICQiIgJChEQkKURGAiIoB/9k="
                alt=""
              />
            </div>
            <div
              data-aos="fade-rigth"
              data-aos-duration="2000"
              className="clientes"
            >
              <img
                className="imgs"
                src="https://jasminealimentos.com/wp-content/uploads/2022/04/logo-jasmine-new-compress.png"
                alt=""
              />
            </div>
          </div>
          <div className="clientes grid">
            <div className="clientes">
              <img
                className="imgs"
                src="https://yt3.googleusercontent.com/Ry9Qig8mQ6nQZCFJY5xxzh3gDwlBkPrfxui4tLRnz64oXtZ6j1VnCUedn33LzpMlt8suBtmbpXM=s900-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
            <div
              data-aos="fade-rigth"
              data-aos-duration="2000"
              className="clientes"
            >
              <img
                className="imgs"
                src="https://carpediemacademia.com.br/wp-content/uploads/2021/10/logo-carpe-diem.jpg"
                alt=""
              />
            </div>
            <div
              data-aos="fade-rigth"
              data-aos-duration="2000"
              className="clientes"
            >
              <img
                className="imgs"
                src="https://media.tenor.com/dj3tvg3kGnYAAAAC/logo-phd-sports-logo-academia-ph-d-sports.gif"
                alt=""
              />
            </div>
          </div>
          <div className="clientes grid">
            <div className="clientes">
              <img
                className="imgs"
                src="https://www.asepi.com.br/uploads/content_file/BIGb324135c686d0482b1cb9fcbb08f4fba.jpg"
                alt=""
              />
            </div>
            <div
              data-aos="fade-rigth"
              data-aos-duration="2000"
              className="clientes"
            >
              <img
                className="imgs"
                src="https://static.wixstatic.com/media/c9c95d_37cf19cb308944378a80bda44e30a87d~mv2.png/v1/fill/w_400,h_253,al_c,q_90/file.jpg"
                alt=""
              />
            </div>
            <div
              data-aos="fade-rigth"
              data-aos-duration="2000"
              className="clientes"
            >
              <img
                className="imgs"
                src="https://media.licdn.com/dms/image/C4D0BAQEENmFuRHCNBQ/company-logo_200_200/0/1643325379822?e=2147483647&v=beta&t=bOdSESjfsb8hX_kCZTl-2aL0tuOxWZtRkFhss3nXhBE"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
