import { DefaultUi, Player, Youtube } from '@vime/react'
import '@vime/core/themes/default.css'

import { 
  CaretRight,
  DiscordLogo, 
  FileArrowDown, 
  Image, 
  Lightning 
} from 'phosphor-react'

import { useGetLessonBySlugQuery } from '../graphql/generated'

import { Spinner } from './Spinner'

type VideoProps = {
  lessonSlug: string
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug
    }
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 grid place-items-center">
        <Spinner />
      </div>
    )
  }

  const isChallengeExist = false

  return (
    <div className="flex-1">
      <div className="flex justify-center bg-black">
        <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              { data.lesson.title }
            </h1>

            <p className="mt-4 text-gray-300 leading-relaxed">
              { data.lesson.description }
            </p>

            {
              data.lesson.teacher && (
                <div className="flex items-center gap-4 mt-8">
                  <div className="border-2 rounded-full border-blue-500 p-1">
                    <img 
                      src={ data.lesson.teacher.avatarURL }
                      alt="Professor"
                      className="h-14 rounded-full"
                    />
                  </div>
                  
                  <div className="leading-relaxed">
                    <strong className="block font-bold text-xl">
                      { data.lesson.teacher.name }
                    </strong>

                    <span className="block text-gray-200 text-sm">
                      { data.lesson.teacher.bio }
                    </span>
                  </div>
                </div>
              )
            }
          </div>

          <div className="flex flex-col gap-4">
            <a href="" target="_blank" className="flex gap-2 items-center justify-center p-4 text-sm bg-green-500 rounded font-bold uppercase transition-colors duration-200 hover:bg-green-700">
              <DiscordLogo size={24} />
              Comunidade
            </a>

            <a href="" target="_blank" className={`flex gap-2 items-center justify-center px-6 py-4 text-sm border border-blue-500 text-blue-500 rounded font-bold uppercase transition-colors duration-200 ${ isChallengeExist ? "hover:bg-blue-500 hover:text-gray-900" : "opacity-30 pointer-events-none" }`}>
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-20">
          <a href="" className="flex items-stretch gap-6 bg-gray-700 rounded overflow-hidden transition-colors duration-200 hover:bg-gray-600">
            <div className="flex items-center bg-green-700 h-full p-6">
              <FileArrowDown size={40} />
            </div>

            <div className="flex flex-col justify-center gap-2 flex-1 py-6 leading-relaxed">
              <span className="text-2xl font-bold">
                Material Complementar
              </span>

              <p className="text-gray-300 text-sm">
                Acesse o material complementar para acelerar o seu desenvolvimento.
              </p>
            </div>

            <div className="flex items-center h-full p-6">
              <CaretRight size={24} />
            </div>
          </a>

          <a href="" className="flex items-stretch gap-6 bg-gray-700 rounded overflow-hidden transition-colors duration-200 hover:bg-gray-600">
            <div className="flex items-center bg-green-700 h-full p-6">
              <Image size={40} />
            </div>

            <div className="flex flex-col justify-center gap-2 flex-1 py-6 leading-relaxed">
              <span className="text-2xl font-bold">
                Wallpapers Exclusivos
              </span>

              <p className="text-gray-300 text-sm">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina.
              </p>
            </div>

            <div className="flex items-center h-full p-6">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}