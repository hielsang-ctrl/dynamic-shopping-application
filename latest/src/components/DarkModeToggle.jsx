function DarkModeToggle({ darkMode, onToggleDarkMode }) {
  return (
    <button
      type="button"
      className="dark-mode-toggle"
      onClick={onToggleDarkMode}
    >
      {darkMode ? 'ToggleLightMode' : 'ToggleDarkMode'}
    </button>
  )
}

export default DarkModeToggle
