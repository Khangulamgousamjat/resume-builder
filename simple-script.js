// ===== RESUME BUILDER WITH 28 TEMPLATES + DARK MODE + PREVIEW + FIXED TEXT COLORS =====

const TEMPLATE_LIBRARY = [
    { id: 'professional', name: 'Professional', tagline: 'Clean corporate lines', badge: 'Top pick', gradient: 'linear-gradient(135deg, #6f7bf7, #5b54fa)', accent: '#2f80ed', headerBg: '#eef5ff', headerText: '#000000', bodyBg: '#ffffff', textColor: '#0f172a', layout: 'single', fontSize: '16px', cardText: '#000000' },
    { id: 'engineer', name: 'Engineer Pro', tagline: 'Technical & structured', badge: 'Engineering', gradient: 'linear-gradient(135deg, #1e3c72, #2a5298)', accent: '#1e40af', headerBg: '#dbeafe', headerText: '#1e3a8a', bodyBg: '#ffffff', textColor: '#1f2937', layout: 'split', fontSize: '16px', cardText: '#ffffff' },
    { id: 'doctor', name: 'Medical Professional', tagline: 'Healthcare focused', badge: 'Healthcare', gradient: 'linear-gradient(135deg, #00695c, #00897b)', accent: '#047857', headerBg: '#d1fae5', headerText: '#065f46', bodyBg: '#ffffff', textColor: '#1f2937', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'nurse', name: 'Nurse', tagline: 'Compassionate care', badge: 'Nursing', gradient: 'linear-gradient(135deg, #059669, #10b981)', accent: '#059669', headerBg: '#ecfdf5', headerText: '#064e3b', bodyBg: '#ffffff', textColor: '#1f2937', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'iti', name: 'ITI Student', tagline: 'Skill-based format', badge: 'Technical', gradient: 'linear-gradient(135deg, #d97706, #f59e0b)', accent: '#ea580c', headerBg: '#fed7aa', headerText: '#7c2d12', bodyBg: '#ffffff', textColor: '#1f2937', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'indian', name: 'Indian Style', tagline: 'Traditional professional', badge: 'Indian', gradient: 'linear-gradient(135deg, #ff9933, #ffffff, #138808)', accent: '#ff6b00', headerBg: '#fff7ed', headerText: '#7c2d12', bodyBg: '#ffffff', textColor: '#1f2937', layout: 'single', fontSize: '16px', cardText: '#000000' },
    { id: 'corporate', name: 'Corporate Elite', tagline: 'Executive presence', badge: 'Corporate', gradient: 'linear-gradient(135deg, #1f2937, #374151)', accent: '#1f2937', headerBg: '#f3f4f6', headerText: '#111827', bodyBg: '#ffffff', textColor: '#1f2937', layout: 'split', fontSize: '16px', cardText: '#ffffff' },
    { id: 'teacher', name: 'Teacher', tagline: 'Educational excellence', badge: 'Education', gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)', accent: '#7c3aed', headerBg: '#ede9fe', headerText: '#5b21b6', bodyBg: '#ffffff', textColor: '#1f2937', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'classic', name: 'Classic', tagline: 'Timeless serif style', badge: 'Elegant', gradient: 'linear-gradient(135deg, #f8b500, #fceabb)', accent: '#b36a00', headerBg: '#fdf3e7', headerText: '#1a1a1a', bodyBg: '#ffffff', textColor: '#3c2a21', layout: 'single', fontSize: '16px', cardText: '#000000' },
    { id: 'executive', name: 'Executive', tagline: 'Boardroom ready', badge: 'Premium', gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', accent: '#1a3c7c', headerBg: '#f4f6fb', headerText: '#000000', bodyBg: '#ffffff', textColor: '#0f172a', layout: 'split', fontSize: '16px', cardText: '#ffffff' },
    { id: 'creative', name: 'Creative', tagline: 'Vibrant storytelling', badge: 'New', gradient: 'linear-gradient(135deg, #ff6fd8, #3813c2)', accent: '#f05a7e', headerBg: '#3813c2', headerText: '#1f1f2b', bodyBg: '#ffffff', textColor: '#1f1f2b', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'minimalist', name: 'Minimalist', tagline: 'Whitespace first', badge: 'Focus', gradient: 'linear-gradient(135deg, #fdfbfb, #ebedee)', accent: '#222222', headerBg: '#f7f7f9', headerText: '#000000', bodyBg: '#ffffff', textColor: '#111111', layout: 'single', fontSize: '16px', cardText: '#000000' },
    { id: 'elegant', name: 'Elegant', tagline: 'Editorial flair', badge: 'Luxury', gradient: 'linear-gradient(135deg, #c471ed, #f64f59)', accent: '#8e44ad', headerBg: '#f9f7f8', headerText: '#000000', bodyBg: '#ffffff', textColor: '#2d213f', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'tech', name: 'Tech Noir', tagline: 'Dark futuristic', badge: 'Neon', gradient: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)', accent: '#00ffb9', headerBg: '#111827', headerText: '#e5e7eb', bodyBg: '#0f172a', textColor: '#e2e8f0', layout: 'split', fontSize: '16px' },
    { id: 'blue', name: 'Deep Blue', tagline: 'Cool gradient blocks', badge: 'Calm', gradient: 'linear-gradient(135deg, #1a2980, #26d0ce)', accent: '#1a2980', headerBg: '#26d0ce', headerText: '#0f172a', bodyBg: '#ffffff', textColor: '#0f172a', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'green', name: 'Eco Green', tagline: 'Fresh and vibrant', badge: 'Nature', gradient: 'linear-gradient(135deg, #11998e, #38ef7d)', accent: '#1b8d5f', headerBg: '#f0fff4', headerText: '#000000', bodyBg: '#ffffff', textColor: '#0f5132', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'red', name: 'Bold Red', tagline: 'Confident statements', badge: 'Impact', gradient: 'linear-gradient(135deg, #f857a6, #ff5858)', accent: '#c0392b', headerBg: '#fff0f0', headerText: '#000000', bodyBg: '#ffffff', textColor: '#3b0d11', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'purple', name: 'Royal Purple', tagline: 'Rich hues', badge: 'Vibrant', gradient: 'linear-gradient(135deg, #9d50bb, #6e48aa)', accent: '#6e48aa', headerBg: '#f6f0ff', headerText: '#000000', bodyBg: '#ffffff', textColor: '#2d213f', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'orange', name: 'Sunburst', tagline: 'Warm and friendly', badge: 'Bright', gradient: 'linear-gradient(135deg, #f6d365, #fda085)', accent: '#d35400', headerBg: '#fff6ed', headerText: '#000000', bodyBg: '#ffffff', textColor: '#4a2700', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'pink', name: 'Pastel Pink', tagline: 'Soft gradients', badge: 'Playful', gradient: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)', accent: '#c471ed', headerBg: '#fff5f7', headerText: '#000000', bodyBg: '#ffffff', textColor: '#512c62', layout: 'single', fontSize: '16px', cardText: '#000000' },
    { id: 'dark', name: 'Midnight Glass', tagline: 'Glassmorphic', badge: 'Dark', gradient: 'linear-gradient(135deg, #000428, #004e92)', accent: '#4dd0e1', headerBg: '#0f172a', headerText: '#e0f7fa', bodyBg: '#0b1120', textColor: '#e2e8f0', layout: 'split', fontSize: '16px' },
    { id: 'ocean', name: 'Ocean Breeze', tagline: 'Calm two-tone', badge: 'Fresh', gradient: 'linear-gradient(135deg, #43cea2, #185a9d)', accent: '#1c7293', headerBg: '#e0f7ff', headerText: '#000000', bodyBg: '#ffffff', textColor: '#0f3959', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'sunset', name: 'Sunset Fade', tagline: 'Golden gradient', badge: 'Warm', gradient: 'linear-gradient(135deg, #f7971e, #ffd200)', accent: '#d97706', headerBg: '#fff8ec', headerText: '#000000', bodyBg: '#ffffff', textColor: '#422006', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'forest', name: 'Forest Trail', tagline: 'Earthy textures', badge: 'Grounded', gradient: 'linear-gradient(135deg, #134e5e, #71b280)', accent: '#0f5132', headerBg: '#edf7f2', headerText: '#000000', bodyBg: '#ffffff', textColor: '#0a3622', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'midnight', name: 'Midnight', tagline: 'Contrasty', badge: 'Noir', gradient: 'linear-gradient(135deg, #232526, #414345)', accent: '#00c6ff', headerBg: '#1f1f1f', headerText: '#f5f5f5', bodyBg: '#0c0c0c', textColor: '#e5e5e5', layout: 'split', fontSize: '16px' },
    { id: 'vintage', name: 'Vintage Paper', tagline: 'Typewriter charm', badge: 'Retro', gradient: 'linear-gradient(135deg, #d1913c, #ffd194)', accent: '#8c5319', headerBg: '#f9f4ee', headerText: '#000000', bodyBg: '#fffdf7', textColor: '#3e2f1c', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'neon', name: 'Neon Pulse', tagline: 'Electric gradients', badge: 'Glow', gradient: 'linear-gradient(135deg, #12c2e9, #c471ed, #f64f59)', accent: '#12c2e9', headerBg: '#000000', headerText: '#f8f9ff', bodyBg: '#0f0f1a', textColor: '#dfe3f0', layout: 'split', fontSize: '16px' },
    { id: 'metallic', name: 'Metallic', tagline: 'Polished gradients', badge: 'Pro', gradient: 'linear-gradient(135deg, #bdc3c7, #2c3e50)', accent: '#546e7a', headerBg: '#f4f6f8', headerText: '#000000', bodyBg: '#ffffff', textColor: '#0f172a', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'abstract', name: 'Abstract', tagline: 'Playful shapes', badge: 'Artful', gradient: 'linear-gradient(135deg, #ff9966, #ff5e62)', accent: '#ff5e62', headerBg: '#fff5f2', headerText: '#000000', bodyBg: '#ffffff', textColor: '#2b1320', layout: 'single', fontSize: '16px', cardText: '#ffffff' },
    { id: 'blackwhite', name: 'Black & White', tagline: 'Simple and clean', badge: 'Classic', gradient: 'linear-gradient(135deg, #333333, #555555)', accent: '#000000', headerBg: '#ffffff', headerText: '#000000', bodyBg: '#ffffff', textColor: '#000000', layout: 'single', fontSize: '16px', noBorder: true, cardText: '#ffffff' },
    { id: 'darkwhite', name: 'Dark Elegance', tagline: 'Dark with white text', badge: 'Elegant', gradient: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)', accent: '#ffffff', headerBg: '#1a1a1a', headerText: '#ffffff', bodyBg: '#2d2d2d', textColor: '#ffffff', layout: 'single', fontSize: '16px' },
    { id: 'timesnewroman', name: 'Times New Roman', tagline: 'Classic serif font', badge: 'Classic', gradient: 'linear-gradient(135deg, #404040, #606060)', accent: '#000000', headerBg: '#ffffff', headerText: '#000000', bodyBg: '#ffffff', textColor: '#000000', layout: 'single', fontSize: '16px', fontFamily: '"Times New Roman", serif', noBorder: true, cardText: '#ffffff' }
];

const TEMPLATE_LOOKUP = TEMPLATE_LIBRARY.reduce((acc, t) => { acc[t.id] = t; return acc; }, {});
const THEME_STORAGE_KEY = 'resumeBuilderTheme';

let currentTemplate = 'professional';
let photoData = null; // Store photo as base64
let sectionOrder = ['education', 'skills', 'experience', 'projects', 'achievements']; // Draggable sections order
let autosaveTimer = null;

const API_URL = 'http://localhost:5000/api';

// ========== API CLIENT FUNCTIONS ==========
const API = {
    async register(email, password, name) {
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, name })
            });
            const data = await response.json();
            if (response.ok) {
                authToken = data.token;
                currentUser = data.user;
                localStorage.setItem('resumeBuilderToken', authToken);
            }
            return { success: response.ok, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    async login(email, password) {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                authToken = data.token;
                currentUser = data.user;
                localStorage.setItem('resumeBuilderToken', authToken);
            }
            return { success: response.ok, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    async saveResume(title, data, template) {
        if (!authToken) return { success: false, error: 'Not authenticated' };
        try {
            const response = await fetch(`${API_URL}/save-resume`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ title, data, template })
            });
            const result = await response.json();
            return { success: response.ok, data: result };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    async getHistory() {
        if (!authToken) return { success: false, error: 'Not authenticated' };
        try {
            const response = await fetch(`${API_URL}/history`, {
                headers: { 'Authorization': `Bearer ${authToken}` }
            });
            const data = await response.json();
            return { success: response.ok, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    async getResume(id) {
        if (!authToken) return { success: false, error: 'Not authenticated' };
        try {
            const response = await fetch(`${API_URL}/resume/${id}`, {
                headers: { 'Authorization': `Bearer ${authToken}` }
            });
            const data = await response.json();
            return { success: response.ok, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    async deleteResume(id) {
        if (!authToken) return { success: false, error: 'Not authenticated' };
        try {
            const response = await fetch(`${API_URL}/resume/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${authToken}` }
            });
            const data = await response.json();
            return { success: response.ok, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    logout() {
        authToken = null;
        currentUser = null;
        localStorage.removeItem('resumeBuilderToken');
    },

    async improveObjective(objective, jobTitle, industry) {
        if (!authToken) return { success: false, error: 'Not authenticated' };
        try {
            const response = await fetch(`${API_URL}/ai/improve-objective`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ objective, jobTitle, industry })
            });
            const data = await response.json();
            return { success: response.ok, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    async improveBullets(bullets, jobTitle) {
        if (!authToken) return { success: false, error: 'Not authenticated' };
        try {
            const response = await fetch(`${API_URL}/ai/improve-bullets`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ bullets, jobTitle })
            });
            const data = await response.json();
            return { success: response.ok, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    async generateSkills(field, experience, currentSkills) {
        if (!authToken) return { success: false, error: 'Not authenticated' };
        try {
            const response = await fetch(`${API_URL}/ai/generate-skills`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ field, experience, currentSkills })
            });
            const data = await response.json();
            return { success: response.ok, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },

    async jobSpecificResume(resumeData, jobDescription) {
        if (!authToken) return { success: false, error: 'Not authenticated' };
        try {
            const response = await fetch(`${API_URL}/ai/job-specific-resume`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ resumeData, jobDescription })
            });
            const data = await response.json();
            return { success: response.ok, data };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
};

const elements = {
    resumeForm: document.getElementById('resume-form'),
    templateGrid: document.getElementById('template-grid'),
    templateCount: document.getElementById('template-count'),
    themeToggle: document.getElementById('theme-toggle'),
    previewModal: document.getElementById('preview-modal'),
    templatePreviewContent: document.getElementById('template-preview-content'),
    closeModalBtn: document.querySelector('.close-modal'),
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    renderTemplates();
    setupFormHandlers();
    setupDynamicFields();
    setupThemeToggle();
    setupPreviewModal();
    setupPhotoUpload();
    setupDraggableSections();
    setupAutosave();
    setupChangeTemplateButton();
});

// Render templates with improved selected badge
function renderTemplates() {
    if (!elements.templateGrid) return;

    elements.templateGrid.innerHTML = '';
    TEMPLATE_LIBRARY.forEach((template) => {
        const card = document.createElement('div');
        card.className = 'template-card';
        card.dataset.template = template.id;
        card.style.cursor = 'pointer';
        card.style.position = 'relative';

        const isActive = template.id === currentTemplate;

        card.innerHTML = `
            <div class="template-thumbnail" style="background: ${template.gradient}; height: 320px; border-radius: 12px 12px 0 0; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 16px;">
                <div style="width: 100%; height: 100%; background: ${template.bodyBg}; border-radius: 6px; padding: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.2); overflow: hidden; font-family: Arial, sans-serif;">
                    <!-- Header -->
                    <div style="text-align: center; padding: 12px 0; border-bottom: 2px solid ${template.accent}; margin-bottom: 10px;">
                        <div style="font-size: 13px; font-weight: 900; color: ${template.headerText || template.textColor}; letter-spacing: 0.5px; margin-bottom: 3px;">ROHIT GURUNATH SHARMA</div>
                        <div style="font-size: 7px; color: ${template.headerText || template.textColor}; opacity: 0.8;">Mumbai, INDIA • rohitsharma@email.com • +91 1234567890</div>
                    </div>
                    
                    <!-- Profile -->
                    <div style="margin-bottom: 8px;">
                        <div style="font-size: 8px; font-weight: 800; color: ${template.accent}; margin-bottom: 4px; letter-spacing: 0.5px;">PROFILE</div>
                        <div style="font-size: 6px; line-height: 1.3; color: ${template.textColor}; opacity: 0.85;">Experienced professional seeking a challenging role to leverage skills and expertise.</div>
                    </div>
                    
                    <!-- Experience -->
                    <div style="margin-bottom: 8px;">
                        <div style="font-size: 8px; font-weight: 800; color: ${template.accent}; margin-bottom: 4px; letter-spacing: 0.5px;">EXPERIENCE</div>
                        <div style="margin-bottom: 5px;">
                            <div style="font-size: 7px; font-weight: 700; color: ${template.textColor};">Senior Batter</div>
                            <div style="font-size: 6px; color: ${template.textColor}; opacity: 0.7; margin-bottom: 2px;">BCCI • from 2008</div>
                            <div style="font-size: 5.5px; line-height: 1.4; color: ${template.textColor}; opacity: 0.75;">• Lead the Team as a captain and won multiple trophies</div>
                        </div>
                    </div>
                    
                    <!-- Education -->
                    <div style="margin-bottom: 8px;">
                        <div style="font-size: 8px; font-weight: 800; color: ${template.accent}; margin-bottom: 4px; letter-spacing: 0.5px;">EDUCATION</div>
                        <div style="font-size: 6.5px; font-weight: 700; color: ${template.textColor};">Has PHd in smashing Sixes</div>
                        <div style="font-size: 6px; color: ${template.textColor}; opacity: 0.7;">In Wankhede Stedium • 2000</div>
                    </div>
                    
                    <!-- Skills -->
                    <div>
                        <div style="font-size: 8px; font-weight: 800; color: ${template.accent}; margin-bottom: 5px; letter-spacing: 0.5px;">SKILLS</div>
                        <div style="display: flex; gap: 3px; flex-wrap: wrap;">
                            <span style="font-size: 5.5px; background: ${template.accent}25; color: ${template.accent}; padding: 3px 6px; border-radius: 8px; font-weight: 600; border: 0.5px solid ${template.accent}40;">Hit Big Sixes</span>
                            <span style="font-size: 5.5px; background: ${template.accent}25; color: ${template.accent}; padding: 3px 6px; border-radius: 8px; font-weight: 600; border: 0.5px solid ${template.accent}40;">Team Leadership</span>
                            <span style="font-size: 5.5px; background: ${template.accent}25; color: ${template.accent}; padding: 3px 6px; border-radius: 8px; font-weight: 600; border: 0.5px solid ${template.accent}40;">Championship Winner</span>
                            <span style="font-size: 5.5px; background: ${template.accent}25; color: ${template.accent}; padding: 3px 6px; border-radius: 8px; font-weight: 600; border: 0.5px solid ${template.accent}40;">Trophy Hunter</span>
                        </div>
                    </div>
                </div>
                ${isActive ? '<div style="position: absolute; top: 12px; right: 12px; background: #10b981; color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.4);">✓ Selected</div>' : ''}
            </div>
            <div class="template-info" style="padding: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
                    <div>
                        <h3 style="margin: 0 0 4px 0; font-size: 16px; font-weight: 700; color: inherit;">${template.name}</h3>
                        <p style="margin: 0; font-size: 13px; color: #64748b; font-weight: 500;">${template.tagline}</p>
                    </div>
                    <span style="background: ${template.gradient}; padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 700; color: white; white-space: nowrap;">${template.badge}</span>
                </div>
                <div style="display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap;">
                    <span style="font-size: 11px; color: #64748b; background: #f1f5f9; padding: 4px 10px; border-radius: 6px; font-weight: 600;">${template.layout === 'split' ? '📑 Two Column' : '📄 Single Column'}</span>
                    <span style="font-size: 11px; color: #64748b; background: #f1f5f9; padding: 4px 10px; border-radius: 6px; font-weight: 600;">📏 ${template.fontSize}</span>
                </div>
                <button type="button" class="use-template-btn" style="margin-top: 12px; width: 100%; padding: 12px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 700; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">✨ Make Your Resume in This Style</button>
                <button type="button" class="preview-btn" style="margin-top: 8px; width: 100%; padding: 10px 16px; background: white; color: #3b82f6; border: 1px solid #e5e7eb; border-radius: 8px; cursor: pointer; font-size: 13px; font-weight: 600; box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: all 0.2s ease;">👁️ Full Preview</button>
            </div>
        `;

        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('preview-btn') && !e.target.classList.contains('use-template-btn')) {
                selectTemplate(template.id);
            }
        });

        // Use Template Button Handler
        card.querySelector('.use-template-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            selectTemplate(template.id);
        });

        // Preview Button Handler
        card.querySelector('.preview-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            openTemplatePreview(template.id);
        });

        elements.templateGrid.appendChild(card);
    });

    if (elements.templateCount) {
        elements.templateCount.textContent = `Ready Templates`;
    }
}

function selectTemplate(templateId) {
    currentTemplate = templateId;
    renderTemplates();

    // Hide template selection section and show form sections
    const templateSection = document.querySelector('.template-preview');
    const templateNotice = document.querySelector('.template-selection-notice');
    const templateHeader = document.getElementById('template-heading');
    const templatePickerHead = document.querySelector('.template-picker-head');
    const formSections = document.getElementById('form-sections');

    if (formSections) {
        formSections.style.display = 'block';

        // Hide template selection elements
        if (templateSection) templateSection.style.display = 'none';
        if (templateNotice) templateNotice.style.display = 'none';
        if (templateHeader) templateHeader.style.display = 'none';
        if (templatePickerHead) templatePickerHead.style.display = 'none';

        // Scroll to top of form
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }
}

// Setup Change Template Button
function setupChangeTemplateButton() {
    // Use event delegation on document to handle the button click
    document.addEventListener('click', (e) => {
        // Check if the clicked element or its parent is the change template button
        const target = e.target.closest('#change-template-btn') || e.target.closest('.change-template-btn');

        if (target) {
            e.preventDefault();
            e.stopPropagation();

            console.log('Change Template button clicked'); // Debug log

            // Show template selection section and hide form sections
            const templateSection = document.querySelector('.template-preview');
            const templateNotice = document.querySelector('.template-selection-notice');
            const templateHeader = document.getElementById('template-heading');
            const templatePickerHead = document.querySelector('.template-picker-head');
            const formSections = document.getElementById('form-sections');

            console.log('Elements found:', { templateSection, templateNotice, templateHeader, templatePickerHead, formSections }); // Debug log

            // Show template elements
            if (templateSection) {
                templateSection.style.display = 'grid';
                console.log('Template section shown');
            }
            if (templateNotice) {
                templateNotice.style.display = 'block';
                console.log('Template notice shown');
            }
            if (templateHeader) {
                templateHeader.style.display = 'block';
                console.log('Template header shown');
            }
            if (templatePickerHead) {
                templatePickerHead.style.display = 'flex';
                console.log('Template picker head shown');
            }

            // Hide form sections
            if (formSections) {
                formSections.style.display = 'none';
                console.log('Form sections hidden');
            }

            // Scroll to top
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }
    });
}

// Simple function for onclick handler
function goBackToTemplates() {
    // Show template selection section and hide form sections
    const templateSection = document.querySelector('.template-preview');
    const templateNotice = document.querySelector('.template-selection-notice');
    const templateHeader = document.getElementById('template-heading');
    const templatePickerHead = document.querySelector('.template-picker-head');
    const formSections = document.getElementById('form-sections');

    // Show template elements
    if (templateSection) templateSection.style.display = 'grid';
    if (templateNotice) templateNotice.style.display = 'block';
    if (templateHeader) templateHeader.style.display = 'block';
    if (templatePickerHead) templatePickerHead.style.display = 'flex';

    // Hide form sections
    if (formSections) formSections.style.display = 'none';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupPreviewModal() {
    if (elements.closeModalBtn) {
        elements.closeModalBtn.addEventListener('click', closePreview);
    }
    if (elements.previewModal) {
        elements.previewModal.addEventListener('click', (e) => {
            if (e.target === elements.previewModal) {
                closePreview();
            }
        });
    }
}

function openTemplatePreview(templateId) {
    const template = TEMPLATE_LOOKUP[templateId];
    if (!template || !elements.templatePreviewContent) return;

    const sampleData = {
        template: templateId,
        fullName: 'Rohit Sharma',
        location: 'Mumbai, INDIA',
        phone: '+91 1234567890',
        email: 'rohitsharma@email.com',
        linkedin: 'linkedin.com/in/Rohit sharma',
        objective: 'Experienced professional seeking a challenging role to leverage skills and expertise.',
        education: [
            { institution: 'In Wankhede Stedium', degree: 'Has PHd in smashing Sixes and stark', grade: 'GPA 10/10', year: '2000' }
        ],
        experience: [
            { title: 'Batter (SIX HITTER )', company: 'BCCI', duration: 'from 2008', description: 'Lead the Team as a captain and won multiple trophies' }
        ],
        projects: [
            { title: '6th mumbai title ', description: 'Developed a successful team that won the championship' }
        ],
        achievements: ['t20 world cup 2024 and champions trophy 2025', 'Austrelia Official Father'],
        skills: ['Hit Big Sixes, Has highest Score 264 in odi and most six hitter in the world', 'if play 10 over no one can stop to win the match']
    };

    elements.templatePreviewContent.innerHTML = generateResumeHTML(sampleData);
    elements.previewModal.style.display = 'block';
}

function closePreview() {
    if (elements.previewModal) {
        elements.previewModal.style.display = 'none';
    }
}

function setupThemeToggle() {
    if (!elements.themeToggle) return;

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light';
    applyTheme(savedTheme);
    elements.themeToggle.checked = savedTheme === 'dark';

    elements.themeToggle.addEventListener('change', () => {
        applyTheme(elements.themeToggle.checked ? 'dark' : 'light');
    });
}

function applyTheme(mode) {
    const isDark = mode === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
}

function setupFormHandlers() {
    if (elements.resumeForm) {
        elements.resumeForm.addEventListener('submit', (event) => {
            event.preventDefault();
            downloadResume();
        });
    }
}

function setupDynamicFields() {
    const addEducationBtn = document.getElementById('add-education');
    const addExperienceBtn = document.getElementById('add-experience');
    const addProjectBtn = document.getElementById('add-project');
    const addAchievementBtn = document.getElementById('add-achievement');

    if (addEducationBtn) {
        addEducationBtn.addEventListener('click', () => {
            const section = document.getElementById('education-section');
            const entry = document.createElement('div');
            entry.className = 'education-entry';
            entry.innerHTML = `
                <div class="input-with-label">
                    <label>Institution Name</label>
                    <input type="text" class="institution" placeholder="e.g., Mumbai University">
                </div>
                <div class="input-with-label">
                    <label>Degree</label>
                    <input type="text" class="degree" placeholder="e.g., Bachelor of Engineering">
                </div>
                <div class="input-with-label">
                    <label>Grade/CGPA</label>
                    <input type="text" class="grade" placeholder="e.g., 8.5 CGPA or 85%">
                </div>
                <div class="input-with-label">
                    <label>Year</label>
                    <input type="text" class="year" placeholder="e.g., 2020-2024">
                </div>
                <button type="button" class="remove-btn">Remove</button>
            `;
            section.appendChild(entry);
            entry.querySelector('.remove-btn').addEventListener('click', () => entry.remove());
        });
    }

    if (addExperienceBtn) {
        addExperienceBtn.addEventListener('click', () => {
            const section = document.getElementById('experience-section');
            const entry = document.createElement('div');
            entry.className = 'experience-entry';
            entry.innerHTML = `
                <div class="input-with-label">
                    <label>Job Title</label>
                    <input type="text" class="job-title" placeholder="e.g., Software Engineer">
                </div>
                <div class="input-with-label">
                    <label>Company</label>
                    <input type="text" class="company" placeholder="e.g., Google India">
                </div>
                <div class="input-with-label">
                    <label>Duration</label>
                    <input type="text" class="duration" placeholder="e.g., Jan 2022 - Present">
                </div>
                <div class="input-with-label">
                    <label>Description</label>
                    <textarea class="job-description" placeholder="Describe your responsibilities and achievements" rows="2"></textarea>
                </div>
                <button type="button" class="remove-btn">Remove</button>
            `;
            section.appendChild(entry);
            entry.querySelector('.remove-btn').addEventListener('click', () => entry.remove());
        });
    }

    if (addProjectBtn) {
        addProjectBtn.addEventListener('click', () => {
            const section = document.getElementById('projects-section');
            const entry = document.createElement('div');
            entry.className = 'project-entry';
            entry.innerHTML = `
                <div class="input-with-label">
                    <label>Project Title</label>
                    <input type="text" class="project-title" placeholder="e.g., E-commerce Website">
                </div>
                <div class="input-with-label">
                    <label>Project Description</label>
                    <textarea class="project-description" placeholder="Describe your project, technologies used, and outcomes" rows="2"></textarea>
                </div>
                <button type="button" class="remove-btn">Remove</button>
            `;
            section.appendChild(entry);
            entry.querySelector('.remove-btn').addEventListener('click', () => entry.remove());
        });
    }

    if (addAchievementBtn) {
        addAchievementBtn.addEventListener('click', () => {
            const section = document.getElementById('achievements-section');
            const entry = document.createElement('div');
            entry.className = 'achievement-entry';
            entry.innerHTML = `
                <div class="input-with-label">
                    <label>Achievement or Certification</label>
                    <input type="text" class="achievement" placeholder="e.g., Certified AWS Solutions Architect">
                </div>
                <button type="button" class="remove-btn">Remove</button>
            `;
            section.appendChild(entry);
            entry.querySelector('.remove-btn').addEventListener('click', () => entry.remove());
        });
    }
}

function setupPhotoUpload() {
    const photoInput = document.getElementById('photo-upload');
    const photoPreview = document.getElementById('photo-preview');

    if (photoInput) {
        photoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            const statusSpan = document.getElementById('photo-upload-status');
            const chooseFileSpan = document.querySelector('[id="photo-upload"] ~ span')?.previousElementSibling?.querySelector('span');

            if (file) {
                // Check file type
                if (!file.type.startsWith('image/')) {
                    alert('Please upload an image file');
                    return;
                }

                // Check file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    alert('Image size must be less than 5MB');
                    return;
                }

                // Update status
                if (statusSpan) statusSpan.textContent = file.name;

                // Read file as base64
                const reader = new FileReader();
                reader.onload = (event) => {
                    photoData = event.target.result;

                    // Show preview
                    if (photoPreview) {
                        photoPreview.innerHTML = `<img src="${photoData}" style="width: 100%; border-radius: 8px; border: 2px solid #ddd;">`;
                    }
                };
                reader.readAsDataURL(file);
            } else {
                photoData = null;
                if (statusSpan) statusSpan.textContent = 'No file chosen';
                if (photoPreview) {
                    photoPreview.innerHTML = '';
                }
            }
        });

        // Make the file input clickable via the button
        const chooseBtn = document.querySelector('[id="photo-upload"] ~ span')?.parentElement?.querySelector('span:nth-child(2) span');
        if (chooseBtn) {
            chooseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                photoInput.click();
            });
        }
    }
}

function collectResumeData() {
    const getValue = (id) => document.getElementById(id)?.value || '';

    const education = [];
    document.querySelectorAll('.education-entry').forEach((entry) => {
        const inst = entry.querySelector('.institution')?.value || '';
        const deg = entry.querySelector('.degree')?.value || '';
        const grade = entry.querySelector('.grade')?.value || '';
        const year = entry.querySelector('.year')?.value || '';
        if (inst || deg || grade || year) {
            education.push({ institution: inst, degree: deg, grade, year });
        }
    });

    const experience = [];
    document.querySelectorAll('.experience-entry').forEach((entry) => {
        const title = entry.querySelector('.job-title')?.value || '';
        const company = entry.querySelector('.company')?.value || '';
        const duration = entry.querySelector('.duration')?.value || '';
        const desc = entry.querySelector('.job-description')?.value || '';
        if (title || company || duration || desc) {
            experience.push({ title, company, duration, description: desc });
        }
    });

    const projects = [];
    document.querySelectorAll('.project-entry').forEach((entry) => {
        const title = entry.querySelector('.project-title')?.value || '';
        const desc = entry.querySelector('.project-description')?.value || '';
        if (title || desc) {
            projects.push({ title, description: desc });
        }
    });

    const achievements = [];
    document.querySelectorAll('.achievement-entry').forEach((entry) => {
        const ach = entry.querySelector('.achievement')?.value || '';
        if (ach) achievements.push(ach);
    });

    const skills = getValue('skills').split(',').map(s => s.trim()).filter(Boolean);
    const hobbies = getValue('hobbies').split(',').map(h => h.trim()).filter(Boolean);
    const languages = getValue('languages').split(',').map(l => l.trim()).filter(Boolean);

    return {
        template: currentTemplate,
        photo: photoData || null,
        fullName: getValue('full-name') || 'Your Name',
        location: getValue('location') || 'City, Country',
        phone: getValue('phone') || 'Phone Number',
        email: getValue('email') || 'Email Address',
        linkedin: getValue('linkedin') || '',
        objective: getValue('objective') || '',
        education,
        experience,
        projects,
        achievements,
        skills,
        hobbies,
        languages
    };
}

function generateResumeHTML(data) {
    const template = TEMPLATE_LOOKUP[data.template] || TEMPLATE_LOOKUP['professional'];
    const fontFamily = template.fontFamily || 'Arial, sans-serif';

    // Default objectives based on template type
    const defaultObjectives = {
        'engineer': 'Seeking a challenging engineering position to leverage technical skills and innovative problem-solving abilities to contribute to cutting-edge projects and drive technological advancement.',
        'doctor': 'Dedicated medical professional committed to providing exceptional patient care, utilizing advanced medical knowledge and compassionate approach to improve patient outcomes and contribute to healthcare excellence.',
        'nurse': 'Compassionate and skilled nursing professional seeking to deliver high-quality patient care, promote health and wellness, and work collaboratively with healthcare teams to ensure optimal patient outcomes.',
        'iti': 'Motivated technical professional with hands-on training seeking to apply practical skills and technical knowledge to contribute effectively in a dynamic work environment and grow professionally.',
        'indian': 'Ambitious professional seeking a challenging position to utilize skills, knowledge, and experience to contribute to organizational growth while achieving personal and professional development.',
        'corporate': 'Results-driven professional seeking a strategic role to leverage business acumen, leadership skills, and industry expertise to drive organizational success and deliver measurable business outcomes.',
        'teacher': 'Passionate educator dedicated to fostering student growth, creating engaging learning environments, and inspiring the next generation through innovative teaching methods and personalized instruction.',
        'professional': 'Dynamic professional seeking a challenging position to apply expertise, drive innovation, and contribute to organizational success while achieving continuous professional growth.',
        'executive': 'Strategic executive leader with proven track record seeking to drive organizational transformation, lead high-performing teams, and deliver exceptional business results in a senior leadership role.',
        'creative': 'Creative professional seeking to bring innovative ideas, artistic vision, and unique perspective to challenging projects while contributing to brand success and creative excellence.',
        'minimalist': 'Focused professional seeking a position to apply specialized skills and deliver high-quality results through efficient work practices and attention to detail.',
        'classic': 'Experienced professional seeking to contribute proven expertise, strong work ethic, and commitment to excellence in a growth-oriented organization.',
        'elegant': 'Sophisticated professional seeking a refined role to apply polished skills, cultural awareness, and excellence-driven approach to achieve organizational objectives.',
        'tech': 'Technology enthusiast seeking to leverage cutting-edge technical skills, innovation mindset, and problem-solving abilities to drive digital transformation and technological advancement.'
    };

    // Use user's objective if provided, otherwise use template-specific default
    const objective = data.objective || defaultObjectives[data.template] || defaultObjectives['professional'];

    return `
        <div style="font-family: ${fontFamily}; max-width: 900px; margin: 20px auto; padding: 30px; background: ${template.bodyBg}; color: ${template.textColor}; border-radius: 10px; line-height: 1.4; border: 3px solid ${template.accent}; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-left: 20px; margin-right: 20px;">
            <!-- Header -->
            <div style="text-align: center; background: ${template.headerBg}; color: ${template.headerText}; padding: 20px; border-radius: 0px; margin-bottom: 20px; border-bottom: 2px solid ${template.accent}; box-shadow: none; position: relative; min-height: 100px;">
                ${data.photo ? `
                <div style="position: absolute; top: 10px; right: 20px; width: 80px; height: 100px; border-radius: 8px; overflow: hidden; border: 2px solid ${template.accent}; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                    <img src="${data.photo}" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                ` : `
                <div style="position: absolute; top: 10px; right: 20px; width: 80px; height: 100px; border-radius: 8px; border: 2px dashed ${template.accent}; background: ${template.accent}10; display: flex; align-items: center; justify-content: center; color: ${template.accent}; font-size: 11px; text-align: center; opacity: 0.6;">
                    📷 Photo<br/>Appears Here
                </div>
                `}
                <div style="margin-right: 100px;">
                    <h1 style="margin: 0; font-size: 28px; font-weight: 900; letter-spacing: -1px; color: ${template.headerText};">${data.fullName}</h1>
                    <p style="margin: 6px 0 0 0; font-size: 12px; font-weight: 600; letter-spacing: 0.3px; color: ${template.headerText};">
                        ${data.location} • ${data.phone} • ${data.email}
                        ${data.linkedin ? ` • <a href="${data.linkedin}" target="_blank" style="color: ${template.accent}; text-decoration: none; font-weight: bold;">${data.linkedin}</a>` : ''}
                    </p>
                </div>
            </div>

            <!-- Objective -->
            <div style="margin-bottom: 15px;">
                <h2 style="color: ${template.accent}; border-bottom: 2px solid ${template.accent}; padding-bottom: 5px; font-size: 14px; font-weight: 800; letter-spacing: 0.8px; margin-bottom: 8px;">PROFESSIONAL OBJECTIVE</h2>
                <p style="margin: 0; line-height: 1.4; font-size: 12px;">${objective}</p>
            </div>

            <!-- Education -->
            ${data.education.length > 0 ? `
            <div style="margin-bottom: 15px;">
                <h2 style="color: ${template.accent}; border-bottom: 2px solid ${template.accent}; padding-bottom: 5px; font-size: 14px; font-weight: 800; letter-spacing: 0.8px; margin-bottom: 8px;">EDUCATION</h2>
                ${data.education.map(edu => `
                <div style="margin-bottom: 10px;">
                    <strong style="font-size: 13px; font-weight: 800; display: block;">${edu.institution}</strong>
                    <p style="margin: 2px 0 0 0; font-size: 12px; font-weight: 600;">
                        ${edu.degree}${edu.grade ? ` • ${edu.grade}` : ''}${edu.year ? ` • ${edu.year}` : ''}
                    </p>
                </div>
                `).join('')}
            </div>
            ` : ''}

            <!-- Experience -->
            ${data.experience.length > 0 ? `
            <div style="margin-bottom: 15px;">
                <h2 style="color: ${template.accent}; border-bottom: 2px solid ${template.accent}; padding-bottom: 5px; font-size: 14px; font-weight: 800; letter-spacing: 0.8px; margin-bottom: 8px;">EXPERIENCE</h2>
                ${data.experience.map(exp => `
                <div style="margin-bottom: 10px;">
                    <strong style="font-size: 13px; font-weight: 800; display: block;">${exp.title}</strong>
                    <p style="margin: 2px 0; font-size: 12px; font-weight: 600;">${exp.company}${exp.duration ? ` • ${exp.duration}` : ''}</p>
                    ${exp.description ? `<p style="margin: 2px 0 0 0; line-height: 1.4; font-size: 11px;">${exp.description}</p>` : ''}
                </div>
                `).join('')}
            </div>
            ` : ''}

            <!-- Skills -->
            ${data.skills.length > 0 ? `
            <div style="margin-bottom: 15px;">
                <h2 style="color: ${template.accent}; border-bottom: 2px solid ${template.accent}; padding-bottom: 5px; font-size: 14px; font-weight: 800; letter-spacing: 0.8px; margin-bottom: 8px;">SKILLS</h2>
                <p style="margin: 0; line-height: 1.6;">
                    ${data.skills.map(skill => `<span style="display: inline-block; background: ${template.accent}30; color: ${template.accent}; padding: 4px 10px; border-radius: 12px; margin: 3px 4px 3px 0; font-size: 11px; font-weight: 600; border: 1px solid ${template.accent}50;">${skill}</span>`).join('')}
                </p>
            </div>
            ` : ''}

            <!-- Projects -->
            ${data.projects.length > 0 ? `
            <div style="margin-bottom: 15px;">
                <h2 style="color: ${template.accent}; border-bottom: 2px solid ${template.accent}; padding-bottom: 5px; font-size: 14px; font-weight: 800; letter-spacing: 0.8px; margin-bottom: 8px;">PROJECTS</h2>
                ${data.projects.map(proj => `
                <div style="margin-bottom: 10px;">
                    <strong style="font-size: 13px; font-weight: 800; display: block;">${proj.title}</strong>
                    ${proj.description ? `<p style="margin: 2px 0 0 0; line-height: 1.4; font-size: 11px;">${proj.description}</p>` : ''}
                </div>
                `).join('')}
            </div>
            ` : ''}

            <!-- Achievements -->
            ${data.achievements.length > 0 ? `
            <div style="margin-bottom: 15px;">
                <h2 style="color: ${template.accent}; border-bottom: 2px solid ${template.accent}; padding-bottom: 5px; font-size: 14px; font-weight: 800; letter-spacing: 0.8px; margin-bottom: 8px;">ACHIEVEMENTS</h2>
                <ul style="margin: 0; padding-left: 18px;">
                    ${data.achievements.map(ach => `<li style="margin: 3px 0; font-size: 11px; line-height: 1.4;">${ach}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
            
            <!-- Languages -->
            ${data.languages && data.languages.length > 0 ? `
            <div style="margin-bottom: 15px;">
                <h2 style="color: ${template.accent}; border-bottom: 2px solid ${template.accent}; padding-bottom: 5px; font-size: 14px; font-weight: 800; letter-spacing: 0.8px; margin-bottom: 8px;">LANGUAGES</h2>
                <p style="margin: 0; line-height: 1.6;">
                    ${data.languages.map(lang => `<span style="display: inline-block; background: ${template.accent}30; color: ${template.accent}; padding: 4px 10px; border-radius: 12px; margin: 3px 4px 3px 0; font-size: 11px; font-weight: 600; border: 1px solid ${template.accent}50;">${lang}</span>`).join('')}
                </p>
            </div>
            ` : ''}
            
            <!-- Hobbies -->
            ${data.hobbies && data.hobbies.length > 0 ? `
            <div style="margin-bottom: 0;">
                <h2 style="color: ${template.accent}; border-bottom: 2px solid ${template.accent}; padding-bottom: 5px; font-size: 14px; font-weight: 800; letter-spacing: 0.8px; margin-bottom: 8px;">HOBBIES & INTERESTS</h2>
                <p style="margin: 0; line-height: 1.6;">
                    ${data.hobbies.map(hobby => `<span style="display: inline-block; background: ${template.accent}30; color: ${template.accent}; padding: 4px 10px; border-radius: 12px; margin: 3px 4px 3px 0; font-size: 11px; font-weight: 600; border: 1px solid ${template.accent}50;">${hobby}</span>`).join('')}
                </p>
            </div>
            ` : ''}
        </div>
    `;
}

function setupDraggableSections() {
    const container = document.getElementById('draggable-sections');
    if (!container) return;

    Sortable.create(container, {
        handle: '.section-handle',
        animation: 150,
        ghostClass: 'sortable-ghost',
        onEnd: (evt) => {
            // Get new order
            const sections = container.querySelectorAll('.draggable-section');
            sectionOrder = Array.from(sections).map(s => s.dataset.section);
            saveToLocalStorage();
        }
    });
}

function setupAutosave() {
    const form = document.getElementById('resume-form');
    if (!form) return;

    form.addEventListener('input', () => {
        // Debounce autosave
        clearTimeout(autosaveTimer);
        autosaveTimer = setTimeout(() => {
            saveToLocalStorage();
        }, 300);
    });
}

function saveToLocalStorage() {
    const formData = {
        currentTemplate,
        photoData,
        sectionOrder,
        fullName: document.getElementById('full-name')?.value || '',
        location: document.getElementById('location')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        email: document.getElementById('email')?.value || '',
        linkedin: document.getElementById('linkedin')?.value || '',
        objective: document.getElementById('objective')?.value || '',
        hobbies: document.getElementById('hobbies')?.value || '',
        languages: document.getElementById('languages')?.value || '',
        skills: document.getElementById('skills')?.value || ''
    };

    // Save education
    const education = [];
    document.querySelectorAll('.education-entry').forEach((entry) => {
        education.push({
            institution: entry.querySelector('.institution')?.value || '',
            degree: entry.querySelector('.degree')?.value || '',
            grade: entry.querySelector('.grade')?.value || '',
            year: entry.querySelector('.year')?.value || ''
        });
    });
    formData.education = education;

    // Save experience
    const experience = [];
    document.querySelectorAll('.experience-entry').forEach((entry) => {
        experience.push({
            jobTitle: entry.querySelector('.job-title')?.value || '',
            company: entry.querySelector('.company')?.value || '',
            duration: entry.querySelector('.duration')?.value || '',
            description: entry.querySelector('.job-description')?.value || ''
        });
    });
    formData.experience = experience;

    // Save projects
    const projects = [];
    document.querySelectorAll('.project-entry').forEach((entry) => {
        projects.push({
            title: entry.querySelector('.project-title')?.value || '',
            description: entry.querySelector('.project-description')?.value || ''
        });
    });
    formData.projects = projects;

    // Save achievements
    const achievements = [];
    document.querySelectorAll('.achievement-entry').forEach((entry) => {
        achievements.push(entry.querySelector('.achievement')?.value || '');
    });
    formData.achievements = achievements;

    localStorage.setItem('resumeBuilderData', JSON.stringify(formData));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('resumeBuilderData');
    if (!saved) return;

    try {
        const data = JSON.parse(saved);

        // Restore template
        if (data.currentTemplate) {
            currentTemplate = data.currentTemplate;
        }

        // Restore photo
        if (data.photoData) {
            photoData = data.photoData;
            const preview = document.getElementById('photo-preview');
            if (preview) {
                preview.innerHTML = `<img src="${photoData}" style="width: 100%; border-radius: 8px; border: 2px solid #ddd;">`;
            }
        }

        // Restore section order
        if (data.sectionOrder) {
            sectionOrder = data.sectionOrder;
        }

        // Restore hobbies
        if (data.hobbies) document.getElementById('hobbies').value = data.hobbies;
        if (data.languages) document.getElementById('languages').value = data.languages;
        if (data.location) document.getElementById('location').value = data.location;
        if (data.phone) document.getElementById('phone').value = data.phone;
        if (data.email) document.getElementById('email').value = data.email;
        if (data.linkedin) document.getElementById('linkedin').value = data.linkedin;
        if (data.objective) document.getElementById('objective').value = data.objective;
        if (data.skills) document.getElementById('skills').value = data.skills;

        // Restore education
        if (data.education && data.education.length > 0) {
            const eduSection = document.getElementById('education-section');
            eduSection.innerHTML = '';
            data.education.forEach(edu => {
                const entry = document.createElement('div');
                entry.className = 'education-entry';
                entry.innerHTML = `
                    <input type="text" class="institution" placeholder="Institution Name" value="${edu.institution}">
                    <input type="text" class="degree" placeholder="Degree" value="${edu.degree}">
                    <input type="text" class="grade" placeholder="Grade/CGPA" value="${edu.grade}">
                    <input type="text" class="year" placeholder="Year" value="${edu.year}">
                    <button type="button" class="remove-btn">Remove</button>
                `;
                eduSection.appendChild(entry);
                entry.querySelector('.remove-btn').addEventListener('click', () => entry.remove());
            });
        }

        // Restore experience
        if (data.experience && data.experience.length > 0) {
            const expSection = document.getElementById('experience-section');
            expSection.innerHTML = '';
            data.experience.forEach(exp => {
                const entry = document.createElement('div');
                entry.className = 'experience-entry';
                entry.innerHTML = `
                    <input type="text" class="job-title" placeholder="Job Title" value="${exp.jobTitle}">
                    <input type="text" class="company" placeholder="Company" value="${exp.company}">
                    <input type="text" class="duration" placeholder="Duration" value="${exp.duration}">
                    <textarea class="job-description" placeholder="Description" rows="2">${exp.description}</textarea>
                    <button type="button" class="remove-btn">Remove</button>
                `;
                expSection.appendChild(entry);
                entry.querySelector('.remove-btn').addEventListener('click', () => entry.remove());
            });
        }

        // Restore projects
        if (data.projects && data.projects.length > 0) {
            const projSection = document.getElementById('projects-section');
            projSection.innerHTML = '';
            data.projects.forEach(proj => {
                const entry = document.createElement('div');
                entry.className = 'project-entry';
                entry.innerHTML = `
                    <input type="text" class="project-title" placeholder="Project Title" value="${proj.title}">
                    <textarea class="project-description" placeholder="Project Description" rows="2">${proj.description}</textarea>
                    <button type="button" class="remove-btn">Remove</button>
                `;
                projSection.appendChild(entry);
                entry.querySelector('.remove-btn').addEventListener('click', () => entry.remove());
            });
        }

        // Restore achievements
        if (data.achievements && data.achievements.length > 0) {
            const achSection = document.getElementById('achievements-section');
            achSection.innerHTML = '';
            data.achievements.forEach(ach => {
                const entry = document.createElement('div');
                entry.className = 'achievement-entry';
                entry.innerHTML = `
                    <input type="text" class="achievement" placeholder="Achievement or Certification" value="${ach}">
                    <button type="button" class="remove-btn">Remove</button>
                `;
                achSection.appendChild(entry);
                entry.querySelector('.remove-btn').addEventListener('click', () => entry.remove());
            });
        }
    } catch (e) {
        console.error('Error loading from localStorage:', e);
    }
}

async function fetchCurrentUser() {
    // Login removed - no authentication needed
}

function setupAuthHandlers() {
    // Login removed - no authentication needed
}

function updateUserUI() {
    // Login removed - no user management needed
}

function setupAIHandlers() {
    // Improve Objective
    const aiObjectiveBtn = document.getElementById('ai-improve-objective');
    if (aiObjectiveBtn) {
        aiObjectiveBtn.addEventListener('click', async () => {
            const objective = document.getElementById('objective').value;
            if (!objective) {
                alert('Please enter an objective first');
                return;
            }

            aiObjectiveBtn.disabled = true;
            aiObjectiveBtn.textContent = '⏳ Improving...';

            const result = await API.improveObjective(objective, '', '');
            if (result.success) {
                document.getElementById('objective').value = result.data.improved;
                alert('✅ Objective improved!');
            } else {
                alert('❌ Error: ' + (result.error || 'Failed to improve'));
            }

            aiObjectiveBtn.disabled = false;
            aiObjectiveBtn.textContent = '✨ Improve';
        });
    }

    // Generate Skills
    const aiGenerateSkillsBtn = document.getElementById('ai-generate-skills');
    if (aiGenerateSkillsBtn) {
        aiGenerateSkillsBtn.addEventListener('click', async () => {
            const field = prompt('What is your professional field? (e.g., Software Engineering, Marketing)');
            if (!field) return;

            const currentSkills = document.getElementById('skills').value
                .split(',')
                .map(s => s.trim())
                .filter(Boolean);

            aiGenerateSkillsBtn.disabled = true;
            aiGenerateSkillsBtn.textContent = '⏳ Generating...';

            const result = await API.generateSkills(field, '', currentSkills);
            if (result.success) {
                const existingSkills = currentSkills;
                const newSkills = result.data.suggested.filter(s => !existingSkills.map(x => x.toLowerCase()).includes(s.toLowerCase()));
                const combined = [...existingSkills, ...newSkills];
                document.getElementById('skills').value = combined.join(', ');
                alert(`✅ Added ${newSkills.length} new skills!`);
            } else {
                alert('❌ Error: ' + (result.error || 'Failed to generate'));
            }

            aiGenerateSkillsBtn.disabled = false;
            aiGenerateSkillsBtn.textContent = '💡 Generate Skills';
        });
    }
}

function downloadResume() {
    const data = collectResumeData();

    try {
        const { jsPDF } = window.jspdf;
        const html2canvas = window.html2canvas;

        // Create a temporary container with the resume HTML
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = generateResumeHTML(data);
        tempContainer.style.position = 'absolute';
        tempContainer.style.left = '-9999px';
        tempContainer.style.width = '850px';
        tempContainer.style.background = 'white';
        document.body.appendChild(tempContainer);

        // Use html2canvas to convert HTML to image
        html2canvas(tempContainer, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            allowTaint: true
        }).then(canvas => {
            try {
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'mm',
                    format: 'a4'
                });

                const imgData = canvas.toDataURL('image/png');
                const imgWidth = 210; // A4 width in mm
                const imgHeight = (canvas.height * imgWidth) / canvas.width;

                let yOffset = 0;
                let pageCount = 0;

                while (yOffset < imgHeight) {
                    if (pageCount > 0) pdf.addPage();

                    const pageHeight = 297; // A4 height in mm
                    const maxHeight = Math.min(pageHeight, imgHeight - yOffset);

                    const ratio = canvas.width / imgWidth;
                    const sourceY = (yOffset * ratio);
                    const sourceHeight = (maxHeight * ratio);

                    const pageCanvas = document.createElement('canvas');
                    pageCanvas.width = canvas.width;
                    pageCanvas.height = sourceHeight;

                    const ctx = pageCanvas.getContext('2d');
                    ctx.drawImage(canvas, 0, -sourceY, canvas.width, canvas.height);

                    const pageImgData = pageCanvas.toDataURL('image/png');
                    pdf.addImage(pageImgData, 'PNG', 0, 0, imgWidth, maxHeight);

                    yOffset += pageHeight;
                    pageCount++;
                }

                pdf.save(`${data.fullName.replace(/\s+/g, '_')}_Resume.pdf`);
                document.body.removeChild(tempContainer);
                alert('✅ Resume downloaded successfully !');
            } catch (pdfError) {
                console.error('PDF creation error:', pdfError);
                document.body.removeChild(tempContainer);
                downloadResumeFallback(data);
            }
        }).catch(err => {
            console.error('Canvas error:', err);
            document.body.removeChild(tempContainer);
            downloadResumeFallback(data);
        });
    } catch (error) {
        console.error('PDF generation error:', error);
        alert('Error: Could not generate PDF. ' + error.message);
        downloadResumeFallback(collectResumeData());
    }
}

function downloadResumeFallback(data) {
    // Fallback function if html2canvas not available
    const template = TEMPLATE_LOOKUP[data.template] || TEMPLATE_LOOKUP['professional'];
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.getWidth();
    const borderMargin = 25; // 25mm (~1 inch) margin from all page edges
    const margin = borderMargin + 5; // Content margin inside the border
    let yPosition = borderMargin + 10;

    // Helper function to convert hex to RGB
    const hexToRgb = (hex) => {
        const result = /^#?([a-fd]{2})([a-fd]{2})([a-fd]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : { r: 0, g: 0, b: 0 };
    };

    const accentColor = hexToRgb(template.accent);

    // Draw border with margin from page edge
    doc.setDrawColor(accentColor.r, accentColor.g, accentColor.b);
    doc.setLineWidth(1.5);
    doc.rect(borderMargin, borderMargin, pageWidth - (2 * borderMargin), pageHeight - (2 * borderMargin));

    const checkNewPage = (neededSpace = 10) => {
        if (yPosition + neededSpace > pageHeight - margin) {
            doc.addPage();
            // Redraw border on new page
            doc.setDrawColor(accentColor.r, accentColor.g, accentColor.b);
            doc.setLineWidth(1.5);
            doc.rect(borderMargin, borderMargin, pageWidth - (2 * borderMargin), pageHeight - (2 * borderMargin));
            yPosition = margin;
            return true;
        }
        return false;
    };

    // HEADER SECTION
    doc.setFillColor(accentColor.r, accentColor.g, accentColor.b);
    doc.rect(borderMargin, borderMargin, pageWidth - (2 * borderMargin), 50, 'F');

    // Add photo if available
    if (data.photo) {
        try {
            // Try to add the image - handle both JPEG and PNG
            const imageFormat = data.photo.includes('data:image/png') ? 'PNG' : 'JPEG';
            const imgWidth = 35;
            const imgHeight = 40;
            const xPos = pageWidth - 45;
            const yPos = borderMargin + 5;

            doc.addImage(data.photo, imageFormat, xPos, yPos, imgWidth, imgHeight);
        } catch (err) {
            console.error('Error adding photo to PDF:', err);
        }
    }

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text(data.fullName.toUpperCase(), borderMargin + 5, borderMargin + 15, { maxWidth: pageWidth - 2 * borderMargin - 50 });

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    const contactLine = `${data.location} | ${data.phone} | ${data.email}`;
    doc.text(contactLine, borderMargin + 5, borderMargin + 23, { maxWidth: pageWidth - 2 * borderMargin - 50 });

    if (data.linkedin) {
        doc.text(data.linkedin, borderMargin + 5, borderMargin + 30, { maxWidth: pageWidth - 2 * borderMargin - 50 });
    }

    yPosition = borderMargin + 60;
    doc.setTextColor(0, 0, 0);

    // OBJECTIVE
    if (data.objective) {
        if (yPosition > pageHeight - 30) return; // Skip if no space on first page
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(accentColor.r, accentColor.g, accentColor.b);
        doc.text('PROFESSIONAL OBJECTIVE', margin, yPosition);
        doc.setDrawColor(accentColor.r, accentColor.g, accentColor.b);
        doc.setLineWidth(0.5);
        doc.line(margin, yPosition + 1, pageWidth - margin, yPosition + 1);
        yPosition += 6;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
        const objectiveLines = doc.splitTextToSize(data.objective, pageWidth - 2 * margin);
        objectiveLines.forEach((line, idx) => {
            if (idx < 2) { // Limit to 2 lines
                doc.text(line, margin, yPosition);
                yPosition += 4;
            }
        });
        yPosition += 3;
    }

    // EDUCATION
    if (data.education.length > 0 && yPosition < pageHeight - 25) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(accentColor.r, accentColor.g, accentColor.b);
        doc.text('EDUCATION', margin, yPosition);
        doc.setDrawColor(accentColor.r, accentColor.g, accentColor.b);
        doc.setLineWidth(0.5);
        doc.line(margin, yPosition + 1, pageWidth - margin, yPosition + 1);
        yPosition += 6;
        doc.setTextColor(0, 0, 0);
        data.education.slice(0, 2).forEach(edu => { // Limit to 2 entries
            if (yPosition > pageHeight - 15) return;
            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.text(edu.institution, margin, yPosition);
            yPosition += 4;
            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            const degreeText = `${edu.degree}${edu.grade ? ' - ' + edu.grade : ''} (${edu.year})`;
            doc.text(degreeText, margin + 5, yPosition);
            yPosition += 5;
        });
        yPosition += 2;
    }

    // EXPERIENCE
    if (data.experience.length > 0 && yPosition < pageHeight - 25) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(accentColor.r, accentColor.g, accentColor.b);
        doc.text('EXPERIENCE', margin, yPosition);
        doc.setDrawColor(accentColor.r, accentColor.g, accentColor.b);
        doc.setLineWidth(0.5);
        doc.line(margin, yPosition + 1, pageWidth - margin, yPosition + 1);
        yPosition += 6;
        doc.setTextColor(0, 0, 0);
        data.experience.slice(0, 1).forEach(exp => { // Limit to 1 entry
            if (yPosition > pageHeight - 20) return;
            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.text(exp.title, margin, yPosition);
            yPosition += 4;
            doc.setFontSize(9);
            doc.setFont('helvetica', 'italic');
            doc.text(`${exp.company} | ${exp.duration}`, margin + 5, yPosition);
            yPosition += 4;
        });
        yPosition += 2;
    }

    // SKILLS
    if (data.skills.length > 0 && yPosition < pageHeight - 20) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(accentColor.r, accentColor.g, accentColor.b);
        doc.text('SKILLS', margin, yPosition);
        doc.setDrawColor(accentColor.r, accentColor.g, accentColor.b);
        doc.setLineWidth(0.5);
        doc.line(margin, yPosition + 1, pageWidth - margin, yPosition + 1);
        yPosition += 6;
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
        const skillsText = data.skills.slice(0, 8).join(', '); // Limit to first 8 skills
        const skillsLines = doc.splitTextToSize(skillsText, pageWidth - 2 * margin);
        skillsLines.slice(0, 2).forEach(line => { // Limit to 2 lines
            if (yPosition > pageHeight - 10) return;
            doc.text(line, margin, yPosition);
            yPosition += 4;
        });
        yPosition += 2;
    }

    // PROJECTS - Skipped to fit on single page
    // Projects will be shown in full PDF only

    // LANGUAGES
    if (data.languages && data.languages.length > 0 && yPosition < pageHeight - 15) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(accentColor.r, accentColor.g, accentColor.b);
        doc.text('LANGUAGES', margin, yPosition);
        doc.setDrawColor(accentColor.r, accentColor.g, accentColor.b);
        doc.setLineWidth(0.5);
        doc.line(margin, yPosition + 1, pageWidth - margin, yPosition + 1);
        yPosition += 6;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
        const languagesText = data.languages.join(', ');
        const langLines = doc.splitTextToSize(languagesText, pageWidth - 2 * margin);
        langLines.slice(0, 1).forEach(line => {
            if (yPosition > pageHeight - 10) return;
            doc.text(line, margin, yPosition);
            yPosition += 4;
        });
        yPosition += 2;
    }

    // HOBBIES
    if (data.hobbies && data.hobbies.length > 0 && yPosition < pageHeight - 15) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(accentColor.r, accentColor.g, accentColor.b);
        doc.text('HOBBIES & INTERESTS', margin, yPosition);
        doc.setDrawColor(accentColor.r, accentColor.g, accentColor.b);
        doc.setLineWidth(0.5);
        doc.line(margin, yPosition + 1, pageWidth - margin, yPosition + 1);
        yPosition += 6;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
        const hobbiesText = data.hobbies.join(', ');
        const hobbiesLines = doc.splitTextToSize(hobbiesText, pageWidth - 2 * margin);
        hobbiesLines.slice(0, 1).forEach(line => {
            if (yPosition > pageHeight - 10) return;
            doc.text(line, margin, yPosition);
            yPosition += 4;
        });
    }

    doc.save(`${data.fullName.replace(/\s+/g, '_')}_Resume.pdf`);
    alert('✅ Resume downloaded successfully!');
}
