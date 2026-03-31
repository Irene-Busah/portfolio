/* ═══════════════════════════════════════
   blog.js — Real blog post + coming soon posts
   ═══════════════════════════════════════ */

export const BLOG_POSTS = [
  // ── PUBLISHED ──
  {
    id:       'published-001',
    type:     'longform',
    status:   'published',
    title:    'From Data Infrastructure to AI Automation: Lessons from Three Real-World Projects',
    excerpt:  'A deep dive into three production projects — what it actually takes to move from messy raw data pipelines to AI-powered automation systems that hold up in the real world.',
    date:     'Published on LinkedIn',
    tags:     ['mlops', 'data engineering', 'AI', 'real-world'],
    readTime: 'Read on LinkedIn ↗',
    url:      'https://www.linkedin.com/pulse/from-data-infrastructure-ai-automation-lessons-three-real-world-jwj8f/',
  },

  // ── COMING SOON ──
  {
    id:       'digest-001',
    type:     'digest',
    status:   'coming-soon',
    title:    'Week 1 Digest — Sliding Windows & the "Shrink" Intuition',
    excerpt:  'Why fixed windows are just a special case of dynamic ones, the key "when to shrink" question, and three problems that changed how I think about contiguous subarrays.',
    date:     'Coming soon',
    tags:     ['sliding window', 'weekly'],
    readTime: '5 min read',
    url:      '#',
  },
  {
    id:       'writeup-001',
    type:     'writeup',
    status:   'coming-soon',
    title:    'Two Pointers: The Pattern Nobody Explains Clearly',
    excerpt:  'Most tutorials show you two-pointer code but never explain the invariant that makes it work. Here\'s the mental model that unlocks every problem in the pattern.',
    date:     'Coming soon',
    tags:     ['two pointers', 'algorithms'],
    readTime: '8 min read',
    url:      '#',
  },
  {
    id:       'writeup-002',
    type:     'writeup',
    status:   'coming-soon',
    title:    'Prefix Sum: From O(n²) to O(1) Range Queries',
    excerpt:  'A single preprocessing pass that makes range queries instant. How it works, when to reach for it, and why difference arrays are its underrated sibling.',
    date:     'Coming soon',
    tags:     ['prefix sum', 'algorithms'],
    readTime: '6 min read',
    url:      '#',
  },
  {
    id:       'longform-002',
    type:     'longform',
    status:   'coming-soon',
    title:    'Building Data-Intensive Microservices: Lessons from the Trenches',
    excerpt:  'How to design microservices that handle high-throughput data streams without falling apart — event-driven patterns, backpressure, idempotency, and when NOT to use microservices.',
    date:     'Coming soon',
    tags:     ['microservices', 'data engineering', 'architecture'],
    readTime: '22 min read',
    url:      '#',
  },
  {
    id:       'longform-003',
    type:     'longform',
    status:   'coming-soon',
    title:    'Apache Spark vs MapReduce: When to Use Which',
    excerpt:  'A practical guide to choosing between Spark and Hadoop MapReduce for big data workloads — covering latency, cost, fault tolerance, and real-world benchmarks.',
    date:     'Coming soon',
    tags:     ['big data', 'spark', 'hadoop'],
    readTime: '14 min read',
    url:      '#',
  },
];

const TYPE_LABEL = { writeup: 'WRITEUP', longform: 'DEEP DIVE', digest: 'WEEKLY DIGEST' };

export function initBlog() {
  renderDigest();
  renderBlogPosts('all');
  initBlogFilters();
}

function renderDigest() {
  const banner = document.getElementById('blog-digest-banner');
  if (!banner) return;
  const digest = BLOG_POSTS.find(p => p.type === 'digest');
  if (!digest) return;
  banner.innerHTML = `
    <div>
      <span class="digest-label">// LATEST WEEKLY DIGEST</span>
      <div class="digest-title">${digest.title}</div>
      <div class="digest-meta">${digest.date} · ${digest.readTime}</div>
    </div>
    <a href="${digest.url}" class="btn btn-green" style="white-space:nowrap">READ DIGEST →</a>
  `;
}

function renderBlogPosts(filter) {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  const posts = (filter === 'all')
    ? BLOG_POSTS.filter(p => p.type !== 'digest')
    : BLOG_POSTS.filter(p => p.type === filter);

  grid.innerHTML = '';

  posts.forEach((post, i) => {
    const card      = document.createElement('div');
    const published = post.status === 'published';
    card.className  = 'blog-card reveal' + (published ? ' blog-card--published' : '');
    card.style.transitionDelay = `${i * 0.08}s`;

    const tagsHtml = post.tags.map(t => `<span class="blog-tag">${t}</span>`).join('');
    const linkText = published ? post.readTime : `${post.readTime} ↗`;

    card.innerHTML = `
      <div class="blog-card-top">
        <span class="blog-type-badge ${post.type}">${TYPE_LABEL[post.type]}</span>
        <span class="blog-date">${post.date}</span>
      </div>
      ${published ? '<span class="blog-live-badge">✦ PUBLISHED</span>' : ''}
      <div class="blog-title">${post.title}</div>
      <div class="blog-excerpt">${post.excerpt}</div>
      <div class="blog-footer">
        <div class="blog-tags">${tagsHtml}</div>
        <a href="${post.url}" ${published ? 'target="_blank" rel="noopener"' : ''} class="blog-read-more">${linkText}</a>
      </div>
    `;
    grid.appendChild(card);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.08 });
  grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initBlogFilters() {
  document.querySelectorAll('.blog-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderBlogPosts(btn.dataset.filter);
    });
  });
}
