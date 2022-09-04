import { useEffect, useState } from 'react'

export async function getServerSideProps({ params, req, res, query, preview, previewData, resolvedUrl, locale, locales, defaultLocale }) {
  /*
  server side code
    tasks
      - fetch users data server side
      - endpoint - https://jsonplaceholder.typicode.com/users
  */

}

export default function Home({ users }) {
  const [reactData, setReactData] = useState([]);
  /*
  client side code
    tasks
      - fetch same data client side
      - show user detail in alert
  */

  return (
    <>
      <h1>SSR Workshop | Next.js Exercise</h1>
      <table>
        <tbody>
          <tr key={"hello"}>
            <th colSpan='3' className='topnav'>Rendered By React JS | Client side rendered</th>
          </tr>
          {reactData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <table>
        <tbody>
          <tr key={"hello1"}>
            <th colSpan='3' className='topnav'>Rendered By Next JS | Server side rendered</th>
          </tr>
         {/*
         todo
            - 1 row for each users detail
          */}
        </tbody>
      </table>
    </>
  )
}
