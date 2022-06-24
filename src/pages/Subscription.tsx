import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { 
  useCreateSubscriberMutation, 
  useGetLessonsQuery, 
  useGetSubscriberByEmailLazyQuery 
} from '../graphql/generated'

import { ToastContainer, toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Logo } from '../components/Logo'
import { Spinner } from '../components/Spinner'

export function Subscription() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const { data: dataLessons } = useGetLessonsQuery()

  const [getUser] = useGetSubscriberByEmailLazyQuery()
  const [createSubscriber, { loading }] = useCreateSubscriberMutation()
  
  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    const { data } = await getUser({
      variables: {
        email
      }
    })

    const emailExists = !!data?.subscribers.length

    if (emailExists) {
      toast.error('Email já cadastrado!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'errorToast'
      })

      return
    }

    await createSubscriber({
      variables: { name, email }
    })

    navigate('/platform/lesson/' + dataLessons?.lessons[0].slug)

    setName('')
    setEmail('')
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-blur bg-no-repeat bg-center bg-cover">
      <div className="w-full max-w-[1216px] mx-auto">
        <div className="flex items-center justify-between mt-24">
          <div className="max-w-[640px]">
            <Logo />

            <h1 className="mt-8 text-[2.5rem]">
              Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">ReactJS</strong>.
            </h1>

            <p className="text-gray-200 mt-4 leading-relaxed">
              Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
            </p>
          </div>
          
          <div className="p-8 bg-gray-700 rounded border border-gray-500">
            <strong className="block text-2xl mb-6">
              Inscreva-se gratuitamente
            </strong>

            <form 
              className="w-full flex flex-col gap-2"
              onSubmit={handleSubscribe}
            >
              <input 
                type="text" 
                value={name}
                placeholder="Seu nome"
                onChange={e => setName(e.target.value)}
                className="bg-gray-900 h-14 px-5 rounded border-none"
                required
              />

              <input 
                type="email" 
                value={email}
                placeholder="Digite seu email"
                onChange={e => setEmail(e.target.value)}
                className="bg-gray-900 h-14 px-5 rounded border-none"
                required
              />

              <button className="flex items-center justify-center gap-2 w-full bg-green-500 mt-4 h-14 font-bold rounded transition-colors duration-200 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed" disabled={loading || email.length === 0 || name.length === 0}>
                { loading && <Spinner /> }

                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div>
          <img src="/src/assets/code.png" alt="Código" className="mt-8" />
        </div>
      </div>

      <footer className="w-full py-8">
        <div className="flex justify-between w-full max-w-[1216px] mx-auto">
          <div className="flex gap-8 items-center">
            <img src="/src/assets/rocketseat.svg" alt="" />

            <p className="text-sm text-gray-300">
              <strong>Rocketseat</strong> - Todos os direitos reservados.
            </p>
          </div>

          <a href="#" className="block text-sm text-gray-300">
            Políticas de Privacidade
          </a>
        </div>
      </footer>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        role='alert'
        transition={Flip}
      />
    </div>
  )
}