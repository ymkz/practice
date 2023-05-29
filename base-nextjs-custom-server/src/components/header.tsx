export const Header = () => {
  return (
    <header style={{ display: 'flex', gap: 16 }}>
      <div>
        <a href="/">/nextjs-custom-server</a>
      </div>
      <div>
        <a href="/hello">/hello</a>
      </div>
      <div>
        <a href="/world">/world</a>
      </div>
      <div>
        <a href="/notfound">/notfound</a>
      </div>
    </header>
  )
}
