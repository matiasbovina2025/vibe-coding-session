// Team Creator App - JavaScript functionality

class TeamCreator {
    constructor() {
        this.participants = [];
        this.teams = [];
        this.teamNames = [
            'Code Crusaders', 'Bug Busters', 'Pixel Pirates', 'Data Dragons',
            'Algorithm Avengers', 'Byte Bandits', 'Cloud Commanders', 'Debug Divas',
            'Syntax Squad', 'Binary Builders', 'Cyber Ninjas', 'Logic Legends',
            'Function Fighters', 'Stack Smashers', 'Cache Kings', 'API Assassins',
            'Database Destroyers', 'Frontend Force', 'Backend Bandits', 'Full Stack Storms',
            'React Rangers', 'Vue Vikings', 'Angular Angels', 'Node Ninjas',
            'Python Pythons', 'Java Juggernauts', 'C# Crusaders', 'Go Gurus',
            'Rust Riders', 'Swift Swifts', 'Kotlin Knights', 'TypeScript Titans',
            'DevOps Demons', 'CI/CD Champions', 'Docker Dragons', 'Kubernetes Kings',
            'AWS Warriors', 'Azure Avengers', 'GCP Guardians', 'Cloud Conquerors',
            'Git Gurus', 'Merge Masters', 'Commit Commanders', 'Branch Bandits',
            'Test Titans', 'QA Queens', 'Automation Avengers', 'Selenium Squad',
            'Performance Pirates', 'Security Squad', 'Firewall Fighters', 'Encryption Eagles'
        ];
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.bindEvents();
        this.renderParticipants();
        this.renderTeams();
        this.showInitialAdvice();
    }

    bindEvents() {
        // Participant form submission
        document.getElementById('participant-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addParticipant();
        });

        // Generate teams button
        document.getElementById('generate-teams').addEventListener('click', () => {
            this.generateTeams();
        });

        // Clear all participants button
        document.getElementById('clear-all-participants').addEventListener('click', () => {
            this.clearAllParticipants();
        });
    }

    getRandomTeamName() {
        const availableNames = this.teamNames.filter(name => 
            !this.teams.some(team => team.name === name)
        );
        
        if (availableNames.length === 0) {
            // If all names are used, add a number suffix
            const baseName = this.teamNames[Math.floor(Math.random() * this.teamNames.length)];
            let counter = 1;
            let newName = `${baseName} ${counter}`;
            while (this.teams.some(team => team.name === newName)) {
                counter++;
                newName = `${baseName} ${counter}`;
            }
            return newName;
        }
        
        return availableNames[Math.floor(Math.random() * availableNames.length)];
    }

    addParticipant() {
        const nameInput = document.getElementById('participant-name');
        const isTechnicalInput = document.getElementById('is-technical');
        
        const name = nameInput.value.trim();
        const isTechnical = isTechnicalInput.checked;

        if (!name) {
            alert('Please enter a participant name');
            return;
        }

        // Check for duplicate names
        if (this.participants.some(p => p.name.toLowerCase() === name.toLowerCase())) {
            alert('A participant with this name already exists');
            return;
        }

        const participant = {
            id: Date.now(),
            name: name,
            isTechnical: isTechnical
        };

        this.participants.push(participant);
        this.saveToStorage();
        this.renderParticipants();
        this.showInitialAdvice();
        
        // Clear form
        nameInput.value = '';
        isTechnicalInput.checked = false;
        nameInput.focus();
    }

    removeParticipant(id) {
        this.participants = this.participants.filter(p => p.id !== id);
        this.saveToStorage();
        this.renderParticipants();
        this.renderTeams(); // Clear teams when participants change
        this.showInitialAdvice();
    }

    clearAllParticipants() {
        if (this.participants.length === 0) {
            return;
        }

        if (confirm(`Are you sure you want to remove all ${this.participants.length} participants?`)) {
            this.participants = [];
            this.teams = [];
            this.saveToStorage();
            this.renderParticipants();
            this.renderTeams();
            this.showInitialAdvice();
        }
    }

    generateTeams() {
        console.log('Generate teams clicked');
        const teamSizeInput = document.getElementById('team-size');
        const teamSize = parseInt(teamSizeInput.value);
        console.log('Team size:', teamSize);
        console.log('Participants:', this.participants.length);

        if (this.participants.length === 0) {
            alert('Please add some participants first');
            return;
        }

        if (teamSize < 2) {
            alert('Team size must be at least 2');
            return;
        }

        if (teamSize > this.participants.length) {
            alert('Team size cannot be larger than the number of participants');
            return;
        }

        // Check if we have enough technical participants
        const technicalCount = this.participants.filter(p => p.isTechnical).length;
        const totalParticipants = this.participants.length;
        console.log('Technical count:', technicalCount);
        
        // Calculate optimal team distribution
        let numTeams, teamSizes;
        
        // Try to find the best even number of teams (max 6 teams)
        const possibleTeamCounts = [];
        for (let teams = 2; teams <= Math.min(6, Math.ceil(totalParticipants / teamSize)); teams += 2) {
            const baseSize = Math.floor(totalParticipants / teams);
            const remainder = totalParticipants % teams;
            const sizes = new Array(teams).fill(baseSize);
            
            // Distribute remainder
            for (let i = 0; i < remainder; i++) {
                sizes[i]++;
            }
            
            // Check if any team is smaller than the target team size
            const hasSmallTeam = sizes.some(size => size < teamSize);
            const hasSingleMember = sizes.some(size => size === 1);
            
            possibleTeamCounts.push({
                teams: teams,
                sizes: sizes,
                hasSingleMember: hasSingleMember,
                hasSmallTeam: hasSmallTeam,
                maxDiff: Math.max(...sizes) - Math.min(...sizes),
                minSize: Math.min(...sizes)
            });
        }
        
        console.log('Possible team counts:', possibleTeamCounts);
        
        // Choose the best distribution (avoid single members, prefer teams >= teamSize, prefer fewer teams)
        const bestDistribution = possibleTeamCounts
            .filter(d => d.maxDiff <= 1)
            .sort((a, b) => {
                if (a.hasSingleMember !== b.hasSingleMember) {
                    return a.hasSingleMember ? 1 : -1; // Avoid single members
                }
                if (a.hasSmallTeam !== b.hasSmallTeam) {
                    return a.hasSmallTeam ? 1 : -1; // Prefer teams >= teamSize
                }
                return b.teams - a.teams; // Prefer fewer teams
            })[0];
        
        console.log('Best distribution:', bestDistribution);
        
        if (!bestDistribution) {
            alert('Cannot create teams with the current participant count.');
            return;
        }
        
        if (technicalCount < bestDistribution.teams * 2) {
            alert(`Cannot create teams: You have ${technicalCount} technical participants but need at least ${bestDistribution.teams * 2} for teams with 2 technical members each. Please add more technical participants or remove some non-technical participants.`);
            return;
        }

        // Show team advice
        this.showTeamAdvice(totalParticipants, teamSize, bestDistribution);

        console.log('Creating teams...');
        this.teams = this.createTeams(teamSize, bestDistribution);
        console.log('Teams created:', this.teams);
        this.saveToStorage();
        this.renderTeams();
    }

    showTeamAdvice(totalParticipants, teamSize, distribution) {
        const adviceContainer = document.getElementById('team-advice');
        const teamSizes = distribution.sizes;
        const teamCount = distribution.teams;
        
        let advice = `💡 For ${totalParticipants} participants: `;
        if (teamSizes.every(size => size === teamSize)) {
            advice += `${teamCount} teams of ${teamSize} each`;
        } else {
            const sizeGroups = {};
            teamSizes.forEach(size => {
                sizeGroups[size] = (sizeGroups[size] || 0) + 1;
            });
            
            const sizeText = Object.entries(sizeGroups)
                .map(([size, count]) => `${count} team${count > 1 ? 's' : ''} of ${size}`)
                .join(' + ');
            
            advice += `${teamCount} teams: ${sizeText}`;
        }
        
        adviceContainer.textContent = advice;
        adviceContainer.style.display = 'block';
    }

    showInitialAdvice() {
        const adviceContainer = document.getElementById('team-advice');
        const teamSizeInput = document.getElementById('team-size');
        const teamSize = parseInt(teamSizeInput.value);
        const totalParticipants = this.participants.length;
        
        if (totalParticipants === 0) {
            adviceContainer.textContent = '💡 Add participants to see team suggestions';
            adviceContainer.style.display = 'block';
            return;
        }
        
        // Calculate optimal team distribution for current participants
        const possibleTeamCounts = [];
        for (let teams = 2; teams <= Math.min(6, Math.ceil(totalParticipants / teamSize)); teams += 2) {
            const baseSize = Math.floor(totalParticipants / teams);
            const remainder = totalParticipants % teams;
            const sizes = new Array(teams).fill(baseSize);
            
            // Distribute remainder
            for (let i = 0; i < remainder; i++) {
                sizes[i]++;
            }
            
            // Check if any team is smaller than the target team size
            const hasSmallTeam = sizes.some(size => size < teamSize);
            const hasSingleMember = sizes.some(size => size === 1);
            
            possibleTeamCounts.push({
                teams: teams,
                sizes: sizes,
                hasSingleMember: hasSingleMember,
                hasSmallTeam: hasSmallTeam,
                maxDiff: Math.max(...sizes) - Math.min(...sizes),
                minSize: Math.min(...sizes)
            });
        }
        
        // Choose the best distribution
        const bestDistribution = possibleTeamCounts
            .filter(d => d.maxDiff <= 1)
            .sort((a, b) => {
                if (a.hasSingleMember !== b.hasSingleMember) {
                    return a.hasSingleMember ? 1 : -1;
                }
                if (a.hasSmallTeam !== b.hasSmallTeam) {
                    return a.hasSmallTeam ? 1 : -1;
                }
                return b.teams - a.teams;
            })[0];
        
        if (bestDistribution) {
            this.showTeamAdvice(totalParticipants, teamSize, bestDistribution);
        }
    }

    createTeams(teamSize, distribution) {
        // Create a copy of participants and shuffle
        const shuffledParticipants = [...this.participants].sort(() => Math.random() - 0.5);
        
        // Separate technical and non-technical participants
        const technicalParticipants = shuffledParticipants.filter(p => p.isTechnical);
        const nonTechnicalParticipants = shuffledParticipants.filter(p => !p.isTechnical);
        
        const numTeams = distribution.teams;
        const teamSizes = distribution.sizes;
        
        const teams = [];
        
        // First, ensure each team gets exactly two technical participants
        for (let i = 0; i < numTeams; i++) {
            const team = {
                id: i + 1,
                name: this.getRandomTeamName(),
                type: 'none', // Default type
                members: []
            };
            
            // Each team MUST have at least two technical participants
            if (technicalParticipants.length > 0) {
                team.members.push(technicalParticipants.shift());
            }
            if (technicalParticipants.length > 0) {
                team.members.push(technicalParticipants.shift());
            }
            
            teams.push(team);
        }
        
        // Then fill remaining spots with available participants
        for (let i = 0; i < numTeams; i++) {
            const team = teams[i];
            const currentTeamSize = teamSizes[i];
            
            // Add remaining technical participants if there are spots
            while (team.members.length < currentTeamSize && technicalParticipants.length > 0) {
                team.members.push(technicalParticipants.shift());
            }
            
            // Add non-technical participants to fill remaining spots
            while (team.members.length < currentTeamSize && nonTechnicalParticipants.length > 0) {
                team.members.push(nonTechnicalParticipants.shift());
            }
        }
        
        // Distribute any remaining participants across teams
        const allRemaining = [...technicalParticipants, ...nonTechnicalParticipants];
        let teamIndex = 0;
        for (const participant of allRemaining) {
            if (teamIndex < teams.length) {
                teams[teamIndex].members.push(participant);
                teamIndex = (teamIndex + 1) % teams.length;
            }
        }
        
        return teams;
    }

    renderParticipants() {
        const container = document.getElementById('participants-list');
        
        if (this.participants.length === 0) {
            container.innerHTML = '<p class="empty-state">No participants added yet</p>';
            return;
        }

        const html = this.participants.map(participant => `
            <div class="participant-item">
                <div class="participant-info">
                    <span class="participant-name">${this.escapeHtml(participant.name)}</span>
                    ${participant.isTechnical ? '<span class="technical-badge">T</span>' : ''}
                </div>
                <button class="remove-btn" onclick="teamCreator.removeParticipant(${participant.id})">
                    Remove
                </button>
            </div>
        `).join('');

        container.innerHTML = html;
    }

    updateTeamName(teamId, newName) {
        const team = this.teams.find(t => t.id === teamId);
        if (team) {
            team.name = newName.trim() || `Team ${teamId}`;
            this.saveToStorage();
            this.renderTeams();
        }
    }

    updateTeamType(teamId, newType) {
        const team = this.teams.find(t => t.id === teamId);
        if (team) {
            team.type = newType;
            this.saveToStorage();
            this.renderTeams();
        }
    }

    renderTeams() {
        const container = document.getElementById('teams-display');
        
        if (this.teams.length === 0) {
            container.innerHTML = '<p class="empty-state">No teams generated yet</p>';
            return;
        }

        const html = this.teams.map(team => `
            <div class="team-box ${team.type}">
                <div class="team-header">
                    <input 
                        type="text" 
                        value="${this.escapeHtml(team.name)}" 
                        class="team-name-input"
                        onblur="teamCreator.updateTeamName(${team.id}, this.value)"
                        onkeypress="if(event.key==='Enter') { teamCreator.updateTeamName(${team.id}, this.value); this.blur(); }"
                        maxlength="20"
                    >
                    <div class="team-type-selector">
                        <label class="team-type-label">
                            <input 
                                type="radio" 
                                name="team-type-${team.id}" 
                                value="none" 
                                ${team.type === 'none' || !team.type ? 'checked' : ''}
                                onchange="teamCreator.updateTeamType(${team.id}, 'none')"
                            >
                            <span class="team-type-option none">None</span>
                        </label>
                        <label class="team-type-label">
                            <input 
                                type="radio" 
                                name="team-type-${team.id}" 
                                value="viber" 
                                ${team.type === 'viber' ? 'checked' : ''}
                                onchange="teamCreator.updateTeamType(${team.id}, 'viber')"
                            >
                            <span class="team-type-option viber">Viber</span>
                        </label>
                        <label class="team-type-label">
                            <input 
                                type="radio" 
                                name="team-type-${team.id}" 
                                value="specifier" 
                                ${team.type === 'specifier' ? 'checked' : ''}
                                onchange="teamCreator.updateTeamType(${team.id}, 'specifier')"
                            >
                            <span class="team-type-option specifier">Specifier</span>
                        </label>
                    </div>
                </div>
                <ul class="team-members">
                    ${team.members.map(member => `
                        <li class="team-member technical-member">
                            <span class="member-name">${this.escapeHtml(member.name)}</span>
                            ${member.isTechnical ? '<span class="member-technical">T</span>' : ''}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');

        container.innerHTML = html;
    }

    saveToStorage() {
        localStorage.setItem('teamCreatorParticipants', JSON.stringify(this.participants));
        localStorage.setItem('teamCreatorTeams', JSON.stringify(this.teams));
    }

    loadFromStorage() {
        // Load participants
        const participantsData = localStorage.getItem('teamCreatorParticipants');
        if (participantsData) {
            try {
                this.participants = JSON.parse(participantsData) || [];
            } catch (e) {
                console.error('Error loading participants from storage:', e);
                this.participants = [];
            }
        }

        // Load teams
        const teamsData = localStorage.getItem('teamCreatorTeams');
        if (teamsData) {
            try {
                this.teams = JSON.parse(teamsData) || [];
            } catch (e) {
                console.error('Error loading teams from storage:', e);
                this.teams = [];
            }
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the app when the page loads
let teamCreator;
document.addEventListener('DOMContentLoaded', () => {
    teamCreator = new TeamCreator();
});
