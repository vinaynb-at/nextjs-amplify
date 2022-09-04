import { useEffect, useState } from 'react'


export async function getServerSideProps({ params, req, res, query, preview, previewData, resolvedUrl, locale, locales, defaultLocale }) {

    /**
     * Server side code
     *  tasks
     *      - fetch details for user by user id 
     *      - rest endpoint https://jsonplaceholder.typicode.com/users/${userId}
     */
    
}

export default function Home({ userDetail }) {
    return (
        <>
            <h1>SSR Workshop | Next.js Exercise</h1>
            <h2>User detail page</h2>
            <br />
            {/**
             * Client side code
             *  todo
             *     - HTML to render details of user
             */}
        </>
    )
}
