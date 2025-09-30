# Team Creator App 🚀

A modern, responsive web application for organizing participants into balanced teams with smart distribution algorithms and beautiful UI.

## ✨ Features

### 👥 Participant Management
- **Add participants** with name and technical skill indicator
- **Remove individual participants** with one click
- **Clear all participants** with confirmation dialog
- **Duplicate name prevention** to avoid confusion
- **Persistent storage** using localStorage

### 🎯 Smart Team Generation
- **Intelligent distribution** ensuring even team sizes
- **Technical requirement** - each team needs at least 2 technical members
- **Even number of teams** for balanced competition
- **No single-member teams** - minimum 2 members per team
- **Preference for larger groups** when possible
- **Random team names** with 50+ creative tech-themed options

### 🎨 Team Customization
- **Editable team names** - click to rename any team
- **Team types** with visual indicators:
  - **Viber** (Green gradient)
  - **Specifier** (Orange gradient) 
  - **None** (Gray gradient)
- **Real-time updates** with instant visual feedback

### 📱 Responsive Design
- **Desktop layout** - two-column design for optimal space usage
- **Mobile friendly** - responsive grid that stacks on smaller screens
- **100vh optimization** - fits perfectly in viewport height
- **Modern UI** with gradients, shadows, and smooth animations

## 🛠️ Technology Stack

- **Pure HTML5** - Semantic markup and accessibility
- **CSS3** - Flexbox, Grid, gradients, and animations
- **Vanilla JavaScript** - No external dependencies
- **Local Storage** - Data persistence across sessions

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start creating teams!

### File Structure
```
team-generator/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Application logic and team generation
└── README.md           # This documentation
```

## 📖 How to Use

### Adding Participants
1. Enter participant name in the "Name" field
2. Check "Technical participant" if they have technical skills
3. Click "Add Participant" to add them to the list
4. Participants are automatically saved to localStorage

### Generating Teams
1. Set desired team size (2-10 members)
2. Click "Generate Teams" to create balanced teams
3. Teams are automatically generated with:
   - Random creative names
   - At least 2 technical members per team
   - Even distribution of participants
   - Even number of teams

### Managing Teams
- **Rename teams**: Click on any team name to edit
- **Change team type**: Use radio buttons (None/Viber/Specifier)
- **Visual feedback**: Team colors change based on type selection

### Managing Participants
- **Remove individual**: Click the "×" button next to any participant
- **Clear all**: Click "Clear All" button to remove all participants
- **Confirmation**: Clear All requires confirmation to prevent accidents

## 🎯 Team Generation Algorithm

The app uses a sophisticated algorithm that:

1. **Validates constraints**:
   - Minimum 2 technical members per team
   - Even number of teams
   - No single-member teams

2. **Optimizes distribution**:
   - Prefers fewer teams (larger groups)
   - Minimizes size variance between teams
   - Distributes remainder participants evenly

3. **Provides feedback**:
   - Shows optimal team distribution before generation
   - Displays advice based on participant count
   - Updates suggestions when participants change

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Secondary**: Pink gradient (#f093fb to #f5576c)
- **Danger**: Red gradient (#e53e3e to #c53030)
- **Success**: Green gradient for technical indicators

### Team Type Colors
- **Viber**: Green gradient (#4CAF50)
- **Specifier**: Orange gradient (#FF9800)
- **None**: Gray gradient (#9E9E9E)

### Responsive Breakpoints
- **Desktop**: Two-column layout with side-by-side controls
- **Tablet**: Stacked layout with full-width sections
- **Mobile**: Single column with optimized spacing

## 🔧 Customization

### Adding New Team Names
Edit the `teamNames` array in `script.js`:
```javascript
this.teamNames = [
    'Your Custom Name',
    'Another Team Name',
    // ... existing names
];
```

### Modifying Team Requirements
Change the technical member requirement in `generateTeams()`:
```javascript
if (technicalCount < bestDistribution.teams * 2) {
    // Change multiplier to adjust requirement
}
```

### Styling Changes
All styles are in `styles.css` with clear class names and comments for easy modification.

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Modern CSS techniques for responsive design
- Vanilla JavaScript best practices
- User experience principles for intuitive interfaces

---

**Made with ❤️ for better team organization**
