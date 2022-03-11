import Vue from 'vue'
import VueI18n from 'vue-i18n'
import id from './id.json'
// this async load need to be worked also in beforeRoute hook
const en = () => import('./en.json')

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'ID',
  messages: {
    EN: en,
    ID: id
  }
})
