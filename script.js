const mirrorContainer = document.getElementById("mirrorCards");
const toast = document.getElementById("copyToast");
const searchInput = document.getElementById("mirrorSearchInput");
const statusFilter = document.getElementById("statusFilter");
const packageFilter = document.getElementById("packageFilter");
const categoryTabs = document.querySelectorAll(".category-tab");
const statusChartsContainer = document.getElementById("statusCharts");
const langToggle = document.getElementById("langToggle");

const translations = {
  fa: {
    documentTitle: "Mirava — آینه‌های نرم‌افزاری",
    navHome: "خانه",
    navAbout: "درباره",
    navDonate: "حمایت",
    heroText:
      "فهرست بروزی از میرورهای نرم‌افزاری ایران برای دسترسی سریع‌تر و قابل اتکاتر به پکیج‌ها، مخازن و ابزارهای توسعه.",
    supportMirava: "حمایت از میراوا",
    suggestMirror: "پیشنهاد میرور",
    suggestTitle: "پیشنهاد میرور جدید",
    mirrorName: "نام میرور *",
    mirrorUrl: "آدرس میرور *",
    mirrorDesc: "توضیح *",
    mirrorPackages: "پکیج‌ها / مخازن، جدا شده با کاما *",
    yourName: "نام شما (اختیاری)",
    yourEmail: "ایمیل شما (اختیاری)",
    submitSuggestion: "ثبت پیشنهاد",
    suggestionDone: "پیشنهاد با موفقیت ثبت شد.",
    mirrorNamePlaceholder: "مثلا: University of Tehran Mirror",
    mirrorUrlPlaceholder: "https://example.com/mirror",
    mirrorDescPlaceholder: "این میرور چه پکیج‌ها یا سرویس‌هایی را پوشش می‌دهد؟",
    mirrorPackagesPlaceholder: "مثلا: apt, pypi, npm, docker",
    submitterNamePlaceholder: "نامی که برای اعتباردهی نمایش داده شود",
    submitterEmailPlaceholder: "برای پیگیری، نه ارسال پیام تبلیغاتی",
    categoryAll: "همه",
    categoryOperatingSystems: "سیستم‌عامل‌ها",
    categoryContainers: "کانتینرها",
    categoryPackages: "پکیج‌ها",
    allStatuses: "همه وضعیت‌ها",
    onlineOnly: "فقط آنلاین",
    offlineOnly: "فقط آفلاین",
    checkingOnly: "در حال بررسی",
    allPackages: "همه پکیج‌ها",
    mirrorListEyebrow: "فهرست میرورها",
    mirrors: "میرورها",
    copied: "لینک کپی شد.",
    chartsEyebrow: "وضعیت اتصال",
    chartsTitle: "نمودار ۲۴ ساعته اتصال میرورها",
    paymentGateway: "راه‌های حمایت مالی",
    supportText:
      "اگر میراوا برای شما مفید بوده، می‌توانید در نگهداری و توسعه آن حمایت کنید.",
    payBtn: "پرداخت ریالی",
    payPingBtn: "پرداخت با پی‌پینگ",
    support: "حمایت",
    community: "جامعه",
    contributors: "مشارکت‌کننده‌ها",
    thanks: "ساخته شده توسط کسانی که به اینترنت آزاد و باز باور دارند.",
    footerText: "© Mirava • متن‌باز • آزادی از مسیر دسترسی • قدرت گرفته شده از",
    searchPlaceholder: "جست‌وجوی میرور...",
    checking: "در حال بررسی",
    online: "آنلاین",
    offline: "آفلاین",
    copyHint: "برای کپی آدرس کلیک کنید",
    empty: "میروری با این فیلترها پیدا نشد.",
    chartSuffix: "وضعیت اتصال میرورهای",
    availability: "درصد دسترسی",
    active: "فعال",
    failed: "قطع",
    last24Hours: "۲۴ ساعت گذشته",
    uptimeWindow: "پنجره اتصال",
    hourlyOnline: "وصل",
    hourlyOffline: "قطع",
    noHistory: "داده‌های تاریخچه از همین مرورگر جمع‌آوری می‌شود.",
    currentHour: "ساعت جاری",
    featuredMirrors: "میرورهای شاخص",
    chartDataScope: "داده نمودار",
    packagesLabel: "پکیج‌ها",
    mirrorColumn: "میرور",
    statusColumn: "وضعیت",
    recentChecks: "بررسی‌های اخیر",
    liaratrans: "لیارا",
    chartIntro:
      "نمودار بر اساس وضعیت اتصال همین میرورهای شاخص ساخته می‌شود، نه همه لیست.",
    gridEyebrow: "وضعیت اتصال",
    gridTitle: "وضعیت ۲۴ ساعته میرورها",
    gridSubtitle: "هر خانه یک ساعت است — نگه‌دارید تا تاریخ و جزئیات ببینید",
    noData: "بدون داده",
    pkgStatus: "وضعیت پکیج‌ها",
    liveStatus: "وضعیت زنده",
    uptimeBar: "نمودار آپتایم",
    sourceOriginal: "منبع اصلی",
    sourceMirrorIr: "میرور ایران",
    sourceMirrorIntl: "میرور بین‌المللی",
    copyUrl: "کپی آدرس",
    viewDetails: "مشاهده جزئیات",
    radarTitle: "رادار زنده میرورها",
    radarSubtitle: "پایش مستمر توسط Uptime Kuma — داده‌های واقعی سمت سرور",
  },
  en: {
    documentTitle: "Mirava — Free Mirrors",
    navHome: "Home",
    navAbout: "About",
    navDonate: "Donate",
    heroText:
      "A live directory of Iranian software mirrors for faster, more reliable access to packages, repositories, and developer tools.",
    supportMirava: "Support Mirava",
    suggestMirror: "Suggest Mirror",
    suggestTitle: "Suggest a New Mirror",
    mirrorName: "Mirror Name *",
    mirrorUrl: "Mirror URL *",
    mirrorDesc: "Description *",
    mirrorPackages: "Packages / Repositories, comma-separated *",
    yourName: "Your Name (Optional)",
    yourEmail: "Your Email (Optional)",
    submitSuggestion: "Submit Suggestion",
    suggestionDone: "Suggestion submitted successfully.",
    mirrorNamePlaceholder: "Example: University of Tehran Mirror",
    mirrorUrlPlaceholder: "https://example.com/mirror",
    mirrorDescPlaceholder: "What packages or services does this mirror cover?",
    mirrorPackagesPlaceholder: "e.g., apt, pypi, npm, docker",
    submitterNamePlaceholder: "How should we credit you?",
    submitterEmailPlaceholder: "For follow-up only. No spam.",
    categoryAll: "All",
    categoryOperatingSystems: "Operating Systems",
    categoryContainers: "Containers",
    categoryPackages: "Packages",
    allStatuses: "All statuses",
    onlineOnly: "Online only",
    offlineOnly: "Offline only",
    checkingOnly: "Checking",
    allPackages: "All packages",
    mirrorListEyebrow: "Mirror list",
    mirrors: "Mirrors",
    copied: "Link copied.",
    chartsEyebrow: "Connectivity",
    chartsTitle: "24-hour Mirror Connectivity",
    paymentGateway: "Donation Options",
    supportText:
      "If Mirava has been useful to you, you can support its maintenance and development.",
    payBtn: "Rial Donation",
    payPingBtn: "PayPing Donation",
    support: "Support",
    community: "Community",
    contributors: "Contributors",
    thanks: "Built by people who believe in a free and open internet.",
    footerText: "© Mirava • Open Source • Freedom Through Access • Powered by",
    searchPlaceholder: "Search mirrors...",
    checking: "Checking",
    online: "Online",
    offline: "Offline",
    copyHint: "Click to copy URL",
    empty: "No mirrors match these filters.",
    chartSuffix: "mirror connectivity for",
    availability: "availability",
    active: "active",
    failed: "failed",
    last24Hours: "Last 24 hours",
    uptimeWindow: "Connectivity window",
    hourlyOnline: "online",
    hourlyOffline: "offline",
    noHistory: "History is collected locally in this browser.",
    currentHour: "Current hour",
    featuredMirrors: "Featured mirrors",
    chartDataScope: "Chart data",
    packagesLabel: "Packages",
    mirrorColumn: "Mirror",
    statusColumn: "Status",
    recentChecks: "Recent checks",
    liaratrans: "liara",
    chartIntro:
      "The chart is based on these featured mirrors, not the entire directory.",
    gridEyebrow: "Connectivity",
    gridTitle: "24-Hour Mirror Status",
    gridSubtitle: "Each cell is one hour — hover to see date and details",
    noData: "No data",
    pkgStatus: "Package status",
    liveStatus: "Live status",
    uptimeBar: "Uptime bar",
    sourceOriginal: "Original Source",
    sourceMirrorIr: "Iran Mirror",
    sourceMirrorIntl: "Intl Mirror",
    copyUrl: "Copy URL",
    viewDetails: "View details",
    radarTitle: "Live Mirror Radar",
    radarSubtitle: "Continuously monitored by Uptime Kuma — real server-side data",
  },
};

const historyStorageKey = "mirava-24h-connectivity-v1";
const featuredMirrorMatchers = [
  "arvancloud.ir/dev/linux-repository",
  "liara.ir/mirrors",
  "repo.iut.ac.ir",
  "mirror.iranserver.com",
  "docker.mobinhost.com",
  "mirror.shatel.ir",
  "runflare.com/mirrors",
  "mirror.afranet.com",
];
let currentLang = localStorage.getItem("mirava-lang") || "fa";
let allMirrors = [];
let histories = {};
let hourlyHistory = loadHourlyHistory();
let checkInProgress = false;
let lastCheckedAt = null;
const expandedMirrors = new Set();
let activeCategory = "all";
let radarFallbackActive = false;

const categoryMatchers = {
  "operating-systems": [
    "alma",
    "alpine",
    "arch",
    "centos",
    "ctan",
    "debian",
    "epel",
    "fedora",
    "freebsd",
    "kali",
    "linux",
    "manjaro",
    "mint",
    "openbsd",
    "opensuse",
    "oracle",
    "raspbian",
    "rhel",
    "rocky",
    "ubuntu",
    "windows",
  ],
  containers: [
    "container",
    "docker",
    "ghcr",
    "image",
    "k8s",
    "kubernetes",
    "mcr",
    "quay",
    "registry",
  ],
  packages: [
    "android",
    "composer",
    "dart",
    "flutter",
    "go",
    "gradle",
    "java",
    "maven",
    "node",
    "npm",
    "nuget",
    "packagist",
    "php",
    "pip",
    "pypi",
    "python",
    "ruby",
    "rust",
    "yarn",
  ],
};

function t(key) {
  return translations[currentLang][key] || key;
}

function normalizePackage(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

function mirrorHasPackage(mirror, packageName) {
  if (packageName === "all") return true;
  const target = normalizePackage(packageName);
  return mirror.packages.some((pkg) => normalizePackage(pkg).includes(target));
}

function mirrorMatchesCategory(mirror, category) {
  if (category === "all") return true;
  const haystack = [
    mirror.name,
    mirror.description,
    mirror.url,
    ...mirror.packages,
    ...((mirror.packageUrls || []).map((pkg) => `${pkg.name} ${pkg.url}`)),
  ]
    .join(" ")
    .toLowerCase();

  return (categoryMatchers[category] || []).some((matcher) =>
    haystack.includes(matcher),
  );
}

function getStatus(url) {
  const history = histories[url] || [];
  if (!history.length) return "checking";
  return history[history.length - 1] ? "up" : "down";
}

function statusLabel(status) {
  if (status === "up") return t("online");
  if (status === "down") return t("offline");
  return t("checking");
}

function sourceTypeLabel(sourceType) {
  if (sourceType === "original") return t("sourceOriginal");
  if (sourceType === "mirror-intl") return t("sourceMirrorIntl");
  return t("sourceMirrorIr");
}

function resolvedSourceType(mirror) {
  return mirror.sourceType || "mirror-ir";
}

function getFilteredMirrors() {
  const query = searchInput.value.trim().toLowerCase();
  const status = statusFilter.value;
  const packageName = packageFilter.value;

  return allMirrors.filter((mirror) => {
    const statusMatches = status === "all" || getStatus(mirror.url) === status;
    const categoryMatches = mirrorMatchesCategory(mirror, activeCategory);
    const packageMatches = mirrorHasPackage(mirror, packageName);
    const queryMatches =
      !query ||
      mirror.name.toLowerCase().includes(query) ||
      mirror.description.toLowerCase().includes(query) ||
      mirror.url.toLowerCase().includes(query) ||
      mirror.packages.some((pkg) => pkg.toLowerCase().includes(query));

    return statusMatches && categoryMatches && packageMatches && queryMatches;
  });
}

function showToast() {
  if (!toast) return;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function copyMirrorUrl(url) {
  navigator.clipboard.writeText(url).then(showToast).catch(showToast);
}

function copyDonationCode(code) {
  navigator.clipboard.writeText(code).then(showToast).catch(showToast);
}

function renderCards() {
  const mirrors = getFilteredMirrors();
  mirrorContainer.innerHTML = "";

  if (!mirrors.length) {
    mirrorContainer.innerHTML = `<p class="empty-state">${t("empty")}</p>`;
    return;
  }

  mirrors.forEach((mirror) => {
    const status = getStatus(mirror.url);
    const sourceType = resolvedSourceType(mirror);
    const card = document.createElement("article");
    card.className = `mirror-card mirror-card-${status}`;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${mirror.name} - ${t("viewDetails")}`);

    const packageBadges = (mirror.packageUrls && mirror.packageUrls.length
      ? mirror.packageUrls.slice(0, 8).map((pkg) => {
          const s = getStatus(pkg.url);
          return `<span class="package pkg-${s}" title="${pkg.url}">${pkg.name}</span>`;
        })
      : mirror.packages.slice(0, 8).map((pkg) =>
          `<span class="package pkg-${status}" title="${mirror.url}">${pkg}</span>`,
        )
    ).join("");

    card.innerHTML = `
      <div class="mirror-card-head">
        <h3>${mirror.name}</h3>
        <div class="card-head-badges">
          <span class="source-tag source-${sourceType}">${sourceTypeLabel(sourceType)}</span>
          <span class="status-pill ${status}">${statusLabel(status)}</span>
        </div>
      </div>
      <p class="desc">${mirror.description}</p>
      <div class="packages">
        ${packageBadges}
      </div>
      <div class="card-footer">
        <span class="mirror-link">${mirror.url}</span>
        <button class="copy-url-btn" aria-label="${t("copyUrl")}" title="${t("copyUrl")}">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
            <path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1Zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H8V7h11v14Z"/>
          </svg>
        </button>
      </div>
    `;

    card.querySelector(".copy-url-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      copyMirrorUrl(mirror.url);
    });

    card.addEventListener("click", () => {
      window.location.href = `provider.html?url=${encodeURIComponent(mirror.url)}`;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = `provider.html?url=${encodeURIComponent(mirror.url)}`;
      }
    });

    mirrorContainer.appendChild(card);
  });
}

function renderPackageOptions() {
  const selected = packageFilter.value || "all";
  const packageNames = [
    ...new Set(allMirrors.flatMap((mirror) => mirror.packages)),
  ].sort((a, b) => a.localeCompare(b));

  packageFilter.innerHTML = `<option value="all">${t("allPackages")}</option>`;
  packageNames.forEach((packageName) => {
    const option = document.createElement("option");
    option.value = packageName;
    option.textContent = packageName;
    packageFilter.appendChild(option);
  });

  packageFilter.value = packageNames.includes(selected) ? selected : "all";
}

function getFeaturedMirrors() {
  const selected = [];

  featuredMirrorMatchers.forEach((matcher) => {
    const found = allMirrors.find((mirror) =>
      mirror.url.toLowerCase().includes(matcher),
    );
    if (found && !selected.some((mirror) => mirror.url === found.url)) {
      selected.push(found);
    }
  });

  return selected.length ? selected : allMirrors.slice(0, 8);
}

function hourKey(date = new Date()) {
  const rounded = new Date(date);
  rounded.setMinutes(0, 0, 0);
  return rounded.toISOString();
}

function formatHourLabel(isoKey) {
  const date = new Date(isoKey);
  return new Intl.DateTimeFormat(currentLang === "fa" ? "fa-IR" : "en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatDateTimeLabel(isoKey) {
  const date = new Date(isoKey);
  return new Intl.DateTimeFormat(currentLang === "fa" ? "fa-IR" : "en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function escapeAttr(str) {
  return str.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function formatLastChecked() {
  if (!lastCheckedAt) return currentLang === "fa" ? "در حال بررسی…" : "checking…";
  const s = Math.round((Date.now() - lastCheckedAt) / 1000);
  if (s < 10) return currentLang === "fa" ? "همین الان" : "just now";
  if (s < 60) return currentLang === "fa" ? `${s} ثانیه پیش` : `${s}s ago`;
  const m = Math.floor(s / 60);
  return currentLang === "fa" ? `${m} دقیقه پیش` : `${m}m ago`;
}

function loadHourlyHistory() {
  try {
    const parsed = JSON.parse(localStorage.getItem(historyStorageKey) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHourlyHistory() {
  localStorage.setItem(
    historyStorageKey,
    JSON.stringify(hourlyHistory.slice(-24)),
  );
}

function getHourlyBuckets() {
  const now = new Date();
  const buckets = [];

  for (let index = 23; index >= 0; index -= 1) {
    const date = new Date(now);
    date.setHours(now.getHours() - index, 0, 0, 0);
    const key = date.toISOString();
    const stored = hourlyHistory.find((bucket) => bucket.hour === key);
    buckets.push(
      stored || { hour: key, up: 0, down: 0, samples: 0, mirrors: {} },
    );
  }

  return buckets;
}

function recordHourlySnapshot(results) {
  const key = hourKey();
  const up = results.filter((result) => result.online).length;
  const down = results.length - up;
  const mirrors = Object.fromEntries(
    results.map((result) => [result.url, result.online]),
  );
  const existing = hourlyHistory.find((bucket) => bucket.hour === key);

  if (existing) {
    existing.up += up;
    existing.down += down;
    existing.samples += 1;
    existing.mirrors = { ...(existing.mirrors || {}), ...mirrors };
  } else {
    hourlyHistory.push({ hour: key, up, down, samples: 1, mirrors });
  }

  hourlyHistory = hourlyHistory
    .filter(
      (bucket) =>
        new Date(bucket.hour).getTime() >= Date.now() - 23 * 60 * 60 * 1000,
    )
    .sort((a, b) => new Date(a.hour) - new Date(b.hour))
    .slice(-24);

  saveHourlyHistory();
}

function getMirrorUptime(mirrorUrl) {
  const buckets = getHourlyBuckets();
  let up = 0, total = 0;
  buckets.forEach((bucket) => {
    if (bucket.mirrors && typeof bucket.mirrors[mirrorUrl] === "boolean") {
      total++;
      if (bucket.mirrors[mirrorUrl]) up++;
    }
  });
  if (!total) {
    const hist = histories[mirrorUrl] || [];
    if (!hist.length) return null;
    const histUp = hist.filter(Boolean).length;
    return Math.round((histUp / hist.length) * 100);
  }
  return Math.round((up / total) * 100);
}

function renderAccessibilityChart() {
  const container = document.getElementById("accessibilityChart");
  if (!container) return;

  const featuredMirrors = getFeaturedMirrors();

  const rows = featuredMirrors.map((mirror) => {
    const uptime = getMirrorUptime(mirror.url);
    const status = getStatus(mirror.url);
    const recent = (histories[mirror.url] || []).slice(-12);

    const barColor =
      uptime === null
        ? "rgba(169,185,255,0.2)"
        : uptime >= 80
          ? "var(--green)"
          : uptime >= 50
            ? "#f5a623"
            : "var(--red)";

    const pctText =
      uptime === null ? `<span class="acc-no-data">${t("noData")}</span>` : `${uptime}%`;

    const sparkline = recent.length
      ? recent.map((v) => `<i class="${v ? "up" : "down"}"></i>`).join("")
      : "<i></i>".repeat(8);

    const pkgRows = mirror.packageUrls
      ? mirror.packageUrls
          .map((pkg) => {
            const ps = getStatus(pkg.url);
            return `<span class="acc-pkg pkg-${ps}">${pkg.name}</span>`;
          })
          .join("")
      : "";

    return `
      <div class="acc-row acc-row-${status}">
        <div class="acc-mirror-info">
          <strong>${mirror.name}</strong>
          <small>${mirror.url.replace(/^https?:\/\//, "")}</small>
        </div>
        <div class="acc-bar-wrap" aria-label="${t("uptimeBar")}">
          <div class="acc-bar" style="width:${uptime ?? 0}%;background:${barColor}"></div>
        </div>
        <div class="acc-pct">${pctText}</div>
        <span class="status-pill ${status} acc-pill">${statusLabel(status)}</span>
        <div class="acc-sparkline mini-history" aria-label="${t("recentChecks")}">${sparkline}</div>
        ${pkgRows ? `<div class="acc-pkgs">${pkgRows}</div>` : ""}
      </div>
    `;
  });

  container.innerHTML = rows.join("");
}

function renderCharts() {
  if (!statusChartsContainer) return;

  const buckets = getHourlyBuckets();
  const featuredMirrors = getFeaturedMirrors();
  const scopedBuckets = buckets.map((bucket) => {
    const hasScopedMirrorData =
      bucket.mirrors && Object.keys(bucket.mirrors).length;
    if (!hasScopedMirrorData) return bucket;

    const checks = featuredMirrors
      .map((mirror) => bucket.mirrors[mirror.url])
      .filter((value) => typeof value === "boolean");

    if (!checks.length) return { ...bucket, up: 0, down: 0 };

    const up = checks.filter(Boolean).length;
    return { ...bucket, up, down: checks.length - up };
  });
  const totals = buckets.reduce(
    (summary, bucket) => {
      const scoped =
        scopedBuckets.find((item) => item.hour === bucket.hour) || bucket;
      summary.up += scoped.up;
      summary.down += scoped.down;
      summary.samples += bucket.samples;
      return summary;
    },
    { up: 0, down: 0, samples: 0 },
  );
  const totalChecks = totals.up + totals.down;
  const uptime = totalChecks ? Math.round((totals.up / totalChecks) * 100) : 0;
  const maxChecks = Math.max(
    1,
    ...scopedBuckets.map((bucket) => bucket.up + bucket.down),
  );
  const points = scopedBuckets
    .map((bucket, index) => {
      const total = bucket.up + bucket.down;
      const percent = total ? bucket.up / total : 0;
      const x = 18 + index * (644 / 23);
      const y = 152 - percent * 122;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  statusChartsContainer.innerHTML = `
    <article class="featured-monitor">
      <div class="featured-chart">
        <div class="uptime-head">
          <div>
            <span class="eyebrow">${t("last24Hours")}</span>
            <h3>${t("uptimeWindow")}</h3>
            <p>${totals.samples ? t("chartIntro") : t("noHistory")}</p>
          </div>
          <div class="uptime-score">
            <strong>${uptime}%</strong>
            <span>${t("availability")}</span>
          </div>
        </div>

        <div class="timeline-chart" aria-label="${t("chartsTitle")}">
          <svg class="uptime-line" viewBox="0 0 680 180" preserveAspectRatio="none">
            <defs>
              <linearGradient id="uptimeFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="rgba(112, 142, 255, 0.38)" />
                <stop offset="100%" stop-color="rgba(112, 142, 255, 0)" />
              </linearGradient>
            </defs>
            <path class="uptime-area" d="${points} L 662 172 L 18 172 Z"></path>
            <path class="uptime-line-path" d="${points}"></path>
          </svg>

          <div class="hour-bars">
            ${scopedBuckets
              .map((bucket, index) => {
                const total = bucket.up + bucket.down;
                const upHeight = total
                  ? Math.max(4, (bucket.up / maxChecks) * 100)
                  : 2;
                const downHeight = total
                  ? Math.max(2, (bucket.down / maxChecks) * 100)
                  : 2;
                const isCurrent = index === buckets.length - 1;

                return `
                <div class="hour-slot ${isCurrent ? "current" : ""}" title="${formatHourLabel(bucket.hour)} · ${bucket.up} ${t("hourlyOnline")} / ${bucket.down} ${t("hourlyOffline")}">
                  <span class="down-bar" style="height:${downHeight}%"></span>
                  <span class="up-bar" style="height:${upHeight}%"></span>
                  <small>${index % 4 === 0 || isCurrent ? formatHourLabel(bucket.hour) : ""}</small>
                </div>
              `;
              })
              .join("")}
          </div>
        </div>

        <div class="chart-legend">
          <span><i class="legend-dot up"></i>${totals.up} ${t("hourlyOnline")}</span>
          <span><i class="legend-dot down"></i>${totals.down} ${t("hourlyOffline")}</span>
          <span class="current-hour">${t("currentHour")}: ${formatHourLabel(buckets[buckets.length - 1].hour)}</span>
        </div>
      </div>

      <div class="featured-table-wrap">
        <div class="featured-table-head">
          <span class="eyebrow">${t("chartDataScope")}</span>
          <h3>${t("featuredMirrors")}</h3>
        </div>
        <div class="featured-table">
          ${featuredMirrors
            .map((mirror) => {
              const status = getStatus(mirror.url);
              const recent = (histories[mirror.url] || []).slice(-10);

              return `
                <div class="featured-row ${status}">
                  <div class="featured-main">
                    <strong>${mirror.name}</strong>
                    <small>${mirror.url.replace(/^https?:\/\//, "")}</small>
                  </div>
                  <span class="status-pill ${status}">${statusLabel(status)}</span>
                  <div class="mini-history" aria-label="${t("recentChecks")}">
                    ${
                      recent.length
                        ? recent
                            .map(
                              (item) =>
                                `<i class="${item ? "up" : "down"}"></i>`,
                            )
                            .join("")
                        : "<i></i><i></i><i></i><i></i><i></i>"
                    }
                  </div>
                  <div class="featured-packages" aria-label="${t("packagesLabel")}">
                    ${mirror.packages
                      .slice(0, 4)
                      .map((pkg) => `<span>${pkg}</span>`)
                      .join("")}
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    </article>
  `;
}

function renderStatusGrid() {
  const container = document.getElementById("statusGrid");
  if (!container) return;

  const buckets = getHourlyBuckets();
  const featuredMirrors = getFeaturedMirrors();

  if (!featuredMirrors.length) {
    container.innerHTML = `<p class="empty-state">${t("empty")}</p>`;
    return;
  }

  // Pre-compute stats per mirror
  const mirrorStats = featuredMirrors.map((mirror) => {
    let upCount = 0, totalCount = 0;
    const currentStatus = getStatus(mirror.url);
    buckets.forEach((b) => {
      if (b.mirrors && typeof b.mirrors[mirror.url] === "boolean") {
        totalCount++;
        if (b.mirrors[mirror.url]) upCount++;
      }
    });
    const pct = totalCount ? Math.round((upCount / totalCount) * 100) : null;
    return { mirror, pct, currentStatus };
  });

  const onlineCount  = mirrorStats.filter((s) => s.currentStatus === "up").length;
  const offlineCount = mirrorStats.filter((s) => s.currentStatus === "down").length;
  const knownPcts    = mirrorStats.filter((s) => s.pct !== null).map((s) => s.pct);
  const avgUptime    = knownPcts.length
    ? Math.round(knownPcts.reduce((a, b) => a + b, 0) / knownPcts.length)
    : null;

  const headlineClass = avgUptime === null || avgUptime >= 80 ? "sg-hl-ok"
    : avgUptime >= 50 ? "sg-hl-warn" : "sg-hl-crit";
  const headlineText =
    avgUptime === null || avgUptime >= 80
      ? (currentLang === "fa" ? "همه سیستم‌ها عملیاتی" : "All systems operational")
      : avgUptime >= 50
      ? (currentLang === "fa" ? "اختلال جزئی در برخی میرورها" : "Partial degradation detected")
      : (currentLang === "fa" ? "اختلال گسترده شناسایی شد" : "Major outage detected");

  const hourHeaders = buckets
    .map((bucket, i) => {
      const isCurrent = i === buckets.length - 1;
      const label = i % 4 === 0
        ? formatHourLabel(bucket.hour)
        : isCurrent ? (currentLang === "fa" ? "الان" : "now") : "";
      return `<div class="sg-hour-label${isCurrent ? " sg-now" : ""}">${label}</div>`;
    })
    .join("");

  const rows = mirrorStats
    .map(({ mirror, pct, currentStatus }) => {
      const liveKnown  = currentStatus === "up" || currentStatus === "down";
      const pctClass   = pct === null ? "" : pct >= 80 ? "sg-good" : pct >= 50 ? "sg-mid" : "sg-bad";
      const pctText    = pct !== null ? `${pct}%` : "—";
      const isExpanded = expandedMirrors.has(mirror.url);
      const hasPkgs    = true; // every mirror shows package status

      const cells = buckets
        .map((bucket, i) => {
          const isCurrent = i === buckets.length - 1;
          let state = "nodata", estimated = false;
          if (bucket.mirrors && typeof bucket.mirrors[mirror.url] === "boolean") {
            state = bucket.mirrors[mirror.url] ? "up" : "down";
          } else if (liveKnown) {
            state = currentStatus;
            estimated = true;
          }
          const statusWord =
            state === "up" ? t("online") : state === "down" ? t("offline") : t("checking");
          const tip = escapeAttr(
            [mirror.name, formatDateTimeLabel(bucket.hour), statusWord + (estimated ? " (live)" : ""), state].join("\x01"),
          );
          return `<div class="sg-cell sg-${state}${estimated ? " sg-est" : ""}${isCurrent ? " sg-current" : ""}" data-tip="${tip}"></div>`;
        })
        .join("");

      const pkgItems = (mirror.packageUrls && mirror.packageUrls.length
        ? mirror.packageUrls.map((pkg) => {
            const ps = getStatus(pkg.url);
            return `<span class="sg-pkg-item sg-pkg-${ps}" title="${pkg.url}"><span class="sg-pkg-dot"></span>${pkg.name}</span>`;
          })
        : mirror.packages.map((pkg) =>
            `<span class="sg-pkg-item sg-pkg-${currentStatus}" title="${mirror.url}"><span class="sg-pkg-dot"></span>${pkg}</span>`,
          )
      ).join("");

      const pkgPanel = `
        <div class="sg-pkg-panel${isExpanded ? "" : " sg-hidden"}">
          <span class="sg-pkg-label">${currentLang === "fa" ? "پکیج‌ها" : "Packages"}</span>
          ${pkgItems}
        </div>`;

      return `
        <div class="sg-row-wrap${isExpanded ? " sg-row-open" : ""}">
          <div class="sg-row${hasPkgs ? " sg-row-clickable" : ""}" data-url="${escapeAttr(mirror.url)}"${hasPkgs ? ' role="button" tabindex="0"' : ""}>
            <div class="sg-label">
              <span class="sg-name">${mirror.name}</span>
              <span class="sg-url">${mirror.url.replace(/^https?:\/\//, "").split("/")[0]}</span>
            </div>
            <div class="sg-live ${currentStatus}"></div>
            <div class="sg-cells">${cells}</div>
            <div class="sg-pct ${pctClass}">${pctText}</div>
            ${hasPkgs ? `<div class="sg-chevron${isExpanded ? " open" : ""}">›</div>` : "<div></div>"}
          </div>
          ${pkgPanel}
        </div>`;
    })
    .join("");

  container.innerHTML = `
    <div class="sg-headline ${headlineClass}">
      <span class="sg-hl-dot"></span>
      <span class="sg-hl-text">${headlineText}</span>
      <span class="sg-hl-time">${currentLang === "fa" ? "آخرین بررسی" : "checked"} ${formatLastChecked()}</span>
    </div>

    <div class="sg-summary">
      <div class="sg-sum-item">
        <span class="sg-sum-num sg-good">${onlineCount}</span>
        <span class="sg-sum-lbl">${t("online")}</span>
      </div>
      <div class="sg-sum-sep"></div>
      <div class="sg-sum-item">
        <span class="sg-sum-num sg-bad">${offlineCount}</span>
        <span class="sg-sum-lbl">${t("offline")}</span>
      </div>
      <div class="sg-sum-sep"></div>
      <div class="sg-sum-item">
        <span class="sg-sum-num">${avgUptime !== null ? avgUptime + "%" : "—"}</span>
        <span class="sg-sum-lbl">${t("availability")}</span>
      </div>
      <div class="sg-sum-sep"></div>
      <div class="sg-sum-item">
        <span class="sg-sum-num">${featuredMirrors.length}</span>
        <span class="sg-sum-lbl">${currentLang === "fa" ? "میرور شاخص" : "featured"}</span>
      </div>
    </div>

    <div class="sg-wrap">
      <div class="sg-head">
        <div class="sg-label-ph"></div>
        <div></div>
        <div class="sg-hour-labels">${hourHeaders}</div>
        <div class="sg-pct-head">${t("availability")}</div>
        <div></div>
      </div>
      ${rows}
    </div>

    <div class="sg-legend">
      <span class="sg-legend-item"><i class="sg-dot sg-up"></i>${t("online")}</span>
      <span class="sg-legend-item"><i class="sg-dot sg-down"></i>${t("offline")}</span>
      <span class="sg-legend-item"><i class="sg-dot sg-up sg-est"></i>${currentLang === "fa" ? "زنده (بدون ثبت)" : "live (est.)"}</span>
      <span class="sg-legend-pkg">${currentLang === "fa" ? "› کلیک برای وضعیت پکیج" : "› click row for packages"}</span>
    </div>
    <div id="sgTooltip" class="sg-tooltip" hidden></div>
  `;

  // Rich hover tooltip using HTML
  const tip = container.querySelector("#sgTooltip");
  container.addEventListener("mousemove", (e) => {
    const cell = e.target.closest(".sg-cell");
    if (!cell || !cell.dataset.tip) { tip.hidden = true; return; }
    const [name, dateStr, statusStr, state] = cell.dataset.tip.split("\x01");
    tip.innerHTML = `
      <div class="sg-tip-name">${name}</div>
      <div class="sg-tip-time">${dateStr}</div>
      <div class="sg-tip-status sg-tip-${state}"><span class="sg-tip-dot"></span>${statusStr}</div>`;
    tip.hidden = false;
    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left + 14;
    let y = e.clientY - rect.top - 80;
    if (x + 240 > rect.width) x = e.clientX - rect.left - 240;
    if (y < 4) y = e.clientY - rect.top + 20;
    tip.style.left = `${x}px`;
    tip.style.top = `${y}px`;
  });
  container.addEventListener("mouseleave", () => { tip.hidden = true; });

  // Expand/collapse row to show per-package status
  container.querySelectorAll(".sg-row-clickable").forEach((row) => {
    const toggle = () => {
      const url   = row.dataset.url;
      const wrap  = row.closest(".sg-row-wrap");
      const panel = wrap && wrap.querySelector(".sg-pkg-panel");
      const chev  = row.querySelector(".sg-chevron");
      if (!panel) return;
      const open = expandedMirrors.has(url);
      if (open) {
        expandedMirrors.delete(url);
        panel.classList.add("sg-hidden");
        wrap.classList.remove("sg-row-open");
        chev && chev.classList.remove("open");
      } else {
        expandedMirrors.add(url);
        panel.classList.remove("sg-hidden");
        wrap.classList.add("sg-row-open");
        chev && chev.classList.add("open");
      }
    };
    row.addEventListener("click", toggle);
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });
}

function renderAll() {
  renderCards();
  if (radarFallbackActive) renderStatusGrid();
}

function initRadarFallback() {
  const iframe = document.getElementById("radarFrame");
  const wrap = document.getElementById("radarIframeWrap");
  const fallback = document.getElementById("statusGrid");
  if (!iframe || !wrap || !fallback) return;

  function activateFallback() {
    if (radarFallbackActive) return;
    radarFallbackActive = true;
    wrap.hidden = true;
    fallback.removeAttribute("hidden");
    renderStatusGrid();
  }

  let loadFired = false;
  const startTime = Date.now();

  iframe.addEventListener("load", () => {
    loadFired = true;
    // Blocked iframes (X-Frame-Options) resolve in < 800ms;
    // a real Uptime Kuma page with JS takes much longer.
    if (Date.now() - startTime < 1500) {
      activateFallback();
    }
  });

  // Safety net: if load never fires, fall back after 8s
  setTimeout(() => {
    if (!loadFired) activateFallback();
  }, 8000);
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "fa" ? "rtl" : "ltr";
  document.title = t("documentTitle");
  langToggle.textContent = currentLang === "fa" ? "EN" : "FA";
  searchInput.placeholder = t("searchPlaceholder");
  document.getElementById("mirrorName").placeholder = t("mirrorNamePlaceholder");
  document.getElementById("mirrorUrl").placeholder = t("mirrorUrlPlaceholder");
  document.getElementById("mirrorDesc").placeholder = t("mirrorDescPlaceholder");
  document.getElementById("mirrorPackages").placeholder = t("mirrorPackagesPlaceholder");
  document.getElementById("submitterName").placeholder = t("submitterNamePlaceholder");
  document.getElementById("submitterEmail").placeholder = t("submitterEmailPlaceholder");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });

  const currentStatus = statusFilter.value;
  statusFilter.options[0].textContent = t("allStatuses");
  statusFilter.options[1].textContent = t("onlineOnly");
  statusFilter.options[2].textContent = t("offlineOnly");
  statusFilter.options[3].textContent = t("checkingOnly");
  statusFilter.value = currentStatus;

  renderPackageOptions();
  renderAll();
}

function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

function checkMirror(url, timeout = 4500) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(false), timeout);
    fetch(url, { mode: "no-cors", cache: "no-store" })
      .then(() => {
        clearTimeout(timer);
        resolve(true);
      })
      .catch(() => {
        clearTimeout(timer);
        resolve(false);
      });
  });
}

async function updateConnectivity() {
  if (checkInProgress) return;
  checkInProgress = true;

  const urlsToCheck = [];
  allMirrors.forEach((mirror) => {
    urlsToCheck.push(mirror.url);
    if (mirror.packageUrls) {
      mirror.packageUrls.forEach((pkg) => urlsToCheck.push(pkg.url));
    }
  });
  const uniqueUrls = [...new Set(urlsToCheck)];

  const allResults = await Promise.all(
    uniqueUrls.map(async (url) => ({ url, online: await checkMirror(url) })),
  );

  allResults.forEach(({ url, online }) => {
    if (!histories[url]) histories[url] = [];
    histories[url].push(online);
    if (histories[url].length > 24) histories[url].shift();
  });

  const mainResults = allMirrors.map((mirror) => ({
    url: mirror.url,
    online: allResults.find((r) => r.url === mirror.url)?.online ?? false,
  }));
  recordHourlySnapshot(mainResults);

  checkInProgress = false;
  lastCheckedAt = Date.now();
  renderAll();
}

async function loadMirrors() {
  try {
    const response = await fetch("mirror.json");
    const data = await response.json();
    const approvedMirrors = JSON.parse(
      localStorage.getItem("approvedMirrors") || "[]",
    );
    allMirrors = [
      ...(data.official_iran_mirrors || []),
      ...(data.global_mirrors || []),
      ...approvedMirrors,
    ];
    histories = {};
    allMirrors.forEach((mirror) => {
      if (!histories[mirror.url]) histories[mirror.url] = [];
      if (mirror.packageUrls) {
        mirror.packageUrls.forEach((pkg) => {
          if (!histories[pkg.url]) histories[pkg.url] = [];
        });
      }
    });

    renderPackageOptions();
    applyLanguage();
    initRadarFallback();
    updateConnectivity();
    setInterval(updateConnectivity, 15000);
  } catch {
    mirrorContainer.innerHTML = `<p class="empty-state">${t("empty")}</p>`;
  }
}

window.displayMirrors = (mirrors) => {
  allMirrors = mirrors;
  const newHistories = {};
  allMirrors.forEach((mirror) => {
    newHistories[mirror.url] = histories[mirror.url] || [];
    if (mirror.packageUrls) {
      mirror.packageUrls.forEach((pkg) => {
        newHistories[pkg.url] = histories[pkg.url] || [];
      });
    }
  });
  histories = newHistories;
  renderPackageOptions();
  renderAll();
};

/* -----------------------------
   CONTRIBUTORS (STATIC LIST)
--------------------------------*/
const contributors = [
  "ArmanTaheriGhaleTaki",
  "geedook",
  "maede-ps",
  "javadghane",
  "mohammadhasananisi",
  "jarqvi",
  "amirparsadd",
  "vesal-j",
  "msnp1381",
  "sinaaboutalebi",
  "ehsannarmani",
  "erfuuan",
  "linuxmaster14",
  "imdanieldev",
  "mrarianet",
  "hesam-init",
  "aliinreallife",
  "alireza5969",
  "sirwanveisi",
  "alialmasi",
  "alitavaliee",
  "ohmydevops",
  "amirabbas-gh"
];

const contributorsContainer = document.getElementById("contributors");

if (contributorsContainer) {
  contributors.forEach((username) => {
    const a = document.createElement("a");
    a.href = `https://github.com/${username}`;
    a.target = "_blank";
    a.rel = "noopener";

    // Local default image as data URI (no internet needed)
    const defaultAvatar = `/images/${username}.webp`;

    const img = document.createElement("img");
    img.src = defaultAvatar;
    img.alt = username;
    img.title = username;

    // img.onerror = function() {
    //   this.src = defaultAvatar;
    //   this.style.backgroundColor = "#4dffb8";
    //   this.style.objectFit = "cover";
    // };

    // // Add loading animation
    // img.style.opacity = "0";
    img.style.transition = "opacity 0.3s";
    img.onload = function () {
      this.style.opacity = "1";
    };

    a.appendChild(img);
    contributorsContainer.appendChild(a);
  });
}

searchInput.addEventListener("input", debounce(renderCards, 180));
statusFilter.addEventListener("change", renderAll);
packageFilter.addEventListener("change", renderAll);
categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeCategory = tab.dataset.category || "all";
    categoryTabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
    });
    renderAll();
  });
});
document.querySelectorAll(".crypto-list div").forEach((row) => {
  row.addEventListener("click", () => {
    const code = row.querySelector("code");
    if (code) copyDonationCode(code.textContent.trim());
  });
});
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "fa" ? "en" : "fa";
  localStorage.setItem("mirava-lang", currentLang);
  applyLanguage();
});

function initInPageNav() {
  const supportSection = document.getElementById("support");
  if (!supportSection) return;

  const homeLink = document.querySelector('.site-nav a[href="index.html"]');
  const supportNavLink = document.querySelector('.site-nav a[href="#support"]');
  const supportLinks = document.querySelectorAll('a[href="#support"]');

  function getTopbarOffset() {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue("--topbar-offset")
      .trim();
    return parseInt(raw, 10) || 56;
  }

  function setNavActive(section) {
    if (homeLink) {
      if (section === "support") {
        homeLink.removeAttribute("aria-current");
      } else {
        homeLink.setAttribute("aria-current", "page");
      }
    }
    if (supportNavLink) {
      if (section === "support") {
        supportNavLink.setAttribute("aria-current", "location");
      } else {
        supportNavLink.removeAttribute("aria-current");
      }
    }
  }

  function scrollToSupport(updateHash = true) {
    supportSection.scrollIntoView({ behavior: "smooth", block: "start" });
    if (updateHash) {
      history.replaceState(null, "", "#support");
    }
    setNavActive("support");
  }

  let navScrollLock = false;

  function updateNavFromScroll() {
    if (navScrollLock) return;

    const offset = getTopbarOffset();
    const rect = supportSection.getBoundingClientRect();
    const inSupport = rect.top <= offset + 24 && rect.bottom > offset + 24;
    setNavActive(inSupport ? "support" : "home");

    if (!inSupport && location.hash === "#support") {
      history.replaceState(null, "", `${location.pathname}${location.search}`);
    }
  }

  supportLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      navScrollLock = true;
      scrollToSupport();
      link.blur();
      setTimeout(() => {
        navScrollLock = false;
        updateNavFromScroll();
      }, 700);
    });
  });

  window.addEventListener("scroll", updateNavFromScroll, { passive: true });
  updateNavFromScroll();

  if (location.hash === "#support") {
    requestAnimationFrame(() => scrollToSupport(false));
  }
}

initInPageNav();

loadMirrors();
