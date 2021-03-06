import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About'}
];

const Nav = () => (
  <nav style={{backgroundColor: '#eceff1', borderBottom: '3px solid #545454'}}>
    <ul style={{padding: '14px 16px', margin: '0'}}>
      {
        links.map(link => {
          return (
            <li key={link.label.toLowerCase()}>
              <Link href={link.href}>
                <a>{link.label}</a>
              </Link>
            </li>
          )
        })
      }
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
)

export default Nav
