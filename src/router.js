import { createRouter, createWebHistory } from "vue-router";
import TheFaq from "./pages/TheFaq.vue";
import ApplianceInstallationService from "./pages/ApplianceInstallationService.vue";
import RefrigeratorRepair from "./pages/RefrigeratorRepair.vue";
import PrivacyPolicy from "./pages/PrivacyPolicy.vue";
import HomeAppliances from "./pages/HomeAppliances.vue";
import ContactUs from "./pages/ContactUs.vue";
import JoinUs from "./pages/JoinUs.vue";
import WhyUs from "./pages/WhyUs.vue";
import ApplianceRepairService from "./pages/ApplianceRepairService.vue";
import TheLottery from "./pages/TheLottery.vue";
import FreezerRepair from "./pages/FreezerRepair.vue";
import NotFound from "./pages/NotFound.vue";
import TheBlog from "./pages/TheBlog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ApplianceInstallationService },
    { path: "/blog", component: TheBlog },
    { path: "/why-us", component: WhyUs },
    { path: "/lottery", component: TheLottery },
    { path: "/appliance-repair-service", component: ApplianceRepairService },
    {
      path: "/appliance-installation-service",
      component: ApplianceInstallationService,
    },
    { path: "/home-appliances", component: HomeAppliances },
    { path: "/freezer-repair", component: FreezerRepair },
    { path: "/contact-us", component: ContactUs },
    { path: "/join-us", component: JoinUs },
    { path: "/privacy-policy", component: PrivacyPolicy },
    { path: "/faq", component: TheFaq },
    { path: "/:notFound(.*)", component: NotFound },
    { path: "/refrigerator-repair", component: RefrigeratorRepair },
  ],
});

export default router;
