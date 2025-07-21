function ThemeToggle() {
  const handleToggle = () => {
    const html = document.documentElement
    const currentTheme = html.classList.contains('dark') ? 'dark' : 'light'
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    html.classList.remove(currentTheme)
    html.classList.add(newTheme)
  }

  return (
    <button onClick={handleToggle} className="theme-toggle">
      Cambiar Tema
    </button>
  )
}

export default ThemeToggle 