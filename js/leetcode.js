/* ═══════════════════════════════════════
   leetcode.js — Challenge Wall
   Problems sourced ONLY from:
   github.com/Irene-Busah/competitive-programming-a2sv
   ═══════════════════════════════════════ */

const CF_HANDLE = 'irenebusah';
const CF_API    = `https://codeforces.com/api/user.status?handle=${CF_HANDLE}&from=1&count=100`;
const CP_REPO   = 'https://github.com/Irene-Busah/competitive-programming-a2sv';

// ── All problems verified from the GitHub repo ──
// Format: { id, num, name, topic, difficulty, url }
const VERIFIED_PROBLEMS = [

  // ── SORTING ──
  { id:'s-0088', num:'0088', name:'Merge Sorted Array',                          topic:'sorting', difficulty:'easy',   url:'https://leetcode.com/problems/merge-sorted-array/' },
  { id:'s-0414', num:'0414', name:'Third Maximum Number',                         topic:'sorting', difficulty:'easy',   url:'https://leetcode.com/problems/third-maximum-number/' },
  { id:'s-0455', num:'0455', name:'Assign Cookies',                               topic:'sorting', difficulty:'easy',   url:'https://leetcode.com/problems/assign-cookies/' },
  { id:'s-0506', num:'0506', name:'Relative Ranks',                               topic:'sorting', difficulty:'easy',   url:'https://leetcode.com/problems/relative-ranks/' },
  { id:'s-1637', num:'1637', name:'Widest Vertical Area Between Two Points',      topic:'sorting', difficulty:'easy',   url:'https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/' },
  { id:'s-2418', num:'2418', name:'Sort the People',                              topic:'sorting', difficulty:'easy',   url:'https://leetcode.com/problems/sort-the-people/' },
  { id:'s-2824', num:'2824', name:'Count Pairs Whose Sum is Less Than Target',    topic:'sorting', difficulty:'easy',   url:'https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/' },
  { id:'s-0015', num:'0015', name:'3Sum',                                         topic:'sorting', difficulty:'medium', url:'https://leetcode.com/problems/3sum/' },
  { id:'s-0016', num:'0016', name:'3Sum Closest',                                 topic:'sorting', difficulty:'medium', url:'https://leetcode.com/problems/3sum-closest/' },
  { id:'s-0018', num:'0018', name:'4Sum',                                         topic:'sorting', difficulty:'medium', url:'https://leetcode.com/problems/4sum/' },
  { id:'s-0056', num:'0056', name:'Merge Intervals',                              topic:'sorting', difficulty:'medium', url:'https://leetcode.com/problems/merge-intervals/' },
  { id:'s-0451', num:'0451', name:'Sort Characters By Frequency',                 topic:'sorting', difficulty:'medium', url:'https://leetcode.com/problems/sort-characters-by-frequency/' },
  { id:'s-0881', num:'0881', name:'Boats to Save People',                         topic:'sorting', difficulty:'medium', url:'https://leetcode.com/problems/boats-to-save-people/' },
  { id:'s-1561', num:'1561', name:'Maximum Number of Coins You Can Get',          topic:'sorting', difficulty:'medium', url:'https://leetcode.com/problems/maximum-number-of-coins-you-can-get/' },
  { id:'s-1679', num:'1679', name:'Max Number of K-Sum Pairs',                    topic:'sorting', difficulty:'medium', url:'https://leetcode.com/problems/max-number-of-k-sum-pairs/' },
  { id:'s-1846', num:'1846', name:'Maximum Element After Decreasing & Rearranging', topic:'sorting', difficulty:'medium', url:'https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/' },
  { id:'s-1887', num:'1887', name:'Reduction Operations to Make Array Elements Equal', topic:'sorting', difficulty:'medium', url:'https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/' },
  { id:'s-2165', num:'2165', name:'Smallest Value of the Rearranged Number',      topic:'sorting', difficulty:'medium', url:'https://leetcode.com/problems/smallest-value-of-the-rearranged-number/' },
  { id:'s-2410', num:'2410', name:'Maximum Matching of Players With Trainers',    topic:'sorting', difficulty:'medium', url:'https://leetcode.com/problems/maximum-matching-of-players-with-trainers/' },
  { id:'s-2491', num:'2491', name:'Divide Players Into Teams of Equal Skill',     topic:'sorting', difficulty:'medium', url:'https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/' },

  // ── PREFIX SUM ──
  { id:'p-0303', num:'0303', name:'Range Sum Query - Immutable',                  topic:'prefix', difficulty:'easy',   url:'https://leetcode.com/problems/range-sum-query-immutable/' },
  { id:'p-0724', num:'0724', name:'Find Pivot Index',                             topic:'prefix', difficulty:'easy',   url:'https://leetcode.com/problems/find-pivot-index/' },
  { id:'p-1480', num:'1480', name:'Running Sum of 1d Array',                      topic:'prefix', difficulty:'easy',   url:'https://leetcode.com/problems/running-sum-of-1d-array/' },
  { id:'p-0304', num:'0304', name:'Range Sum Query 2D - Immutable',               topic:'prefix', difficulty:'medium', url:'https://leetcode.com/problems/range-sum-query-2d-immutable/' },
  { id:'p-0523', num:'0523', name:'Continuous Subarray Sum',                      topic:'prefix', difficulty:'medium', url:'https://leetcode.com/problems/continuous-subarray-sum/' },
  { id:'p-1109', num:'1109', name:'Corporate Flight Bookings',                    topic:'prefix', difficulty:'medium', url:'https://leetcode.com/problems/corporate-flight-bookings/' },
  { id:'p-1248', num:'1248', name:'Count Number of Nice Subarrays',               topic:'prefix', difficulty:'medium', url:'https://leetcode.com/problems/count-number-of-nice-subarrays/' },
  { id:'p-1423', num:'1423', name:'Maximum Points You Can Obtain from Cards',     topic:'prefix', difficulty:'medium', url:'https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/' },

  // ── TWO POINTERS ──
  { id:'t-0026', num:'0026', name:'Remove Duplicates from Sorted Array',          topic:'twopointers', difficulty:'easy',   url:'https://leetcode.com/problems/remove-duplicates-from-sorted-array/' },
  { id:'t-0027', num:'0027', name:'Remove Element',                               topic:'twopointers', difficulty:'easy',   url:'https://leetcode.com/problems/remove-element/' },
  { id:'t-0125', num:'0125', name:'Valid Palindrome',                             topic:'twopointers', difficulty:'easy',   url:'https://leetcode.com/problems/valid-palindrome/' },
  { id:'t-0283', num:'0283', name:'Move Zeroes',                                  topic:'twopointers', difficulty:'easy',   url:'https://leetcode.com/problems/move-zeroes/' },
  { id:'t-0455', num:'0455', name:'Assign Cookies',                               topic:'twopointers', difficulty:'easy',   url:'https://leetcode.com/problems/assign-cookies/' },
  { id:'t-0680', num:'0680', name:'Valid Palindrome II',                          topic:'twopointers', difficulty:'easy',   url:'https://leetcode.com/problems/valid-palindrome-ii/' },
  { id:'t-1089', num:'1089', name:'Duplicate Zeros',                              topic:'twopointers', difficulty:'easy',   url:'https://leetcode.com/problems/duplicate-zeros/' },
  { id:'t-2824', num:'2824', name:'Count Pairs Whose Sum is Less Than Target',    topic:'twopointers', difficulty:'easy',   url:'https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/' },
  { id:'t-0011', num:'0011', name:'Container With Most Water',                    topic:'twopointers', difficulty:'medium', url:'https://leetcode.com/problems/container-with-most-water/' },
  { id:'t-0015', num:'0015', name:'3Sum',                                         topic:'twopointers', difficulty:'medium', url:'https://leetcode.com/problems/3sum/' },
  { id:'t-0016', num:'0016', name:'3Sum Closest',                                 topic:'twopointers', difficulty:'medium', url:'https://leetcode.com/problems/3sum-closest/' },
  { id:'t-0018', num:'0018', name:'4Sum',                                         topic:'twopointers', difficulty:'medium', url:'https://leetcode.com/problems/4sum/' },
  { id:'t-0088', num:'0088', name:'Merge Sorted Array',                           topic:'twopointers', difficulty:'easy',   url:'https://leetcode.com/problems/merge-sorted-array/' },
  { id:'t-0189', num:'0189', name:'Rotate Array',                                 topic:'twopointers', difficulty:'medium', url:'https://leetcode.com/problems/rotate-array/' },
  { id:'t-0443', num:'0443', name:'String Compression',                           topic:'twopointers', difficulty:'medium', url:'https://leetcode.com/problems/string-compression/' },
  { id:'t-0633', num:'0633', name:'Sum of Square Numbers',                        topic:'twopointers', difficulty:'medium', url:'https://leetcode.com/problems/sum-of-square-numbers/' },
  { id:'t-0881', num:'0881', name:'Boats to Save People',                         topic:'twopointers', difficulty:'medium', url:'https://leetcode.com/problems/boats-to-save-people/' },
  { id:'t-0986', num:'0986', name:'Interval List Intersections',                  topic:'twopointers', difficulty:'medium', url:'https://leetcode.com/problems/interval-list-intersections/' },
  { id:'t-1679', num:'1679', name:'Max Number of K-Sum Pairs',                    topic:'twopointers', difficulty:'medium', url:'https://leetcode.com/problems/max-number-of-k-sum-pairs/' },
  { id:'t-2410', num:'2410', name:'Maximum Matching of Players With Trainers',    topic:'twopointers', difficulty:'medium', url:'https://leetcode.com/problems/maximum-matching-of-players-with-trainers/' },
  { id:'t-2486', num:'2486', name:'Append Characters to String to Make Subsequence', topic:'twopointers', difficulty:'medium', url:'https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/' },
  { id:'t-2491', num:'2491', name:'Divide Players Into Teams of Equal Skill',     topic:'twopointers', difficulty:'medium', url:'https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/' },

  // ── SLIDING WINDOW (FIXED) ──
  { id:'f-0643', num:'0643', name:'Maximum Average Subarray I',                   topic:'sliding-fixed', difficulty:'easy',   url:'https://leetcode.com/problems/maximum-average-subarray-i/' },
  { id:'f-2379', num:'2379', name:'Minimum Recolors to Get K Consecutive Black Blocks', topic:'sliding-fixed', difficulty:'easy', url:'https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/' },
  { id:'f-1423', num:'1423', name:'Maximum Points You Can Obtain from Cards',     topic:'sliding-fixed', difficulty:'medium', url:'https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/' },
  { id:'f-1456', num:'1456', name:'Maximum Number of Vowels in a Substring of Given Length', topic:'sliding-fixed', difficulty:'medium', url:'https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/' },
  { id:'f-2461', num:'2461', name:'Maximum Sum of Distinct Subarrays With Length K', topic:'sliding-fixed', difficulty:'medium', url:'https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/' },
  { id:'f-0438', num:'0438', name:'Find All Anagrams in a String',                topic:'sliding-fixed', difficulty:'medium', url:'https://leetcode.com/problems/find-all-anagrams-in-a-string/' },
  { id:'f-0567', num:'0567', name:'Permutation in String',                        topic:'sliding-fixed', difficulty:'medium', url:'https://leetcode.com/problems/permutation-in-string/' },

  // ── SLIDING WINDOW (DYNAMIC) ──
  { id:'d-0003', num:'0003', name:'Longest Substring Without Repeating Characters', topic:'sliding-dynamic', difficulty:'medium', url:'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
  { id:'d-0904', num:'0904', name:'Fruit Into Baskets',                           topic:'sliding-dynamic', difficulty:'medium', url:'https://leetcode.com/problems/fruit-into-baskets/' },
  { id:'d-0978', num:'0978', name:'Longest Turbulent Subarray',                   topic:'sliding-dynamic', difficulty:'medium', url:'https://leetcode.com/problems/longest-turbulent-subarray/' },
  { id:'d-0992', num:'0992', name:'Subarrays with K Different Integers',          topic:'sliding-dynamic', difficulty:'hard',   url:'https://leetcode.com/problems/subarrays-with-k-different-integers/' },
  { id:'d-1234', num:'1234', name:'Replace the Substring for Balanced String',    topic:'sliding-dynamic', difficulty:'medium', url:'https://leetcode.com/problems/replace-the-substring-for-balanced-string/' },
  { id:'d-1695', num:'1695', name:'Maximum Erasure Value',                        topic:'sliding-dynamic', difficulty:'medium', url:'https://leetcode.com/problems/maximum-erasure-value/' },
  { id:'d-2009', num:'2009', name:'Minimum Number of Operations to Make Array Continuous', topic:'sliding-dynamic', difficulty:'hard', url:'https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/' },
  { id:'d-2537', num:'2537', name:'Count the Number of Good Subarrays',           topic:'sliding-dynamic', difficulty:'medium', url:'https://leetcode.com/problems/count-the-number-of-good-subarrays/' },
  { id:'d-2730', num:'2730', name:'Find the Longest Semi-Repetitive Substring',   topic:'sliding-dynamic', difficulty:'medium', url:'https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/' },
  { id:'d-0076', num:'0076', name:'Minimum Window Substring',                     topic:'sliding-dynamic', difficulty:'hard',   url:'https://leetcode.com/problems/minimum-window-substring/' },
];

const TOPIC_META = {
  sorting:          { label: 'SORTING',          icon: '🔃', color: 'var(--neon)'  },
  prefix:           { label: 'PREFIX SUM',        icon: '➕', color: 'var(--neon)'  },
  twopointers:      { label: 'TWO POINTERS',      icon: '👉', color: 'var(--neon)'  },
  'sliding-fixed':  { label: 'SLIDING WINDOW — FIXED',   icon: '🪟', color: 'var(--neon)' },
  'sliding-dynamic':{ label: 'SLIDING WINDOW — DYNAMIC', icon: '🔄', color: 'var(--neon)' },
};

const STORAGE_KEY   = 'ib_challenge_attempts';
const PAGE_SIZE     = 12;
let   currentFilter = { topic: '', diff: '' };
let   currentPage   = 1;
let   filteredProblems = [...VERIFIED_PROBLEMS];

// ── localStorage helpers ──
function getAttempts() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}
function recordAttempt(id) {
  const data = getAttempts();
  data[id] = (data[id] || 0) + 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data[id];
}

// ── Main entry ──
export function initChallengeWall() {
  updateStats();
  applyFilter();
  initFilters();
}

// ── Stats ──
function updateStats() {
  const attempts = getAttempts();
  const total    = Object.values(attempts).reduce((a, b) => a + b, 0);
  const el       = document.getElementById('cp-visitor-attempts');
  if (el) el.textContent = total || '0';

  const totalEl = document.getElementById('cp-total');
  if (totalEl) totalEl.textContent = VERIFIED_PROBLEMS.length + '+';
}

// ── Filter ──
function applyFilter() {
  filteredProblems = VERIFIED_PROBLEMS.filter(p => {
    const topicOk = !currentFilter.topic || p.topic === currentFilter.topic;
    const diffOk  = !currentFilter.diff  || p.difficulty === currentFilter.diff;
    return topicOk && diffOk;
  });
  currentPage = 1;
  renderPage();
  renderPagination();
}

// ── Render a page of cards ──
function renderPage() {
  const grid = document.getElementById('challenge-grid');
  if (!grid) return;

  const attempts = getAttempts();
  const start    = (currentPage - 1) * PAGE_SIZE;
  const slice    = filteredProblems.slice(start, start + PAGE_SIZE);

  grid.innerHTML = '';
  if (slice.length === 0) {
    grid.innerHTML = '<div style="font-family:var(--font-mono);font-size:0.8rem;color:var(--muted);padding:2rem 0;">// No problems match this filter.</div>';
    return;
  }

  slice.forEach(p => {
    const count = attempts[p.id] || 0;
    const meta  = TOPIC_META[p.topic];
    const card  = document.createElement('div');
    card.className = 'challenge-card';

    card.innerHTML = `
      <div class="challenge-top">
        <span class="difficulty-badge ${p.difficulty}">${p.difficulty.toUpperCase()}</span>
        <span class="challenge-topic">${meta?.icon || ''} ${meta?.label || p.topic}</span>
      </div>
      <div class="challenge-num">#${p.num}</div>
      <div class="challenge-name">${p.name}</div>
      <div class="challenge-platform">// LeetCode</div>
      <div class="challenge-footer">
        <span class="challenge-attempts" id="att-${p.id}">
          <span class="att-count">${count}</span> attempt${count !== 1 ? 's' : ''}
        </span>
        <a href="${p.url}" target="_blank" rel="noopener"
           class="challenge-try-btn" data-pid="${p.id}">TRY IT →</a>
      </div>
    `;
    grid.appendChild(card);
  });

  // Attempt tracking
  grid.querySelectorAll('.challenge-try-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid   = btn.dataset.pid;
      const count = recordAttempt(pid);
      const span  = document.querySelector(`#att-${pid} .att-count`);
      if (span) span.textContent = count;
      updateStats();
    });
  });
}

// ── Pagination ──
function renderPagination() {
  const container = document.getElementById('challenge-pagination');
  if (!container) return;

  const total = Math.ceil(filteredProblems.length / PAGE_SIZE);
  container.innerHTML = '';

  if (total <= 1) return;

  const info = document.createElement('span');
  info.className = 'page-info';
  info.textContent = `Page ${currentPage} / ${total}  (${filteredProblems.length} problems)`;
  container.appendChild(info);

  const btnWrap = document.createElement('div');
  btnWrap.className = 'page-btns';

  const prev = document.createElement('button');
  prev.className = 'page-btn';
  prev.textContent = '← PREV';
  prev.disabled = currentPage === 1;
  prev.addEventListener('click', () => { currentPage--; renderPage(); renderPagination(); scrollToWall(); });

  const next = document.createElement('button');
  next.className = 'page-btn';
  next.textContent = 'NEXT →';
  next.disabled = currentPage === total;
  next.addEventListener('click', () => { currentPage++; renderPage(); renderPagination(); scrollToWall(); });

  btnWrap.appendChild(prev);

  // Page number pills
  for (let i = 1; i <= total; i++) {
    const pill = document.createElement('button');
    pill.className = 'page-pill' + (i === currentPage ? ' active' : '');
    pill.textContent = i;
    pill.addEventListener('click', (e) => {
      currentPage = parseInt(e.target.textContent);
      renderPage(); renderPagination(); scrollToWall();
    });
    btnWrap.appendChild(pill);
  }

  btnWrap.appendChild(next);
  container.appendChild(btnWrap);
}

function scrollToWall() {
  document.getElementById('challenge-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Filter buttons ──
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter.topic = btn.dataset.topic || '';
      currentFilter.diff  = btn.dataset.diff  || '';
      applyFilter();
    });
  });
}
