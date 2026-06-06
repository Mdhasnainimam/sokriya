// SkoriyaTech — shared site JS (navbar, footer, FAB, constellation, toasts, forms)
(function () {
  const LOGO_URL =
    "https://customer-assets.emergentagent.com/job_embedded-ai-hub-1/artifacts/dn7n8sop_ChatGPT%20Image%20May%2013%2C%202026%2C%2004_07_33%20PM-Photoroom.png";

  const CONTACT = {
    email: "info@skoriyatech.com",
    phones: ["+91 89714 94668", "+91 78926 74876"],
    whatsapp: "918971494668",
    whatsappDisplay: "+91 89714 94668",
    linkedin: "https://www.linkedin.com/company/117704214/",
    address:
      "3GC9+325 DAILY FRESH Fruits & Vegetables, Abbigere Rd, Medaralli, Chikkabanavara, Bengaluru, Karnataka 560090",
    addressShort: "Chikkabanavara, Bengaluru, KA 560090",
    mapEmbed:
      "https://www.google.com/maps?q=3GC9%2B325%20Bengaluru%2C%20Karnataka&output=embed",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=3GC9%2B325%20Bengaluru%20Karnataka",
  };

  const NAV = [
    { href: "index.html", label: "Home" },
    { href: "services.html", label: "Services" },
    { href: "industries.html", label: "Industries" },
    { href: "projects.html", label: "Projects" },
    { href: "about.html", label: "About" },
    { href: "contact.html", label: "Contact" },
  ];

  // current page key
  const currentPage = (() => {
    const p = location.pathname.split("/").pop() || "index.html";
    return p.endsWith(".html") ? p : "index.html";
  })();

  // ---------- Navbar ----------
  function renderNavbar() {
    const root = document.getElementById("nav-root");
    if (!root) return;
    const links = NAV.map(
      (l) =>
        `<a href="${l.href}" class="nav-link ${l.href === currentPage ? "active" : ""}" data-testid="nav-${l.label.toLowerCase()}-link">${l.label}</a>`
    ).join("");
    const mobileLinks = NAV.map(
      (l) =>
        `<a href="${l.href}" class="block py-3 text-base border-b border-white/5 ${l.href === currentPage ? "text-gold" : "text-zinc-300"}">${l.label}</a>`
    ).join("");

    root.innerHTML = `
      <header id="site-navbar" class="fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-transparent">
        <div class="container-tight h-20 flex items-center justify-between">
          <a href="index.html" class="flex items-center gap-3">
            <img src="${LOGO_URL}" alt="SkoriyaTech" class="h-12 w-12 object-contain" />
            <div class="leading-none hidden sm:block">
              <div class="font-heading text-lg tracking-tight">skoriya<span class="text-gold">tech</span></div>
              <div class="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 mt-1">Engineering that Runs Deep</div>
            </div>
          </a>
          <nav class="hidden lg:flex items-center gap-1">${links}</nav>
          <div class="flex items-center gap-3">
            <a href="contact.html" class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-black font-medium text-sm rounded-sm hover:bg-[#F3E5AB] transition">
              Let's Build
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>
            <button id="mobile-toggle" aria-label="Toggle menu" class="lg:hidden p-2 text-zinc-200 hover:text-gold">
              <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              <svg id="close-icon" class="hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>
        <div id="mobile-panel" class="lg:hidden glass border-t border-white/5 hidden">
          <div class="container-tight py-6 flex flex-col gap-1">
            ${mobileLinks}
            <a href="contact.html" class="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold text-black font-medium rounded-sm">Let's Build Your Idea</a>
          </div>
        </div>
      </header>
    `;

    // Mobile toggle
    const tgl = document.getElementById("mobile-toggle");
    const panel = document.getElementById("mobile-panel");
    const mi = document.getElementById("menu-icon");
    const ci = document.getElementById("close-icon");
    tgl.addEventListener("click", () => {
      panel.classList.toggle("hidden");
      mi.classList.toggle("hidden");
      ci.classList.toggle("hidden");
    });

    // Scroll style
    const nav = document.getElementById("site-navbar");
    const onScroll = () => {
      if (window.scrollY > 12) nav.classList.add("glass", "border-b", "border-white/5");
      else nav.classList.remove("glass", "border-b", "border-white/5");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ---------- Footer ----------
  function renderFooter() {
    const root = document.getElementById("footer-root");
    if (!root) return;
    const navLinks = NAV.map(
      (l) => `<li><a href="${l.href}" class="text-zinc-400 hover:text-gold transition">${l.label}</a></li>`
    ).join("");
    const phones = CONTACT.phones
      .map(
        (p) => `<li class="flex items-start gap-3">
        <svg class="h-4 w-4 mt-1 text-gold flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <a href="tel:${p.replace(/\s+/g, "")}" class="hover:text-gold">${p}</a></li>`
      )
      .join("");

    root.innerHTML = `
      <footer class="relative border-t border-white/5 bg-[#050505]">
        <div class="container-tight py-20 lg:py-28">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div class="lg:col-span-5">
              <a href="index.html" class="flex items-center gap-3">
                <img src="${LOGO_URL}" alt="SkoriyaTech" class="h-14 w-14 object-contain" />
                <div>
                  <div class="font-heading text-2xl">skoriya<span class="text-gold">tech</span></div>
                  <div class="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 mt-1">Engineering that Runs Deep</div>
                </div>
              </a>
              <p class="mt-6 max-w-md text-zinc-400 leading-relaxed">
                A Bengaluru-based deep-tech startup. We turn ideas into mass-produced products —
                embedded, hardware, software, AI and R&amp;D, in-house.
              </p>
              <form id="newsletter-form" class="mt-8 flex w-full max-w-md">
                <input type="email" required placeholder="your@email.com" name="email"
                  class="flex-1 bg-zinc-950 border border-white/10 focus:border-gold outline-none px-4 py-3 text-sm rounded-l-sm" />
                <button type="submit" class="px-5 bg-gold text-black font-medium text-sm rounded-r-sm hover:bg-[#F3E5AB] transition">Subscribe</button>
              </form>
            </div>
            <div class="lg:col-span-2">
              <div class="label-eyebrow mb-4">Navigate</div>
              <ul class="space-y-3 text-sm">${navLinks}</ul>
            </div>
            <div class="lg:col-span-2">
              <div class="label-eyebrow mb-4">Capabilities</div>
              <ul class="space-y-3 text-sm text-zinc-400">
                <li>Embedded</li><li>Hardware</li><li>Software</li><li>AI / ML</li><li>R&amp;D</li><li>Mass Production</li>
              </ul>
            </div>
            <div class="lg:col-span-3">
              <div class="label-eyebrow mb-4">Contact</div>
              <ul class="space-y-3 text-sm text-zinc-400">
                <li class="flex items-start gap-3">
                  <svg class="h-4 w-4 mt-1 text-gold flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <a href="mailto:${CONTACT.email}" class="hover:text-gold break-all">${CONTACT.email}</a>
                </li>
                ${phones}
                <li class="flex items-start gap-3">
                  <svg class="h-4 w-4 mt-1 text-gold flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <a href="${CONTACT.mapLink}" target="_blank" rel="noopener" class="hover:text-gold">${CONTACT.addressShort}</a>
                </li>
              </ul>
              <div class="mt-6 flex items-center gap-3">
                <a href="${CONTACT.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn" class="p-2 border border-white/10 rounded-sm hover:border-gold hover:text-gold transition">
                  <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://wa.me/${CONTACT.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp" class="p-2 border border-white/10 rounded-sm hover:border-[#25D366] hover:text-[#25D366] transition">
                  <svg class="h-4 w-4 fill-current" viewBox="0 0 32 32" aria-hidden="true"><path d="M19.11 17.27c-.28-.14-1.64-.81-1.89-.9-.25-.09-.44-.14-.62.14s-.71.9-.87 1.08c-.16.18-.32.21-.6.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.46-.62-.47l-.53-.01c-.18 0-.49.07-.74.35-.25.28-.97.95-.97 2.32 0 1.37.99 2.7 1.13 2.89.14.18 1.95 2.97 4.72 4.16.66.29 1.17.46 1.57.59.66.21 1.26.18 1.74.11.53-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.18-.53-.32zM16.01 4C9.39 4 4 9.39 4 16c0 2.13.56 4.21 1.62 6.04L4 28l6.13-1.6A11.95 11.95 0 0 0 16.01 28C22.63 28 28 22.62 28 16S22.63 4 16.01 4z"/></svg>
                </a>
                <a href="mailto:${CONTACT.email}" aria-label="Email" class="p-2 border border-white/10 rounded-sm hover:border-gold hover:text-gold transition">
                  <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div class="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div class="font-mono text-xs text-zinc-500">© <span id="copyright-year"></span> SkoriyaTech · All rights reserved</div>
            <a href="contact.html" class="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-gold">Start a project →</a>
          </div>
        </div>
      </footer>
    `;
    const yr = document.getElementById("copyright-year");
    if (yr) yr.textContent = new Date().getFullYear();

    // Newsletter handler
    const form = document.getElementById("newsletter-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = new FormData(form).get("email");
        // Persist locally so subscriber data isn't lost
        try {
          const subs = JSON.parse(localStorage.getItem("skoriya_newsletter") || "[]");
          subs.push({ email, ts: new Date().toISOString() });
          localStorage.setItem("skoriya_newsletter", JSON.stringify(subs));
        } catch (_) {}
        showToast(`Subscribed — we'll keep you posted.`, "success");
        form.reset();
      });
    }
  }

  // ---------- WhatsApp FAB ----------
  function renderFAB() {
    const root = document.getElementById("fab-root");
    if (!root) return;
    const msg = encodeURIComponent("Hello SkoriyaTech 👋 — I'd like to enquire about a project. Could we connect?");
    const href = `https://wa.me/${CONTACT.whatsapp}?text=${msg}`;
    root.innerHTML = `
      <a href="${href}" target="_blank" rel="noopener" aria-label="Chat with SkoriyaTech on WhatsApp"
         class="fixed z-[60] bottom-6 right-6 group flex items-center gap-3 flex-row-reverse">
        <span class="relative inline-flex">
          <span class="ping"></span>
          <span class="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.45)] group-hover:scale-110 transition-transform">
            <svg viewBox="0 0 32 32" class="w-7 h-7 fill-white"><path d="M19.11 17.27c-.28-.14-1.64-.81-1.89-.9-.25-.09-.44-.14-.62.14s-.71.9-.87 1.08c-.16.18-.32.21-.6.07-.28-.14-1.17-.43-2.22-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.54-.45-.46-.62-.47l-.53-.01c-.18 0-.49.07-.74.35-.25.28-.97.95-.97 2.32 0 1.37.99 2.7 1.13 2.89.14.18 1.95 2.97 4.72 4.16.66.29 1.17.46 1.57.59.66.21 1.26.18 1.74.11.53-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.18-.53-.32zM16.01 4C9.39 4 4 9.39 4 16c0 2.13.56 4.21 1.62 6.04L4 28l6.13-1.6A11.95 11.95 0 0 0 16.01 28C22.63 28 28 22.62 28 16S22.63 4 16.01 4zm0 21.82c-1.86 0-3.68-.5-5.27-1.45l-.38-.22-3.64.95.97-3.55-.25-.36A9.83 9.83 0 0 1 6.19 16c0-5.41 4.41-9.81 9.82-9.81S25.83 10.59 25.83 16s-4.41 9.82-9.82 9.82z"/></svg>
          </span>
        </span>
        <span class="hidden sm:flex items-center gap-2 pl-4 pr-5 py-2.5 rounded-full bg-black/85 backdrop-blur-md border border-white/10 group-hover:border-[#25D366]/60 transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
          <span class="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
          <span class="font-heading text-sm tracking-tight">skoriya<span class="text-gold">tech</span></span>
          <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">· WhatsApp</span>
        </span>
      </a>
    `;
  }

  // ---------- Constellation SVG ----------
  window.renderConstellation = function (containerSelector, count = 38, withLines = true) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        r: Math.random() * 1.4 + 0.6,
        d: Math.random() * 4,
        o: Math.random() * 0.6 + 0.3,
      });
    }
    let lines = "";
    if (withLines) {
      for (let i = 0; i < stars.length; i++) {
        let nearest = -1, nd = Infinity;
        for (let j = 0; j < stars.length; j++) {
          if (i === j) continue;
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const d = dx * dx + dy * dy;
          if (d < nd) { nd = d; nearest = j; }
        }
        if (nearest >= 0 && nd < 220) {
          const a = stars[i], b = stars[nearest];
          lines += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="rgba(212,175,55,0.18)" stroke-width="0.08" />`;
        }
      }
    }
    const dots = stars
      .map((s) => `<circle class="star" cx="${s.x}" cy="${s.y}" r="${s.r * 0.18}" fill="#F3E5AB" opacity="${s.o}" style="animation-delay:${s.d}s" />`)
      .join("");
    container.innerHTML = `
      <svg class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden="true">
        ${lines}${dots}
      </svg>`;
  };

  // ---------- Toast ----------
  function ensureToastContainer() {
    let c = document.getElementById("toast-container");
    if (!c) {
      c = document.createElement("div");
      c.id = "toast-container";
      document.body.appendChild(c);
    }
    return c;
  }
  function showToast(msg, type = "success") {
    const c = ensureToastContainer();
    const t = document.createElement("div");
    t.className = `toast ${type}`;
    t.textContent = msg;
    c.appendChild(t);
    setTimeout(() => {
      t.style.transition = "opacity .4s, transform .4s";
      t.style.opacity = "0";
      t.style.transform = "translateY(8px)";
      setTimeout(() => t.remove(), 500);
    }, 3200);
  }
  window.showToast = showToast;

  // ---------- Contact form handler (mailto fallback, no backend) ----------
  window.bindContactForm = function () {
    const form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get("name") || "").toString().trim();
      const email = (fd.get("email") || "").toString().trim();
      const company = (fd.get("company") || "").toString().trim();
      const phone = (fd.get("phone") || "").toString().trim();
      const message = (fd.get("message") || "").toString().trim();
      const projectType = document.querySelector(".project-chip.active")?.dataset.value || "";

      if (message.length < 10) {
        showToast("Please share a bit more about your project.", "error");
        return;
      }

      // Persist locally
      try {
        const leads = JSON.parse(localStorage.getItem("skoriya_leads") || "[]");
        leads.push({ name, email, company, phone, projectType, message, ts: new Date().toISOString() });
        localStorage.setItem("skoriya_leads", JSON.stringify(leads));
      } catch (_) {}

      // Open mail client with prefilled brief
      const subject = encodeURIComponent(`New project brief — ${name}${company ? " · " + company : ""}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nProject type: ${projectType}\n\n${message}`
      );
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;

      // Show success state
      const success = document.getElementById("contact-success");
      if (success) {
        form.classList.add("hidden");
        success.classList.remove("hidden");
      }
      showToast("Brief queued — your email client should now open.", "success");
    });

    // Project type chips
    document.querySelectorAll(".project-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".project-chip").forEach((c) => {
          c.classList.remove("active", "border-gold", "text-gold");
          c.classList.add("border-white/10", "text-zinc-400");
        });
        chip.classList.add("active", "border-gold", "text-gold");
        chip.classList.remove("border-white/10", "text-zinc-400");
      });
    });

    // Send another
    const resetBtn = document.getElementById("contact-send-another");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        form.reset();
        form.classList.remove("hidden");
        document.getElementById("contact-success").classList.add("hidden");
      });
    }
  };

  // ---------- Boot ----------
  document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    renderFooter();
    renderFAB();
  });
})();
