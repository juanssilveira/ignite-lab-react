import { useGetLessonsQuery } from '../graphql/generated'

import { Lesson } from './Lesson'

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className="lessons w-[348px] max-h-screen p-6 bg-gray-700 border-l border-gray-600 sticky top-0 overflow-y-scroll">
      <span className="block font-bold text-xl pb-5 mb-5 border-b border-gray-500">
        Cronograma de Aulas
      </span>

      <div className="flex flex-col gap-8 overflow-y-hidden">
        {
          data?.lessons.map(lesson => (
            <Lesson 
              key={lesson.id}
              slug={lesson.slug}
              title={lesson.title}
              type={lesson.lessonType}
              avaliableAt={new Date(lesson.avaliableAt)}
            />
          ))
        }
      </div>
    </aside>
  )
}