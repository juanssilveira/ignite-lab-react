import { useParams } from 'react-router-dom'

import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Sidebar } from '../components/Sidebar'

export function Platform() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      
      <main className="flex flex-1">
        <Video lessonSlug={slug!} />
        <Sidebar />
      </main>
    </div>
  )
}