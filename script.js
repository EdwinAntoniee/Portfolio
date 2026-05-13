const modal = document.getElementById("pixel-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalLink = document.getElementById("modal-link");
const modalTags = document.getElementById("modal-tags");
const modalImage = document.getElementById("modal-image");
const btnCloseModal = document.getElementById("btn-close-modal");

// Data separated from DOM. Uses keys instead of titles.
const projectData = {
  ecommerce: {
    title: "E-Commerce Platform",
    desc: "A full-stack, headless e-commerce experience featuring real-time inventory updates and secure payment gateways.",
    tags: ["Next.js", "Stripe API", "Zustand"],
    category: "Full-Stack Web App",
    ownership: "Solo Project",
    role: "Lead Full-Stack Developer",
    myRole: [
      "Architected the frontend using Next.js for SSR",
      "Integrated Stripe API for secure payments",
      "Managed global state with Zustand",
    ],
    coreArchitecture: [
      "Headless CMS integration for dynamic product management",
      "Server-Side Rendering for improved SEO",
    ],
    outcome: [
      "Achieved 99 performance score on Lighthouse",
      "Reduced checkout time by 30%",
    ],
    repoUrl: "https://github.com/example/ecommerce",
    liveUrl: "https://example.com/demo1",
  },
  weather: {
    title: "Weather API Dashboard",
    desc: "Interactive geographical data visualization dashboard fetching real-time global meteorological data.",
    tags: ["Vanilla JS", "D3.js", "CSS Grid"],
    category: "Data Visualization",
    ownership: "Solo Project",
    role: "Front-End Engineer",
    myRole: [
      "Built interactive SVG maps with D3.js",
      "Integrated OpenWeatherMap REST API",
    ],
    coreArchitecture: [
      "Vanilla JS state management",
      "Real-time polling for live weather updates",
    ],
    outcome: [
      "Successfully visualized complex meteorological data",
      "Handled API rate limits gracefully",
    ],
    repoUrl: "https://github.com/example/weather",
    liveUrl: "https://example.com/demo2",
  },
  pixelart: {
    title: "Pixel Art Generator",
    desc: "A browser-based drawing tool tailored for indie game developers to create and export 8-bit style sprites and tilesets directly in the browser.",
    tags: ["HTML5 Canvas", "React"],
    category: "Browser Tool",
    ownership: "Solo Project",
    role: "Front-End Developer",
    myRole: [
      "Developed drawing logic on HTML5 Canvas",
      "Implemented export functionality for sprites",
    ],
    coreArchitecture: [
      "React component tree for UI",
      "Canvas API for pixel manipulation",
    ],
    outcome: ["Created a viable tool for indie game developers"],
    repoUrl: "https://github.com/example/pixel-art",
    liveUrl: "https://example.com/demo3",
    imageUrl: "https://placehold.co/600x300/fffae6/222222?text=App+Preview",
  },
  crypto: {
    title: "Crypto Tracker",
    desc: "Real-time cryptocurrency dashboard tracking prices, market caps, and historical trends.",
    tags: ["Vue 3", "Chart.js", "REST APIs"],
    category: "Financial Dashboard",
    ownership: "Solo Project",
    role: "Vue Developer",
    myRole: [
      "Integrated CoinGecko API for real-time data",
      "Created interactive charts using Chart.js",
    ],
    coreArchitecture: [
      "Vue 3 Composition API",
      "WebSocket integration for live price tickers",
    ],
    outcome: ["Provided up-to-the-second data visualization"],
    repoUrl: "https://github.com/example/crypto",
    liveUrl: "https://example.com/demo4",
  },
  algoviz: {
    title: "Algorithm Visualizer",
    desc: "An educational application that visually demonstrates complex pathfinding and sorting algorithms step-by-step.",
    tags: ["Java", "Processing"],
    category: "Educational Tool",
    ownership: "Academic Project",
    role: "Software Developer",
    myRole: [
      "Implemented pathfinding algorithms (A*, Dijkstra)",
      "Built sorting algorithms visualizations",
    ],
    coreArchitecture: [
      "Java Processing framework for rendering",
      "Object-Oriented Design patterns",
    ],
    outcome: ["Assisted 50+ students in understanding data structures"],
    repoUrl: "https://github.com/example/algo-viz",
    liveUrl: "#",
  },
  mlmodel: {
    title: "Machine Learning Model",
    desc: "Developed a predictive model utilizing historical municipal data to forecast urban housing market trends using neural networks.",
    tags: ["Python", "TensorFlow"],
    category: "Machine Learning",
    ownership: "Academic Project",
    role: "ML Engineer",
    myRole: [
      "Preprocessed historical municipal data",
      "Trained predictive neural networks",
    ],
    coreArchitecture: [
      "Python data pipeline with Pandas",
      "TensorFlow / Keras sequential models",
    ],
    outcome: ["Achieved 85% accuracy in forecasting market trends"],
    repoUrl: "https://github.com/example/ml-model",
    liveUrl: "#",
  },
  cssociety: {
    title: "CS Society President",
    desc: "Led 200+ students in the campus guild. Ensured all members leveled up together through a healthy ecosystem.",
    tags: ["Leadership", "Community"],
    category: "Leadership & Community",
    ownership: "Student Organization",
    role: "President (Guild Master)",
    myRole: [
      "Aligned the vision of 5 different divisions",
      "Led weekly meetings and acted as external representative",
    ],
    focus: ["Stakeholder Management", "Public Speaking", "Strategic Planning"],
    outcome: [
      "Increased active membership by 40%",
      "Secured partnerships with 3 major tech companies",
    ],
    repoUrl: "",
    liveUrl: "#",
  },
  pmintern: {
    title: "Product Intern",
    desc: "Bridged the gap between engineers and users. Released 3 features on schedule.",
    tags: ["Agile", "Product Strategy"],
    category: "Product & Strategy",
    ownership: "Tech Startup XYZ",
    role: "PM Intern",
    myRole: [
      "Conducted user research and A/B testing",
      "Coordinated daily with engineers and UI/UX team",
    ],
    focus: ["Agile Methodology", "User Story Creation", "Data Analytics"],
    outcome: [
      "Increased user retention rate by 15%",
      "Released 3 crucial features on time",
    ],
    repoUrl: "",
    liveUrl: "#",
  },
  hackathon: {
    title: "Head of Hackathon",
    desc: "Gathered 500+ hackers nationwide for 48 hours of nonstop coding.",
    tags: ["Event Mgmt", "Crisis Solving"],
    category: "Event Management",
    ownership: "Campus IT Event",
    role: "Head of Event Operations",
    myRole: [
      "Designed the rundown and logistics workflow",
      "Coordinated with 500+ hackers and industry judges",
    ],
    focus: ["Crisis Management", "Operations", "Team Coordination"],
    outcome: [
      "Achieved record attendance (500+ participants)",
      "Successfully handled a 1-hour power outage crisis",
    ],
    repoUrl: "",
    liveUrl: "#",
    imageUrl: "https://placehold.co/600x300/fffae6/222222?text=Hackathon+Event",
  },
  techwriter: {
    title: "Tech Writer & Blogger",
    desc: "Translated complex documentation into casual articles read by 10,000+ people monthly.",
    tags: ["Copywriting", "SEO"],
    category: "Content Creation",
    ownership: "Personal Initiative",
    role: "Sole Writer",
    myRole: [
      "Translated complex technical documentation",
      "Analyzed SEO trends and beginner audience needs",
    ],
    focus: ["Copywriting", "SEO", "Technical Communication"],
    outcome: ["Averaged 10,000+ monthly readers on personal blog"],
    repoUrl: "",
    liveUrl: "#",
  },
  cert_frontend: {
    title: "Frontend Architect",
    desc: "Issued by Google / Coursera.<br><br>Advanced certification covering large-scale application architecture.",
    imageUrl:
      "https://placehold.co/600x400/fffae6/222222?text=Frontend+Architect+Certificate",
    liveUrl: "#",
  },
  cert_react: {
    title: "Advanced React Patterns",
    desc: "Issued by Frontend Masters.<br><br>In-depth exploration of hooks, context, custom rendering.",
    imageUrl:
      "https://placehold.co/600x400/fffae6/222222?text=React+Patterns+Certificate",
    liveUrl: "#",
  },
  cert_aws: {
    title: "AWS Cloud Practitioner",
    desc: "Issued by Amazon Web Services.<br><br>Foundational cloud computing certification proving knowledge of AWS.",
    imageUrl:
      "https://placehold.co/600x400/fffae6/222222?text=AWS+Practitioner+Certificate",
    liveUrl: "#",
  },
  cert_uiux: {
    title: "UI/UX Design Specialization",
    desc: "Issued by CalArts.<br><br>Comprehensive training in visual layout, user research, wireframing.",
    imageUrl:
      "https://placehold.co/600x400/fffae6/222222?text=UI/UX+Design+Certificate",
    liveUrl: "#",
  },
};

function openModal(id) {
  const projectInfo = projectData[id];
  if (!projectInfo) return;

  modalTitle.innerText = projectInfo.title;
  modalDesc.innerHTML = projectInfo.desc;

  if (projectInfo.liveUrl && projectInfo.liveUrl !== "#") {
    modalLink.href = projectInfo.liveUrl;
    modalLink.innerText = "Launch Project";
    modalLink.style.display = "inline-block";
  } else {
    modalLink.style.display = "none";
  }

  const metaEl = document.getElementById("modal-meta");
  const sectionsEl = document.getElementById("modal-sections");
  const repoEl = document.getElementById("modal-repo");

  if (projectInfo.category) {
    metaEl.style.display = "flex";
    document.getElementById("modal-category").innerText =
      projectInfo.category || "N/A";
    document.getElementById("modal-ownership").innerText =
      projectInfo.ownership || "N/A";
    document.getElementById("modal-role").innerText = projectInfo.role || "N/A";

    let sectionsHtml = "";
    if (projectInfo.myRole && projectInfo.myRole.length) {
      sectionsHtml +=
        `<div class="modal-section"><h4 class="retro-font">My Role</h4><ul>` +
        projectInfo.myRole.map((item) => `<li>${item}</li>`).join("") +
        `</ul></div>`;
    }
    if (projectInfo.coreArchitecture && projectInfo.coreArchitecture.length) {
      sectionsHtml +=
        `<div class="modal-section"><h4 class="retro-font">Core Architecture</h4><ul>` +
        projectInfo.coreArchitecture
          .map((item) => `<li>${item}</li>`)
          .join("") +
        `</ul></div>`;
    }
    if (projectInfo.focus && projectInfo.focus.length) {
      sectionsHtml +=
        `<div class="modal-section"><h4 class="retro-font">Focus & Skills</h4><ul>` +
        projectInfo.focus.map((item) => `<li>${item}</li>`).join("") +
        `</ul></div>`;
    }
    if (projectInfo.outcome && projectInfo.outcome.length) {
      sectionsHtml +=
        `<div class="modal-section"><h4 class="retro-font">Outcome & Impact</h4><ul>` +
        projectInfo.outcome.map((item) => `<li>${item}</li>`).join("") +
        `</ul></div>`;
    }

    if (sectionsHtml !== "") {
      sectionsEl.innerHTML = sectionsHtml;
      sectionsEl.style.display = "block";
    } else {
      sectionsEl.style.display = "none";
    }

    if (projectInfo.repoUrl && projectInfo.repoUrl !== "") {
      repoEl.href = projectInfo.repoUrl;
      repoEl.style.display = "inline-block";
    } else {
      repoEl.style.display = "none";
    }
  } else {
    metaEl.style.display = "none";
    sectionsEl.style.display = "none";
    repoEl.style.display = "none";
  }

  modalTags.innerHTML = "";
  if (projectInfo.tags && projectInfo.tags.length > 0) {
    projectInfo.tags.forEach((tagText) => {
      const tagSpan = document.createElement("span");
      tagSpan.className = "tech-tag";
      tagSpan.innerText = tagText;
      modalTags.appendChild(tagSpan);
    });
    modalTags.style.display = "flex";
  } else {
    modalTags.style.display = "none";
  }

  if (projectInfo.imageUrl && projectInfo.imageUrl.trim() !== "") {
    modalImage.src = projectInfo.imageUrl;
    modalImage.style.display = "block";
  } else if (projectInfo.category) {
    // Generates placeholder for projects, not certs
    modalImage.src = `https://placehold.co/800x400/444444/ffffff?text=${encodeURIComponent(projectInfo.title)}+Preview`;
    modalImage.style.display = "block";
  } else {
    modalImage.style.display = "none";
    modalImage.src = "";
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
  btnCloseModal.focus(); // Focus trap for accessibility
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
}

modal.addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});
btnCloseModal.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
});

document.addEventListener("DOMContentLoaded", () => {
  // Event delegation for opening modals via keyboard and click
  document.body.addEventListener("click", (e) => {
    const card = e.target.closest("[data-id]");
    if (card && card.classList.contains("interactive")) {
      openModal(card.dataset.id);
    }
  });
  document.body.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest("[data-id]");
      if (card && card.classList.contains("interactive")) {
        e.preventDefault();
        openModal(card.dataset.id);
      }
    }
  });

  // Fade Up observer
  const faders = document.querySelectorAll(".fade-up");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!prefersReducedMotion) {
    const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver(function (
      entries,
      observer,
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);
    faders.forEach((fader) => appearOnScroll.observe(fader));
  } else {
    faders.forEach((fader) => fader.classList.add("visible"));
  }

  // HUD Nav Scroll logic
  let lastScrollY = window.scrollY;
  const hudNav = document.getElementById("hud-nav");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        hudNav.style.transform = "translate(-50%, -150%)";
      } else {
        hudNav.style.transform = "translate(-50%, 0)";
      }
      lastScrollY = window.scrollY;
    },
    { passive: true },
  );

  // Carousel Logic
  document.querySelectorAll(".carousel-container").forEach((container) => {
    const track = container.querySelector(".carousel-track");
    const prevBtn = container.querySelector(".prev-btn");
    const nextBtn = container.querySelector(".next-btn");

    const items = Array.from(track.children);
    if (items.length > 0 && items.length < 4) {
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.removeAttribute("data-id"); // Avoid ID duplication in logic if needed
        clone.addEventListener("click", () => openModal(item.dataset.id)); // manual bind to clone
        track.appendChild(clone);
      });
    }

    let isAnimating = false;

    function moveNext() {
      if (isAnimating || track.children.length === 0) return;
      isAnimating = true;

      const itemWidth = track.firstElementChild.getBoundingClientRect().width;
      const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
      const moveDistance = itemWidth + gap;

      track.style.transition = "transform 0.4s ease-in-out";
      track.style.transform = `translateX(-${moveDistance}px)`;

      setTimeout(() => {
        track.style.transition = "none";
        track.appendChild(track.firstElementChild);
        track.style.transform = "translateX(0)";
        isAnimating = false;
      }, 400);
    }

    function movePrev() {
      if (isAnimating || track.children.length === 0) return;
      isAnimating = true;

      const itemWidth = track.firstElementChild.getBoundingClientRect().width;
      const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
      const moveDistance = itemWidth + gap;

      track.style.transition = "none";
      track.prepend(track.lastElementChild);
      track.style.transform = `translateX(-${moveDistance}px)`;

      void track.offsetWidth;

      track.style.transition = "transform 0.4s ease-in-out";
      track.style.transform = "translateX(0)";

      setTimeout(() => {
        isAnimating = false;
      }, 400);
    }

    let autoSlide = setInterval(moveNext, 4000);
    function resetTimer() {
      clearInterval(autoSlide);
      autoSlide = setInterval(moveNext, 4000);
    }

    nextBtn.addEventListener("click", () => {
      moveNext();
      resetTimer();
    });
    prevBtn.addEventListener("click", () => {
      movePrev();
      resetTimer();
    });
    container.addEventListener("mouseenter", () => clearInterval(autoSlide));
    container.addEventListener("mouseleave", () => resetTimer());

    // Stop auto-slide when tab is hidden
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        clearInterval(autoSlide);
      } else {
        resetTimer();
      }
    });

    // Swipe logic
    let touchStartX = 0;
    track.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.touches[0].clientX;
        clearInterval(autoSlide);
      },
      { passive: true },
    );
    track.addEventListener("touchend", (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (diff > 50) moveNext();
      else if (diff < -50) movePrev();
      resetTimer();
    });
  });

  // Theme Toggle Logic
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("pixelTheme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "night" || (!savedTheme && prefersDark)) {
    document.body.classList.add("night-mode");
    themeToggle.innerText = "☀️";
    themeToggle.setAttribute("aria-label", "Toggle Day Mode");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("night-mode");
      if (document.body.classList.contains("night-mode")) {
        themeToggle.innerText = "☀️";
        themeToggle.setAttribute("aria-label", "Toggle Day Mode");
        localStorage.setItem("pixelTheme", "night");
      } else {
        themeToggle.innerText = "🌙";
        themeToggle.setAttribute("aria-label", "Toggle Night Mode");
        localStorage.setItem("pixelTheme", "day");
      }
    });
  }

  // JS Typewriter Effect
  if (!prefersReducedMotion) {
    const twTarget = document.getElementById("typewriter-text");
    const fullText = "Front-End Developer & UI Designer";
    let twIndex = 0;
    function typeWriter() {
      if (twIndex < fullText.length) {
        twTarget.textContent += fullText.charAt(twIndex);
        twIndex++;
        setTimeout(typeWriter, 80);
      }
    }
    setTimeout(typeWriter, 500);
  } else {
    document.getElementById("typewriter-text").textContent =
      "Front-End Developer & UI Designer";
  }

  // Canvas Stars
  const canvas = document.getElementById("stars-canvas");
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const stars = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      phase: Math.random() * Math.PI * 2,
    }));

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    function drawStars() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      const time = Date.now() * 0.002;
      stars.forEach((s) => {
        ctx.globalAlpha = 0.5 + Math.sin(time + s.phase) * 0.5;
        ctx.fillRect(s.x, s.y, s.r * 2, s.r * 2);
      });
      requestAnimationFrame(drawStars);
    }
    drawStars();
  }

  // Parallax
  const skyLayer = document.getElementById("sky-layer");
  if (skyLayer && !prefersReducedMotion) {
    const mountainsBg = skyLayer.querySelectorAll(".pixel-mountain-bg");
    const mountainsFg = skyLayer.querySelectorAll(".pixel-mountain-fg");
    const sunMoon = document.getElementById("sun-moon");

    let ticking = false;
    let mouseX = 0,
      mouseY = 0;

    skyLayer.addEventListener("mousemove", (e) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
      mouseY = e.clientY / window.innerHeight - 0.5;
      if (!ticking) {
        requestAnimationFrame(() => {
          mountainsBg.forEach(
            (m) =>
              (m.style.transform = `translate(${mouseX * 10}px, ${mouseY * 5}px)`),
          );
          mountainsFg.forEach(
            (m) =>
              (m.style.transform = `translate(${mouseX * 20}px, ${mouseY * 10}px)`),
          );
          if (sunMoon)
            sunMoon.style.transform = `translate(${mouseX * -10}px, ${mouseY * -10}px)`;
          ticking = false;
        });
        ticking = true;
      }
    });

    skyLayer.addEventListener("mouseleave", () => {
      requestAnimationFrame(() => {
        mountainsBg.forEach((m) => (m.style.transform = `translate(0, 0)`));
        mountainsFg.forEach((m) => (m.style.transform = `translate(0, 0)`));
        if (sunMoon) sunMoon.style.transform = `translate(0, 0)`;
      });
    });
  }
});
