import style from './footer.module.scss'
import BrandLogo from './BrandLogo'
export default function Footer() {
  return (
    <footer className={style.pageFooter}>
      <div className={style.topFrame}>
        <div className={style.brandLogoFrame}>
          <BrandLogo />
          <span className={style.shortDesp}>
            Upfront prices. Verified pros. Zero sales calls.
          </span>
        </div>
        <nav className={style.linksFrame}>
            <a href="#">How it works</a>
            <a href="#">Features</a>
            <a href="#">FAQ</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
        </nav>
      </div>
      <span className={style.rule}></span>
      <div className={style.middleFrame}>
        <span className={style.copyright}>© 2026 myHomeBase. All rights reserved.</span>
        <span className={style.callout}>Made for homeowners who hate sales calls.</span>
      </div>
      <div className={style.wordMark}>
        <span className={style.wordMarkText}>myHomeBase</span>
      </div>
    </footer>
  )
}
