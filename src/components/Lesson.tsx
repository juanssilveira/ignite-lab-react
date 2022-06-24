import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'

import classNames from 'classnames'

type LessonProps = {
  slug: string
  title: string
  avaliableAt: Date
  type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
  const { slug: urlLessonSlug } = useParams<{ slug: string }>()

  const isLessonAvaliable = isPast(props.avaliableAt)
  
  const avaliableDateFormat = format(props.avaliableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const isActiveLesson = urlLessonSlug === props.slug

  return (
    <Link to={`/platform/lesson/${props.slug}`} className={`group ${!isLessonAvaliable ? "opacity-40 cursor-not-allowed pointer-events-none" : "" }`}>
      <span className="text-sm text-gray-300">
        { avaliableDateFormat[0].toUpperCase() + avaliableDateFormat.substring(1) }
      </span>

      <div 
        className={classNames(`rounded p-4 mt-2 duration-200 border border-gray-600 group-hover:border-green-500`, {
          'bg-green-500': isActiveLesson,
          'border-green-500': isActiveLesson
        })}
      >
        <header className="flex items-center justify-between">
          {
            isLessonAvaliable ? (
              <span 
                className={classNames(`flex gap-2 items-center text-sm font-medium`, {
                  'text-white': isActiveLesson,
                  'text-green-500': !isActiveLesson
                })}
              >
                <CheckCircle size={20} />
                Conteúdo Liberado
              </span>
            ) : (
              <span className="flex gap-2 items-center text-sm text-orange-500 font-medium">
                <Lock size={20} />
                Em breve...
              </span>
            )
          }

          <span 
            className={classNames(`text-xs rounded py-[0.125rem] px-2 border font-bold`, {
              'border-white': isActiveLesson,
              'text-white': isActiveLesson,
              
              'border-green-300': !isActiveLesson
            })}
          >
            { props.type === "live" ? 'AO VIVO' : 'AULA' }
          </span>
        </header>

        <strong className={classNames(`block mt-5`, {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson
        })}>
          { props.title }
        </strong>
      </div>
    </Link>
  )
}