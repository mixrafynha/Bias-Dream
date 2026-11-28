export default function Login(){
  return <section className="section-padding"><div className="container"><div className="section-title text-center"><h2>Login</h2><p>Aceda à sua conta.</p></div><form className="contact-form" onSubmit={event=>event.preventDefault()}><label>Email<input type="email" required /></label><label>Palavra-passe<input type="password" required /></label><button type="submit" className="btn-style">Entrar</button></form></div></section>;
}
