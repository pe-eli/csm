const CHECKOUT_URL = 'https://pay.cakto.com.br/5fj9mcz_1133016';
const PRICE = 'R$ 17,90';

export default function App() {
  return (
    <>

  <a className="skip" href="#conteudo">Pular para o conteúdo</a>
  <header className="header wrap">
    <a className="brand" href="#" aria-label="Currículo Sob Medida, início"><span className="brand-icon" aria-hidden="true">▤</span><span>currículo<span className="brand-bottom">sob medida<span className="orange">.</span></span></span></a>
    <nav aria-label="Navegação principal"><a href="#como-funciona">Como funciona</a><a href="#materiais">O que vem no kit</a><a href="#duvidas">Dúvidas</a></nav>
    <a className="nav-cta" href="#oferta">Conheça o kit <span aria-hidden="true">↗</span></a>
  </header>
  <main id="conteudo">
    <section className="hero wrap">
      <div className="hero-copy">
        <p className="eyebrow hero-product"><span className="dot"></span> KIT CURRÍCULO SOB MEDIDA</p>
        <h1>Adapte seu currículo à vaga e saiba <em>o que destacar.</em></h1>
        <p className="hero-description">Receba um modelo de currículo editável, um roteiro de análise da vaga, uma ficha de conquistas e um checklist para revisar antes de enviar.</p>
        <p className="hero-difference">Um modelo para preencher + um passo a passo para escolher as experiências que fazem sentido para a vaga.</p>
        <a className="button" href={CHECKOUT_URL}>Quero meu kit por {PRICE} <span aria-hidden="true">↗</span></a>
        <p className="micro"><span aria-hidden="true">✓</span> 4 materiais digitais · Aplicação individual</p>
      </div>
      <figure className="hero-art hero-kit" aria-label="Representação ilustrativa dos quatro materiais: modelo de currículo, roteiro de análise da vaga, ficha de conquistas e checklist final">
        <span className="art-grid" aria-hidden="true"></span>
        <span className="art-label">OS 4 MATERIAIS DO SEU KIT</span>
        <div className="paper resume" aria-hidden="true">
          <div className="paper-top"><span>SEU CURRÍCULO</span><span className="tiny-mark">↗</span></div>
          <p className="paper-sub">01 · Modelo editável</p><div className="rule"></div>
          <h3>UM POUCO SOBRE VOCÊ</h3><div className="line w90"></div><div className="line w75"></div><div className="line w90"></div>
          <h3>SUA EXPERIÊNCIA</h3><div className="line dark w55"></div><div className="line w90"></div><div className="line w75"></div>
          <div className="highlight"><span>O que conecta sua experiência à vaga?</span><div className="line w90"></div><div className="line w75"></div></div>
          <h3>FORMAÇÃO E HABILIDADES</h3><div className="line w75"></div><div className="line w55"></div>
          <div className="paper-footer">CURRÍCULO SOB MEDIDA <span>01 / 04</span></div>
        </div>
        <div className="hero-tools" aria-hidden="true">
          <div className="hero-tool tool-route"><span>02 · ROTEIRO</span><h3>Analise a vaga.</h3><p>Requisitos × experiência</p></div>
          <div className="hero-tool tool-achievements"><span>03 · FICHA DE CONQUISTAS</span><h3>Registre o que fez.</h3><p>Contexto, ação e resultado</p></div>
          <div className="hero-tool tool-review"><span>04 · CHECKLIST FINAL</span><h3>Revise antes de enviar.</h3><p>✓ Informações &nbsp; ✓ Clareza</p></div>
        </div>
        <figcaption>Imagem ilustrativa.</figcaption>
      </figure>
    </section>
    <div className="benefit-strip"><div className="wrap strip-inner"><span><b>01</b> Organize sua experiência</span><span><b>02</b> Conecte com a vaga</span><span><b>03</b> Revise antes de enviar</span></div></div>
    <section className="section wrap identification">
      <div><p className="eyebrow">O PONTO DE PARTIDA</p><h2>Nem sempre falta experiência.<br />Às vezes, falta um caminho<br />para apresentá-la.</h2></div>
      <div className="body-copy"><p>Ao abrir uma vaga, pode surgir a dúvida: quais partes da minha trajetória fazem sentido aqui?</p><p>Um modelo difícil de adaptar, requisitos pouco claros ou a falta de um roteiro podem tornar essa escolha mais trabalhosa. Não receber uma resposta também depende de fatores que estão fora do seu controle.</p><p className="emphasis">Com um modelo e um processo, fica mais claro o que organizar, o que destacar e o que revisar.</p></div>
    </section>
    <section className="process-section" id="como-funciona"><div className="wrap section">
      <div className="section-heading"><div><p className="eyebrow">DO ANÚNCIO AO ENVIO</p><h2>Um processo simples.<br />Uma candidatura por vez.</h2></div><p>Você traz sua experiência real.<br />O kit ajuda a organizar o próximo passo.</p></div>
      <div className="steps"><article><span className="step-number">01 <span>↗</span></span><h3>Escolha uma vaga</h3><p>Leia o anúncio e identifique os requisitos e as instruções de candidatura. Eles serão seu ponto de referência.</p></article><article><span className="step-number">02 <span>↗</span></span><h3>Conecte com sua trajetória</h3><p>Compare os requisitos com suas experiências reais. Use a ficha para registrar conquistas e o modelo para organizar o currículo.</p></article><article><span className="step-number">03 <span>✓</span></span><h3>Revise antes de enviar</h3><p>Passe pelo checklist e confira informações, clareza e as orientações específicas daquela candidatura.</p></article></div>
    </div></section>
    <section className="section wrap" id="materiais">
      <div className="section-heading"><div><p className="eyebrow">POR DENTRO DO KIT</p><h2>Quatro materiais.<br />Cada um com uma função.</h2></div><span className="pill">DIGITAL · PRÁTICO · INDIVIDUAL</span></div>
      <div className="materials"><article className="material"><div className="material-icon" aria-hidden="true">▤</div><span className="material-num">01 / ORGANIZAR</span><h3>Modelo de currículo editável</h3><p>Uma base para preencher com suas informações e adaptar o destaque das experiências à vaga escolhida.</p><div className="material-outcome">Para estruturar o que você quer apresentar.</div></article><article className="material"><div className="material-icon" aria-hidden="true">⇄</div><span className="material-num">02 / COMPARAR</span><h3>Roteiro de análise da vaga</h3><p>Uma orientação para comparar os requisitos do anúncio com o currículo e identificar experiências relevantes.</p><div className="material-outcome">Para escolher o que merece destaque.</div></article><article className="material"><div className="material-icon" aria-hidden="true">✧</div><span className="material-num">03 / REGISTRAR</span><h3>Ficha de resultados e conquistas</h3><p>Um espaço para reunir realizações profissionais reais, com contexto e resultados que você pode sustentar.</p><div className="material-outcome">Para descrever sua contribuição com clareza.</div></article><article className="material"><div className="material-icon" aria-hidden="true">☑</div><span className="material-num">04 / REVISAR</span><h3>Checklist final da candidatura</h3><p>Uma lista para conferir o currículo e os materiais solicitados antes de enviar sua candidatura.</p><div className="material-outcome">Para apoiar sua revisão final.</div></article></div>
      <div className="inline-cta"><p>Da escolha do que destacar à revisão final.</p><a href="#oferta">Ver a oferta do kit <span aria-hidden="true">↗</span></a></div>
    </section>
    <section className="fit-section"><div className="wrap section fit-grid">
      <article><p className="eyebrow">FAZ SENTIDO PARA VOCÊ?</p><h2>Para quem quer participar<br />da própria preparação.</h2><ul className="check-list"><li>Está se candidatando e quer organizar o currículo para cada oportunidade.</li><li>Tem dúvidas sobre quais experiências destacar em uma vaga.</li><li>Quer registrar conquistas reais e revisar os materiais com um roteiro.</li></ul></article>
      <article className="limits"><p className="eyebrow">O QUE ESPERAR, COM CLAREZA</p><h3>O kit orienta. Sua história é sua.</h3><p>Ele não é indicado para quem procura um currículo escrito por outra pessoa ou acompanhamento individual.</p><ul><li>Não cria experiências ou conquistas por você.</li><li>Não substitui uma consultoria individual.</li><li>Não garante entrevistas, contratação ou aprovação em sistemas ATS.</li></ul><p className="small">Cada processo tem critérios próprios. Siga sempre as instruções da empresa.</p></article>
    </div></section>
    <section className="section wrap package-section">
      <div className="package-art" role="img" aria-label="Mockup conceitual dos quatro materiais: modelo, roteiro, ficha e checklist"><div className="mini-cover cover-one"><span>01<br />O MODELO</span><strong>Seu<br />currículo.</strong><i>▤</i></div><div className="mini-cover cover-two"><span>02<br />O ROTEIRO</span><strong>Conecte<br />os pontos.</strong><i>⇄</i></div><div className="mini-cover cover-three"><span>03<br />A FICHA</span><strong>Sua<br />trajetória.</strong><i>✧</i></div><div className="mini-cover cover-four"><span>04<br />O CHECKLIST</span><strong>Revise.<br />E envie.</strong><i>✓</i></div><span className="package-caption">IMAGEM ILUSTRATIVA DOS MATERIAIS</span></div>
      <div><p className="eyebrow">TUDO NO MESMO KIT</p><h2>Uma base para trabalhar.<br />Um roteiro para seguir.</h2><p>Os quatro materiais acompanham etapas diferentes da preparação do currículo. Você preenche, compara e revisa com base na vaga que escolheu.</p></div>
    </section>
    <section className="offer-section" id="oferta"><div className="wrap offer-grid">
      <div className="offer-copy"><p className="eyebrow">SEU PRÓXIMO CURRÍCULO COMEÇA AQUI</p><h2>Menos dúvida sobre<br />o que destacar.<br /><em>Mais clareza para<br />se apresentar.</em></h2><p>Um apoio prático para organizar sua experiência e adaptar o currículo à oportunidade em vista.</p><span className="offer-decoration" aria-hidden="true">↗</span></div>
      <div className="offer-card"><span className="pill">KIT DIGITAL COMPLETO</span><h3>Kit Currículo Sob Medida</h3><ul className="check-list"><li>Modelo de currículo editável</li><li>Roteiro de análise da vaga</li><li>Ficha de resultados e conquistas</li><li>Checklist final da candidatura</li></ul><div className="price-label">PREÇO FINAL</div><div className="price">{PRICE}</div><a className="button buy-button" href={CHECKOUT_URL}>Quero meu kit <span aria-hidden="true">↗</span></a><p className="offer-note">Você será direcionado ao checkout para concluir a compra.</p></div>
    </div></section>
    <section className="section wrap faq-section" id="duvidas"><div><p className="eyebrow">ANTES DE DECIDIR</p><h2>Ficou alguma dúvida?</h2><p>O que você precisa saber<br />sobre o Kit Currículo Sob Medida.</p></div><div className="faq-list">
      <details><summary>Serve para minha área?<span aria-hidden="true">+</span></summary><p>O kit parte dos requisitos da vaga que você escolheu para ajudar a organizar as experiências relevantes. Use o anúncio como referência e siga as orientações de candidatura da empresa. A proposta é apoiar essa preparação, sem substituir orientações específicas da sua profissão.</p></details>
      <details><summary>Preciso ter muita experiência?<span aria-hidden="true">+</span></summary><p>O foco é a relevância das experiências para a vaga, e não a quantidade de anos no currículo. Trabalhe com o que você realmente fez, descreva suas contribuições e destaque o que se conecta aos requisitos do anúncio.</p></details>
      <details><summary>Posso editar o modelo de currículo?<span aria-hidden="true">+</span></summary><p>Sim. O modelo de currículo é editável para você preencher com suas informações e adaptar o destaque das experiências à vaga escolhida.</p></details>
      <details><summary>O kit garante que serei chamado?<span aria-hidden="true">+</span></summary><p>Não. O kit ajuda na organização, adaptação e revisão do currículo. Convites para entrevistas e decisões de contratação dependem dos critérios das empresas e de outros fatores. Também não há garantia de aprovação em sistemas ATS.</p></details>
      <details><summary>Como faço para comprar?<span aria-hidden="true">+</span></summary><p>Clique em “Quero meu kit” para ir ao checkout e concluir a compra. O Kit Currículo Sob Medida custa R$ 17,90 e inclui os quatro materiais apresentados nesta página.</p></details>
      <details><summary>O kit inclui consultoria individual?<span aria-hidden="true">+</span></summary><p>Não. É um produto digital de aplicação prática e individual. Você usa os materiais para trabalhar no próprio currículo; não inclui análise personalizada ou a escrita do currículo por um profissional.</p></details>
    </div></section>
    <section className="closing wrap"><p className="eyebrow">SUA EXPERIÊNCIA É O PONTO DE PARTIDA</p><h2>Dê mais clareza ao currículo<br />da sua próxima candidatura.</h2><p>Um modelo, um roteiro, uma ficha de conquistas e um checklist.<br />Para organizar o que você viveu e destacar o que faz sentido para a vaga.</p><a className="button" href={CHECKOUT_URL}>Quero meu kit por {PRICE} <span aria-hidden="true">↗</span></a><p className="small">{PRICE} · 4 materiais digitais · Modelo de currículo editável</p></section>
  </main>
  <footer className="wrap"><a className="brand" href="#"><span className="brand-icon" aria-hidden="true">▤</span><span>currículo<span className="brand-bottom">sob medida<span className="orange">.</span></span></span></a><p>Sua trajetória real. Uma apresentação mais clara.</p><span>Kit Currículo Sob Medida</span></footer>

    </>
  );
}
