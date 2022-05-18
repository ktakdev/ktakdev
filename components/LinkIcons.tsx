import Image from 'next/image'
import styles from '../styles/LinkIcons.module.css'

const links = [
  {
    name: 'Github',
    iconUrl: '/logo_github.svg',
    url: 'https://github.com/ktakdev',
  },
  {
    name: 'Youtube',
    iconUrl: '/logo_youtube.svg',
    url: 'https://www.youtube.com/channel/UCxUboyrdqPnzgi5N0D8SSfQ',
  },
  {
    name: 'Twitter',
    iconUrl: '/logo_twitter.svg',
    url: 'https://twitter.com/KTak_dev',
  },
  {
    name: 'Adobe Portfolio',
    iconUrl: '/logo_adobe_portfolio.svg',
    url: 'https://ktakdev.myportfolio.com/',
  },
]

export default function LinkIcons({ size = '40px' }) {
  return (
    <div className={styles.linkIcons}>
      {links.map((link) => (
        <a href={link.url} target="_blank" rel="noreferrer" key={link.name}>
          <Image
            src={link.iconUrl}
            alt={link.name}
            width={size}
            height={size}
          ></Image>
        </a>
      ))}
    </div>
  )
}
