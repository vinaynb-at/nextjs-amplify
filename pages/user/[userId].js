import { useEffect, useState } from 'react'

export async function getServerSideProps({ params, req, res, query, preview, previewData, resolvedUrl, locale, locales, defaultLocale }) {
    console.log('Logging : ' + JSON.stringify(params));
    const userId = params.userId
    console.log(`UserId: ${userId}`);
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userDetail = await data.json();
    console.log(userDetail)
    return { props: { userDetail } }
}

export default function Home({ userDetail }) {
    return (
        <>
            <h1>SSR Workshop | Next.js Exercise</h1>
            <h2>User detail page</h2>
            <br />
            <table>
                <tbody>
                    <tr>
                        <th colSpan='3' className='topnav'>Rendered By Next JS | Server side rendered</th>
                    </tr>
                    <tr><span>Name:{userDetail.name}</span></tr>
                    <tr><span>Email:{userDetail.email}</span></tr>
                    <tr><span>Address :{`${userDetail.address.street} ${userDetail.address.suite} ${userDetail.address.city}`}</span></tr>
                </tbody>
            </table>
        </>
    )
}
