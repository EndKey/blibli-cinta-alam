const CintaBumiSection = () => import(
    /* webpackChunkName: "c-cinta-bumi-section" */ '@/components/CintaBumiSection')

const CarbonFootprintCard = () => import(
    /* webpackChunkName: "c-carbon-footprint-card" */ '@/components/CarbonFootprintCard')

const UnclaimedPointCard = () => import(
    /* webpackChunkName: "c-unclaimed-point-card" */ '@/components/UnclaimedPointCard')

export {
  CintaBumiSection,
  CarbonFootprintCard,
  UnclaimedPointCard
}
