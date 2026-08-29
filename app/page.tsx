"use client";

import { useEffect } from "react";

const games = [
  { name: "Street Fighter 6", tag: "Luta", marker: "SF", note: "Melhor de três", photo: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=85" },
  { name: "EA FC 26", tag: "Futebol", marker: "FC", note: "Ida e volta", photo: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1200&q=85" },
  { name: "Pokémon TCG", tag: "Cartas", marker: "PT", note: "Melhor de três", photo: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=1200&q=85" },
  { name: "Mario Kart", tag: "Corrida", marker: "MK", note: "Copa decisiva", photo: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85" },
];

const teams = [
  {
    name: "Real Trepí",
    short: "RT",
    side: "real",
    crest: "/assets/real-trepi.png",
    motto: "Controle, classe e clutch.",
    color: "Dourado & marinho",
    players: [
      { name: "Player 01", role: "Capitão · EA FC", number: "07", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85" },
      { name: "Player 02", role: "Street Fighter", number: "10", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=85" },
      { name: "Player 03", role: "Pokémon TCG", number: "18", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85" },
      { name: "Player 04", role: "Mario Kart", number: "21", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85" },
    ],
  },
  {
    name: "Vacilona GC",
    short: "VG",
    side: "vacilona",
    crest: "/assets/vacilona-gc.png",
    motto: "Pressão alta em qualquer lobby.",
    color: "Grená & azul",
    players: [
      { name: "Player 01", role: "Capitão · EA FC", number: "09", photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=85" },
      { name: "Player 02", role: "Street Fighter", number: "11", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85" },
      { name: "Player 03", role: "Pokémon TCG", number: "17", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=85" },
      { name: "Player 04", role: "Mario Kart", number: "23", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=85" },
    ],
  },
];

export default function Home() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.16 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <nav className="nav" aria-label="Navegação principal">
        <a className="wordmark" href="#inicio"><span>ELITE</span> GAMING CLUB</a>
        <div className="nav-links">
          <a href="#formato">Formato</a>
          <a href="#jogos">Jogos</a>
          <a href="#elencos">Elencos</a>
        </div>
      </nav>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> TEMPORADA 01 · EM BREVE</p>
          <h1 id="hero-title">A RIVALIDADE<br />MUDOU DE <em>CONTROLE.</em></h1>
          <p className="hero-description">Um campeonato entre amigos. Dois escudos na tela. Toda partida vale história.</p>
          <a className="button button-primary" href="#formato">Ver o campeonato <span>↓</span></a>
        </div>

        <div className="matchup" aria-label="Real Trepí contra Vacilona GC">
          <article className="hero-team real-team">
            <div className="crest-wrap real-crest"><img src="/assets/real-trepi.png" alt="Escudo do Real Trepí" /></div>
            <p>CASA</p><strong>REAL<br />TREPÍ</strong>
          </article>
          <div className="vs-mark"><span>VS</span><small>01</small></div>
          <article className="hero-team vacilona-team">
            <div className="crest-wrap vacilona-crest"><img src="/assets/vacilona-gc.png" alt="Escudo do Vacilona GC" /></div>
            <p>FORA</p><strong>VACILONA<br />GC</strong>
          </article>
        </div>

        <p className="scroll-note"><span /> role para explorar</p>
      </section>

      <section className="format section" id="formato" aria-labelledby="format-title">
        <div className="section-heading reveal">
          <p className="eyebrow">01 / O CAMPEONATO</p>
          <h2 id="format-title">NÃO É AMISTOSO.<br /><em>É DECISÃO.</em></h2>
        </div>
        <div className="format-content reveal">
          <p className="format-lede">Cada rodada é um novo território. A pontuação do confronto se constrói jogo a jogo — e a taça fica com quem aguenta a pressão até o último set.</p>
          <div className="rules" aria-label="Formato da competição">
            <div className="rule"><b>01</b><span><strong>Duelo direto</strong>Real Trepí × Vacilona GC</span></div>
            <div className="rule"><b>02</b><span><strong>Multigame</strong>Modalidades escolhidas pela mesa</span></div>
            <div className="rule"><b>03</b><span><strong>Placar geral</strong>Cada vitória pesa no resultado final</span></div>
          </div>
        </div>
      </section>

      <section className="games section" id="jogos" aria-labelledby="games-title">
        <div className="section-heading reveal">
          <p className="eyebrow">02 / AS MODALIDADES</p>
          <h2 id="games-title">NENHUM META<br />É <em>SEGURO.</em></h2>
        </div>
        <div className="game-list" aria-label="Jogos em disputa">
          {games.map((game, index) => (
            <article className="game-card reveal" key={game.name} style={{ transitionDelay: `${index * 90}ms` }}>
              <img className="game-photo" src={game.photo} alt="" />
              <div className="game-shade" aria-hidden="true" />
              <div className="game-card-top"><span>0{index + 1}</span><span>{game.tag}</span></div>
              <div className="game-card-content">
                <span className="game-marker">{game.marker}</span>
                <div><h3>{game.name}</h3><p>{game.note}</p></div>
                <span className="arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rosters section" id="elencos" aria-labelledby="rosters-title">
        <div className="roster-intro reveal">
          <p className="eyebrow">03 / OS ELENCOS</p>
          <h2 id="rosters-title">ESCOLHA<br />SEU <em>LADO.</em></h2>
          <p>Arraste os cards para conhecer a escalação. As fotos são temporárias e já podem ser trocadas pelas fotos oficiais.</p>
        </div>
        <div className="roster-columns">
          {teams.map((team, teamIndex) => (
            <article className={`roster ${team.side} reveal`} key={team.name} style={{ transitionDelay: `${teamIndex * 130}ms` }}>
              <header>
                <img src={team.crest} alt="" />
                <div><p>{team.short} / ELENCO</p><h3>{team.name}</h3></div>
              </header>
              <p className="team-motto">{team.motto}</p>
              <div className="player-track" tabIndex={0} aria-label={`Jogadores do ${team.name}. Arraste horizontalmente para ver todos.`}>
                {team.players.map((player) => (
                  <article className="player-card" key={player.number}>
                    <img src={player.photo} alt={`Foto temporária de ${player.name}`} />
                    <div className="player-card-shade" aria-hidden="true" />
                    <span className="player-number">{player.number}</span>
                    <div className="player-info"><strong>{player.name}</strong><small>{player.role}</small></div>
                  </article>
                ))}
              </div>
              <footer><span>{team.color}</span><span>arraste →</span></footer>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>ELITE GAMING CLUB <span>·</span> TEMPORADA 01</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
