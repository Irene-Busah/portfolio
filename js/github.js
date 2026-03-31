/* ═══════════════════════════════════════
   github.js — Curated projects display
   Combines live GitHub API repos with manually
   curated entries for sub-folder projects.
   ═══════════════════════════════════════ */

const GITHUB_USERNAME = 'Irene-Busah';
const GITHUB_API      = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30&type=public`;
const GITHUB_PROFILE  = `https://github.com/${GITHUB_USERNAME}`;

// Repos to hide (low-value / no description)
const BLOCKLIST = [
  'ai-code-review-assignment-template',
  'irene-busah',   // profile repo
  'DSA',
];

// Manually curated projects (sub-folders, school repos, etc.)
const CURATED_PROJECTS = [
  {
    id:       'tb-cough',
    name:     'TB-Cough-Analyzer-CMU',
    desc:     'ML-powered tuberculosis screening tool that detects TB-related cough patterns through audio analysis. Processes cough recordings to generate a risk score for early, non-invasive detection — built with CNNs and deployed as a web service.',
    tags:     ['TensorFlow', 'Deep Learning', 'Audio ML', 'CNN', 'Healthcare AI'],
    url:      'https://github.com/Irene-Busah/TB-Cough-Analyzer-CMU',
    badge:    '🔬 RESEARCH',
    highlight: true,
  },
  {
    id:       'burnout',
    name:     'Burnout Severity Research',
    desc:     'Big Data research project analyzing burnout severity patterns across demographics using large-scale survey datasets. Applies predictive modelling and statistical analysis to surface key drivers of occupational burnout.',
    tags:     ['Python', 'Apache Spark', 'Pandas', 'Predictive Modelling', 'Big Data'],
    url:      'https://github.com/Irene-Busah/Big-Data-Science/tree/main/Projects/burnout-severity-research',
    badge:    '📊 DATA SCIENCE',
  },
  {
    id:       'political-donations',
    name:     'Political Donation Analysis',
    desc:     'Large-scale analysis of political donation data using Big Data tools. Uncovers patterns in donor behavior, geographic trends, and campaign financing using distributed computing pipelines.',
    tags:     ['Hadoop', 'MapReduce', 'Python', 'Data Analysis', 'Big Data'],
    url:      'https://github.com/Irene-Busah/Big-Data-Science/tree/main/Projects/political-donation-analysis',
    badge:    '📊 DATA SCIENCE',
  },
  {
    id:       'mlops-course',
    name:     'Machine Learning Ops',
    desc:     'End-to-end MLOps course implementation — experiment tracking with MLflow, pipeline orchestration with Airflow and Prefect, model versioning with DVC, and CI/CD integration using GitHub Actions.',
    tags:     ['MLflow', 'Airflow', 'Prefect', 'DVC', 'Docker', 'GitHub Actions'],
    url:      'https://github.com/Irene-Busah/machine-learning-Ops',
    badge:    '🔁 MLOPS',
  },
  {
    id:       'ai-incubator',
    name:     'AI Incubator Challenge',
    desc:     'Competitive AI challenge project — designing and prototyping an AI-powered solution from ideation to working demo. Covers problem framing, dataset curation, model development, and pitch-ready presentation.',
    tags:     ['Python', 'Machine Learning', 'AI', 'Prototyping'],
    url:      'https://github.com/Irene-Busah/AI-Incubator-Challenge',
    badge:    '🚀 CHALLENGE',
  },
];

const LANG_COLORS = {
  Python: '#3572A5', JavaScript: '#f1e05a', Java: '#b07219',
  HTML: '#e34c26', CSS: '#563d7c', R: '#198CE7',
  Jupyter: '#DA5B0B', Shell: '#89e051', TypeScript: '#2b7489',
};

function langColor(lang) { return LANG_COLORS[lang] || '#8b8b8b'; }
function timeAgo(d) {
  const days = Math.floor((Date.now() - new Date(d)) / 86400000);
  if (days < 1) return 'today';
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.floor(days/7)}w ago`;
  if (days < 365) return `${Math.floor(days/30)}mo ago`;
  return `${Math.floor(days/365)}y ago`;
}

export async function initGitHub() {
  const container = document.getElementById('repos-container');
  if (!container) return;

  container.innerHTML = `
    <div class="repos-loading">
      <div class="loading-spinner"></div>
      <span>// FETCHING REPOSITORIES...</span>
    </div>`;

  // Always render curated first
  const grid = document.createElement('div');
  grid.className = 'github-repos-grid';
  container.innerHTML = '';

  // Render curated projects
  CURATED_PROJECTS.forEach((proj, i) => {
    const card = document.createElement('div');
    card.className = 'repo-card reveal' + (proj.highlight ? ' repo-card--highlight' : '');
    card.style.transitionDelay = `${i * 0.07}s`;

    const tagsHtml = proj.tags.map(t =>
      `<span class="repo-lang" style="margin-bottom:0"><span class="repo-lang-dot" style="background:${langColor(t)}"></span>${t}</span>`
    ).join('');

    card.innerHTML = `
      <div class="repo-card-top">
        <span class="repo-badge">${proj.badge}</span>
      </div>
      <a href="${proj.url}" target="_blank" rel="noopener" class="repo-name">${proj.name}</a>
      <p class="repo-desc">${proj.desc}</p>
      <div class="repo-meta" style="flex-wrap:wrap;gap:0.5rem">${tagsHtml}</div>
      <a href="${proj.url}" target="_blank" rel="noopener" class="repo-link">VIEW ON GITHUB ↗</a>
    `;
    grid.appendChild(card);
  });

  container.appendChild(grid);

  // Try to pull extra repos from API, skip blocklisted + already curated
  const curatedIds = new Set(CURATED_PROJECTS.map(p => p.name.toLowerCase()));

  try {
    const res   = await fetch(GITHUB_API);
    if (!res.ok) throw new Error();
    const repos = await res.json();

    const extra = repos.filter(r =>
      !r.fork &&
      r.description &&
      r.description.trim().length > 10 &&
      !BLOCKLIST.includes(r.name) &&
      !curatedIds.has(r.name.toLowerCase())
    ).slice(0, 4);

    extra.forEach((repo, i) => {
      const card = document.createElement('div');
      card.className = 'repo-card reveal';
      card.style.transitionDelay = `${(CURATED_PROJECTS.length + i) * 0.07}s`;

      const lang = repo.language || 'N/A';
      card.innerHTML = `
        <div class="repo-card-top">
          <span class="repo-badge" style="color:var(--muted);border-color:var(--border)">📁 REPO</span>
          ${repo.stargazers_count > 0 ? `<span class="repo-stars">★ ${repo.stargazers_count}</span>` : ''}
        </div>
        <a href="${repo.html_url}" target="_blank" rel="noopener" class="repo-name">${repo.name}</a>
        <p class="repo-desc">${repo.description}</p>
        <div class="repo-meta">
          <span class="repo-lang">
            <span class="repo-lang-dot" style="background:${langColor(lang)}"></span>${lang}
          </span>
          <span style="font-family:var(--font-mono);font-size:0.62rem;color:var(--muted)">Updated ${timeAgo(repo.updated_at)}</span>
        </div>
        <a href="${repo.html_url}" target="_blank" rel="noopener" class="repo-link">VIEW ON GITHUB ↗</a>
      `;
      grid.appendChild(card);
    });

    // Update hero stat
    const statEl = document.getElementById('stat-repos');
    if (statEl) statEl.textContent = (CURATED_PROJECTS.length + extra.length) + '+';

  } catch (_) { /* silently ignore API errors — curated projects always show */ }

  // Trigger reveal observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
