import { useEffect, useState } from 'react'

export async function getServerSideProps({ params, req, res, query, preview, previewData, resolvedUrl, locale, locales, defaultLocale }) {
  console.log('Logging : ' + res);
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await data.json();
  return { props: { users } }
}

export default function Home({ users }) {
  const [reactData, setReactData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setReactData(data);
      }).catch((e) => { console.log(e) });
  }, []);

  const onClickUsername = (name)=>{
    alert(`Name of user is ${name} `);
  }

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
          {users.map((user, index) => (
            <tr key={index}>
              <td><a href={`/user/${user.id}`}>{user.name}</a></td>
              <td onClick={() => { onClickUsername(user.name) }}>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
