document.addEventListener("alpine:init", () => {
  const getLandingPageData = () => window.landingPageData ?? window.siteData ?? {};

  const createComponent = (state = {}) => () => ({
    landingPageData: getLandingPageData(),
    ...state,
  });

  Alpine.data("announcementBar", createComponent());
  Alpine.data("mobileNav", createComponent({ isOpen: false }));
  Alpine.data("stickyCta", createComponent());
  Alpine.data("videoModal", createComponent({ isOpen: false, activeVideo: null }));
  Alpine.data("bentoGrid", createComponent());
  Alpine.data("curriculumRoadmap", createComponent());
  Alpine.data("careerExplorer", createComponent());
  Alpine.data("projectFilter", createComponent({ activeFilter: "all" }));
  Alpine.data("alumniModal", createComponent({ isOpen: false, activeAlumni: null }));
  Alpine.data("faqAssistant", createComponent({ activeIndex: null }));
  Alpine.data("scrollReveal", createComponent({ isVisible: false }));
});
