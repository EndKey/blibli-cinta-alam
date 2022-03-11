const CintaBumiSection = () => import(
    /* webpackChunkName: "c-cinta-bumi-section" */ '@/components/CintaBumiSection')

const CarbonFootprintCard = () => import(
    /* webpackChunkName: "c-carbon-footprint-card" */ '@/components/CarbonFootprintCard')

const UnclaimedPointCard = () => import(
    /* webpackChunkName: "c-unclaimed-point-card" */ '@/components/UnclaimedPointCard')

const ProjectSection = () => import(
    /* webpackChunkName: "c-project-section" */ '@/components/ProjectSection')

const CarbonOffsetHistory = () => import(
    /* webpackChunkName: "c-carbon-offset-history" */ '@/components/CarbonOffsetHistory')

export {
  CintaBumiSection,
  CarbonFootprintCard,
  UnclaimedPointCard,
  ProjectSection,
  CarbonOffsetHistory
}
