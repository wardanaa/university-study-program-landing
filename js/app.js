document.addEventListener("alpine:init", () => {
  const getLandingPageData = () => window.landingPageData ?? window.siteData ?? {};
  const announcementDismissedKey = "landing-page-announcement-dismissed";

  const createComponent = (state = {}) => () => ({
    landingPageData: getLandingPageData(),
    ...state,
  });

  Alpine.data("announcementBar", () => ({
    landingPageData: getLandingPageData(),
    isDismissed: false,
    init() {
      try {
        this.isDismissed = window.localStorage.getItem(announcementDismissedKey) === "true";
      } catch (error) {
        this.isDismissed = false;
      }
    },
    get announcement() {
      return this.landingPageData.announcement ?? {};
    },
    get isEnabled() {
      return this.announcement.enabled !== false;
    },
    get shouldShow() {
      return this.isEnabled && !this.isDismissed && Boolean(this.announcement.text);
    },
    dismiss() {
      this.isDismissed = true;

      try {
        window.localStorage.setItem(announcementDismissedKey, "true");
      } catch (error) {
        // Ignore storage failures so the banner can still dismiss for this session.
      }
    },
  }));
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
