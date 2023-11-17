import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram,
  faGooglePlusG,
  faPinterest,
  faYoutube
 } from '@fortawesome/free-brands-svg-icons'

import { 
  faLock, 
  faBasketShopping,
  faCaretDown,
  faLeftLong,
  faRightLong,
  faAngleUp,
  faShare,
  faClock
 } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faCirclePlay } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram,
  faGooglePlusG,
  faLock,
  faEnvelope,
  faBasketShopping,
  faCaretDown,
  faLeftLong,
  faRightLong,
  faPinterest,
  faAngleUp,
  faShare,
  faClock,
  faYoutube,
  faCirclePlay
)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
