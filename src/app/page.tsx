import { Suspense } from 'react'

import GithubProfile from '@/components/github-profile'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi adipisci
        modi beatae laboriosam deserunt voluptas repellat quo, eaque quis at,
        repudiandae aliquid nemo corporis tenetur possimus, ducimus sit
        molestiae! Culpa!
      </p>
      <Suspense fallback={<p>Carregando</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
